import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layouts = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <FaBars size={30} /> : <RxCross2 size={30} />}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layouts;
