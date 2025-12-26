import "./Skills.css"; // move your SkillGrid, SkillFrame, etc. styles here
import Header from "../components/Header";

const skills = [
  {
    title: "C#",
    subText: "7 years of experience",
    description:
      "Has been used throughout various University projects to develop console-based and WPF applications, along with .NET Web API's.",
  },
  {
    title: "HTML and CSS",
    subText: "2 years of experience",
    description:
      "Has been used to develop frontends for various university projects to demonstrate UIUX skills and provide frontends for full-stack applications.",
  },
  {
    title: "JavaScript",
    subText: "2 years of experience",
    description:
      "Has been used alongside HTML and CSS to create frontends for university projects, has been used to give advanced functionality to frontends and connect them with C# backends.",
  },
  {
    title: "API development",
    subText: "2 years of experience",
    description:
      "Has been used to provide backends for full-stack systems for university projects, this includes the development of RESTful API's.",
  },
  {
    title: "Agile and Scrum",
    subText: "2 years of experience",
    description:
      "Has been used throughout development of various individual and teamworking projects, have made use of sprints and retrospectives to create efficient and planned working environments.",
  },
  {
    title: "SQL and databases",
    subText: "3 years of experience",
    description:
      "Knowledge in SQL and relational databases, including entity-framework databases and oracle databases such as MySQL. Has experience connecting and manipulating databases with C#.",
  },
  {
    title: "CI/CD pipelines",
    subText: "2 years of experience",
    description:
      "Experience creating CI/CD pipelines to automatically test and deploy C# API's, HTML frontends and Python programs using both GitHub and Azure DevOps.",
  },
  {
    title: "Azure DevOps",
    subText: "2 years of experience",
    description:
      "Experience using Azure DevOps for project management, this include sprint planning using boards and code management using repositories and CI/CD pipelines.",
  },
  {
    title: "Unit Testing",
    subText: "2 years of experience",
    description:
      "Experience using unit testing within C#, using MSunit tests, and Python, using the unit testing library, to create functional and robust code. Brief experience using test driven development.",
  },
  {
    title: "React",
    subText: "Less than 1 year of experience",
    description:
      "Brief experience using React, my only project using react is this portfolio! I am hoping to further my skills in this using the portfolio as a small project to learn from.",
  },
];

function Skills() {
  const rows = [];
  for (let i = 0; i < skills.length; i += 3) {
    rows.push(skills.slice(i, i + 3));
  }

  return (
    <>
      <Header />
      <div className="Grid">
        {rows.map((row, rowIndex) => (
          <div className="Row" key={rowIndex}>
            {row.map((skill, index) => (
              <div className="SkillFrame Frame" key={index}>
                <div className="SkillTitleText">{skill.title}</div>
                <div className="SkillSubText">{skill.subText}</div>
                <div className="SkillDescriptiveText">{skill.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
