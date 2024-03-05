import React, { useContext, useState, useEffect } from "react";
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

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //refernce to the storage
  const storage = getStorage();

  //database
  const db = getFirestore();

  //Login a user
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

  // save posts
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
      });
      console.log("project uploaded successfully with ID:", projectDocRef.id);
    } catch (error) {
      console.log(error);
    }
  }

  // get project
  async function getProjects() {
    const projectsCollectionRef = collection(db, "projects");
    const querySnapshot = await getDocs(projectsCollectionRef);
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  }

  //get project by id
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

  //upload files
  async function uploaddocument(file) {
    const fileName = `${file.name}`;
    try {
      const userStorageRef = ref(storage, "documents");
      const FileRef = ref(userStorageRef, fileName);
      // Upload file to storage
      await uploadBytes(FileRef, file);
      const fileUrl = await getDownloadURL(FileRef);
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

  //get the cv
  const fetchDocuments = async () => {
    try {
      const q = query(collection(db, "documents"));
      const documentsCollection = await getDocs(q);
      const documents = documentsCollection.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log(documents);
      return documents;
    } catch (error) {
      throw error;
    }
  };

  //Logout a user
  function logout() {
    return auth.signOut();
  }

  //Reset password
  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  }

  //Update email
  async function updateEmail(email) {
    try {
      await currentUser.updateEmail(email);
    } catch (error) {
      throw error;
    }
  }

  //Update password
  async function updatePassword(password) {
    try {
      await currentUser.updatePassword(password);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    login,
    logout,
    saveProject,
    getProjects,
    getProjectById,
    resetPassword,
    fetchDocuments,
    uploaddocument,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
