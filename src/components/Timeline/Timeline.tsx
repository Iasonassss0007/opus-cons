'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  year: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`timeline ${className}`}>
      <div className="timeline__container">
        <div className="timeline__content">
          {items.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`timeline__item ${visibleItems.has(index) ? 'timeline__item--visible' : ''}`}
            >
              <div className="timeline__year">
                {item.year}
              </div>
              <div className="timeline__description">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
