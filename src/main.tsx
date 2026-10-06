import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

// Keep the HTML metadata as a fallback, then let each route own its metadata.
document.head.querySelectorAll(
  'meta[name="description"], meta[name="keywords"], meta[name="robots"], meta[name^="twitter:"], meta[property^="og:"]',
).forEach((element) => element.remove());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
