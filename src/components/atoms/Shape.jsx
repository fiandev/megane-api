import { useEffect, useState } from "react";
import { getBlobRadius, randomInt } from "../../utils/generator";

const Shape = ({ className, children }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  let style = {
    borderRadius: getBlobRadius(),
    transform: {
      scale: `${randomInt(0, 1)}, ${randomInt(1, 9)}`,
    },
  };

  return (
    <div
      style={style}
      className={`transition-all duration-1000 delay-200 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Shape;
