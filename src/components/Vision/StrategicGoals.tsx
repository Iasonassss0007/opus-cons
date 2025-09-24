"use client";

import React, { useState, useEffect, useRef } from 'react';

interface StrategicGoalsProps {
  className?: string;
}

export const StrategicGoals: React.FC<StrategicGoalsProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goals = [
    {
      title: "Αριστεία στην Εξυπηρέτηση",
      description: "Προσφέρουμε υψηλής ποιότητας συμβουλευτικές υπηρεσίες που ξεπερνούν τις προσδοκίες των πελατών μας."
    },
    {
      title: "Καινοτομία και Τεχνολογία",
      description: "Ενσωματώνουμε τις πιο σύγχρονες τεχνολογίες και καινοτόμες λύσεις σε κάθε έργο."
    },
    {
      title: "Βιωσιμότητα και Κοινωνική Ευθύνη",
      description: "Προωθούμε βιώσιμες πρακτικές και συμβάλλουμε θετικά στην κοινωνία και το περιβάλλον."
    },
    {
      title: "Συνεχής Ανάπτυξη",
      description: "Επενδύουμε στην εκπαίδευση και την ανάπτυξη των ομάδων μας για να παραμένουμε στην αιχμή."
    },
    {
      title: "Εμπιστοσύνη και Αξιοπιστία",
      description: "Χτίζουμε μακροπρόθεσμες σχέσεις εμπιστοσύνης με τους πελάτες και τους συνεργάτες μας."
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
          <h2 className="strategic-goals__title">Στρατηγικοί Στόχοι</h2>
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
