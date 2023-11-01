import { FunctionComponent, useCallback } from "react";
import MusicClubContainer1 from "./MusicClubContainer1";
import Container from "./Container";
import { useNavigate } from "react-router-dom";
import "./CommunityCard1.css";

const CommunityCard1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDONATENOWTextClick = useCallback(() => {
    navigate("/donation-window");
  }, [navigate]);

  return (
    <div className="frame-parent1">
      <div className="frame-parent2">
        <MusicClubContainer1
          download2="/download-2@2x.png"
          musicClub="Music club"
        />
        <div className="frame-wrapper2">
          <div className="download-1-parent">
            <img className="download-1-icon" alt="" src="/download-1@2x.png" />
            <div className="yoga-club">Yoga club</div>
          </div>
        </div>
        <MusicClubContainer1
          download2="/download-3@2x.png"
          musicClub="Chess Club"
          download2IconPadding="var(--padding-mini) 0px var(--padding-mini) 15px"
        />
      </div>
      <Container />
      <div className="communities">
        <p className="communities1">#COMMUNITIES</p>
      </div>
      <img className="frame-child2" alt="" src="/vector-1.svg" />
      <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      <div className="donate-now-wrapper">
        <div className="donate-now" onClick={onDONATENOWTextClick}>
          DONATE NOW
        </div>
      </div>
    </div>
  );
};

export default CommunityCard1;
