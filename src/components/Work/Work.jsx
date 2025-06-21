import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
  };

  return (
    <section
      id="work"
      className="py-12 md:py-24 px-4 sm:px-6 lg:px-[12vw] relative"
    >
      {/* Section title */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            onClick={() => handleOpenModel(project)}
            key={project.id}
            className="border border-white/20 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl text-center font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto">
          <div
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <div className="sticky top-0 bg-gray-900 flex justify-end p-4 z-10">
              <button
                onClick={handleCloseModel}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-purple-500 cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4 sm:px-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[50vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"> View Code</a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center">Live Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
