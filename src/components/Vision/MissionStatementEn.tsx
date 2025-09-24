"use client";

import React, { useState, useEffect, useRef } from 'react';

interface MissionStatementEnProps {
  className?: string;
}

export const MissionStatementEn: React.FC<MissionStatementEnProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`mission-statement ${className} ${isVisible ? 'mission-statement--visible' : ''}`}
    >
      <div 
        className="mission-statement__background"
        style={{ transform: `translateY(${scrollY}px)` }}
      ></div>
      <div className="mission-statement__overlay"></div>
      <div className="mission-statement__container">
        <div className="mission-statement__content">
          <h2 className="mission-statement__title">Mission Statement</h2>
          <p className="mission-statement__description">
            Our mission is to support our clients in achieving their strategic goals through 
            specialized consulting services, innovative solutions, and sustainable practices. 
            We deliver expertise, reliability, and effectiveness in every project we undertake, 
            creating lasting value.
          </p>
        </div>
      </div>
    </section>
  );
};
