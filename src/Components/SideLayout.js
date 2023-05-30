import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiFillPlayCircle,
  AiFillSetting,
  AiFillQuestionCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdNoteAlt, MdPerson } from "react-icons/md";

const SideLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "My Page",
      icon: <AiFillHome />,
    },
    {
      path: "/runz",
      name: "RunZ",
      icon: <AiFillPlayCircle />,
    },
    {
      path: "/procedure",
      name: "Procedure",
      icon: <MdNoteAlt />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <AiFillSetting />,
    },
    {
      path: "/support",
      name: "Support",
      icon: <AiFillQuestionCircle />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <MdPerson />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h3 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Test<span style={{color:"#f1c232"}}>RunZ</span>
          </h3>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <AiOutlineMenu onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideLayout;
