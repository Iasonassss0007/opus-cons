'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface MegaMenuItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  title: string;
  columns: MegaMenuColumn[];
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  className?: string;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  title,
  columns,
  isOpen,
  onClose,
  onMouseEnter,
  className = ''
}) => {
  const [activeColumn, setActiveColumn] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize column change handler to prevent unnecessary re-renders
  const handleColumnChange = useCallback((index: number) => {
    setActiveColumn(index);
  }, []);

  // Optimized close handler with debouncing
  const handleClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    onClose();
  }, [onClose]);

  // Immediate close handler when mouse leaves mega menu
  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    // Always close when mouse leaves mega menu
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    onClose();
  }, [onClose]);

  // Cancel delayed close and notify parent
  const cancelDelayedClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  }, [onMouseEnter]);

  // Enhanced event handlers with keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'Tab') {
        // Allow tab navigation within the mega menu
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      // If mouse leaves the entire page, close the menu
      if (!event.relatedTarget) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isOpen, handleClose]);

  // Reset active column and focus management when menu opens
  useEffect(() => {
    if (isOpen) {
      setActiveColumn(0);
      
      // Remove focus from any mega menu items to prevent unwanted hover effects
      const megaMenuItems = menuRef.current?.querySelectorAll('.mega-menu__item');
      if (megaMenuItems) {
        megaMenuItems.forEach(item => {
          if (item === document.activeElement) {
            (item as HTMLElement).blur();
          }
        });
      }
    }
  }, [isOpen]);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => {
    // Hide navigation tabs for both Services and Our Company menus
    // Both will show content directly without tab navigation
    return null;
  }, [columns, activeColumn, handleColumnChange, cancelDelayedClose, className]);

  // Memoize column content to prevent unnecessary re-renders
  const columnContent = useMemo(() => {
    // Check if this is the Services mega menu (two-column layout)
    const isServicesMenu = className.includes('services');
    
    if (isServicesMenu) {
      // Services menu: Show all columns in a two-column grid
      return (
        <div className="mega-menu__columns">
          {columns.map((column, index) => (
            <div
              key={index}
              id={`mega-menu-column-${index}`}
              className="mega-menu__column mega-menu__column--active"
              role="tabpanel"
              aria-labelledby={`mega-menu-nav-${index}`}
            >
              <h3 className="mega-menu__column-title">{column.title}</h3>
              <ul className="mega-menu__items" role="list">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} role="listitem">
                    <a
                      href={item.href}
                      className="mega-menu__item"
                      role="menuitem"
                      tabIndex={0}
                      onMouseEnter={cancelDelayedClose}
                    >
                      <div className="mega-menu__item-content">
                        <span className="mega-menu__item-title">{item.title}</span>
                        {item.description && (
                          <span className="mega-menu__item-description">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      // Our Company menu: Show all columns in a single column layout (no tabs)
      return (
        <div className="mega-menu__columns">
          {columns.map((column, index) => (
            <div
              key={index}
              id={`mega-menu-column-${index}`}
              className="mega-menu__column mega-menu__column--active"
              role="tabpanel"
              aria-labelledby={`mega-menu-nav-${index}`}
            >
              <h3 className="mega-menu__column-title">{column.title}</h3>
              <ul className="mega-menu__items" role="list">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} role="listitem">
                    <a
                      href={item.href}
                      className="mega-menu__item"
                      role="menuitem"
                      tabIndex={0}
                      onMouseEnter={cancelDelayedClose}
                    >
                      <div className="mega-menu__item-content">
                        <span className="mega-menu__item-title">{item.title}</span>
                        {item.description && (
                          <span className="mega-menu__item-description">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  }, [columns, activeColumn, cancelDelayedClose, className]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      id="mega-menu"
      className={`mega-menu mega-menu--active ${className}`}
      role="menu"
      aria-expanded={isOpen}
      onMouseEnter={cancelDelayedClose}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mega-menu__overlay" onClick={handleClose}></div>
      <div className="mega-menu__content">
        <div className="mega-menu__grid">
          {/* Column Navigation - Only show for Our Company menu */}
          {navigationItems && (
            <nav className="mega-menu__nav" role="navigation" aria-label="Menu categories">
              {navigationItems}
            </nav>
          )}

          {/* Column Content */}
          {columnContent}
        </div>
      </div>
    </div>
  );
};
