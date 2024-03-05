import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

export default function ProjectsContent() {
  const [showModal, setShowModal] = useState(false);

  const [projects, setProjects] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");
  const { getProjects } = useAuth();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  //current project
  const [currentProject, setCurrentProject] = useState(null);

  //editor values
  const [editorValue, setEditorValue] = useState(
    currentProject ? currentProject.editorContent : ""
  );

  // Function to format the date as "Month Year" string
  const formatMonthYear = (date) => {
    if (!date) return "";

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${year}`;
  };

  //handle edit
  const handleEditClick = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  //handle language change
  const handleLanguageChange = (event) => {
    setCurrentProject({
      ...currentProject,
      language: event.target.value,
    });
  };

  //handle title change
  const handleTitleChange = (event) => {
    setCurrentProject({
      ...currentProject,
      title: event.target.value,
    });
  };

  //handle summary
  const handleSummaryChange = (event) => {
    setCurrentProject({
      ...currentProject,
      summary: event.target.value,
    });
  };

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await getProjects();

        setProjects(fetchedProjects);
        setHtmlContent(htmlContent);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="admin">
      <h4 className="text-sm text-yellow-300 mb-2 text-bold">Projects</h4>
      <div className="row mb-4">
        {projects.map((project) => (
          <div class="col-md-6 item" key={project.id}>
            <div class="item-in text-gray-500">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500 mt-2">
                  {project.timestamp
                    ? formatMonthYear(project.timestamp.toDate())
                    : ""}
                </time>
                <a
                  href="#"
                  class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {project.language}
                </a>
              </div>

              <h4>{project.title}</h4>
              <div class="seperator"></div>
              <p>{project.summary}</p>

              <div class="flex items-center mt-4">
                <a
                  class="btn text-blue-500 hover:underline"
                  onClick={() => handleEditClick(project)}
                >
                  <i className="fas fa-edit mr-1"></i>
                  edit
                </a>
                <a class="btn text-blue-500 hover:underline ml-4">
                  <i className="fas fa-trash-alt  mr-1"></i>
                  delete
                </a>
                <div class="ml-auto">
                  <Link
                    to={`/blog/${project.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read more <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} centered size="lg" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="admin">
              <h4>Edit | add new project</h4>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="admin">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-title"
                  type="text"
                  placeholder="Title"
                  value={currentProject ? currentProject.title : ""}
                  onChange={handleTitleChange}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Language
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-language"
                  type="text"
                  placeholder="Language"
                  value={currentProject ? currentProject.language : ""}
                  onChange={handleLanguageChange}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Summary
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-summary"
                  placeholder="Summary (Max 30 words)"
                  value={currentProject ? currentProject.summary : ""}
                  onChange={handleSummaryChange}
                ></textarea>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Project discription
                </label>
                <Editor
                  apiKey="2rmcl6vl8el75u1ud6m933n47ws849w33iesp1mutgp8bdiy"
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                  }}
                  value={currentProject ? currentProject.editorContent : ""}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="admin">
          <a variant="secondary" className="adminBtn btn" onClick={handleClose}>
            <i className="fas fa-times mr-1"></i> Close
          </a>
          <a variant="primary" className="adminBtn btn" onClick={handleClose}>
            <i className="fas fa-save mr-1"></i> Save Changes
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
