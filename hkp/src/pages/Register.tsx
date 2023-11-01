import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserFormContainer1 from "../components/UserFormContainer1";
import "./Register.css";

const Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onALREADYHAVEANClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="register">
      <div className="register-child" />
      <UserFormContainer1
        usernameInput="Username"
        emailInput="Email"
        passwordInput="Password"
        confirmPasswordInput="Confirm Password"
        uday07Top="268px"
        udayKhalifagmailcomColor="#818590"
        frameDivBackgroundColor="unset"
        frameDivHeight="69px"
        divTop="23px"
        divColor="#818590"
        divColor1="#818590"
        cREATEUSERColor="#818590"
        aLREADYHAVEANCursor="unset"
        onALREADYHAVEANClick={onALREADYHAVEANClick}
      />
      <div className="cooscoo1">{`Coos & Coo`}</div>
      <img className="finallogo-2-icon" alt="" src="/finallogo-2@2x.png" />
    </div>
  );
};

export default Register;
