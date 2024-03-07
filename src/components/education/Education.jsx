import React from "react";

function Education() {
  return (
    <div className="Education">
      <div className=" p-4 sm:ml-64 sm:mr-40 item-in">
        <ol class="relative border-s border-gray-700 ">
          <li class="mb-10 ms-4 ">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <div class="flex items-center gap-x-4 mb-2 text-xs">
              <time
                datetime="2020-03-16"
                className="text-sm font-normal leading-none text-yellow-400 mt-2"
              >
                Feb, 2019 - Nov 16, 2023
              </time>
            </div>
            <h3 class="text-font-semibold">University of Johannesburg</h3>
            <p class="mb-4">
              As a third-year student in Mathematics and Computer Sciences at
              the University of Johannesburg, I'm skilled in programming and
              passionate about data analytics and software development. Seeking
              opportunities in prestigious graduate programs or internships to
              advance skills and contribute to innovative, data-driven
              solutions.
            </p>
          </li>
          <li class="mb-10 ms-4 mt-5">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-yellow-400">
              March 2022
            </time>
            <h3 class="text-lg font-semibold ">
              An introduction to artificial intelligence (AI)
            </h3>
            <p>
              Artificial Intelligence in the 4IR** is a self-paced certificate
              course exploring AI's evolution, applications, and ethical
              considerations in the Fourth Industrial Revolution. Covering key
              concepts in about 150 hours, participants gain expertise and
              receive a digital certificate, preparing them for the future of
              work.
            </p>
          </li>
          <li class="ms-4 mb-10 mt-5">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-yellow-400 ">
              April 2022
            </time>
            <h3 class="text-lg font-semibold ">African Insights</h3>
            <p class="">
              In "African Insights 2023", I deepened my understanding of
              Africa's heritage and contemporary significance. Engaging with
              diverse texts, I honed critical analysis skills and gained
              sensitivity to marginalized voices. This course broadened my
              cultural awareness and understanding of decoloniality and African
              thought.
            </p>
          </li>

          <li class="ms-4 mb-10 mt-5">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-yellow-400 ">
              Feb 2015 - Dec 2017
            </time>
            <h3 class="text-lg font-semibold">Matseliso Secondary School</h3>
          </li>

          <li class="mb-10 ms-4 mt-5">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-yellow-400">
              March 2015 - Dec 2017
            </time>
            <h3 class="text-lg font-semibold ">
              Kutlwanong | Centre for Maths, Science and Technology
            </h3>
            <ul class="list-disc mt-2 leading-8">
              <li className=" leading-8">
                Engaged in a comprehensive program at the Kutlwannong Center for
                Maths, Sciences, and Technology, which aimed to enhance
                knowledge and skills in STEM subjects.
              </li>

              <li className="leading-8">
                Participated in interactive workshops, seminars, and practical
                activities focused on mathematics, sciences, and technology.
              </li>

              <li className="leading-8">
                Gained a deep understanding of the fundamental concepts and
                applications in mathematics, sciences.
              </li>
            </ul>

            <a
              href="https://www.kutlwanong.org/"
              className="btn btn-primary adminBtn btn-lg mr-2 mt-3 "
            >
              Read more
              <i class="fas fa-chevron-circle-right fa-xs ml-2 mt-1"></i>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Education;
