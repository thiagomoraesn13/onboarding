import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./theme.css";

import { PlaygroundApp } from "./PlaygroundApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlaygroundApp />
  </React.StrictMode>,
);
