import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createContext } from 'react';

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';
export const themeContext = createContext(isDark);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
