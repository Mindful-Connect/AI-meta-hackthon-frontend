import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "react-chrome-extension-router";
import Login from "@/components/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Login />
    </Router>
  </StrictMode>,
);
