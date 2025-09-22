'use client';

import React, { useState, useRef, useEffect } from 'react';

interface NavigationItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownContent?: {
    title: string;
    columns: Array<{
      title: string;
      items: Array<{
        title: string;
        description?: string;
        href: string;
        icon?: React.ReactNode;
      }>;
    }>;
  };
}

interface NavigationMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  isOpen,
  onClose,
  className = ''
}) => {
  const [currentPanel, setCurrentPanel] = useState<string>('main');
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (currentPanel !== 'main') {
          goBack();
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, currentPanel]);

  // Reset to main panel when menu closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentPanel('main');
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleDrilldownClick = (item: NavigationItem) => {
    if (isAnimating) return;
    
    const panelId = item.label.toLowerCase().replace(/\s+/g, '-');
    setIsAnimating(true);
    setCurrentPanel(panelId);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const goBack = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentPanel('main');
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 120);
  };

  const handleLinkClick = (href: string) => {
    // Close the entire menu when navigating to a page
    onClose();
    window.location.href = href;
  };

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      className={`nav-menu ${isOpen ? 'nav-menu--active' : ''} ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nav-heading"
      aria-hidden={!isOpen}
    >
      <div className="nav-menu__overlay"></div>
      
      <div className="nav-menu__content">
        <h2 id="nav-heading" className="visually-hidden">
          Navigation Menu
        </h2>
        
        {/* Main Menu Panel */}
        <div 
          className={`nav-menu__panel nav-menu__panel--main ${
            currentPanel === 'main' ? 'nav-menu__panel--active' : ''
          } ${isAnimating ? 'nav-menu__panel--animating' : ''}`}
          data-panel="main"
        >
          <nav className="nav-menu__nav" role="navigation" aria-label="Primary navigation">
            <ul className="nav-menu__list" role="list">
              {items.map((item, index) => (
                <li key={index} role="listitem" className="nav-menu__item">
                  {item.hasDropdown ? (
                    <button
                      className="nav-menu__link nav-menu__link--dropdown"
                      onClick={() => handleDrilldownClick(item)}
                      data-target={`panel-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {item.label}
                      <svg className="nav-menu__dropdown-arrow" viewBox="0 -960 960 960" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.href || '#'}
                      className="nav-menu__link"
                      role="menuitem"
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.href) handleLinkClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Submenu Panels */}
        {items.map((item, index) => {
          if (!item.hasDropdown || !item.dropdownContent) return null;
          
          const panelId = item.label.toLowerCase().replace(/\s+/g, '-');
          const isActive = currentPanel === panelId;
          
          return (
            <div
              key={index}
              className={`nav-menu__panel nav-menu__panel--submenu ${
                isActive ? 'nav-menu__panel--active' : ''
              } ${isAnimating ? 'nav-menu__panel--animating' : ''}`}
              data-panel={`panel-${panelId}`}
            >
              {/* Back Button */}
              <div className="nav-menu__header">
                <button
                  className="nav-menu__back-button"
                  onClick={goBack}
                  aria-label="Go back to main menu"
                >
                  <svg className="nav-menu__back-arrow" viewBox="0 -960 960 960" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                  </svg>
                  <span className="nav-menu__submenu-title">{item.label}</span>
                </button>
              </div>

              {/* Submenu Content */}
              <nav className="nav-menu__submenu-nav" role="navigation" aria-label={`${item.label} submenu`}>
                <ul className="nav-menu__submenu-list" role="list">
                  {item.dropdownContent.columns.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      {column.items.map((subItem, subIndex) => (
                        <li key={subIndex} role="listitem" className="nav-menu__submenu-item">
                          <a
                            href={subItem.href}
                            className="nav-menu__submenu-link"
                            role="menuitem"
                            tabIndex={currentPanel === panelId ? 0 : -1}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(subItem.href);
                            }}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </nav>
            </div>
          );
        })}
      </div>
    </div>
  );
};
