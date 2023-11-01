import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvatarFormContainer from "../components/AvatarFormContainer";
import "./AvatarSelection1.css";

const AvatarSelection1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/avatar-selection");
  }, [navigate]);

  return (
    <div className="avatar-selection1">
      <AvatarFormContainer onFrameContainer1Click={onFrameContainer1Click} />
    </div>
  );
};

export default AvatarSelection1;
