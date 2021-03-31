import React, { useState } from "react";
import Model from "react-modal";

Model.setAppElement("#root");
const Modals = () => {
  const [modelIsOpen, setmodelIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setmodelIsOpen(true)}>Open Model</button>
      <Model
        isOpen={modelIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setmodelIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Model Title</h2>
        <p>Model Body</p>
        <div>
          <button onClick={() => setmodelIsOpen(false)}>Close</button>
        </div>
      </Model>
    </div>
  );
};

export default Modals;
