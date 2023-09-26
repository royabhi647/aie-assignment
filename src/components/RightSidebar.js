import React from "react";

function RightSidebar() {
  return (
    <div
      style={{
        background: "#FFF",
        width: "562px",
        height: "1600px",
        marginLeft: "40px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "466px",
          height: "210px",
          borderRadius: "24px",
          marginLeft: "48px",
          background: "linear-gradient(180deg, #8C6FE9 0%, #2D00BA 100%)",
          position: "absolute",
          marginTop: "38px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: 500,
            marginTop: "43px",
          }}
        >
          Total quiz
        </p>
        <p
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "48px",
            fontWeight: 500,
            marginTop: "16px",
          }}
        >
          50,000
        </p>
      </div>
    </div>
  );
}

export default RightSidebar;
