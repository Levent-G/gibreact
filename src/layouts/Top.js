import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {" "}
      <div className="App">
        {/* Diğer içerikler */}
        {showButton && (
          <button className="fixed bottom-4 right-4 bg-[#0c8390] text-white border-none w-10 h-10 rounded-[50px] cursor-pointer" onClick={scrollToTop}>
            <KeyboardArrowUpIcon/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Top;
