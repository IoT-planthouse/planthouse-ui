import React from "react";
import logo from "../logo.svg";
import { APP, LOGO, APPLICATION_NAME } from "../styles";
import { StatusDisplay } from "./StatusDisplay";

function App() {
  return (
    <APP>
      <LOGO src={logo} alt="logo" width="75" height="75" />
      <APPLICATION_NAME>SMART PLANTHOUSE</APPLICATION_NAME>
      <StatusDisplay />
    </APP>
  );
}

export default App;
