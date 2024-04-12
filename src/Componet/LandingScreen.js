import React from "react";
import { Outlet, Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div>
      <div style={{ background: "white",height:"400px", display:"flex", justifyContent:"center" }}>
        <div style={{ padding: "50px" }}>
          <form style={styles.form}>
            <div style={{marginTop:"300px"}}>
              <div>
                <h2>Welcome to PopX</h2>
                <p style={{width:"230px"}}>
                  Lorem ipsum dolor sit amet, . Sed cursus ante dapibus diam
                </p>
              </div>
              <div>
                <button style={{border:"2px solid",backgroundColor:"#6c25ff",padding:"10px",borderRadius:10,
                 width:"360px",borderColor:"#6c25ff",color:"white",cursor:"pointer"
              }}>
                <Link  to="/SignupScreen" style={{color:"white"}}>Create Account</Link>
                </button>
              </div>
              <div>
                <button
                 style={{border:"2px solid",backgroundColor:"#cebafb",padding:"10px",borderRadius:10,
                 width:"360px",borderColor:"#cebafb",marginTop:"5px",cursor:"pointer"
              }}
                >   <Link to="/LoginScreen" style={{color:"black"}}>Already Registered? Login</Link></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;

const styles = {
  form: {
    padding: "20px",
    border: "2px solid black",
    margin: "0 auto",
  },
};
