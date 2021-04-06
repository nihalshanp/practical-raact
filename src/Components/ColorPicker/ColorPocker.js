import React, { useState } from "react";
import { ChromePicker as Color } from "react-color";

const ColorPocker = () => {
  const [color, setColor] = useState("#22194D");
  const [showClolorPicker, setShowClolorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowClolorPicker((showClolorPicker) => !showClolorPicker)
        }
      >
        {showClolorPicker ? "Close Picker" : "Pick a color"}
      </button>
      {showClolorPicker && (
        <Color
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h2>Picked Color {color} </h2>
    </div>
  );
};

export default ColorPocker;
