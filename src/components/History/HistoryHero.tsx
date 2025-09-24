'use client';

import React from 'react';

interface HistoryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

export const HistoryHero: React.FC<HistoryHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  className = '' 
}) => {
  return (
    <section className={`history-hero ${className}`}>
      <div className="history-hero__container">
        <div className="history-hero__content">
          <h1 className="history-hero__title">{title}</h1>
          <h2 className="history-hero__subtitle">{subtitle}</h2>
          <p className="history-hero__description">{description}</p>
        </div>
      </div>
    </section>
  );
};
