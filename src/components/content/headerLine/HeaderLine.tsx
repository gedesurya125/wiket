/** @jsxImportSource theme-ui */
import React from "react";
import headerLineDesktopImage from "../../../assets/svg/header-line-desktop.svg";
import headerLineMobileImage from "../../../assets/svg/header-line-phone-portrait.svg";
import type {SxProp} from 'theme-ui'


interface HeaderLineProps{
  sxProp: SxProp
}
const HeaderLine = ({sxProp}:HeaderLineProps) => {
  return (
    <div sx={{
      display: 'flex',
      ...sxProp.sx
    }}>
      <img
        sx={{
          width: '68%',
          marginLeft: 'auto',
          marginRight: '20px',
          marginTop: '42px',
          display: ["block", null, "none", null],
        }}
        src={headerLineMobileImage}
        alt="..."
      />
      <img 
      sx={{
        width: '100%',
        display: ["none", null, "block", null]
      }}
      src={headerLineDesktopImage} alt="..." />
    </div>
  );
};

export default HeaderLine;
