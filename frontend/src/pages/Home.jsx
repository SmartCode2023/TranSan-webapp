import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="home-container">
      <Container className="home-image1">
        <Image src="envios.png" alt="Envios" />
        <Container className="envios-text" onClick={() => navigate("/envios")}>
          Envíos
        </Container>
      </Container>
      <Container className="home-image2">
        <Image src="perfil.png" alt="Perfil" />
        <Container className="perfil-text" onClick={() => navigate("/perfil")}>
          Perfil
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
