import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
let theme = isDark ? 'dark' : 'light';

root.render(
  <StrictMode>
    <App theme={theme}/>
  </StrictMode>
);
