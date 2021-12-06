import React, { createContext, useEffect } from "react";
import Axios from "axios";
import { useState } from "react/cjs/react.development";
import { tabName, skillsData } from "../context/Data";

export const ContextPort = createContext();
export const ContextPortProvider = (props) => {
  // const [tabNameInfo, setTabNameInfo] = useState(tabName);
  // const [target, setTarget] = useState("All");
  const [portfolioPicData, setPortfolioPicData] = useState();
  const [isModal, setIsModal] = useState(false);
  const [changedWord, setChangedWord] = useState("");
  const [error, setError] = useState(false);
  const [finalItem, setfinalItem] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/bookapi/getbook").then((response) => {
      setfinalItem(response.data);
      setPortfolioPicData(response.data);
    });
  }, []);

  // const onClickActiveClass = (e) => {
  //   e.stopPropagation();
  //   const Target = e.target.innerText;
  //   setTarget(Target);
  //   if (Target === "All") {
  //     setfinalItem(picData);
  //   } else {
  //     let newSet = portfolioPicData.filter((item) => item.name === Target);
  //     setfinalItem(newSet);
  //     console.log(newSet);
  //   }
  // };

  //Search Stuff
  // const changedSearchedWordInput = (e) => {
  //   setChangedWord(e.target.value);
  // };

  const searchClick = () => {
    let newItem = portfolioPicData.filter((i) => {
      if (i.name.toLowerCase().includes(changedWord.toLowerCase())) {
        setError(false);
        return i.name.toLowerCase().includes(changedWord.toLowerCase());
      } else {
        setError(true);
        return null;
      }
    });

    setfinalItem(newItem);
  };
  //////////////////////////////

  //Modal
  const modalOpen = () => {
    setIsModal(!isModal);
  };
  ////////////////////
  const getSinglePorfolio = (id) => {
    const single = finalItem.find((item) => item.id === parseInt(id));
    return single;
  };
  return (
    <ContextPort.Provider
      value={{
        // tabNameInfo,
        portfolioPicData,
        // onClickActiveClass,
        // target,
        finalItem,
        isModal,
        modalOpen,
        skillsData,
        setIsModal,
        changedWord,
        searchClick,

        getSinglePorfolio,
        error,
        setError,
        setChangedWord,
      }}
    >
      {props.children}
    </ContextPort.Provider>
  );
};
