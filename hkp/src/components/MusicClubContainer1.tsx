import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./MusicClubContainer1.css";

type MusicClubContainer1Type = {
  download2?: string;
  musicClub?: string;

  /** Style props */
  download2IconPadding?: CSSProperties["padding"];
};

const MusicClubContainer1: FunctionComponent<MusicClubContainer1Type> = ({
  download2,
  musicClub,
  download2IconPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: download2IconPadding,
    };
  }, [download2IconPadding]);

  return (
    <div className="frame-wrapper" style={frameDivStyle}>
      <div className="avatar-group">
        <div className="avatar2">
          <img className="download-2-icon1" alt="" src={download2} />
        </div>
        <div className="music-club1">{musicClub}</div>
      </div>
    </div>
  );
};

export default MusicClubContainer1;
