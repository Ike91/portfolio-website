import React from "react";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";

function WorkExperience() {
  return (
    <div className=" p-4 sm:ml-64 sm:mr-40">
      <div className="container">
        <ol class="relative border-s border-gray-700 ">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200   rounded-full mt-1.5 -start-1.5 border-1 border-yellow-400 "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
              Mar 16 2023 - Nov 30 2023
            </time>
            <h3 class="text-lg font-semibold">
              IT Technical Support (ICS) | University of Johannesburg
            </h3>
            <p className="mb-4">
              Provided support and assistance to users and Team Leaders to
              ensure the efficient and effective operation of the microcomputer
              laboratory service at UJ.
            </p>

            <h3 className="text-lg font-semibold  mb-4">
              Key Performance Areas:
            </h3>
            <ul className="list-disc">
              <li>
                Installed computer hardware, ensuring compliance with supplier
                warranty.
              </li>
              <li>
                Completed asset control forms to maintain an updated asset
                register.
              </li>
              <li>
                Installed computer software to cater to user requirements.
              </li>
              <li>
                Configured desktop applications for optimal performance and user
                satisfaction.
              </li>
              <li>
                Installed and configured network printers in the laboratories,
                ensuring smooth service for users.
              </li>
              <li>
                Troubleshot and reported on faulty computer hardware, printers
                and maintaining a high level of service.
              </li>
              <li>
                Upgraded and reset software applications to ensure continuous
                service availability.
              </li>
            </ul>

            <ul className="list-disc">
              <li>Controlled access to and usage of computer laboratories.</li>
            </ul>

            <ul className="list-disc">
              <li>
                Provided desktop hardware support to students, addressing their
                technical needs.
              </li>
              <li>
                Assisted students with basic desktop software usage and printing
                requirements.
              </li>
              <li>
                Offered basic support on the Blackboard application to enhance
                student experience.
              </li>
            </ul>
          </li>
          <hr className="text-gray-400"></hr>
          <div className="list-disc text-base mt-3 font-normal  text-gray-400 ">
            <div className="flex items-center mb-2">
              <span>
                <CgProfile className="mr-2" />
              </span>
              Mr. Rest Mabunda | Team Leader
            </div>
            <div className="flex items-center mb-2">
              <span>
                <BsTelephoneFill className="mr-2" />
              </span>
              <span>0836226556 | 0115593472</span>
            </div>
            <div class="flex items-center">
              <MdEmail className="mr-2" />
              <span>rmabunda@uj.ac.za</span>
            </div>
          </div>
        </ol>
      </div>
    </div>
  );
}

export default WorkExperience;
