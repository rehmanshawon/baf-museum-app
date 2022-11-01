import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigator";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Form,
  Image,
} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div id="main" className="App-header">
        <h1>BANGABANDHU MILITARY MUSEUM</h1>{" "}
        <Button variant="dark" className="header-btn-group d-none d-md-block">
          TICKET
        </Button>
        <h4>BANGLADESH AIR FORCE FLOOR</h4>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
