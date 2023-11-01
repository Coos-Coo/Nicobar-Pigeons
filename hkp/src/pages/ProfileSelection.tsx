import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvatarFormContainer from "../components/AvatarFormContainer";
import "./ProfileSelection.css";

const ProfileSelection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/avatar-selection");
  }, [navigate]);

  return (
    <div className="profile-selection">
      <AvatarFormContainer onFrameContainer1Click={onFrameContainer1Click} />
    </div>
  );
};

export default ProfileSelection;
