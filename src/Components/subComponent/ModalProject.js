import React from "react";

const ModalProject = () => {
  return (
    <div className="modal-content-project">
      <div className="title mb-5">
        <h6>Fun Facts</h6>
      </div>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
            <div className="modal-content-project-box   p-5">
              <h5 className="text-center  mb-2">777+</h5>
              <p className="text-center">Book Published</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
            <div className="modal-content-project-box   p-5 ">
              <h5 className="text-center mb-2">1K</h5>
              <p className="text-center">Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
            <div className="modal-content-project-box   p-5">
              <h5 className="text-center mb-2">4K</h5>
              <p className="text-center">Antique Book</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
