import { FunctionComponent, useCallback } from "react";
import CityContainer from "../components/CityContainer";
import StateContainer from "../components/StateContainer";
import AddressForm from "../components/AddressForm";
import ExperienceContainer from "../components/ExperienceContainer";
import { useNavigate } from "react-router-dom";
import DocumentViewer from "../components/DocumentViewer";
import "./VolunteerDeatils.css";

const VolunteerDeatils: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mehrabText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/community-page");
  }, [navigate]);

  return (
    <div className="volunteer-deatils">
      <img className="profile1-icon" alt="" src="/profile1.svg" />
      <img
        className="unsplashc8ta0gwpbqg-icon"
        alt=""
        src="/unsplashc8ta0gwpbqg@2x.png"
      />
      <div className="volunteer-deatils1">Volunteer deatils</div>
      <div className="firstname">
        <div className="firstname-child" />
        <div className="first-name">First Name</div>
        <div className="mehrab" data-scroll-to="mehrabText">
          Mehrab
        </div>
      </div>
      <CityContainer personName="Mehrab" />
      <StateContainer locationName="Bozorgi" />
      <AddressForm userAddress="Address" userAge="33062 Zboncak " />
      <div className="address">
        <div className="address-child" />
        <div className="contact-number">Contact Number</div>
        <div className="wrapper">
          <div className="div">1234567890</div>
        </div>
      </div>
      <div className="address1">
        <div className="address-child" />
        <div className="address-inner" />
        <div className="contact-number">Expertise in</div>
        <div className="write-upto-50-words-wrapper">
          <div className="write-upto-50">write upto 50 words</div>
        </div>
      </div>
      <ExperienceContainer
        description="Experience"
        jobRequirements="write upto 1000 words"
      />
      <div className="address2">
        <div className="rectangle-div" />
        <div className="time-you-can">Time you can dedicate</div>
        <div className="hoursday-wrapper">
          <div className="hoursday">2 hours/day</div>
        </div>
      </div>
      <ExperienceContainer
        description="Education"
        jobRequirements="high school diploma"
        propLeft="874px"
      />
      <div className="address3">
        <div className="address-child1" />
        <div className="contact-number">Reason to join</div>
        <div className="write-upto-100-words-wrapper">
          <div className="write-upto-100">write upto 100 words</div>
        </div>
      </div>
      <div className="lastname">
        <div className="lastname-child" />
        <div className="last-name">Last Name</div>
        <div className="bozorgi">Bozorgi</div>
      </div>
      <div className="rectangle-group" onClick={onGroupContainer6Click}>
        <div className="group-child" />
        <div className="edit">Edit</div>
      </div>
      <div className="rectangle-container" onClick={onGroupContainer7Click}>
        <div className="group-item" />
        <div className="save">Save</div>
      </div>
      <DocumentViewer />
      <div className="upload-photo-wrapper">
        <div className="upload-photo">Upload Photo</div>
      </div>
    </div>
  );
};

export default VolunteerDeatils;
