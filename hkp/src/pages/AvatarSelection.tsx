import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AvatarSelection.css";

const AvatarSelection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/volunteer-deatils");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/community-member-form");
  }, [navigate]);

  return (
    <div className="avatar-selection">
      <div className="choose-your-role-wrapper">
        <div className="choose-your-role">Choose your role</div>
      </div>
      <div className="avatar-selection-inner" onClick={onFrameContainer2Click}>
        <div className="vounteer-wrapper">
          <div className="vounteer">Vounteer</div>
        </div>
      </div>
      <div
        className="community-member-wrapper"
        onClick={onFrameContainer3Click}
      >
        <div className="community-member">Community member</div>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="avatar-selection-child" alt="" src="/frame-7.svg" />
      <div className="avatar-selection-item" />
      <img className="image-13-icon" alt="" src="/image-13@2x.png" />
      <div className="avatar1">
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
      </div>
    </div>
  );
};

export default AvatarSelection;
