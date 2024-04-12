import React from "react";
import accountsettings from "../accountsettings.css";
import { IoMdCamera } from "react-icons/io";

const AccountSettings = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{ border: "2px solid black", width: "350px", height: "550px" }}>
      <div style={{ borderBottom: "1px solid black" }}>
        <h2>Account Settings</h2>
      </div>
      <div style={{ backgroundColor: "#f7f8f9", height: "480px" }}>
        <div style={{ padding: "10px" }}>
          <div style={{ display: "flex",justifyItems:"flex-start"}}>
            <div className="upload">
              <img
                src="../images.png"
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <div className="round">
                <input type="file" />
                <IoMdCamera
                  className="fa fa-camera"
                  style={{ color: "#fff" }}
                ></IoMdCamera>
              </div>
            </div>
            <div style={{ marginTop: "-20px", marginLeft: "-20px" }}>
              <div>
                <h4>Marry Doe</h4>
                <p style={{ marginTop: "-20px" }}>Marry@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
            <p style={{fontSize:"14px",fontWeight:"normal",padding:"10px"}}> Lorem ipsum dolor sit amet, . Sed cursus ante dapibus diam  Lorem ipsum dolor sit amet, . Sed cursus ante dapibus diam</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountSettings;
