import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getTodaysDate from "../../utils/getTodaysDate";
import axios from "axios";

const CotizacionForm = ({ setStep, setCotizacion }) => {
  const [fechaViaje, setFechaViaje] = useState("");
  const [dirOrigen, setDirOrigen] = useState("");
  const [dirEntrega, setDirEntrega] = useState("");
  const [peso, setPeso] = useState(0);
  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [largo, setLargo] = useState(0);
  const [tipo, setTipo] = useState("");
  const [condiciones, setCondiciones] = useState("");
  const [isCarga, setIsCarga] = useState("si");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCotizacion = {
      fechaViaje: fechaViaje,
      dirOrigen: dirOrigen,
      dirDestino: dirEntrega,
      peso: +peso,
      alto: +alto,
      ancho: +ancho,
      largo: +largo,
      tipo: tipo,
      condiciones: condiciones,
      servicioCarga: isCarga,
    };
    const cotizacion = await axios.post(
      "http://localhost:5000/api/v1/cotizaciones",
      newCotizacion
    );
    setCotizacion(cotizacion.data.cotizacion);
    setStep(1);
  };

  return (
    <div>
      <h2>Cotización del Viaje</h2>
      <h6 className="cotizacion-message">
        * Por favor llenar todos los campos requeridos para realizar el cálculo
        de la cotización
      </h6>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese la fecha del viaje:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="date"
                min={getTodaysDate()}
                value={fechaViaje}
                onChange={(e) => setFechaViaje(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese la dirección de origen:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="text"
                value={dirOrigen}
                onChange={(e) => setDirOrigen(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese la dirección de entrega:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="text"
                value={dirEntrega}
                onChange={(e) => setDirEntrega(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese el peso aproximado de la carga:
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Ingrese las dimensiones de la carga:
              </Form.Label>
            </Col>
            <Col>
              <Row md={3}>
                <Col>
                  <Form.Label>Alto:</Form.Label>
                  <Form.Control
                    className="w-100"
                    type="number"
                    value={alto}
                    onChange={(e) => setAlto(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Largo:</Form.Label>
                  <Form.Control
                    className="w-100"
                    type="number"
                    value={largo}
                    onChange={(e) => setLargo(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Ancho:</Form.Label>
                  <Form.Control
                    className="w-100"
                    type="number"
                    value={ancho}
                    onChange={(e) => setAncho(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Seleccione el tipo de carga:
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                aria-label="Seleccione una opción..."
                onChange={(e) => setTipo(e.target.value)}
              >
                <option>Seleccione una opción...</option>
                <option value="seca">Seca</option>
                <option value="refrigerada">Refrigerada</option>
                <option value="granel">Granel</option>
                <option value="contenedores">Contenedores</option>
                <option value="especializada">Especializada</option>
                <option value="sobredimensiones">Sobredimensiones</option>
              </Form.Select>{" "}
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                Seleccione las condiciones de climatización que aplican a la
                carga (si aplica):
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="w-100"
                type="text"
                value={condiciones}
                onChange={(e) => setCondiciones(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row md={2}>
            <Col>
              <Form.Label className="cotizacion-form-label">
                ¿Requiere el servicio de carga ofrecido por TranSan?
              </Form.Label>
            </Col>
            <Col className="cotizacion-radio">
              <Container>
                <Form.Check
                  inline
                  label="Si"
                  name="group1"
                  type="radio"
                  checked={isCarga === "si"}
                  onChange={() => setIsCarga("si")}
                />
              </Container>
              <Container>
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="radio"
                  checked={isCarga === "no"}
                  onChange={() => setIsCarga("no")}
                />
              </Container>
            </Col>
          </Row>
        </Form.Group>
        <Container className="cotizar-button-container">
          <Button className="cotizar-form-button" type="submit">
            Cotizar
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default CotizacionForm;
