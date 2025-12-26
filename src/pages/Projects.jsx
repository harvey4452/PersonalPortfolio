import "./Projects.css";
import Header from "../components/Header";

const projects = [
  {
    title: "Demonstrator management toolkit",
    imageName: "DemonstratorManagementSystem.png",
    techStack: "Tech stack: C#, MySQL, HTML, CSS, JavaScript",
    description: "A full stack web application with an automatic scheduling system for assigning students to labs, with a CI/CD pipeline setup for automatic unit testing and deployment to a windows VM.",
  },
  {
    title: "Transport network program",
    imageName: "TransportNetworkProgram.png",
    techStack: "Tech stack: C++",
    description: "A C++ Console-Based application which supports efficient route planning within a network of nodes containing locations and connections between locations with specific transport types (car, bike, bus, train, walk).",
  },
  {
    title: "Cruise manager",
    imageName: "CruiseManagement.png",
    techStack: "Tech stack: C#, XML",
    description: " A C# console-based application which uses XML to store and retrieve information on the cruises, included planned trips, ports and passengers.",
  },
  {
    title: "Student wellbeing app",
    imageName: "",
    techStack: "Tech stack: C#, SQLite",
    description: "A C# WPF program which increases communication between students and supervisors. Uses and interacts with an SQLite database for data storage.",
  },
  {
    title: "Gym tracker",
    imageName: "",
    techStack: "Tech stack: C#, TypeScript, HTML, CSS, MySQL",
    description: "A full-stack web application that gamifies and tracks users' workouts and provides training tips and tutorials. Uses a HTML frontend, C# .NET Web API backend and MySQL database",
  },
  {
    title: "Who-Is",
    imageName: "",
    techStack: "Tech stack: C#",
    description: "A C# console-based server using sockets which interacts with a MySQL database to track and update data regarding a company’s employees",
  },
  {
    title: "Building management system",
    imageName: "",
    techStack: "Tech stack: C#",
    description: "A C# console-based application to help building managers track renovation and building costs, and sale revenues.",
  },
];

function Projects() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <>
      <Header />
      <div className="Grid">
        {rows.map((row, rowIndex) => (
          <div className="Row" key={rowIndex}>
            {row.map((project, index) => (
              <div className="ProjectFrame Frame" key={index}>
                <div className="ProjectTitleText">{project.title}</div>
                <div className="ProjectSubText">{project.techStack}</div>
                <img className="ProjectImage" src={`${process.env.PUBLIC_URL}/assets/${project.imageName}`} alt={`${project.title}.png`}/>
                <div className="ProjectDescriptiveText">{project.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;