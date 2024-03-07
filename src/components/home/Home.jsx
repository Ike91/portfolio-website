import React from "react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { VscRequestChanges } from "react-icons/vsc";

function Home() {
  const [text, setText] = useState("");
  const { fetchDocuments } = useAuth();
  const [activeTab] = useState("");
  const [setDocument] = useState([]);
  const [fileUrl] = useState("");
  const fullText = "ISAAC MHLANGA";

  const full =
    "As a third-year student in Mathematics and Computer Sciences at the University of Johannesburg, I'm skilled in programming and passionate about data analytics and software development. Seeking opportunities in prestigious graduate programs or internships to advance skills and contribute to innovative, data-driven solutions.";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += fullText[currentIndex];
      setText(currentText);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  //fetch resume
  const fetchDoc = async () => {
    try {
      const fetchedDoc = await fetchDocuments();
      setDocument(fetchedDoc);

      // Assuming fetchedDoc is already a response object
      const data = await fetchedDoc();
      console.log(data);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    fetchDoc();
  });

  //download resume
  const handleDownload = () => {
    window.open(fileUrl, "_blank");
  };

  //form handle
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs
      .sendForm(
        "service_4tjo1vo",
        "template_7lbqy3k",
        e.target,
        "rHCgkfO85NHZSmgMn"
      )
      .then(
        (result) => {
          setIsFormSubmitted(true);
          toast.success("Transcript requested", { autoClose: 3000 });
          e.target.reset();
        },
        (error) => {
          isFormSubmitted(false);
          toast.error("Message sending failed!", { autoClose: 3000 });
          e.target.reset();
        }
      );
    setIsOpen(false);
  };

  return (
    <div className="p-4 sm:ml-64 sm:h-screen sm:mr-35">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 md:p-5 flex justify-center items-center my-4">
            <img
              src="../images/ike.png"
              alt="ike"
              className=" w-300 h-300 object-cover card dark:border-gray-600"
            />
          </div>
          <div className="col-md-6 mt-4">
            <div className="Header-text mt-2 text-white">{text}</div>
            <div className="text-white mb-2">
              <h4 className="student-text font-thin text-yellow-400">
                University Of Johannesburg student
              </h4>
            </div>
            <div class="random-text leading-8 text-gray-500 mb-4 dark:text-gray-400">
              {full}
            </div>

            <div className="d-flex mb-3 -mt-3 button-container">
              <a
                href="#"
                className={`btn btn-primary adminBtn btn-lg mr-2 ${
                  activeTab === "home" ? "active" : ""
                }`}
                onClick={handleDownload}
              >
                <i class="fas fa-download mr-2"></i>
                Resume
              </a>

              <a
                className={`btn btn-primary adminBtn btn-lg mr-2 ${
                  activeTab === "projects" ? "active" : ""
                }`}
                onClick={togglePopup}
              >
                <i class="fas fa-newspaper mr-2"></i>
                Transcript
              </a>
            </div>

            <ToastContainer />
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#24242e]  bg-opacity-50">
                <div className="popupform bg-[#24242e] p-6 rounded-lg shadow-md">
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="absolute top-0 right-0 p-2 text-white hover:text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Request Academic Transcript
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-500 dark:text-gray-400 font-medium mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-500 dark:text-gray-400 font-medium mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your email"
                        required
                      />
                      <input
                        type="hidden"
                        id="message"
                        name="message"
                        value="Requesting Academic Transcript"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      <div className="flex items-center  text-white">
                        <span>
                          <VscRequestChanges
                            size={24}
                            className="text-white mr-1 dark:text-white hover:text-yellow-400 "
                          />
                        </span>
                        Request
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            )}

            <hr className="text-gray-500 dark:text-gray-500" />

            <div className="flex items-center space-x-3 mb-3 mt-2 justify-center sm:justify-start">
              <div className="rounded-full p-2 border border-gray-500 text-gray-500">
                <a
                  href="https://www.linkedin.com/in/isaac-mhlanga-31ba62217"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={20}
                    className="text-gray-400 hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 border text-gray-500">
                <a
                  href="https://www.facebook.com/profile.php?id=100072606405818"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 text-gray-500 border ">
                <a
                  href="https://www.instagram.com/ike.20/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>

              <div className="rounded-full p-2 text-gray-500 border">
                <a
                  href="https://github.com/Ike91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
