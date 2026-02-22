import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Counter({ end = 100, duration = 1, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

    useEffect(() => {
    if (isInView) {
        const timeout = setTimeout(() => {
        let start = 0;
        const totalSteps = Math.ceil(duration * 60); // assuming 60fps
        const increment = end / totalSteps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            start += increment;
            setCount(Math.min(Math.round(start), end));
            if (step >= totalSteps) clearInterval(timer);
        }, (duration * 1000) / totalSteps);

        return () => clearInterval(timer);
        }, 300); // 500ms delay

        return () => clearTimeout(timeout); // clean up timeout if unmounted
    }
    }, [isInView, end, duration]);


  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      transition={{ duration: 0.5, delay:0.3, ease: "easeOut" }}
      className={className}
    >
      {count}
    </motion.h2>
  );
}
