import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./UserFormContainer1.css";

type UserFormContainer1Type = {
  usernameInput?: string;
  emailInput?: string;
  passwordInput?: string;
  confirmPasswordInput?: string;

  /** Style props */
  uday07Top?: CSSProperties["top"];
  udayKhalifagmailcomColor?: CSSProperties["color"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivHeight?: CSSProperties["height"];
  divTop?: CSSProperties["top"];
  divColor?: CSSProperties["color"];
  divColor1?: CSSProperties["color"];
  cREATEUSERColor?: CSSProperties["color"];
  aLREADYHAVEANCursor?: CSSProperties["cursor"];

  /** Action props */
  onCREATEUSERTextClick?: () => void;
  onALREADYHAVEANClick?: () => void;
};

const UserFormContainer1: FunctionComponent<UserFormContainer1Type> = ({
  usernameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
  uday07Top,
  udayKhalifagmailcomColor,
  frameDivBackgroundColor,
  frameDivHeight,
  divTop,
  divColor,
  divColor1,
  cREATEUSERColor,
  aLREADYHAVEANCursor,
  onCREATEUSERTextClick,
  onALREADYHAVEANClick,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: uday07Top,
    };
  }, [uday07Top]);

  const uday07Style: CSSProperties = useMemo(() => {
    return {
      color: udayKhalifagmailcomColor,
    };
  }, [udayKhalifagmailcomColor]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      height: frameDivHeight,
    };
  }, [frameDivBackgroundColor, frameDivHeight]);

  const udayKhalifagmailcomStyle: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      color: divColor,
    };
  }, [divTop, divColor]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor1,
    };
  }, [divColor1]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: cREATEUSERColor,
    };
  }, [cREATEUSERColor]);

  const cREATEUSERStyle: CSSProperties = useMemo(() => {
    return {
      cursor: aLREADYHAVEANCursor,
    };
  }, [aLREADYHAVEANCursor]);

  return (
    <div className="frame-parent9" style={frameDiv1Style}>
      <div className="uday-07-wrapper">
        <div className="uday-07" style={uday07Style}>
          {usernameInput}
        </div>
      </div>
      <div className="udaykhalifagmailcom-wrapper" style={frameDiv2Style}>
        <div className="udaykhalifagmailcom" style={udayKhalifagmailcomStyle}>
          {emailInput}
        </div>
      </div>
      <div className="uday-07-wrapper">
        <div className="div5" style={divStyle}>
          {passwordInput}
        </div>
      </div>
      <div className="uday-07-wrapper">
        <div className="div5" style={div1Style}>
          {confirmPasswordInput}
        </div>
      </div>
      <div className="create-user-wrapper">
        <div
          className="create-user"
          onClick={onCREATEUSERTextClick}
          style={cREATEUSERStyle}
        >
          CREATE USER
        </div>
      </div>
      <div className="already-have-an-container" onClick={onALREADYHAVEANClick}>
        <span>ALREADY HAVE AN ACCOUNT ?</span>
        <span className="span1">{`  `}</span>
        <span className="login1">LOGIN</span>
      </div>
    </div>
  );
};

export default UserFormContainer1;
