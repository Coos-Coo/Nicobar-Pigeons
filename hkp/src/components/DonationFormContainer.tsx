import { FunctionComponent } from "react";
import "./DonationFormContainer.css";

const DonationFormContainer: FunctionComponent = () => {
  return (
    <div className="frame-parent3">
      <div className="frame-child3" />
      <div className="choose-a-donation-amount-parent">
        <div className="choose-a-donation">Choose a donation amount</div>
        <div className="frame-parent4">
          <div className="group-parent">
            <img className="frame-child4" alt="" src="/group-3929.svg" />
            <div className="wrapper1">
              <div className="div2">₹500</div>
            </div>
          </div>
          <div className="group-container">
            <img className="frame-child4" alt="" src="/group-39291.svg" />
            <div className="wrapper2">
              <div className="div3">₹1000</div>
            </div>
          </div>
          <div className="group-parent">
            <img className="frame-child4" alt="" src="/group-39291.svg" />
            <div className="wrapper1">
              <div className="div4">₹5000</div>
            </div>
          </div>
          <div className="enter-a-custom">Enter a custom donation amount</div>
        </div>
      </div>
      <div className="choose-a-donation-amount-parent">
        <div className="choose-a-donation">Choose a donation frequency</div>
        <div className="frame-parent5">
          <div className="group-parent2">
            <img className="frame-child4" alt="" src="/group-39292.svg" />
            <div className="choose-a-donation">Monthly</div>
          </div>
          <div className="group-parent3">
            <img className="frame-child4" alt="" src="/group-3930.svg" />
            <div className="choose-a-donation">One time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationFormContainer;
