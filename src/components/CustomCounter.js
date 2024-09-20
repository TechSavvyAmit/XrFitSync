import React, { useState, useEffect } from "react";

const CustomCounter = ({ end, start = 0, delay = 0, prefix = "" }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return end;
        }
      });
    }, delay);
    
    return () => clearInterval(timer);
  }, [end, delay]);

  return <span>{prefix}{count}</span>;
};

export default CustomCounter;
