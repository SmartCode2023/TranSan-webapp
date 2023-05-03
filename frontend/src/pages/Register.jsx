import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import RegisterEmp from "../components/register/RegisterEmp";
import RegisterRep from "../components/register/RegisterRep";
import { setProfile } from "../utils/setProfile";

const Register = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [step, setStep] = useState(0);
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/inicio");
    }
    if (user) {
      setProfile(user.id);
    }
  }, [user]);

  return (
    <div>
      {step === 0 ? (
        <RegisterEmp setStep={setStep} setEmpresa={setEmpresa} />
      ) : (
        <RegisterRep empresa={empresa} />
      )}
    </div>
  );
};

export default Register;
