import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorBoundary } from "./Error/ErrorBoundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
