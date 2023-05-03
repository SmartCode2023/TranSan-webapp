import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getTodaysDate from "../../utils/getTodaysDate";
import { getProfile } from "../../utils/setProfile";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const EnvioConfirm = ({ cotizacion }) => {
  const navigate = useNavigate();
  const [fechaLlegada, setFechaLlegada] = useState("");
  const [horaLlegada, setHoraLlegada] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = getProfile();
    const newEnvio = {
      fechaViaje: cotizacion.fechaViaje,
      fechaLlegada: fechaLlegada,
      dirOrigen: cotizacion.dirOrigen,
      dirDestino: cotizacion.dirDestino,
      horaLlegada: horaLlegada,
      detalles: detalles,
      estado: "En Camino",
      empresaId: profile.empresaId,
    };

    await axios.post("http://localhost:5000/api/v1/envios", newEnvio);
    navigate("/envios");
  };

  return (
    <Container>
      <h2>Detalles adicionales del envío</h2>
      <h6 className="cotizacion-message">
        * Por favor llenar todos los campos requeridos para realizar el envío
      </h6>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese la fecha de llegada:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="date"
                min={getTodaysDate()}
                value={fechaLlegada}
                onChange={(e) => setFechaLlegada(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese la hora de llegada:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="time"
                value={horaLlegada}
                onChange={(e) => setHoraLlegada(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese detalles del pedido:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                as="textarea"
                style={{ height: "100px" }}
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Container className="cotizar-button-container">
          <Button className="cotizar-form-button" type="submit">
            Realizar Envío
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default EnvioConfirm;
