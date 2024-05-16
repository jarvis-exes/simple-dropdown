import React from "react";

const Dropdown = (props) => {
  return (
    <div className="main">
      <h1>Should You Use a Dropdown ?</h1>
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
      {props.isShow && (
        <div className="dropdown">
          {props.items.map((item) => (
            <p
              className="item"
              key={props.items.indexOf(item)}
              onClick={() => props.handleOnClick(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
