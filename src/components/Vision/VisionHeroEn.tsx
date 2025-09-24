"use client";

import React, { useState, useEffect, useRef } from 'react';

interface VisionHeroEnProps {
  className?: string;
}

export const VisionHeroEn: React.FC<VisionHeroEnProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`vision-hero ${className} ${isVisible ? 'vision-hero--visible' : ''}`}
    >
      <div className="vision-hero__overlay"></div>
      <div className="vision-hero__container">
        <div className="vision-hero__content">
          <h1 className="vision-hero__title">Our Vision</h1>
          <p className="vision-hero__description">
            At Opus Consulting, we envision a world where organizations grow sustainably, 
            delivering value to both communities and the environment. Our goal is to be 
            the leading advisor for strategic transition towards a more sustainable and 
            innovative future.
          </p>
        </div>
      </div>
    </section>
  );
};
