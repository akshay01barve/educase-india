import React from "react";
import index from "../index.css";
import { Outlet, Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div style={{    display: "flex",
    justifyContent: "center",}}>
      <div
        style={{
          background: "white",
          height: "550px",      
          border:"1px solid black",
          width:"420px"
        }}
      >
        <div style={{ padding: "50px" }}>
          <form style={styles.form}>
            <div style={{ marginTop: "20px" }}>
              <div>
                <h2 style={{fontWeight:"bold",fontSize:"30px",width:"220px"}}>Sign in to your PopX account</h2>
                <p style={{ width: "230px" }}>
                  Lorem ipsum dolor sit amet, . Sed cursus ante dapibus diam
                </p>
              </div>
              <div class="input-bx">
                <input
                  type="text"
                  required="required"
                  placeholder="Enter a Email address"
                />
                <span>Email</span>
              </div>
              <div class="input-bx" style={{ marginTop: "20px" }}>
                <input type="password" required="required" placeholder="Enter a password" />
                <span>Password</span>
              </div>
              <div>
                <button
                 style={{border:"2px solid",backgroundColor:"#cebafb",padding:"10px",borderRadius:10,
                 width:"330px",borderColor:"#cebafb",marginTop:"5px",cursor:"pointer",marginTop:"15px"
              }}
                >  <Link to="/AccountSettings">Login</Link></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

const styles = {
  input_group: {
    // Add your CSS properties here
  },
  email: {},
};
