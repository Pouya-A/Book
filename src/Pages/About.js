import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import ModalPage from "../Components/ModalPage";
import { ContextPort } from "../context/context";
import library from "../pic/library.jpg";
const About = () => {
  const { modalOpen, isModal } = useContext(ContextPort);

  useEffect(() => {
    const moadlPage = <ModalPage />;
  }, [isModal]);
  return (
    <div className="about">
      <div className="about-img mb-5">
        <img src={library} alt="" className="img-responsuve center-block" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="title mb-5">
            <h6>About Book</h6>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-5">
            <div className="about-content">
              <p className="fw-normal fst-italic lh-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                et modi ea officiis voluptatem! Quasi dolorem suscipit est
                temporibus eum doloribus impedit cumque, nemo consequuntur!
              </p>

              <button
                className="btn py-3 px-4 btn-dark fw-bold rounded-0 bookbtn"
                onClick={modalOpen}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-6">
            <div className="about-info">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 fw-bold">
                    <div className="about-info-title">
                      <p>Established:</p>
                      <p>Age:</p>
                      <p>Address:</p>
                      <p>Email:</p>
                      <p>Phone:</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about-info-value fw-normal">
                      <p>01.07.1990</p>
                      <p>31</p>
                      <p>Ave 11, New York, USA</p>
                      <p>mail@gmail.com</p>
                      <p>+77 022 177 05 05</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPage />
    </div>
  );
};

export default About;
