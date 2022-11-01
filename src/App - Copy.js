import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigator";
import styled, { createGlobalStyle } from "styled-components";
import MobileNavigation from "./mobileNavigation";
import DesktopNavigation from "./desktopNavigation";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

import "./App.css";

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  return (
    <div>
      <Navigation />
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/Visit" exact component={Visit} />
          <Route path="/Galleries" exact component={Galleries} />
          <Route path="/Artifacts" exact component={Artifacts} />
          <Route path="/Artifacts/Aircraft" exact component={Aircraft} />
          <Route path="/Artifacts/Eng" exact component={Eng} />
          <Route path="/Artifacts/Radar" exact component={Radar} />
          <Route path="/Artifacts/Armament" exact component={Armament} />
          <Route path="/Special" exact component={Special} />
          <Route path="/Speical/Holography" exact component={Holography} />
          <Route path="/Special/AirSim" exact component={AirSim} />
          <Route path="/Special/VRSim" exact component={VRSim} />
          <Route path="/Special/SkyTV" exact component={SkyTV} />
          <Route path="/Special/MiniCinema" exact component={MiniCinema} />
          <Route path="/Walkthrough" exact component={Walkthrough} />
        </Switch>
      </Router>
      {isMobile ? (
        <MobileNavigation name="Mobile" />
      ) : (
        <DesktopNavigation name="Desktop" />
      )}
    </div>
  );
}

function menuSetter() {}
const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;  
  }
`;
export default App;
