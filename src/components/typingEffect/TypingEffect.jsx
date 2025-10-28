import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./TypingEffect.css"; // we’ll style it here

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Modern", "Secure", "Scalable"],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return <span className="typing-text" ref={el}></span>;
};

export default TypingEffect;
