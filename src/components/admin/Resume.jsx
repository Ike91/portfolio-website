import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export default function Resume() {
  const [fileDoc, setFile] = useState(null);
  const { uploaddocument, fetchDocuments } = useAuth();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);

  function getTodaysDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var day = today.getDate().toString().padStart(2, "0");
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }
  var todaysDate = getTodaysDate();

  //format date
  function formatTimestamp(timestamp) {
    // Format the timestamp without timezone information
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  //handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const uploadDoc = async (fileDoc) => {
    try {
      if (fileDoc) {
        setLoading(true);
        await uploaddocument(fileDoc);
        toast.success("Resume saved successfully", { autoClose: 3000 });
      } else {
        toast.error("No file selected");
      }
    } catch (error) {
      toast.error("Error updating resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = () => {
    uploadDoc(fileDoc);
  };

  //fetch documents
  const fetchDoc = async () => {
    try {
      const fetchedDoc = await fetchDocuments();
      setDocument(fetchedDoc);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      console.log(document);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="row">
        <div className="col-md-6">
          {document.map((file, index) => (
            <div className="text-gray-300 p-2 card" key={index}>
              <div className="card-header ">
                <div class="flex items-center gap-x-4 text-xs">
                  <a
                    href="#"
                    class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    last updated
                  </a>
                  <time datetime="2020-03-16" class="text-gray-500 mt-2">
                    {formatTimestamp(file.timestamp)}
                  </time>
                </div>
              </div>
              <h3 className="pl-5">
                <i className="fas fa-file-pdf mr-1"></i>
                {file.fileName}
              </h3>
              <a
                href={file.fileUrl}
                target="_blank"
                className="pl-5"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-pdf mr-1"></i> View resume
              </a>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <div className="card text-gray-300 p-2 ">
            <div className="card-header justify-center text-center">
              <div class="flex items-center gap-x-4 text-xs">
                <a
                  href="#"
                  class="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Updated resume
                </a>
                <time datetime="2020-03-16" class="text-gray-500 mt-2">
                  {todaysDate}
                </time>
              </div>
            </div>
            <div className="card-body">
              <form>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="file"
                  name="file"
                  placeholder="Language"
                  onChange={handleFileChange}
                  required
                />
                <a
                  className="btn btn-primary adminBtn btn-sm mr-2"
                  disabled={loading}
                  type="button"
                  onClick={handleUpload}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      saving resume...
                    </>
                  ) : (
                    <>
                      <i class="fas fa-save mr-2"></i>
                      Save resum
                    </>
                  )}
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
