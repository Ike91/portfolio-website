import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProject() {
  const { saveProject } = useAuth();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [summary, setSummary] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const [errors, setErrors] = useState({});

  const handleSummaryChange = (e) => {
    const inputSummary = e.target.value;
    const words = inputSummary.trim().split(/\s+/); // Split by whitespace to count words
    if (words.length <= 30) {
      setSummary(inputSummary);
    } else {
      toast.error("Summary should be no more than 30 words");
    }
  };

  //save project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validate projectData
      const errors = {};
      if (!title) errors.title = "Title is required";
      if (!language) errors.language = "Language is required";
      if (!summary) errors.summary = "Summary is required";
      if (!editorContent) errors.editorContent = "Editor content is required";

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }

      const projectData = {
        title,
        language,
        summary,
        editorContent,
      };
      await saveProject(projectData);
      setTitle("");
      setLanguage("");
      setSummary("");
      setEditorContent("");
      toast.success("Project saved successfully", { autoClose: 3000 });
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Error saving project. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="admin addproject">
      <ToastContainer />
      <h4 className="text-sm text-yellow-300 mb-4 text-bold">Add project</h4>
      <form className="card p-2" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-xs">{errors.title}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Language
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Language"
              required
            />
            {errors.language && (
              <p className="text-red-500 text-xs">{errors.language}</p>
            )}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Summary
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={summary}
              onChange={handleSummaryChange}
              placeholder="Summary (Max 30 words)"
              required
            />
            {errors.summary && (
              <p className="text-red-500 text-xs">{errors.summary}</p>
            )}
            <a className="text-gray-300 -mt-3">
              {summary.split(/\s+/).length}/30 words
            </a>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Project discription
            </label>
            <Editor
              id="editor"
              apiKey="2rmcl6vl8el75u1ud6m933n47ws849w33iesp1mutgp8bdiy"
              initialValue={editorContent}
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",

                setup: (editor) => {
                  editor.on("change", () => {
                    const content = editor.getContent();
                    setEditorContent(content);
                  });
                },
              }}
            />
            {errors.editorContent && (
              <p className="text-red-500 text-xs">{errors.editorContent}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-60  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-[#ffd700] hover:border-blue-500 rounded"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              saving project...
            </>
          ) : (
            <>
              <i class="fas fa-save mr-2"></i>
              Save project
            </>
          )}
        </button>
      </form>
    </div>
  );
}
