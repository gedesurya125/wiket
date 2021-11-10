/** @jsxImportSource theme-ui */
import React from "react";
import { Button, Flex, IconButton, NavLink } from "@theme-ui/components";
import logo from "../../assets/svg/wiket-logo.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";

const NavBar = () => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: '19px',
        marginBottom: '60px'
      }}
    >
      <div className="logo">
        <img src={logo} alt="..." />
      </div>
      <Flex sx={{ alignItems: "center" }}>
        <Flex
          as="nav"
          sx={{
            display: ["none", "none", "flex", "flex"],
          }}
        >
          <NavLink href="#">Benefits</NavLink>
          <NavLink href="#">Your Profile</NavLink>
          <NavLink href="#">Connections</NavLink>
          <NavLink href="#">Plans & Pricing</NavLink>
        </Flex>
        <Button sx={{ fontFamily: "Faible-Bold" }}>Get Started</Button>
        <IconButton
          sx={{
            ml: "1em",
            display: ["block", null, "none", null]
          }}
        >
          <img src={menuIcon} alt="..." />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default NavBar;
