import { useEffect, useState, useRef } from "react";
import { randomInt } from "../../utils/generator";

export default function Particle({ className }) {
  const [tick, setTick] = useState(null);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef();

  let rect = randomInt(5, 100);
  let style = {
    top: coordinates.x,
    left: coordinates.y,
    width: rect + "px",
    height: rect + "px",
  };

  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    setTick(Date.now());
    setCoordinates({ x: event.pageX, y: event.pageY });
  }
  useEffect(() => {
    const interval = setInterval(
      () => setTick(Date.now()),
      randomInt(1000, 2000),
    );

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseMove);
    window.addEventListener("click", handleMouseMove);

    setCoordinates({ x: randomInt(0, 1000), y: randomInt(0, 1000) });
    return () => {
      clearInterval(interval);
      window.removeEventListener("mouseover", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseMove);
    };
  }, [tick]);

  return (
    <div
      style={style}
      className="overflow-hidden absolute delay-500 animate-ping transition z-[1] block absolute z-[-1] bg-sky-400 rounded-full"
    ></div>
  );
}
