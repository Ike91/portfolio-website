import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import Education from "./components/education/Education";
import WorkExperience from "./components/experience/Work-Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog.jsx";
import Sales from "./components/projects/project_/Sales.jsx";
import Retain from "./components/projects/project_/Retain.jsx";
import Login from "./components/login/Login.jsx";
import "prismjs/themes/prism.css";

import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/education" element={<Outlet />}>
              <Route index element={<Education />} />
            </Route>
            <Route path="/projects" element={<Outlet />}>
              <Route index element={<Projects />} />
            </Route>
            <Route path="/work-experience" element={<Outlet />}>
              <Route index element={<WorkExperience />} />
            </Route>
            <Route path="/blog/:projectId" element={<Outlet />}>
              <Route index element={<Blog />} />
            </Route>
            <Route path="/contact" element={<Outlet />}>
              <Route index element={<Contact />} />
            </Route>
            <Route path="/sales" element={<Outlet />}>
              <Route index element={<Sales />} />
            </Route>
            <Route path="/titanic" element={<Outlet />}>
              <Route index element={<Retain />} />
            </Route>
            <Route path="/login" element={<Outlet />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/admin" element={<Outlet />}>
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
