import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateContainer.css";

type StateContainerType = {
  locationName?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
};

const StateContainer: FunctionComponent<StateContainerType> = ({
  locationName,
  propTop,
  propWidth,
}) => {
  const stateStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const bozorgiStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="state" style={stateStyle}>
      <div className="state-child" />
      <div className="state1">State</div>
      <div className="bozorgi1" style={bozorgiStyle}>
        {locationName}
      </div>
      <img
        className="keyboard-arrow-down1"
        alt=""
        src="/keyboard-arrow-down1.svg"
      />
    </div>
  );
};

export default StateContainer;
