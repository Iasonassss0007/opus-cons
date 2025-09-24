"use client";

import React, { useState, useEffect, useRef } from 'react';

interface MissionStatementProps {
  className?: string;
}

export const MissionStatement: React.FC<MissionStatementProps> = ({ className = '' }) => {
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
          <h2 className="mission-statement__title">Δήλωση Αποστολής</h2>
          <p className="mission-statement__description">
            Η αποστολή μας είναι να υποστηρίζουμε τους πελάτες μας στην επίτευξη των στρατηγικών τους 
            στόχων μέσω εξειδικευμένων συμβουλευτικών υπηρεσιών, καινοτόμων λύσεων και βιώσιμων 
            πρακτικών. Προσφέρουμε εμπειρία, αξιοπιστία και αποτελεσματικότητα σε κάθε έργο που 
            αναλαμβάνουμε, δημιουργώντας αξία που διαρκεί.
          </p>
        </div>
      </div>
    </section>
  );
};
