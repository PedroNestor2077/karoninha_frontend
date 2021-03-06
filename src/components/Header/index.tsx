//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ components, setPage, menuCollapse, setMenuCollapse }) => {
  //create initial menuCollapse state using useState hook

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={true}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <img src="logo3.png" style={{ width: "80px" }}></img>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {components &&
                components.map((iten) => {
                  return (
                    <MenuItem
                      active={true}
                      icon={iten.icon}
                      onClick={() => setPage(iten.value)}
                    >
                      {iten.name}
                    </MenuItem>
                  );
                })}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to={"/login"}></Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
