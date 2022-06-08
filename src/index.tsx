import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    background-color: #ECF8F2
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
