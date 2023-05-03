import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image, Container } from "react-bootstrap";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  return (
    <>
      <Navbar className="navbar-container" variant="dark">
        <Container className="navbar-brand-container">
          <Image className="imagen-b" src="logo-blanco.png" alt="logo" />
          <Navbar.Brand onClick={() => navigate("/")}>TranSan</Navbar.Brand>
        </Container>
        <Container className="navbar-links-container">
          <Nav className="navbar-links">
            {isSignedIn && (
              <>
                <Nav.Link onClick={() => navigate("/inicio")}>Inicio</Nav.Link>
                <Nav.Link onClick={() => navigate("/cotizacion")}>
                  Cotizaciones
                </Nav.Link>
              </>
            )}
            <Nav.Link onClick={() => navigate("/servicios")}>
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/acerca")}>Acerca De</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
