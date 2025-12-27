//Popup to store a projects full details
//Popup should have a:
// - title: string
// - extended description of the project: string
// - multiple images to show the project's functionality and UI: string[] (image names)
// - a more indepth description of the tech skills used, such as how each skills was used for the project. string[] (A string for each skill and it's use case in the project)
// - the state of the popup (open/closed)

import "./ProjectPopup.css";

function ProjectPopup(
{
  title,
  description,
  filePaths,
  extendedTechStack,
  onClose,
}) 
{
  return (
    <div className="PopupOverlay" onClick={onClose}>
      <div
        className="PopupContainer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="PopupHeader">
          <h2>{title}</h2>
          <button className="PopupClose" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="PopupContent">
          <div className="PopupImages">
            {filePaths.map((path, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/assets/${path}`}
                alt={`${title} screenshot ${index + 1}`}
              />
            ))}
          </div>
          <div className="PopupInfo">
            <section>
              <h3>Project Overview</h3>
              <p>{description}</p>
            </section>
            <section>
              <h3>Extended Tech Stack</h3>
              <ul>
                {extendedTechStack.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
