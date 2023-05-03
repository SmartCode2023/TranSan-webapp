import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useSignIn } from "@clerk/clerk-react";
import { Image, Button, Form, Container } from "react-bootstrap";
import { setProfile } from "../utils/setProfile";

const Login = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { isLoaded: signInLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/inicio");
    }
    if (user) {
      setProfile(user.id);
    }
  }, [user]);

  if (!isLoaded || !signInLoaded) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    await signIn
      .create({
        identifier: email,
        password: password,
      })
      .then((result) => {
        if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          navigate("/inicio");
        }
      })
      .catch((err) => console.error("error", err.errors[0].longMessage));
  };

  return (
    <div className="login-container">
      <Container className="image-container">
        <Image src="acerca.png" alt="logo" />
      </Container>
      <Container className="form-container">
        <Container>
          <Container className="title-container">
            <Image src="logo.jpg" alt="logo" />
            <h2>TranSan</h2>
          </Container>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="login-button" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
          <Button
            className="registry-button"
            onClick={() => navigate("/registrar")}
          >
            Registrarse
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
