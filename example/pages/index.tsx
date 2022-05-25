import React from "react";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./dashboard.tsx";
import { theme } from "../theme.ts";

export default function Home() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <Dashboard />
      {/* </ThemeProvider> */}
    </>
  );
}
