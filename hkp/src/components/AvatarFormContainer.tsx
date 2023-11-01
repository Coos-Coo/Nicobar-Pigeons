import { FunctionComponent } from "react";
import "./AvatarFormContainer.css";

type AvatarFormContainerType = {
  /** Action props */
  onFrameContainer1Click?: () => void;
};

const AvatarFormContainer: FunctionComponent<AvatarFormContainerType> = ({
  onFrameContainer1Click,
}) => {
  return (
    <div className="pick-an-avatar-as-your-profile-parent">
      <div className="pick-an-avatar">
        Pick an Avatar as your profile picture
      </div>
      <div className="avatar-parent1">
        <img className="avatar-icon1" alt="" src="/avatar1.svg" />
        <img className="avatar-icon1" alt="" src="/avatar2.svg" />
        <img className="avatar-icon1" alt="" src="/avatar3.svg" />
        <img className="avatar-icon1" alt="" src="/avatar4.svg" />
      </div>
      <div
        className="set-as-profile-picture-wrapper"
        onClick={onFrameContainer1Click}
      >
        <div className="set-as-profile">SET AS PROFILE PICTURE</div>
      </div>
    </div>
  );
};

export default AvatarFormContainer;
