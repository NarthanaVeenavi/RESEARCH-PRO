import React from "react";
import UpForm from "../UploadForm/upload";
import "./UploadStyle.css";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";

const UploadDocuments = () => {
  return (
    <div
     
    >
      <AdminSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <UpForm />
      </div>
    </div>
  );
};

export default UploadDocuments;
