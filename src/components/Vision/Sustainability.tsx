"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SustainabilityProps {
  className?: string;
}

export const Sustainability: React.FC<SustainabilityProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Description animation
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features container animation
      gsap.fromTo(featuresRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual feature cards animation
      featureRefs.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(feature,
            {
              opacity: 0,
              y: 60,
              scale: 0.8,
              rotationY: 15
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: 0.6 + (index * 0.2),
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: feature,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Hover animation
          feature.addEventListener('mouseenter', () => {
            gsap.to(feature, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          feature.addEventListener('mouseleave', () => {
            gsap.to(feature, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`sustainability ${className}`}
    >
      <div className="sustainability__overlay"></div>
      <div className="sustainability__container">
        <div className="sustainability__content">
          <h2 ref={titleRef} className="sustainability__title">Βιωσιμότητα</h2>
          <p ref={descriptionRef} className="sustainability__description">
            Στην Opus Consulting, αναγνωρίζουμε την κρίσιμη σημασία της βιωσιμότητας για το μέλλον 
            των επιχειρήσεων και της κοινωνίας. Προσφέρουμε στρατηγικές λύσεις που βοηθούν τους 
            πελάτες μας να αναπτυχθούν με τρόπο που σέβεται το περιβάλλον, προωθεί την κοινωνική 
            δικαιοσύνη και διασφαλίζει την οικονομική βιωσιμότητα. Η δέσμευσή μας για την ESG 
            (Environmental, Social, Governance) είναι στο επίκεντρο κάθε έργου που αναλαμβάνουμε.
          </p>
          <div ref={featuresRef} className="sustainability__features">
            <div 
              ref={el => { featureRefs.current[0] = el; }}
              className="sustainability__feature"
            >
              <h3 className="sustainability__feature-title">Περιβαλλοντική Ευθύνη</h3>
              <p className="sustainability__feature-description">
                Προωθούμε πρακτικές που μειώνουν την περιβαλλοντική επίπτωση και προστατεύουν τους φυσικούς πόρους.
              </p>
            </div>
            <div 
              ref={el => { featureRefs.current[1] = el; }}
              className="sustainability__feature"
            >
              <h3 className="sustainability__feature-title">Κοινωνική Ευθύνη</h3>
              <p className="sustainability__feature-description">
                Υποστηρίζουμε κοινότητες και προωθούμε την κοινωνική δικαιοσύνη μέσω των έργων μας.
              </p>
            </div>
            <div 
              ref={el => { featureRefs.current[2] = el; }}
              className="sustainability__feature"
            >
              <h3 className="sustainability__feature-title">Καλή Διακυβέρνηση</h3>
              <p className="sustainability__feature-description">
                Εφαρμόζουμε αρχές διαφάνειας, ηθικής και αποτελεσματικής διαχείρισης σε όλες τις δραστηριότητές μας.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
