import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const { getProjectById } = useAuth();

  useEffect(() => {
    async function fetchProject() {
      try {
        const fetchedProject = await getProjectById(projectId);
        setCurrentProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    }
    fetchProject();
  });

  return (
    <div className="p-4 sm:ml-64 sm:mr-35">
      {currentProject && (
        <div className="container blog">
          <div key={currentProject.id}>
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500 mt-2">
                Thursday, December 9, 2021
              </time>
              <a
                href="#"
                class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
              >
                {currentProject.language}
              </a>
            </div>

            <div class="flex items-center gap-4 mt-2">
              <img
                class="w-10 h-10 rounded-full"
                src="../images/unnamed.png"
                alt=""
              />
              <div class="font-medium text-white">
                <div>Isaac Mhlanga</div>
                <div class="text-sm text-gray-500">i.mhlanga@icloud.com</div>
              </div>
            </div>
            <hr className="text-gray-300"></hr>
            <h4 className="text-[#ffd700] mb-3">{currentProject.title}</h4>
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: currentProject.editorContent }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
