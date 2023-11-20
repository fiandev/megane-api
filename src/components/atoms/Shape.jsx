import { useEffect, useState } from "react";
import { getBlobRadius } from "../../utils/generator";

const Shape = ({ className, children }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  let border = getBlobRadius();
  let style = {
    borderRadius: border,
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
