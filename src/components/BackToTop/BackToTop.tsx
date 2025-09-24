'use client';

import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button only when user is near the bottom of the page
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show when user is within 200px of the bottom
      if (scrollTop + windowHeight >= documentHeight - 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="currentColor"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
      </svg>
      <span className="back-to-top__text">Back to top</span>
    </button>
  );
};
