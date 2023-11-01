import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ExperienceContainer.css";

type ExperienceContainerType = {
  description?: string;
  jobRequirements?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ExperienceContainer: FunctionComponent<ExperienceContainerType> = ({
  description,
  jobRequirements,
  propLeft,
}) => {
  const address1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="address11" style={address1Style}>
      <div className="address-child7" />
      <div className="experience">{description}</div>
      <div className="write-upto-1000-words-wrapper">
        <div className="write-upto-1000">{jobRequirements}</div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
