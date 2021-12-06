import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ErrorPage from "../Components/subComponent/ErrorPage";
import Loader from "../Components/subComponent/Loader";
import { ContextPort } from "../context/context";
const SinglePortfolio = (props) => {
  const { error, setError } = useContext(ContextPort);
  // const singlePortfolio = getSinglePorfolio(id);
  const [getSingle, setGetSingle] = useState();
  const { id } = props.match.params;

  useEffect(() => {
    Axios.get(`http://localhost:3001/bookapi/getsinglebook/${id}`).then(
      (response) => {
        if (response.data) {
          setError(false);
          setGetSingle(...response.data);
        } else {
          setError(true);
          return null;
        }
      }
    );
  }, []);
  if (error) {
    return <ErrorPage />;
  } else if (!getSingle) {
    return (
      <div className="position-absolute" style={{ top: "30%", left: "30%" }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="single">
        <div className="single-content">
          <div className="single-content-img">
            <img src={getSingle.img} alt="" />
          </div>
          <div className="single-content-info">
            <div className="single-content-info-det">
              <label htmlFor="">Name:</label>
              <h6>{getSingle.name}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Title:</label>
              <h6>{getSingle.title}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Author:</label>
              <h6>{getSingle.author}</h6>
            </div>
            <div className="single-content-info-det">
              <label htmlFor="">Year Of Publication:</label>
              <h6>{getSingle.yearpublishment}</h6>
            </div>
          </div>
          <div className="desc-container">
            <label htmlFor="">Description:</label>
            <h6>{getSingle.desc}</h6>
          </div>
        </div>
      </div>
    );
  }
};

export default SinglePortfolio;
