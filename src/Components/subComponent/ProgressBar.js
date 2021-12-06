import React from "react";
import styled from "styled-components";

const ProgressBar = ({ subtitle, skillProgress }) => {
  const ProgressDiv = styled.div`
    width: ${(porps) => porps.widthValue || "20%"} !important;
  `;
  return (
    <div className="col-lg-12 pb-5">
      <div className="progress-info d-flex justify-content-between mb-2">
        <h6>{subtitle}</h6>
        <p>{skillProgress}</p>
      </div>
      <div className="progress rounded-pill">
        <ProgressDiv
          className="progress-bar"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          widthValue={skillProgress}
        ></ProgressDiv>
      </div>
    </div>
  );
};

export default ProgressBar;
