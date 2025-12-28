import "./Projects.css";
import Header from "../components/Header";
import Popup from "../components/ProjectPopup";
import { useState } from "react";

const projects = 
[
  {
    title: "Demonstrator management toolkit",
    techStack: "Tech stack: C#, MySQL, HTML, CSS, JavaScript, Asp Net Web API, CI/CD, Azure DevOps",
    description: "A full stack web application with an automatic scheduling system for assigning students to labs, with a CI/CD pipeline setup for automatic unit testing and deployment to a Windows VM.",
    features:
    [
      "Automatic scheduling system that uses a students timetable, grades and willingness to demonstrate each module to determine the best fit for each module",
      "Login page with 2FA using email verification code",
      "Hashing and encryption on frontend and backend data transfer",
      "Normalised MySQL database with encryption at rest",
      "CI/CD pipeline that automatically tests and deploys the project onto a windows virtual machine",
      "A function which can automatically register a module as requiring demonstrators from just a module's iCal link."
    ],
    extendedTechStack: 
    [
      "C# and Asp Net Web API – Used to implement backend business logic and the automatic scheduling algorithm.",
      "MySQL – Stores student and module data such as availability, emails and grades.",
      "JavaScript – Handles client-side validation, dynamic UI updates and sending API requests.",
      "HTML & CSS – Used to build a responsive and accessible frontend.",
      "CI/CD – Automated unit testing and deployment pipeline to a Windows virtual machine.",
      "Azure DevOps - Used to manage sprints and tasks throughout the project"
    ],
    images: 
    [
      "DemonstratorManagementSystem.png",
      "SchedulingPage.png",
      "ScheduleCSV.png",
      "AutomaticSchedulingFlowchart.png",
      "DatabaseDesign.png",
    ],
  },
  {
    title: "Transport network program",
    techStack: "Tech stack: C++",
    description: "A C++ Console-Based application which supports efficient route planning within a network of nodes containing locations and connections between locations with specific transport types (car, bike, bus, train, walk).",
    features:
    [
      "MaxDist - Returns the 2 locations in the network that are the furthest apart",
      "MaxLink - Returns the 2 locations containing a direct transport link with each other that is the furthest apart",
      "FindDist - Takes in 2 location IDs and finds the distance between them",
      "FindNeighbour - Takes in a location ID and returns all the places with direct transport links to it",
      "Check - Takes in a transport mode and X number of location IDs and validates whether a valid route using the specified transport mode is available from the starting location to the ending location",
      "FindRoute - Takes in a transport mode and 2 location IDs and finds a valid route between them using the specified transport mode",
      "FindShortestRoute - Takes in a transport mode and 2 location IDs and finds the route which traverses through the least number of places to reach the destination, is implemented using breadth-first search",
    ],
    extendedTechStack: 
    [
      "C++ - Used to develop the program and it's algorithms",
    ],
    images: 
    [
      "TransportNetworkProgram.png",
      "APOutput.png",
      "APResults.png",
    ],
  },
  {
    title: "Cruise manager",
    techStack: "Tech stack: C#, XML",
    description: "A C# console-based application which uses XML to store and retrieve information on the cruises, included planned trips, ports and passengers.",
    features:
    [
      "Add a cruise to the system. A cruise has a name but is identified by an identifier",
      "Remove a cruise",
      "Add a port, remove a port",
      "Add and remove trips at a specific port",
      "Add and remove ports from a specific cruise",
      "Add and remove passengers to a cruise. A passenger has a name and a passport number. Passport numbers must be unique within the application",
      "Add and remove passengers to a trip",
      "A passenger cannot be booked on a trip at a port that is not on the passenger’s cruise",

    ],
    extendedTechStack: 
    [
      "C# - Used to implement business logic, UI and interact with XML data stores",
      "XML - Used to store data about cruises, ports and passengers",
    ],
    images: 
    [
      "CruiseManagement.png",
      "CruiseXML.png",
    ],
  },
  {
    title: "Student wellbeing app",
    techStack: "Tech stack: C#, SQLite, WPF",
    description: "A C# WPF program which increases communication between students, supervisors and senior tutors. Uses and interacts with an SQLite database for data storage.",
    features:
    [
      "Students can self report how they are feeling/progressing at fixed time intervals",
      "Personal supervisors can review the status of all of their students",
      "Personal supervisors can book a meeting with their students",
      "Students can book a meeting with their personal supervisor",
      "The senior tutor can see the status of all students and how their personal supervisors are interacting with the students",
    ],
    extendedTechStack: 
    [
      "C# - Used to develop the backend logic of the system and interact with the SQLite database",
      "WPF - Used to develop the UI for the system",
      "SQLite - Used as the database for the project, stores student data, student reports and meetings",
    ],
    images: 
    [
      "SupervisorSystem1.png",
      "SupervisorSystem2.png",
      "SupervisorSystem3.png",
    ],
  },
  {
    title: "Gym tracker",
    techStack: "Tech stack: C#, TypeScript, HTML, CSS, MySQL, Asp Net Web API",
    description: "A full-stack web application that gamifies and tracks users' workouts and provides training tips and tutorials. Uses a HTML frontend, C# .NET Web API backend and MySQL database.",
    features:
    [
      "A streak system which tracks how many weeks in a row a user has worked out, and their highest streak",
      "A login system with 2FA using email verification codes",
      "A workout preset function which allows users to store and quickly load their workout routines",
      "A workout tracker function which tracks how much of each exercise a user has done",
      "A badge system which awards different tiers of badges based on how much of a workout a user has done",
    ],
    extendedTechStack: 
    [
      "C# - Used to develop the backend logic, Asp Net Web API and interact with the MySQL database",
      "Asp Net Web API - Used to interact with the frontend, taking in requests and providing data to the frontend",
      "HTML and CSS - Used to create the UI of the frontend",
      "TypeScript - Used to give logic to the frontend and interact with the backend",
      "MySQL - Used to store the necessary data in the project, such as user and workout data",
    ],
    images: 
    [
      "GymAppHomepage.png",
      "GymAppInfo.png",
      "GymAppLogin.png",
      "GymAppMain.png",
      "GymAppWorkout.png",
      "GymAppWorkoutInfo.png",
      "GymAppWorkoutPreset.png",
      "GymAppBuddy.png",
    ],
  },
  /*
  {
    title: "Who-Is",
    techStack: "Tech stack: C#",
    description: "A C# console-based server using sockets which interacts with a MySQL database to track and update data regarding a company’s employees.",
    features:
    [
      ""
    ],
    extendedTechStack: 
    [

    ],
    images: 
    [

    ],
  },
  */
  {
    title: "Building management system",
    techStack: "Tech stack: C#",
    description: "A C# console-based application to help building managers track renovation and building costs, and sale revenues. Uses an Object-Oriented menu system to navigate through the console.",
    features:
    [
      "Add a project to the portfolio via a menu, the project can be added as a new build or a renovation project",
      "Show a list of existing projects",
      "Select an existing project via a menu",
      "Add a new transaction to a selected project",
      "Remove a selected project",
      "Display all the sale transactions for a selected project",
      "Display all the purchase transactions for a selected project",
      "Display a summary total for a selected project that shows the sum total for sales, purchases, and profits, this also displays the expected tax refund expected for the project",
      "Display a summary total for the entire portfolio that shows the sum total for sales, purchases, and profits, this also displays the expected tax refund expected for the portfolio",
      "Load in an output txt file and add the data to the portfolio, the user can specify the file to load",
    ],
    extendedTechStack: 
    [
      "C# - Used to develop the backend business logic and implement an Object-Oriented menu system",
    ],
    images: 
    [
      "BuildingManagement1.png",
      "BuildingManagement2.png",
      "BuildingManagement3.png",
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
          description={selectedProject.description}
          features={selectedProject.features}
          filePaths={selectedProject.images}
          extendedTechStack={selectedProject.extendedTechStack}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;