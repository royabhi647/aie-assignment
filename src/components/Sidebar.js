import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Test from "../assets/Test.png";
import User from "../assets/User.png";
import Exam from "../assets/Exam.png";
import Middlebar from "./Middlebar";

function Sidebar() {
  const [active, setActive] = useState(0);
  const options = ["Quiz", "Exam", "Assign user"];
  const images = [Test, Exam, User];
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "304px",
          height: "1080px",
          background: "#FFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "18px", marginLeft: "42px" }}>
          <img src={Logo} style={{ width: "202px", height: "134px" }} alt="" />
        </div>
        <div
          style={{
            marginTop: "52px",
          }}
        >
          {options.map((option, index) => (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "32px",
                  cursor: "pointer",
                }}
                onClick={() => setActive(index)}
              >
                <div
                  style={{
                    display: "flex",
                    width: "240px",
                    height: "66px",
                    background: index === active && "#7A58E6",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "20px",
                    }}
                  >
                    <img src={images[index]} alt="" />
                  </div>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "8px",
                      color: active === index && "#FFF",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    {option}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {active === 0 && <Middlebar />}
      {active === 1 && <h1>Exam section</h1>}
      {active === 2 && <h1>Assign Users</h1>}
    </div>
  );
}

export default Sidebar;
