import React, { useState } from "react";
import imgIcon from "../assets/imgIcons.png";
import deleteIcon from "../assets/deleteIcons.png";

function QuestionPart() {
  const options = ["Option A", "Option B", "Option C", "Option D"];
  const [currentOption, setCurrentOption] = useState("");
  console.log(currentOption);
  return (
    <div>
      <div
        style={{
          width: "974px",
          height: "756px",
          background: "#FFF",
          marginTop: "32px",
          borderRadius: "12px",
        }}
      >
        <div style={{ marginLeft: "48px", paddingTop: "56px" }}>
          <h1
            style={{
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Question
          </h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "800px",
                height: "64px",
                borderRadius: "12px",
                background: "#F5F6F7",
                display: "flex",
                alignItems: "center",
                marginTop: "28px",
              }}
            >
              <p
                style={{
                  color: "#707070",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: 500,
                  marginLeft: "32px",
                }}
              >
                Question
              </p>
            </div>

            <div
              style={{
                width: "46px",
                height: "46px",
                marginTop: "35px",
                marginLeft: "32px",
                cursor: "pointer",
              }}
            >
              <img
                src={imgIcon}
                style={{ width: "inherit", height: "inherit" }}
                alt=""
              />
            </div>
          </div>

          <div style={{ marginTop: "32px" }}>
            <h1
              style={{
                color: "#707070",
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              Options:
            </h1>
            <div style={{ marginTop: "28px" }}>
              {options.map((option, index) => (
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      marginTop: "25px",
                      width: "42px",
                      height: "42px",
                    }}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      style={{ cursor: "pointer" }}
                      checked={option === currentOption}
                      onChange={() => setCurrentOption(option)}
                    ></input>
                  </div>
                  <div
                    style={{
                      width: "674px",
                      height: "64px",
                      borderRadius: "12px",
                      background: "#F5F6F7",
                      marginBottom: "24px",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "32px",
                      cursor: "pointer",
                    }}
                    onClick={() => setCurrentOption(option)}
                  >
                    <p
                      style={{
                        color: "#707070",
                        fontFamily: "Poppins",
                        fontSize: "24px",
                        fontWeight: 500,
                        marginLeft: "33px",
                      }}
                    >
                      {option}
                    </p>
                  </div>
                  <div style={{ marginLeft: "32px", display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={imgIcon}
                        style={{ width: "42px", height: "42px" }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        marginLeft: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={deleteIcon}
                        style={{ width: "33px", height: "37px" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
              <span
                style={{
                  color: "#7A58E6",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: 700,
                  marginLeft: "686px",
                  marginTop: "32px",
                  cursor: "pointer",
                }}
              >
                Add another option
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            width: "375px",
            height: "75px",
            borderRadius: "16px",
            background: "#7A58E6",
            marginTop: "56px",
            border: "none",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default QuestionPart;
