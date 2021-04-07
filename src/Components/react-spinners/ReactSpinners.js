import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

const ReactSpinnersDemo = () => {
  return (
    <React.Fragment>
      <BounceLoader size={24} loading color="red" />
      <BarLoader loading size={48} color="orange" />
      <BeatLoader loading size={72} color="lightblue" />
    </React.Fragment>
  );
};

export default ReactSpinnersDemo;
