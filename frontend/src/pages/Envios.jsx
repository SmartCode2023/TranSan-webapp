import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { getProfile } from "../utils/setProfile";

const Envios = () => {
  const navigate = useNavigate();
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    getEnvios();
  }, []);

  const getEnvios = async () => {
    const user = getProfile();
    if (!user) return;
    const envios = await axios.get(
      "http://localhost:5000/api/v1/envios?empId=" + user.empresaId
    );
    setEnvios(envios.data.envios);
  };

  if (!envios) return null;

  return (
    <Container>
      <h2 className="mt-4 mb-4">Envíos</h2>
      {envios?.length === 0 ? (
        <h5 className="text-center">
          No se han realizado envíos para su empresa
        </h5>
      ) : (
        <Table striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha Salida</th>
              <th>Fecha Llegada</th>
              <th>Lugar Salida</th>
              <th>Lugar Llegada</th>
              <th>Hora Llegada</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {envios?.map((envio) => (
              <tr key={envio._id}>
                <td>{envio._id}</td>
                <td>{envio.fechaViaje}</td>
                <td>{envio.fechaLlegada}</td>
                <td>{envio.dirOrigen}</td>
                <td>{envio.dirDestino}</td>
                <td>{envio.horaLlegada}</td>
                <td>{envio.estado}</td>
                <td className="text-center">
                  <Button
                    className="btn-envio-detalles"
                    onClick={() => navigate("/envios/" + envio._id)}
                  >
                    Ver Detalles
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Envios;
