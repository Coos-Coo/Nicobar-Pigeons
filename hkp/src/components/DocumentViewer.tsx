import { FunctionComponent } from "react";
import "./DocumentViewer.css";

const DocumentViewer: FunctionComponent = () => {
  return (
    <div className="frame-parent6">
      <div className="verified-wrapper">
        <div className="verified">Verified</div>
      </div>
      <div className="documents">Documents</div>
      <div className="aadhar-card">Aadhar Card</div>
      <div className="kyc">KYC</div>
      <div className="edit-wrapper">
        <div className="edit2">Edit</div>
      </div>
    </div>
  );
};

export default DocumentViewer;
