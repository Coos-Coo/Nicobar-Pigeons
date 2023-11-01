import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import "./CommunityPage1.css";

const CommunityPage1: FunctionComponent = () => {
  return (
    <div className="community-page1">
      <FrameComponent5 />
      <div className="finallogo-1-parent">
        <img className="finallogo-1-icon" alt="" src="/finallogo-1@2x.png" />
        <div className="welcome-uday-please-container">
          <p className="welcome-uday">
            <span>Welcome,</span>
            <span className="uday1"> Uday</span>
            <span className="span">!</span>
          </p>
          <p className="please-select-a">
            {" "}
            please select a chat to start messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage1;
