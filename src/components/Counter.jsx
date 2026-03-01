import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.substring(0, value.length - 1));
      const duration = 2; // seconds
      let timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}+</span>;
};