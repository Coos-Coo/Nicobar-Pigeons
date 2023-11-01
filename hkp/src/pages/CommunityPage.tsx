import { FunctionComponent, useCallback } from "react";
import CommunityCard1 from "../components/CommunityCard1";
import { useNavigate } from "react-router-dom";
import "./CommunityPage.css";

const CommunityPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onF230342504KEgQXQAbgbdKonjtGyIconClick = useCallback(() => {
    navigate("/community-page");
  }, [navigate]);

  return (
    <div className="community-page">
      <CommunityCard1 />
      <div className="frame">
        <div className="frame1">
          <div className="frame2">
            <div className="avatar-parent">
              <div className="avatar">
                <img
                  className="download-2-icon"
                  alt=""
                  src="/download-21@2x.png"
                />
              </div>
              <div className="music-club">Music club</div>
            </div>
            <img
              className="f-230342504-kegqxqabgbdkonjtgy-icon"
              alt=""
              src="/1000-f-230342504-kegqxqabgbdkonjtgyexqdrcn1tneplo-1@2x.png"
              onClick={onF230342504KEgQXQAbgbdKonjtGyIconClick}
            />
          </div>
          <div className="frame3">
            <div className="frame4">
              <div className="frame5">
                <div className="frame6">
                  <img className="frame-child" alt="" src="/rectangle-5.svg" />
                  <div className="frame7">
                    <div className="hi-wrapper">
                      <div className="hi">Hi</div>
                    </div>
                  </div>
                </div>
                <div className="hey-see-my-drumset-wrapper">
                  <div className="hey-see-my">Hey, see my drumset !</div>
                </div>
              </div>
              <div className="frame8">
                <div className="frame9">
                  <img
                    className="download-4-icon"
                    alt=""
                    src="/download-4@2x.png"
                  />
                </div>
                <div className="frame10">
                  <div className="frame11">
                    <div className="hi-container">
                      <div className="hi">HI</div>
                    </div>
                  </div>
                  <div className="frame11">
                    <div className="hi-container">
                      <div className="hi">HI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-inner">
          <div className="rectangle-parent">
            <div className="frame-item" />
            <img className="group-icon" alt="" src="/group-6.svg" />
            <img className="group-icon1" alt="" src="/group.svg" />
            <img className="rectangle-icon" alt="" src="/rectangle-2.svg" />
            <img className="frame-child1" alt="" src="/group-2.svg" />
            <div className="type-your-message">Type your message here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
