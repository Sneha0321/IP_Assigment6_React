import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="skills bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Skills</h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg text-center shadow-md">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
