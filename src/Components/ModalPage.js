import React, { useContext, useEffect, useRef } from "react";
import ProgressBar from "./subComponent/ProgressBar";
import { ContextPort } from "../context/context";
import ModalProject from "./subComponent/ModalProject";
import Slider from "./subComponent/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import gsap, { Power4, Circ } from "gsap";

const ModalPage = () => {
  const { modalOpen, skillsData, isModal } = useContext(ContextPort);
  let item = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      item,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: Circ.easeOut }
    );
  });
  return (
    <div
      className={`Modal ${isModal === true ? "Modal-show" : null}`}
      ref={(el) => (item = el)}
    >
      <div className="Modal-content overflow-auto position-relative">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="times-icon position-absolute"
          size="lg"
          onClick={modalOpen}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
              <div className="title mb-5">
                <h6>Score</h6>
              </div>

              <div className="progress-container">
                {skillsData.map((skill) => {
                  return (
                    <ProgressBar
                      subtitle={skill.subtitle}
                      skillProgress={skill.skillProgress}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <ModalProject />
        <Slider />
      </div>
    </div>
  );
};

export default ModalPage;
