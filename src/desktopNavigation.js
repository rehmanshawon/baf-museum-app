import { useState, useEffect } from "react";
import "./App.css";
import { Visit } from "./pages/Visit";
import { Galleries } from "./pages/Galleries";
import { Artifacts, Aircraft, Eng, Radar, Armament } from "./pages/Artifacts";
import { Walkthrough } from "./pages/Walkthrough";
import {
  Special,
  Holography,
  MiniCinema,
  AirSim,
  VRSim,
  SkyTV,
} from "./pages/SpecialAttractions";

function DesktopNavigation(props) {
  const [whichComponent, setWhichComponent] = useState("Visit");
  /*
  useEffect(() => {
    var x = document.getElementById("con");
    x.innerHTML = "";
  }, [whichComponent, setWhichComponent]);
*/
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
              onClick={(e) => setWhichComponent("Artifacts")}
              className="dropbtn"
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
          <li className="dropdown">
            <a
              className="dropbtn"
              onClick={(e) => setWhichComponent("Special")}
            >
              SPECIAL ATTRACTIONS
            </a>
            <div className="dropdown-content">
              <a onClick={(e) => setWhichComponent("Holography")}>
                Birsreshtho Flight Lieutenant Matiur Rahman Holography Theater
              </a>
              <a onClick={(e) => setWhichComponent("AirSim")}>
                Aircraft Simulator
              </a>
              <a onClick={(e) => setWhichComponent("VRSim")}>VR Simulator</a>
              <a onClick={(e) => setWhichComponent("SkyTV")}>Sky TV</a>
              <a onClick={(e) => setWhichComponent("MiniCinema")}>
                Kilo Flight MiniCinema
              </a>
            </div>
          </li>
          <li>
            <a onClick={(e) => setWhichComponent("Walkthrough")}>WALKTHROUGH</a>
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
        {whichComponent === "Special" && <Special />}
        {whichComponent === "Holography" && <Holography />}
        {whichComponent === "AirSim" && <AirSim />}
        {whichComponent === "VRSim" && <VRSim />}
        {whichComponent === "SkyTV" && <SkyTV />}
        {whichComponent === "MiniCinema" && <MiniCinema />}
        {whichComponent === "Walkthrough" && <Walkthrough />}
      </div>
    </div>
  );
}

export default DesktopNavigation;
