import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'financeTracker',
      description: 'HTML/CSS/JavaScript',
      link: "https://leo-webdev7.github.io/Project-1-Finance-tracker/",
      repo: "https://github.com/Leo-webdev7/Project-1-Finance-tracker"
    },
    {
      name: 'quickReadme',
      description: 'NODE.js',
      link: "https://leo-webdev7.github.io/challenge7-Quick-Readme/",
      repo: "https://github.com/Leo-webdev7/challenge7-Quick-Readme"
    },
    {
      name: 'vehicleConstructor',
      description: 'TypeScript/OOP',
      link: "https://leo-webdev7.github.io/vehicle_constructor/",
      repo: "https://github.com/Leo-webdev7/vehicle_constructor"
    },
    {
      name: 'weatherForecast',
      description: 'Node.js/TypeScript/API/Server',
      link: "https://leo-webdev7.github.io/Weather_Forecast/",
      repo: "https://github.com/Leo-webdev7/Weather_Forecast"
    },
    {
      name: 'staffMonitor',
      description: 'NODE.js/TypeScript/SQL',
      link: "https://leo-webdev7.github.io/Staff_Monitor/",
      repo: "https://github.com/Leo-webdev7/Staff_Monitor"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
