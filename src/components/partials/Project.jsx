import React from 'react'
import {
  FaReact,
  FaGithub,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi'
import { TbWorldWww } from 'react-icons/tb'

const icons = {
  FaReact: FaReact,
  FaVuejs: FaVuejs,
  FaNodeJs: FaNodeJs,
  SiTailwindcss: SiTailwindcss,
  BiLogoTailwindCss: BiLogoTailwindCss,
  FaBootstrap: FaBootstrap,
  BiLogoCss3: BiLogoCss3,
}

function Projects(props) {
  const {
    projectName,
    projectDescription,
    languageIcons,
    githubLink,
    liveLink,
    imageLink,
  } = props

  return (
   
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-4">
        <div class="card project-card my-4">
          <div class="view overlay">
          <img src={imageLink} alt={projectName} className="w-full" />
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">{ projectName }</h4>
            <p class="card-text text-white mt-1">{ projectDescription}</p>

            <div className="mt-1 mb-2">
            <div className="flex">
              {languageIcons.map(({ icon, iconName }) => {
                const IconComponent = icons[icon]

                return (
                  <p
                    className="flex mt-2 text-btn text-gray-700"
                    key={icon}
                  >
                    <span>
                      <IconComponent
                        className="text-yellow-400 mr-2"
                        size={24}
                      />
                    </span>
                    <span className="mr-2">{iconName}</span>
                  </p>
                )
              })}
            </div>
          </div>

              <a href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
            <button type="button" class="btn linksBtn btn-sm mr-2">
            <div className="flex  items-center text-center justify-center text-white">
            <span>
              <FaGithub className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
                 </span>
                Github
              </div>
            </button>
            </a>

            {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
            <button type="button" className="btn linksBtn btn-sm bg-yellow-400">
            <div className="flex items-center text-center justify-center text-white">
            <span>
              <TbWorldWww className="text-white mr-1 dark:text-white hover:text-yellow-400" />
                </span>
                Live       
            </div>
            </button>
            </a>
              )}

          </div>
        </div>
      </div>
  )
}

export default Projects
