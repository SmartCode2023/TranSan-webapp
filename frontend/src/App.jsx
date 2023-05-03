import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Ayuda from "./pages/Ayuda";
import { Acerca } from "./pages/Acerca";
import Cotizaciones from "./pages/Cotizaciones";
import { Servicios } from "./pages/Servicios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Envios from "./pages/Envios";
import DetalleEnvio from "./pages/DetalleEnvio";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Perfil from "./pages/Perfil";
import AgregarRepresentante from "./pages/AgregarRepresentante";

function App() {
  return (
    <BrowserRouter>
      <div className="m-0 p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/registrar" element={<Register />} />
          <Route
            path="/inicio"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cotizacion"
            element={
              <ProtectedRoute>
                <Cotizaciones />
              </ProtectedRoute>
            }
          />
          <Route
            path="/envios"
            element={
              <ProtectedRoute>
                <Envios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/envios/:id"
            element={
              <ProtectedRoute>
                <DetalleEnvio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/agregar"
            element={
              <ProtectedRoute>
                <AgregarRepresentante />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
