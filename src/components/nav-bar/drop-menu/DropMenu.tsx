/** @jsxImportSource theme-ui */
import { Link } from "theme-ui";
import type { SxProp } from "theme-ui";
import React, { useEffect, useRef } from "react";

export interface MenuProps {
  label: string;
  link: string;
}

interface DropMenuProps {
  menuList: MenuProps[];
  sxProp?: SxProp;
  open: boolean;
  handleClose: () => void;
}
const DropMenu = ({ menuList, sxProp, open, handleClose }: DropMenuProps) => {
  const rootEl = useRef<HTMLDivElement>(null);
  const elHeight = useRef(0);

  const handleMenuClose = () => {
    // if (rootEl.current) {
    //   rootEl.current.style.height = `${0}px`;
      handleClose();
    // }
  };

  useEffect(() => {
    //save the initial height value of the element
    elHeight.current = rootEl.current?.offsetHeight || 0;
  }, []);

  useEffect(() => {
    if (!open) {
      // setMenuHeight(0);
      if(rootEl.current !== null){
        rootEl.current.style.height = `${0}px`;
      }
    } else {
      if (rootEl.current) {
        rootEl.current.style.height = `${elHeight.current}px`;
        // rootEl.current.focus();
      }
    }
  }, [open]);

  return (
    <div
      ref={rootEl}
      // tabIndex={0}
      // onBlur={() => handleMenuClose()}
      sx={{
        position: "absolute",
        width: "100%",
        top: "79px",
        // zIndex: '0',
        // backgroundColor: "primary",
        backgroundColor: 'rgb(255, 248, 239, 0.9)',
        // padding: open ? "1em" : "0em",
        overflow: "hidden",
        // borderRadius: "10px",
        transition: "all 0.3s ease",
        // height: menuHeight,
        ...(sxProp?.sx || null),
      }}
    >
      <ul
        sx={{
          listStyle: "none",
          // marginRight: '10px'
          textAlign: "right",
          padding: "1em",
        }}
      >
        {menuList.map((menu, index) => {
          return (
            <li
              key={index}
              sx={{
                padding: "0.5em",
              }}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  color: "text",
                }}
                href={menu.link}
                onClick={() => handleMenuClose()}
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropMenu;
