import React, { useState } from "react";
import Notification from "../assets/Notification.png";
import MenuIcons from "../assets/Menu.png";
import { RxAvatar } from "react-icons/rx";
import Menu from "./Menu";
import Filters from "./Filters";
import QuestionPart from "./QuestionPart";
import RightSidebar from "./RightSidebar";

function Middlebar() {
  const [language, setLanguage] = useState("");
  const [userInteracted, setUserInteracted] = useState(false);
  const [menuOption, setMenuOption] = useState(false);

  const handleOnChange = (e) => {
    setLanguage(e.target.value);
    setUserInteracted(true);
  };

  const handleMenuSection = () => {
    setMenuOption(!menuOption);
  };
  return (
    <div
      style={{
        marginLeft: "40px",
        marginTop: "38px",
        width: "974px",
        display: "flex",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1
            style={{
              fontFamily: "Lato",
              fontSize: "40px",
              fontWeight: 500,
            }}
          >
            Create Quiz
          </h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "31px",
                border: "3px solid #4F78FE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={Notification}
                alt=""
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <div style={{ marginLeft: "40px" }}>
              <RxAvatar style={{ width: "61px", height: "61px" }} />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#FFF",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              borderRadius: "12px",
            }}
            id="language"
            name="language"
            value={language}
            onChange={handleOnChange}
            onClick={() => setUserInteracted(true)}
          >
            {!userInteracted && <option value={"default"}>Language</option>}
            <option value={"english"} style={{ marginLeft: "32px" }}>
              English
            </option>
            <option value={"hindi"}>Hindi</option>
            <option value={"urdu"}>Urdu</option>
            <option>Add new</option>
          </select>
          <div>
            <div
              style={{
                width: "61px",
                height: "52px",
                background: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                cursor: "pointer",
                flexDirection: "column",
                position: "relative",
              }}
              onClick={handleMenuSection}
            >
              <img
                src={MenuIcons}
                style={{ width: "36px", height: "36px" }}
                alt=""
              />
              {menuOption && (
                <div style={{ position: "absolute", top: "125%", zIndex: 1 }}>
                  <Menu />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <Filters />
        </div>

        <div>
          <QuestionPart />
        </div>
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Middlebar;
