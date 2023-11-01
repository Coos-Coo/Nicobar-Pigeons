import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CityContainer.css";

type CityContainerType = {
  personName?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const CityContainer: FunctionComponent<CityContainerType> = ({
  personName,
  propTop,
}) => {
  const cityStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="city" style={cityStyle}>
      <div className="city-child" />
      <div className="city1">City</div>
      <div className="mehrab1">{personName}</div>
      <img
        className="keyboard-arrow-down"
        alt=""
        src="/keyboard-arrow-down.svg"
      />
    </div>
  );
};

export default CityContainer;
