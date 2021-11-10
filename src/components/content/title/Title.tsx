/** @jsxImportSource theme-ui */
import { SxProp } from "theme-ui";

import React from "react";

interface TitleProps{
  sxProp: SxProp
}

const Title = ({sxProp}:TitleProps) => {
  return (
    <div sx={{
      marginBottom: '24px',
      marginLeft: [null, null, '-24px', null],
      ...sxProp.sx
    }}>
      <p sx={{ 
        fontSize: ["22px", null, "30px", null], 
        lineHeight: ["100%", null, "140%", null], 
        marginBottom: "5px" }}>
        Explore new opportunities.
      </p>
      <h1
        sx={{
          fontFamily: "SpoofTrial-Bold",
          fontSize: ["54px", null, "70px", "98px"],
          fontWeight: "bolder",
          lineHeight: "100%",
          marginTop: '0px'
        }}
      >
        <span sx={{ color: "primary" }}>Grow</span> your business.
      </h1>
    </div>
  );
};

export default Title;
