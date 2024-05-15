import React from "react";
import { FaHome, FaUserGraduate, FaUser, FaNetworkWired } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import "./Menus.css";
import { MdDeveloperMode, MdContacts } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

const Menus = ({ toggle }) => {
  return (
    <>
      {!toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="/profile.png" alt="Megh Deb" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome />
                Home
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsFillInfoSquareFill />
                About Me
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaUserGraduate />
                Education
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaNetworkWired />
                Experience
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdDeveloperMode />
                Tech Stack
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <GoProjectSymlink />
                Projects
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaUser />
                Testimonials
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdContacts />
                Contact Me
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome title="Home" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <BsFillInfoSquareFill title="About Me" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaUserGraduate title="Education" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaNetworkWired title="Experience" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdDeveloperMode title="Tech Stack" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <GoProjectSymlink title="Projects" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaUser title="Testimonials" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdContacts title="Contact Me" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
