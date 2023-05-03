import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";
import "./styles/cotizacion.css";
import "./styles/inicio.css";
import "./styles/servicios.css";
import "./styles/acerca.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/registerRep.css";
import "./styles/home.css";
import "./styles/envios.css";
import "./styles/perfil.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
