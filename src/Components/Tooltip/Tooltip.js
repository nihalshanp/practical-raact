import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "red" }}>Colored Component</span>;
};

const CostomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>First Line</h2>
      <h2>Second Line</h2>
      <button>Costom Child</button>
    </div>
  );
});

const Tooltip = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          content="Basic Tooltip"
          arrow={false}
          placement="right"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }} >
        <Tippy content={<ColoredTooltip />} placement="bottom-start">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />}>
          <CostomChild />
        </Tippy>
      </div>
    </div>
  );
};

export default Tooltip;
