"use client";

import React, { useState, useEffect, useRef } from 'react';

interface VisionHeroProps {
  className?: string;
}

export const VisionHero: React.FC<VisionHeroProps> = ({ className = '' }) => {
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
          <h1 className="vision-hero__title">Το Όραμά μας</h1>
          <p className="vision-hero__description">
            Στην Opus Consulting, οραματιζόμαστε έναν κόσμο όπου οι οργανισμοί αναπτύσσονται βιωσιμά, 
            προσφέροντας αξία τόσο στις κοινότητες όσο και στο περιβάλλον. Στόχος μας είναι να είμαστε 
            ο κύριος σύμβουλος για τη στρατηγική μετάβαση προς ένα πιο βιώσιμο και καινοτόμο μέλλον.
          </p>
        </div>
      </div>
    </section>
  );
};
