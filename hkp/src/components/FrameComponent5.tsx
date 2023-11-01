import { FunctionComponent, useCallback } from "react";
import MusicClubContainer1 from "./MusicClubContainer1";
import Container from "./Container";
import { useNavigate } from "react-router-dom";
import "./FrameComponent5.css";

const FrameComponent5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onDONATENOWTextClick = useCallback(() => {
    navigate("/donation-window");
  }, [navigate]);

  return (
    <div className="frame-parent7">
      <div className="frame-parent8">
        <MusicClubContainer1
          download2="/download-2@2x.png"
          musicClub="Music club"
          download2IconPadding="var(--padding-mini) 0px var(--padding-mini) var(--padding-mini)"
        />
        <div className="frame-wrapper3">
          <div className="download-1-group">
            <img className="download-1-icon1" alt="" src="/download-1@2x.png" />
            <div className="yoga-club1">Yoga club</div>
          </div>
        </div>
        <MusicClubContainer1
          download2="/download-3@2x.png"
          musicClub="Chess Club"
          download2IconPadding="var(--padding-mini) 0px var(--padding-mini) 15px"
        />
      </div>
      <Container />
      <div className="communities2">
        <p className="communities3">#COMMUNITIES</p>
      </div>
      <img
        className="frame-icon"
        alt=""
        src="/frame-19.svg"
        onClick={onFrameIconClick}
      />
      <img className="frame-child9" alt="" src="/vector-1.svg" />
      <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
      <div className="donate-now-container">
        <div className="donate-now1" onClick={onDONATENOWTextClick}>
          DONATE NOW
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
