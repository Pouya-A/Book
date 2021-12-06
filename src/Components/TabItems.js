import React, { useState, useContext } from "react";
import { ContextPort } from "../context/context";

const TabItems = () => {
  const {
    tabNameInfo,
    target,
    changedWord,
    changedSearchedWordInput,
    searchClick,
    setChangedWord,
  } = useContext(ContextPort);

  return (
    <div className="items">
      {/* #############title category bar########### */}
      {/* <ul className="items-content">
        {tabNameInfo.map((tab) => (
          <li
            className={target === tab.name ? "item active" : "item"}
            onClick={onClickActiveClass}
          >
            {tab.name}
          </li>
        ))}
      </ul> */}
      {/* ################################# */}

      <div className="search-bar">
        <input
          type="text"
          value={changedWord}
          onChange={(e) => {
            setChangedWord(e.target.value);
          }}
          placeholder="Search"
          className="py-1"
        />
        <button
          onClick={searchClick}
          className="btn py-2 px-4 btn-dark fw-bold rounded-0 bookbtn"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default TabItems;
