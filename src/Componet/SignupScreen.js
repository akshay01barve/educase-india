import React from "react";
import signup from "../signup.css";
import { Outlet, Link } from "react-router-dom";
import AccountSettings from "./AccountSettings";

const SignupScreen = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "white",
          height: "560px",
          border: "1px solid black",
          width: "420px",
        }}
      >
        <div style={{ padding: "30px" }}>
          <form>
            <div style={{}}>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    width: "220px",
                  }}
                >
                  Create your PopX account
                </h2>
              </div>

              <div class="input-bx">
                <input
                  type="text"
                  required="required"
                  placeholder="Enter Full Name"
                />
                <span>
                  Full Name <label style={{ color: "red" }}>*</label>{" "}
                </span>
              </div>

              <div class="input-bx" style={{ marginTop: "15px" }}>
                <input
                  type="tel"
                  pattern="[0-9]{12}"
                  required
                  placeholder="+917236520143"
                  title="Please enter a valid Indian mobile number starting with '+91' and 10 digits."
                />
                <span>
                  Mobile number <label style={{ color: "red" }}>*</label>
                </span>
              </div>

              <div class="input-bx" style={{ marginTop: "15px" }}>
                <input type="text" required="required" placeholder="" />
                <span>
                  Email <label style={{ color: "red" }}>*</label>
                </span>
              </div>

              <div class="input-bx" style={{ marginTop: "15px" }}>
                <input
                  type="password"
                  required="required"
                  placeholder="Enter a password"
                />
                <span>Password</span>
              </div>

              <div class="input-bx" style={{ marginTop: "15px" }}>
                <input type="text" required="required" placeholder="" />
                <span>Company name </span>
              </div>

              <div style={{ marginTop: "-10px" }}>
                <p>
                  Are you an Agency ?<span style={{ color: "red" }}>*</span>
                </p>
                 {" "}
                <input
                  type="radio"
                  id="Yes"
                  name="fav_language"
                  value="Yes"
                  style={{ color: "#b99bfb" }}
                />
                  <label for="Yes">Yes</label>
                 {" "}
                <input
                  type="radio"
                  id="No"
                  name="fav_language"
                  value="No"
                  style={{ color: "#b99bfb" }}
                />
                  <label for="No">No</label>
              </div>

              <div>
                <button
                  style={{
                    border: "2px solid",
                    backgroundColor: "#6c25ff",
                    padding: "10px",
                    borderRadius: 10,
                    width: "330px",
                    borderColor: "#6c25ff",

                    cursor: "pointer",
                    marginTop: "30px",
                    color: "white",
                  }}
                >
                  {" "}
                  <Link to="/AccountSettings"> Create Account</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
