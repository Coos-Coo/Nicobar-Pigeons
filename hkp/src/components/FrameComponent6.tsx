import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent6.css";

const FrameComponent6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameTextarea1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='loginButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDONTHAVEANClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  return (
    <div className="frame-parent10">
      <Form.Group className="username-parent">
        <Form.Label>Username</Form.Label>
        <Form.Control as="textarea" defaultValue="" />
      </Form.Group>
      <TextField
        className="frame-textfield"
        label="Password"
        onClick={onFrameTextarea1Click}
      />
      <Button
        className="login-button"
        name="LOG IN"
        variant="outline-primary"
        data-scroll-to="loginButton"
      >
        LOG IN
      </Button>
      <div className="dont-have-an-container" onClick={onDONTHAVEANClick}>
        <span>DON’T HAVE AN ACCOUNT ?</span>
        <span className="span2">{` `}</span>
        <span className="create">CREATE</span>
        <span className="one"> ONE</span>
      </div>
    </div>
  );
};

export default FrameComponent6;
