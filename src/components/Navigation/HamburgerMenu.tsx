'use client';

import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onToggle,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      className={`hamburger ${isOpen ? 'hamburger--active' : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label="Toggle navigation menu"
      type="button"
    >
      <span className="hamburger-line" aria-hidden="true"></span>
      <span className="hamburger-line" aria-hidden="true"></span>
      <span className="hamburger-line" aria-hidden="true"></span>
    </button>
  );
};
