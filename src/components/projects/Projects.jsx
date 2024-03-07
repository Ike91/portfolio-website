import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="project p-1 sm:ml-64 sm:mr-35">
      <div className="projects admin">
        <div class="row ">
          <div class="flex justify-between ">
            <h4 class="mr-auto"> Data analysis projects</h4>
          </div>
          <hr className="text-gray-300"></hr>

          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
          >
            <Carousel.Item>
              <div className="row mb-4">
                <div className="col-md-6 item">
                  <div className="item-in text-gray-500">
                    <div className="row">
                      <div className="col-md-12">
                        <img
                          className="rounded rounded-md"
                          h-60
                          src="../projects/sales.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2020-03-16"
                        className="text-gray-500 mt-2"
                      >
                        27 February 2024
                      </time>
                      <a className="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100">
                        SQL + PowerBi
                      </a>
                    </div>

                    <h4>Sales analysis</h4>
                    <div className="seperator"></div>
                    <p>
                      This project aimed to meticulously analyze sales data from
                      three branches across highly populated cities, spanning
                      three months, to derive actionable insights. These
                      insights would enhance business performance and
                      competitiveness in a dynamic market landscape.
                    </p>

                    <div class="flex items-center mt-4">
                      <a className="text-blue-500 hover:underline">
                        <i class="fas fa-heart mr-1"></i>
                        Like
                      </a>
                      <a className="text-blue-500 hover:underline ml-4">
                        <i class="fas fa-share-alt mr-1"></i>
                        Share
                      </a>
                      <div className="ml-auto">
                        <Link
                          to="/sales"
                          className="text-white hover:text-yellow-300"
                        >
                          <a className="text-blue-500 hover:underline">
                            Read more{" "}
                            <i className="fas fa-arrow-right ml-1"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 item">
                  <div className="item-in text-gray-500">
                    <div className="row">
                      <div className="col-md-12 -mt-2">
                        <img
                          className="rounded rounded-md"
                          src="../projects/dataset-cover.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2020-03-16"
                        className="text-gray-500 mt-2"
                      >
                        27 February 2024
                      </time>
                      <a className="relative z-10 rounded-full  px-2 py-1 font-medium text-gray-600 hover:bg-gray-100">
                        Python
                      </a>
                    </div>

                    <h4>Titanic survival analysis</h4>
                    <div className="seperator"></div>
                    <p>
                      The project aims to analyze Titanic data to understand
                      survival factors: passenger class impact, gender
                      distribution among survivors, non-survivor distribution
                      with relatives, and survival rates across age groups.
                    </p>

                    <div className="flex items-center mt-4">
                      <a className="text-blue-500 hover:underline">
                        <i className="fas fa-heart mr-1"></i>
                        Like
                      </a>
                      <a className="text-blue-500 hover:underline ml-4">
                        <i class="fas fa-share-alt mr-1"></i>
                        Share
                      </a>
                      <div className="ml-auto">
                        <Link
                          to="/titanic"
                          className="text-white hover:text-yellow-300"
                        >
                          <a className="text-blue-500 hover:underline">
                            Read more
                            <i className="fas fa-arrow-right ml-1"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
