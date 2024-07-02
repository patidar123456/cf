import React, { useEffect } from "react";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

const ScrollTop = () => {
  useEffect(() => {
    let scrollUp = document.getElementById("scroll-top");

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a
      href="#"
      className="back-to-top"
      id="scroll-top"
      onClick={() => onClick()}
    >
      <div className="flex justify-center items-center w-full h-full">
        <ChangeHistoryIcon />
      </div>
    </a>
  );
};
export default ScrollTop;
