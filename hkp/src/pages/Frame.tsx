import { FunctionComponent, useCallback } from "react";
import DonationFormContainer from "../components/DonationFormContainer";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer15Click = useCallback(() => {
    navigate("/community-page");
  }, [navigate]);

  return (
    <div className="frame-parent">
      <div className="frame-group">
        <div className="frame-container">
          <div className="finallogo-3-parent">
            <img
              className="finallogo-3-icon"
              alt=""
              src="/finallogo-3@2x.png"
            />
            <div className="welcome-to-coos">{`Welcome to Coos & Coo donation, please fill out the form below. Hopefully it is blessed.`}</div>
          </div>
          <DonationFormContainer />
        </div>
        <div className="frame-div">
          <div className="cancel-wrapper" onClick={onFrameContainer15Click}>
            <div className="cancel">Cancel</div>
          </div>
          <div className="go-to-checkout-wrapper">
            <div className="cancel">Go to checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
