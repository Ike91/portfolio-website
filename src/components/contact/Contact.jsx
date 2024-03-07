import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

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
          toast.success("Message sent!", { autoClose: 3000 });
          e.target.reset();
        },
        (error) => {
          isFormSubmitted(false);
          toast.error("Message sending failed!", { autoClose: 3000 });
          e.target.reset();
        }
      );
  };

  return (
    <div className="p-2 sm:ml-64 sm:mr-35">
      <div class="container admin">
        <div className="row mb-5">
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title ">
                <div class="flex items-center justify-center">
                  <h4 class="text-gray-500 dark:text-gray-400 text-center font-medium">
                    <i class="fas fa-envelope mr-2 text-yellow-400"></i>
                    Email
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  i.mhlanga@icloud.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title">
                <div class="flex items-center justify-center">
                  <h4 class="text-gray-500 dark:text-gray-400 font-medium">
                    <i class="fas fa-phone-alt mr-2 text-yellow-400"></i>
                    Phone
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  +27 602189451
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title">
                <div class="flex items-center justify-center">
                  <h4 class="text-gray-500 dark:text-gray-400 font-medium ml-2">
                    <i class="fas fa-map-marker-alt mr-2 text-yellow-400"></i>
                    Address
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Randburg, Johannesburg
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className=" p-2" onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-subject"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-1">
            <div className="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="message"
                placeholder="Your message"
                required
              />
            </div>
          </div>

          <a
            type="submit"
            disabled={loading}
            className="btn btn-primary adminBtn -mt-4 btn-lg mr-2 w-40"
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                sending message...
              </>
            ) : (
              <>
                <i class="fas fa-paper-plane mr-2"></i>
                Send message
              </>
            )}
          </a>
        </form>
      </div>
    </div>
  );
}

export default Contact;
