import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CommentsProvider } from "./context/CommentsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>
);
