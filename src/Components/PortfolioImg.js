import React, { useContext } from "react";
import { ContextPort } from "../context/context";
import { NavLink } from "react-router-dom";
import ErrorPage from "./subComponent/ErrorPage";
import { motion } from "framer-motion";
import Loader from "./subComponent/Loader";

const PortfolioImg = () => {
  const { finalItem, error } = useContext(ContextPort);
  if (error) {
    return <ErrorPage />;
  } else if (!finalItem) {
    return <Loader />;
  } else {
    return (
      <div className="container-fluid mt-5 mb-5 ">
        <div className="GAP row">
          {finalItem.map((book, i) => (
            <motion.div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-4 py-1"
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <NavLink to={`/portfolio/${book.id}`}>
                <div className=" portfolio-img-content">
                  <div className="img-content">
                    <img
                      src={book.img}
                      alt=""
                      className="img-responsive center-block"
                    />
                  </div>
                  <div className="img-content-info">
                    <h5>{book.name}</h5>
                    <p className="lead">{book.title}</p>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
};

export default PortfolioImg;
