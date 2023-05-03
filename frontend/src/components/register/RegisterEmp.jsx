import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RegisterEmp = ({ setStep, setEmpresa }) => {
  const [razon, setRazon] = useState("");
  const [nit, setNit] = useState("");
  const [pagWeb, setPagWeb] = useState("");
  const [dirPostal, setDirPostal] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmpresa = {
      razonSocial: razon,
      nit: nit,
      paginaWeb: pagWeb,
      dirPostal: dirPostal,
      telefono: telefono,
      email: email,
    };
    setEmpresa(newEmpresa);
    setStep(1);
  };

  return (
    <div className="register-container">
      <Container className="form-container w-100 mt-0 p-5">
        <Container>
          <Container className="title-container">
            <h2>Registrar Empresa</h2>
          </Container>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group className="razon-form">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Razón Social
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={razon}
                    onChange={(e) => setRazon(e.target.value)}
                    placeholder="Ingrese la razón social"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">NIT</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={nit}
                    onChange={(e) => setNit(e.target.value)}
                    placeholder="Ingrese el NIT"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Página Web Corporativa
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={pagWeb}
                    onChange={(e) => setPagWeb(e.target.value)}
                    placeholder="Ingrese la URL"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Dirección Postal
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={dirPostal}
                    onChange={(e) => setDirPostal(e.target.value)}
                    placeholder="Ingrese la dirección postal"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Teléfono
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="number"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ingrese el teléfono"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Email Corporativo
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese el correo"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Archivos Adicionales
                  </Form.Label>
                </Col>
                <Col>
                  <Button className="archive-button">Subir Archivos </Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col></Col>
                <Col className="col-siguiente">
                  <Button className="next-button" type="submit">
                    Siguiente{" "}
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default RegisterEmp;
