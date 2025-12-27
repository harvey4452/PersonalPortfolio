import "./Projects.css";
import Header from "../components/Header";
import Popup from "../components/ProjectPopup";
import { useState } from "react";

const projects = 
[
  {
    title: "Demonstrator management toolkit",
    techStack: "Tech stack: C#, MySQL, HTML, CSS, JavaScript",
    description: "A full stack web application with an automatic scheduling system for assigning students to labs, with a CI/CD pipeline setup for automatic unit testing and deployment to a Windows VM.",
    extendedDescription: "A full stack web application with an automatic scheduling system for assigning students to labs, with a CI/CD pipeline setup for automatic unit testing and deployment to a Windows VM.",
    extendedTechStack: 
    [
      "C# – Used to implement backend business logic and the automatic scheduling algorithm.",
      "MySQL – Stores student and module data such as availability, emails and grades.",
      "JavaScript – Handles client-side validation, dynamic UI updates and sending API requests.",
      "HTML & CSS – Used to build a responsive and accessible frontend.",
      "CI/CD – Automated unit testing and deployment pipeline to a Windows virtual machine.",
    ],
    images: 
    [
    ],
  },
  {
    title: "Transport network program",
    techStack: "Tech stack: C++",
    description: "A C++ Console-Based application which supports efficient route planning within a network of nodes containing locations and connections between locations with specific transport types (car, bike, bus, train, walk).",
    extendedDescription: "A C++ Console-Based application which supports efficient route planning within a network of nodes containing locations and connections between locations with specific transport types (car, bike, bus, train, walk).",
    extendedTechStack: 
    [
      "C++",
    ],
    images: 
    [
    ],
  },
  {
    title: "Cruise manager",
    techStack: "Tech stack: C#, XML",
    description: " A C# console-based application which uses XML to store and retrieve information on the cruises, included planned trips, ports and passengers.",
    extendedDescription: "",
    extendedTechStack: 
    [
    ],
    images: 
    [
    ],
  },
  {
    title: "Student wellbeing app",
    techStack: "Tech stack: C#, SQLite",
    description: "A C# WPF program which increases communication between students and supervisors. Uses and interacts with an SQLite database for data storage.",
    extendedDescription: "",
    extendedTechStack: 
    [
    ],
    images: 
    [
    ],
  },
  {
    title: "Gym tracker",
    techStack: "Tech stack: C#, TypeScript, HTML, CSS, MySQL",
    description: "A full-stack web application that gamifies and tracks users' workouts and provides training tips and tutorials. Uses a HTML frontend, C# .NET Web API backend and MySQL database",
    extendedDescription: "",
    extendedTechStack: 
    [
    ],
    images: 
    [
    ],
  },
  {
    title: "Who-Is",
    techStack: "Tech stack: C#",
    description: "A C# console-based server using sockets which interacts with a MySQL database to track and update data regarding a company’s employees",
    extendedDescription: "",
    extendedTechStack: 
    [
    ],
    images: 
    [
    ],
  },
  {
    title: "Building management system",
    techStack: "Tech stack: C#",
    description: "A C# console-based application to help building managers track renovation and building costs, and sale revenues.",
    extendedDescription: "",
    extendedTechStack: 
    [
    ],
    images: 
    [
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const rows = [];
  for (let i = 0; i < projects.length; i += 3) 
  {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <>
      <Header />
      <div className="Grid">
        {rows.map((row, rowIndex) => (
          <div className="Row" key={rowIndex}>
            {row.map((project, index) => (
              <div className="ProjectFrame Frame" key={index} onClick={() => setSelectedProject(project)}>
                <div className="ProjectTitleText">{project.title}</div>
                <div className="ProjectSubText">{project.techStack}</div>
                <div className="ProjectDescriptiveText">{project.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedProject && (
        <Popup
          title={selectedProject.title}
          description={selectedProject.extendedDescription}
          filePaths={selectedProject.images}
          extendedTechStack={selectedProject.extendedTechStack}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;