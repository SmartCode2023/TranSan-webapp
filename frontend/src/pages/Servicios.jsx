import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Servicios = () => {
  return (
    <div className="servicios mt-3">
      <Container>
        <h3 className="text-center">Servicios</h3>
      </Container>
      <Container className="servicios-container mt-5">
        <Container className="servicio-container">
          <Container className="servicio-text text-end pe-3">
            <h4>Envíos Nacionales</h4>
            <h6>
              Entregas rápidas y confiables en todo el país. <br /> Contamos con
              conductores propios y opciones <br /> para conductores
              independientes.
            </h6>
          </Container>
          <Container className="servicio-image">
            <Image src="servicio2.png" alt="servicio2" />
          </Container>
        </Container>
        <Container className="servicio-container">
          <Container className="servicio-image">
            <Image src="servicio1.png" alt="servicio1" />
          </Container>
          <Container className="servicio-text ps-3">
            <h4>Almacenamiento y Distribución</h4>
            <h6>
              Optimiza tus operaciones con nuestros servicios de <br />{" "}
              almacenamiento en bodega, disponibles al contratar <br /> el
              servicio de envío
            </h6>
          </Container>
        </Container>
      </Container>
    </div>
  );
};
