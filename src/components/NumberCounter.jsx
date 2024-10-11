import React, { useEffect, useState } from "react";

const NumberCounter = ({ end, start = 0, duration = 3000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, start, duration]);

  return <span>{count}</span>;
};

export default NumberCounter;