import React from 'react';
import "../styles/scrollbutton.css";
import { AiOutlineToTop } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div id="scroll-buttons">
      <button onClick={scrollToTop}><AiOutlineToTop /></button>
      <button onClick={scrollToBottom}><FaArrowDownLong /></button>
    </div>
  );
};

export default ScrollButtons;