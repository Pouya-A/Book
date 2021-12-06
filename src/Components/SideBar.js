import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import logoBook from "../pic/BookStore11234567890.svg";

const upToDown = {
  hidden: {
    y: -600,
  },
  visible: {
    y: 0,
    transition: {
      delay: 3.8,
      duration: 1,
      type: "spring",
      stiffness: 400,
    },
  },
};
const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8 col-md-4 col-sm-4 col-4">
            <motion.div
              className="logo-tokyo "
              variants={upToDown}
              initial="hidden"
              animate="visible"
            >
              <img src={logoBook} alt="" />
            </motion.div>
          </div>
          <div className="col-xl-12 col-lg-4 col-md-8 col-sm-8 col-8 d-flex justify-content-xl-start justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-end">
            <ul className="side-bar-items">
              <li className="item">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="align-self-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  <h6>Home</h6>
                </NavLink>
              </li>

              <li className="item text-center">
                <NavLink
                  to="/portfolio"
                  activeClassName="active"
                  className="align-self-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h6> portfolio</h6>
                </NavLink>
              </li>
              <li className="item text-center">
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="align-self-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <h6>About</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer container">
        <div className="col-12 footer-content">
          <h6>@ 2021 P.A</h6>
          <p className="lead">
            Created by <span>PouyA</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SideBar;
