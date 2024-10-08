import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutContextPrivider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";
// https://workout-rmb9.onrender.com

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextPrivider>
        <App />
      </WorkoutContextPrivider>
    </AuthContextProvider>
  </React.StrictMode>
);
