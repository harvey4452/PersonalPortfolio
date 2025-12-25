import "./Header.css";

function Home() {
  window.location.href = "/";
}

function Skills() {
  window.location.href = "/skills";
}

function Projects() {
  window.location.href = "/projects";
}

function Header() {
  return (
    <div className="header">
      <div className="logo">Harvey Emmerson</div>

      <div className="actions">
        <button onClick={Home}>Home</button>
        <button onClick={Skills}>Skills</button>
        <button
          onClick={Projects}
          style={{ marginRight: "1.5vw" }}
        >
          Projects
        </button>
      </div>
    </div>
  );
}

export default Header;
