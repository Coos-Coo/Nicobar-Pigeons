import { FunctionComponent, useCallback } from "react";
import CityContainer from "../components/CityContainer";
import StateContainer from "../components/StateContainer";
import AddressForm from "../components/AddressForm";
import { useNavigate } from "react-router-dom";
import "./CommunityMemberForm.css";

const CommunityMemberForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='udayText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/community-page");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/community-page");
  }, [navigate]);

  return (
    <div className="community-member-form">
      <div className="community-member-form-child" />
      <img className="profile1-icon1" alt="" src="/profile1.svg" />
      <img
        className="unsplashc8ta0gwpbqg-icon1"
        alt=""
        src="/unsplashc8ta0gwpbqg@2x.png"
      />
      <div className="member-detials">Member detials</div>
      <div className="firstname1">
        <div className="firstname-item" />
        <div className="first-name1">First Name</div>
        <div className="uday" data-scroll-to="udayText">
          Uday
        </div>
      </div>
      <CityContainer personName="Pune" propTop="320px" />
      <StateContainer
        locationName="Maharashtra"
        propTop="317px"
        propWidth="174px"
      />
      <AddressForm userAddress="Age" userAge="35 " propTop="317px" />
      <div className="address4">
        <div className="address-child2" />
        <div className="contact-number1">Contact Number</div>
        <div className="container">
          <div className="div1">1234567890</div>
        </div>
      </div>
      <div className="address5">
        <div className="address-child3" />
      </div>
      <div className="address6">
        <div className="address-child4" />
        <div className="time-you-wish">Time you wish to dedicate</div>
        <div className="hoursweek-wrapper">
          <div className="hoursweek">5 hours/week</div>
        </div>
      </div>
      <div className="address7">
        <div className="address-child5" />
        <div className="contact-number1">Address</div>
        <div className="zboncak-wrapper">
          <div className="zboncak">{`33062 Zboncak `}</div>
        </div>
      </div>
      <div className="lastname1">
        <div className="lastname-item" />
        <div className="last-name1">Last Name</div>
        <div className="khalifa">Khalifa</div>
      </div>
      <div className="group-div" onClick={onGroupContainer3Click}>
        <div className="group-inner" />
        <div className="edit1">Edit</div>
      </div>
      <div className="rectangle-parent1" onClick={onGroupContainer4Click}>
        <div className="group-child1" onClick={onRectangle10Click} />
        <div className="save1">Save</div>
      </div>
      <div className="interests-parent">
        <div className="interests">Interests</div>
        <div className="yoga">1.Yoga</div>
        <div className="music">
          <p className="music1">2.Music</p>
        </div>
        <div className="chess">3..Chess</div>
      </div>
      <div className="upload-photo-container">
        <div className="upload-photo1">Upload Photo</div>
      </div>
    </div>
  );
};

export default CommunityMemberForm;
