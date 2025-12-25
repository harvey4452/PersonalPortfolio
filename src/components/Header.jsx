import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Harvey Emmerson</div>
      <div className="actions">
        <Link to="/"><button>Home</button></Link>
        <Link to="/skills"><button>Skills</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
      </div>
    </div>
  );
}

export default Header;
