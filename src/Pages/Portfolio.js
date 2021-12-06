import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import PortfolioImg from "../Components/PortfolioImg";
import TabItems from "../Components/TabItems";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-name">
        <h6>Portfolio</h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="portfolio-title">
              <div className="portfolio-title-info">Book Shelf</div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 co-12">
            <TabItems />
          </div>
        </div>
      </div>

      <PortfolioImg />
    </div>
  );
};

export default Portfolio;
