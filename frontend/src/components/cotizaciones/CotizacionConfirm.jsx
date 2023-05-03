import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CotizacionConfirm = ({ setStep, cotizacion }) => {
  const calcularSubTotal = () => {
    const volumen = cotizacion.largo * cotizacion.ancho * cotizacion.alto;
    return (cotizacion.peso * (15 / 10) + 50) * 1000 + 1000 * volumen;
  };

  return (
    <div className="cotizacion-confirm-container">
      <h2 className="text-center">Cotización #{cotizacion._id}</h2>
      <Container className="mt-2">
        <strong>Fecha de envío: </strong> {cotizacion.fechaViaje}
      </Container>
      <Container className="mt-2">
        <strong>Dirección de origen: </strong> {cotizacion.dirOrigen}
      </Container>
      <Container className="mt-2">
        <strong>Dirección de entrega: </strong> {cotizacion.dirDestino}
      </Container>
      <Container className="mt-2">
        <strong>Peso aproximado de la carga: </strong> {cotizacion.peso}
      </Container>
      <Container className="mt-2">
        <strong>Condiciones de climatización: </strong> {cotizacion.condiciones}
      </Container>
      <Container className="mt-2">
        <strong>Servicio de carga ofrecido por: </strong>{" "}
        {cotizacion.servicioCarga}
      </Container>
      <Container className="mt-2">
        <strong>Tipo de carga: </strong> {cotizacion.tipo}
      </Container>
      <Container className="mt-2">
        <strong>Dimensiones de la carga: </strong> Ancho: {cotizacion.ancho}{" "}
        Largo: {cotizacion.largo} Alto: {cotizacion.alto}
      </Container>
      <Container className="text-center mt-4">
        <h3 className="cotizacion-confirm-title">Costos</h3>
        <Container className="mt-2">
          <strong>Subtotal: </strong> {calcularSubTotal().toFixed(2)}
        </Container>
        <Container className="mt-2">
          <strong>Iva: </strong> 19%
        </Container>
        <Container className="mt-2">
          <strong>Total: </strong> {calcularSubTotal().toFixed(2) * 1.19}
        </Container>
        <Button className="mt-4 w-50 cotizacion-confirm-button" onClick={() => setStep(2)}>
          Realizar Envío
        </Button>
      </Container>
    </div>
  );
};

export default CotizacionConfirm;
