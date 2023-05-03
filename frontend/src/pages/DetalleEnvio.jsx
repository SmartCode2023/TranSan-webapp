import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const DetalleEnvio = () => {
  const [envio, setEnvio] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEnvio();
  }, []);

  const getEnvio = async () => {
    const envio = await axios.get("http://localhost:5000/api/v1/envios/" + id);
    setEnvio(envio.data.envio);
  };

  if (!envio) return null;

  return (
    <Container>
      <h2 className="mt-4">Envío #{envio._id}</h2>
      <p>#Envío: {envio._id}</p>
      <h6 className="mt-4">Detalle del Envío:</h6>
      <p>{envio.detalles}</p>
    </Container>
  );
};

export default DetalleEnvio;
