import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

const Icons = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", size: "10rem" }}>
        <FaReact />
        <MdAlarm />
      </IconContext.Provider>
    </div>
  );
};

export default Icons;
