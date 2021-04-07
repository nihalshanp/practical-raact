import React from "react";
import ReactPlayer from "react-player";
import video from'./VID-20210404-WA0032.mp4'

const ReactPlayerDemo = () => {
  return (
    <div>
      <ReactPlayer
        width="300px"
        height="200px"
        controls
        url={video}
        onReady={() => alert("on ready")}
        onStart={() => alert("on start")}
        onPause={() => alert("on pause")}
        onEnded={() => alert("on ended")}
        onError={() => alert("on error")}
      />
    </div>
  );
};

export default ReactPlayerDemo;
