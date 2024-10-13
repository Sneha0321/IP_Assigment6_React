import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div className="projects py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projects.map((project, index) => (
          <div
            className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
