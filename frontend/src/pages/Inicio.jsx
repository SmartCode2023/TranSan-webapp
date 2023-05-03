import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Container className="inicio-info-container">
        <Container className="inicio-text">
          <Container>
            <h2>Moviéndote hacia el futuro</h2>
            <h6>
              Servicios de Transporte y Almacenamiento que Impulsan tu Negocio
            </h6>
          </Container>
        </Container>
      </Container>
      <Container className="inicio-image">
        <Image src="jumbotron.jfif" alt="Jumbotron" />
      </Container>
    </div>
  );
};

export default Inicio;
