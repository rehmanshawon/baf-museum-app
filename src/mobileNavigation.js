import { useState, useEffect } from "react";
import "./App.css";
import { Visit } from "./pages/Visit";
import { Galleries } from "./pages/Galleries";
import { Artifacts, Aircraft, Eng, Radar, Armament } from "./pages/Artifacts";

function MobileNavigation(props) {
  const [whichComponent, setWhichComponent] = useState("Visit");
  return (
    <div>
      <div className="navigator">
        <ul>
          <li>
            <a
              onClick={(e) => {
                setWhichComponent("Visit");
              }}
            >
              VISIT
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                setWhichComponent("Galleries");
              }}
            >
              GALLERIES
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropbtn"
              onClick={(e) => setWhichComponent("Artifacts")}
            >
              ARTIFACTS
            </a>
            <div className="dropdown-content">
              <a onClick={(e) => setWhichComponent("Aircraft")}>Aircraft</a>
              <a onClick={(e) => setWhichComponent("Eng")}>Eng and Hub</a>
              <a onClick={(e) => setWhichComponent("Armament")}>Armament</a>
              <a onClick={(e) => setWhichComponent("Radar")}>Radar and SAM</a>
            </div>
          </li>
        </ul>
      </div>
      <div id="con">
        {whichComponent === "Visit" && <Visit />}
        {whichComponent === "Galleries" && <Galleries />}
        {whichComponent === "Artifacts" && <Artifacts />}
        {whichComponent === "Aircraft" && <Aircraft />}
        {whichComponent === "Eng" && <Eng />}
        {whichComponent === "Armament" && <Armament />}
        {whichComponent === "Radar" && <Radar />}
      </div>
    </div>
  );
}

export default MobileNavigation;
