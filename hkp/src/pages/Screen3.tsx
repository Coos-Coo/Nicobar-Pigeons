import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserFormContainer1 from "../components/UserFormContainer1";
import "./Screen3.css";

const Screen3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCREATEUSERTextClick = useCallback(() => {
    navigate("/profile-selection");
  }, [navigate]);

  const onALREADYHAVEANClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="screen-3">
      <div className="screen-3-child" />
      <UserFormContainer1
        usernameInput="Uday_07"
        emailInput="UdayKhalifa@gmail.com"
        passwordInput="........"
        confirmPasswordInput="........"
        onCREATEUSERTextClick={onCREATEUSERTextClick}
        onALREADYHAVEANClick={onALREADYHAVEANClick}
      />
      <div className="cooscoo">{`Coos&Coo`}</div>
      <img className="finallogo-1-icon1" alt="" src="/finallogo-11@2x.png" />
    </div>
  );
};

export default Screen3;
