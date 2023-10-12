import React from "react";
import "./styles/styles.scss";
import App from "./App";
import AppProvider from "./context";
import "./styles/styles.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
