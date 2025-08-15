// src/components/ScrollToTopButton.jsx

import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // الرجوع للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        id="scrollToTopBtn"
        className="position-fixed bottom-0 end-0 m-4 btn btn-primary d-flex align-items-center justify-content-center"
        style={{ width: "65px", height: "65px", borderRadius: "50%", zIndex: 1000 }}
      >
        <i className="bi bi-airplane-fill fs-2 "></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
