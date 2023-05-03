import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Button, Container } from "react-bootstrap";
import { getProfile, deleteProfile } from "../utils/setProfile";

const Perfil = () => {
  const navigate = useNavigate();
  const profile = getProfile();
  const { signOut } = useAuth();
  const { isLoaded, user } = useUser();

  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    getEmpresa();
  }, []);

  const getEmpresa = async () => {
    const empresa = await axios.get(
      "http://localhost:5000/api/v1/empresas/" + profile.empresaId
    );
    setEmpresa(empresa.data.empresa);
  };

  const handleSignOut = () => {
    signOut();
    deleteProfile();
  };

  if (!empresa || !isLoaded) return null;

  return (
    <Container>
      <Container className="perfil-profile mt-4 mb-4">
        <h1 className="mb-3">Información Personal</h1>
        <p>
          <strong>Nombre Completo:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Cargo:</strong> {profile.cargo}
        </p>
        <p>
          <strong>Dirección de correo electrónico:</strong>{" "}
          {user.emailAddresses[0].emailAddress}
        </p>
        <Button variant="danger" onClick={handleSignOut}>
          Cerrar Sesión
        </Button>
      </Container>
      <hr />
      <Container className="perfil-empresa mt-3">
        <h1>Información de la empresa</h1>
        <p>
          <strong>Razón Social:</strong> {empresa.razonSocial}
        </p>
        <p>
          <strong>NIT:</strong> {empresa.nit}
        </p>
        <p>
          <strong>Página Web:</strong> {empresa.paginaWeb}
        </p>
        <p>
          <strong>Dirección postal:</strong> {empresa.dirPostal}
        </p>
        <p>
          <strong>Teléfono:</strong> {empresa.telefono}
        </p>
        <p>
          <strong>Email empresarial:</strong> {empresa.email}
        </p>
        {empresa.adminId === profile.clerkId && (
          <Button onClick={() => navigate("/agregar")}>
            Agregar Representante
          </Button>
        )}
      </Container>
    </Container>
  );
};

export default Perfil;
