import React, { useRef } from "react";

const App = () => {
  let video = useRef();

  let border = {
    width: "50%",
  };
  let hendlePlay = () => {
    video.current.play();
  };
  let hendlePause = () => {
    video.current.pause();
  };
  let hendleM = () => {
    video.current.muted = !video.current.muted;
  };
  let hendleB = () => {
    video.current.currentTime += 3;
  };
  let hendleF = () => {
    video.current.currentTime -= 3;
  };
  let hendleVu = () => {
    video.current.volume += 3;
  };
  let hendleVd = () => {
    video.current.volume -= 3;
  };

  return (
    <div>
      <video
        style={border}
        ref={video}
        src="https://cdn.pixabay.com/video/2023/02/27/152499-803144007_large.mp4
"
      ></video>
      <br />
      <button onClick={hendlePlay}>Play</button>
      <button onClick={hendlePause}>Pause</button>
      <button onClick={hendleM}>Mute</button>
      <button onClick={hendleB}>++</button>
      <button onClick={hendleF}>--</button>
      <button onClick={hendleVu}>Volume Up</button>
      <button onClick={hendleVd}>Volume Down</button>
    </div>
  );
};

export default App;
