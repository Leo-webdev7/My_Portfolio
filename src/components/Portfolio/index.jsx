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
    {
      name: 'Amygdala',
      description: 'Mental Health APP NODE.js/TypeScript/SQL/CSS/Express/JWT',
      link: "https://amygdala.onrender.com/",
      repo: "https://github.com/ChinaCat1998/Amygdala-App"
    },
    {
      name: 'CandidateNavigator',
      description: 'NODE.js/TypeScript/SQL/CSS/GitHub Token',
      link: "https://candidate-navigator.onrender.com/",
      repo: "https://github.com/Leo-webdev7/Candidate_Navigator"
    },
    {
      name: 'CarPatron',
      description: 'NODE.js/TypeScript/ApolloServer MongoDB/GraphQL/CSS/JWT/REACT',
      link: "https://car-patron-app.onrender.com/",
      repo: "https://github.com/Leo-webdev7/CarPatronApp"
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
