/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Button, Flex, IconButton, NavLink } from "@theme-ui/components";
import logo from "../../assets/svg/wiket-logo.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";
import DropMenu from "./drop-menu/DropMenu";
import type { MenuProps } from "./drop-menu/DropMenu";

const menuList: MenuProps[] = [
  {
    label: "Benefits",
    link: "#",
  },
  {
    label: "Your Profile",
    link: "#",
  },
  {
    label: "Connections",
    link: "#",
  },
  {
    label: "Plans & Pricing",
    link: "#",
  },
];

const NavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenuClose = () => {
    setOpenMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setOpenMobileMenu((state) => !state);
  };

  return (
    <div
      sx={{
        position: "sticky",
        top: "0px",
        zIndex: 10,
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          // paddingTop: "19px",
          // paddingBottom: "19px",
          marginBottom: "60px",
          backgroundColor: "rgb(255, 248, 239, 0.9)",
          padding: ["19px 28px", null, null, "19px 0px"],
          maxWidth: "1280px",
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
            {menuList.map((menu, index) => (
              <NavLink key={index} href={menu.link}>
                {menu.label}
              </NavLink>
            ))}
          </Flex>
          <Button sx={{ fontFamily: "Faible-Bold", borderRadius: "8px" }}>
            Get Started
          </Button>
          <IconButton
            onClick={toggleMobileMenu}
            onBlur={handleMobileMenuClose}
            sx={{
              ml: "1em",
              p: 0,
              display: ["block", null, "none", null],
              cursor: "pointer",
              backgroundColor: openMobileMenu && "primary",
              boxSizing: "content-box",
              padding: "4.5px",
              borderRadius: "8px",
            }}
          >
            <img sx={{ width: "100%" }} src={menuIcon} alt="..." />
          </IconButton>
        </Flex>
      </Flex>
      <DropMenu
        menuList={menuList}
        open={openMobileMenu}
        handleClose={handleMobileMenuClose}
      />
    </div>
  );
};

export default NavBar;
