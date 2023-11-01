import { FunctionComponent } from "react";
import "./Container.css";

const Container: FunctionComponent = () => {
  return (
    <div className="frame-wrapper1">
      <div className="avatar-container">
        <img className="avatar-icon" alt="" src="/avatar.svg" />
        <div className="uday-khalifa">Uday_Khalifa</div>
      </div>
    </div>
  );
};

export default Container;
