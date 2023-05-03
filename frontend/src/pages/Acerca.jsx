import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Acerca = () => {
  return (
    <div>
      <Container className="acerca-jumbotron">
        <Container className="acerca-container">
          <Image src="acerca.png" alt="acerca" />
        </Container>
        <Container className="acerca-panel">
          <h3>
            Conoce a Transan: Tu Socio en Soluciones de Logística y Transporte
          </h3>
          <p>
            Nuestra misión es ofrecer soluciones de transporte y almacenamiento
            eficientes y confiables, adaptadas a las necesidades de nuestros
            clientes.
          </p>
        </Container>
      </Container>
      <Container className="acerca-text-container mt-4">
        <Container>
          <h3>Nuestra Historia</h3>
          <p>
            Transan fue fundada en 2022 con el objetivo de brindar servicios de
            transporte y logística de alta calidad a nivel nacional. Desde
            nuestros inicios, nos hemos enfocado en desarrollar alianzas
            estratégicas, como las que mantenemos con FedEx y Maersk, para
            ampliar nuestras capacidades y ofrecer soluciones integrales a
            nuestros clientes.
          </p>
        </Container>
        <Container>
          <h3>Nuestros Valores</h3>
          <p>
            <strong>Compromiso:</strong> Nos dedicamos a ofrecer servicios de la
            más alta calidad a nuestros clientes, cumpliendo con sus
            expectativas y necesidades. Nos esforzamos constantemente para
            superarnos y mejorar nuestra oferta de servicios.
            <br />
            <br />
            <strong>Integridad:</strong> Actuamos con honestidad y transparencia
            en todas nuestras operaciones y relaciones comerciales. Nuestro
            enfoque ético nos permite construir relaciones sólidas y duraderas
            con nuestros clientes, aliados y colaboradores.
            <br />
            <br />
            <strong>Responsabilidad:</strong> Asumimos la responsabilidad de
            nuestras acciones y decisiones, y nos esforzamos por minimizar
            nuestro impacto ambiental. Buscamos garantizar la seguridad de
            nuestros empleados, clientes y la comunidad en la que operamos.
            <br />
            <br />
            <strong>Innovación:</strong> Estamos en constante búsqueda de nuevas
            soluciones y tecnologías para mejorar nuestros servicios y procesos.
            Nos adaptamos rápidamente a los cambios del mercado y a las
            necesidades de nuestros clientes, ofreciendo soluciones creativas y
            eficientes.
            <br />
            <br />
            <strong>Colaboración:</strong> Valoramos el trabajo en equipo y el
            intercambio de ideas entre nuestros empleados y aliados. Creemos que
            la colaboración es clave para alcanzar nuestros objetivos y ofrecer
            un servicio excepcional a nuestros clientes.
          </p>
        </Container>
      </Container>
    </div>
  );
};
