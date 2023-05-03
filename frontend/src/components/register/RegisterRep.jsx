import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSignUp } from "@clerk/clerk-react";

const RegisterRep = ({ empresa }) => {
  const navigate = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp
      .create({
        emailAddress: email,
        password: password,
        firstName: nombre,
        lastName: apellido,
      })
      .then((result) => {
        if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          createMongoEntities(result.createdUserId);
          navigate("/inicio");
        }
      })
      .catch((err) => console.log("Error: ", err.errors[0].longMessage));
  };

  const createMongoEntities = async (clerkId) => {
    const newRep = {
      nombre: nombre,
      apellido: apellido,
      cargo: cargo,
      email: email,
    };

    empresa.adminId = clerkId;
    const mEmpresa = await axios.post(
      "http://localhost:5000/api/v1/empresas",
      empresa
    );

    newRep.clerkId = clerkId;
    newRep.empresaId = mEmpresa.data.empresa._id.toString();

    await axios.post("http://localhost:5000/api/v1/representantes", newRep);
  };

  if (!isLoaded) return null;

  return (
    <div className="rep-container">
      <Container className="form-container w-100 mt-0 p-5">
        <Container>
          <Container className="title-container">
            <h2>Registrar Representante Administrador</h2>
          </Container>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group className="razon-form">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Nombre
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el nombre"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Apellido
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ingrese el apellido"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Cargo
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="text"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    placeholder="Ingrese el cargo"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col>
                  <Form.Label className="cotizacion-form-label">
                    Correo electrónico
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
                    Contraseña
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className="w-100"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese la contraseña"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mt-3">
              <Row md={2}>
                <Col></Col>
                <Col className="col-enviar">
                  <Button className="send-button" type="submit">
                    Enviar Solicitud de Registro{" "}
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

export default RegisterRep;
