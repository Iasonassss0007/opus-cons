"use client";

import React, { useState, useEffect, useRef } from 'react';

interface StrategicGoalsEnProps {
  className?: string;
}

export const StrategicGoalsEn: React.FC<StrategicGoalsEnProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goals = [
    {
      title: "Service Excellence",
      description: "We provide high-quality consulting services that exceed our clients' expectations."
    },
    {
      title: "Innovation and Technology",
      description: "We integrate the latest technologies and innovative solutions into every project."
    },
    {
      title: "Sustainability and Social Responsibility",
      description: "We promote sustainable practices and contribute positively to society and the environment."
    },
    {
      title: "Continuous Development",
      description: "We invest in training and development of our teams to remain at the forefront."
    },
    {
      title: "Trust and Reliability",
      description: "We build long-term relationships of trust with our clients and partners."
    }
  ];

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
      className={`strategic-goals ${className} ${isVisible ? 'strategic-goals--visible' : ''}`}
    >
      <div className="strategic-goals__container">
        <div className="strategic-goals__image">
          <div className="strategic-goals__image-overlay"></div>
        </div>
        <div className="strategic-goals__content">
          <h2 className="strategic-goals__title">Strategic Goals</h2>
          <div className="strategic-goals__list">
            {goals.map((goal, index) => (
              <div 
                key={index}
                className={`strategic-goals__item ${isVisible ? 'strategic-goals__item--visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="strategic-goals__item-bullet"></div>
                <div className="strategic-goals__item-content">
                  <h3 className="strategic-goals__item-title">{goal.title}</h3>
                  <p className="strategic-goals__item-description">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
