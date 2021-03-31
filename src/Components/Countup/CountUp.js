import React from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpContainer = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  });
  return (
    <div>
        <div>
            <h1> {countUp} </h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause / Resume</button>
            <button onClick={() => update(2000)}>Update To 2000</button>
        </div>
      {/* <div>
        <h2>
          <CountUp end={200} />
        </h2>
      </div> 
       <div>
        <h2>
          <CountUp end={200} duration={5} />
        </h2>
      </div>
      <div>
        <h2>
          <CountUp start={500} end={1000} duration={5} />
        </h2>
      </div>
      <div>
        <h2>
          <CountUp end={1000.5} duration={5} prefix="$" decimals={2} />
        </h2>
      </div>
      <div>
        <h2>
          <CountUp end={1000.5} duration={5} suffix="USD" decimals={2} />
        </h2>
      </div> */}
    </div>
  );
};

export default CountUpContainer;
