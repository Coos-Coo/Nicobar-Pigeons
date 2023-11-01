import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import "./LOGIN.css";

const LOGIN: FunctionComponent = () => {
  return (
    <div className="login">
      <div className="login-child" />
      <FrameComponent6 />
      <div className="coos-coo">{`Coos & Coo`}</div>
      <img className="finallogo-3-icon1" alt="" src="/finallogo-31@2x.png" />
    </div>
  );
};

export default LOGIN;
