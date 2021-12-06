import React from "react";

const Loader = () => {
  return (
    <div className="loading">
      <div class="container">
        <div class="loader">
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          {/* <div class="loader--text w-100 text-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
