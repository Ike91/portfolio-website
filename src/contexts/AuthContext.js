import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  collection,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [uniqueVisitorsCount, setUniqueVisitorsCount] = useState(0);

  // Reference to the storage
  const storage = getStorage();

  // Database
  const db = getFirestore();

  // Login a user
  async function login(email, password) {
    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(loggedInUser.user);
      return loggedInUser.user;
    } catch (error) {
      throw error;
    }
  }

  // Save posts
  async function saveProject(projectData) {
    try {
      const { title, language, summary, editorContent } = projectData;
      const projectsCollectionRef = collection(db, "projects");

      const projectDocRef = await addDoc(projectsCollectionRef, {
        title,
        language,
        summary,
        editorContent,
        timestamp: new Date(),
        likesCount: 0,
        viewsCount: 0,
      });
      console.log("Project uploaded successfully with ID:", projectDocRef.id);
    } catch (error) {
      console.log(error);
    }
  }

  // Get projects
  async function getProjects() {
    const projectsCollectionRef = collection(db, "projects");
    const querySnapshot = await getDocs(projectsCollectionRef);
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  }

  // Get project by ID
  async function getProjectById(projectId) {
    const projectsCollectionRef = collection(db, "projects");
    const projectDocRef = doc(projectsCollectionRef, projectId);
    const docSnapshot = await getDoc(projectDocRef);
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      throw new Error("Project not found");
    }
  }

  // Upload files
  async function uploadDocument(file) {
    const fileName = `${file.name}`;
    try {
      const userStorageRef = ref(storage, "documents");
      const fileRef = ref(userStorageRef, fileName);
      // Upload file to storage
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);
      // Add a new document with a unique ID
      const documentsCollectionRef = collection(db, "documents");
      await addDoc(documentsCollectionRef, {
        fileName,
        fileUrl,
        timestamp: new Date(),
      });
    } catch (error) {
      throw error;
    }
  }

  // Get the CV
  async function fetchDocuments() {
    try {
      const q = query(collection(db, "documents"));
      const documentsCollection = await getDocs(q);
      const documents = documentsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(documents);
      return documents;
    } catch (error) {
      throw error;
    }
  }

  // Logout a user
  function logout() {
    return auth.signOut();
  }

  // Reset password
  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  }

  // Update email
  async function updateEmail(email) {
    try {
      await currentUser.updateEmail(email);
    } catch (error) {
      throw error;
    }
  }

  // Update password
  async function updatePassword(password) {
    try {
      await currentUser.updatePassword(password);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    // Firebase database reference for counting unique visitors
    const visitorsCountRef = doc(db, "statistics", "uniqueVisitors");

    // Increment visitor count when a new visit is detected
    const incrementVisitorCount = async () => {
      try {
        await db.runTransaction(async (transaction) => {
          const docSnapshot = await transaction.get(visitorsCountRef);
          const currentCount = docSnapshot.data().count || 0;
          transaction.update(visitorsCountRef, { count: currentCount + 1 });
          setUniqueVisitorsCount(currentCount + 1);
        });
      } catch (error) {
        console.log("Error incrementing visitor count:", error);
      }
    };

    // Call incrementVisitorCount on initial load
    incrementVisitorCount();

    // Cleanup function
    return () => {
      // No need to clean up anything in this case
    };
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    saveProject,
    getProjects,
    getProjectById,
    resetPassword,
    fetchDocuments,
    uploadDocument,
    updateEmail,
    updatePassword,
    uniqueVisitorsCount,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
