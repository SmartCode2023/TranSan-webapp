import React, { useState } from "react";
import CotizacionConfirm from "../components/cotizaciones/CotizacionConfirm";
import CotizacionForm from "../components/cotizaciones/CotizacionForm";
import EnvioConfirm from "../components/cotizaciones/EnvioConfirm";

const Cotizaciones = () => {
  const [step, setStep] = useState(0);
  const [cotizacion, setCotizacion] = useState(null);

  return (
    <div className="cotizacion-container">
      {step === 0 ? (
        <CotizacionForm setStep={setStep} setCotizacion={setCotizacion} />
      ) : step === 1 ? (
        <CotizacionConfirm setStep={setStep} cotizacion={cotizacion} />
      ) : (
        <EnvioConfirm cotizacion={cotizacion} />
      )}
    </div>
  );
};

export default Cotizaciones;
