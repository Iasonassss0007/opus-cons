'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from './HamburgerMenu';
import { NavigationMenu } from './NavigationMenu';
import { MegaMenu } from './MegaMenu';
import { LanguageSwitcher } from '../Language/LanguageSwitcher';
import { getLanguageFromPath } from '@/utils/language';
import { getNavigationItems, type NavigationItem } from '@/utils/navigation';
// Removed complex state managers for website simplicity

// NavigationItem interface is now imported from utils/navigation

interface HeaderProps {
  logo?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  className = ''
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get current language and navigation items
  const currentLanguage = getLanguageFromPath(pathname);
  const navigationItems = getNavigationItems(currentLanguage);

  useEffect(() => {
    // Handle scroll effect for website header styling
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Handle mouse leaving the entire page
    const handleDocumentMouseLeave = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setActiveDropdown(null);
    };

    // Handle window resize to close mobile menu on larger screens
    const handleResize = () => {
      if (window.innerWidth >= 1180 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mouseleave', handleDocumentMouseLeave);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleDocumentMouseLeave);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = (itemLabel: string) => {
    setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    // Check if mouse is moving to mega menu area
    const relatedTarget = event.relatedTarget;
    const megaMenu = document.querySelector('.mega-menu');
    
    // If mouse is moving to mega menu, don't close
    if (megaMenu && relatedTarget && relatedTarget instanceof Node && megaMenu.contains(relatedTarget)) {
      return;
    }
    
    // If mouse is moving to another nav item, don't close immediately
    if (relatedTarget && relatedTarget instanceof Element && relatedTarget.closest('.header__nav-item')) {
      return;
    }
    
    // Close dropdown when mouse leaves header area
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(null);
  };

  const handleNavItemMouseEnter = (itemLabel: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Find the navigation item
    const item = navigationItems.find(navItem => navItem.label === itemLabel);
    
    if (item && item.hasDropdown) {
      // Add 200ms delay for hover to prevent accidental flickering
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(itemLabel);
      }, 200);
    } else {
      // Close any open dropdown when hovering over items without dropdowns
      setActiveDropdown(null);
    }
  };

  const handleMegaMenuMouseEnter = () => {
    // Clear any existing timeout when mouse enters mega menu
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleNavItemMouseLeave = () => {
    // Don't close immediately, let the header mouse leave handle it
    // This prevents flickering when moving between nav items
  };

  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${className}`}
      role="banner"
      onMouseLeave={handleMouseLeave}
    >
      <div className="header__container">
        {/* Mobile Menu Button - Left side */}
        <div className="header__mobile-menu">
          <HamburgerMenu
            isOpen={isMobileMenuOpen}
            onToggle={handleMobileMenuToggle}
            className="header__hamburger"
          />
        </div>

        {/* Logo */}
        <div className="header__logo">
          {logo || (
            <Link href="/" className="header__logo-link">
              <img 
                src="/opus-logo.png" 
                alt="OPUS Consulting" 
                className="header__logo-image"
              />
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop" role="navigation" aria-label="Primary navigation">
          <ul className="header__nav-list" role="list">
            {navigationItems.map((item, index) => (
              <li 
                key={index} 
                role="listitem" 
                className="header__nav-item"
                onMouseEnter={() => handleNavItemMouseEnter(item.label)}
                onMouseLeave={handleNavItemMouseLeave}
              >
                {item.hasDropdown ? (
                  <button
                    className={`header__nav-link header__nav-link--dropdown ${
                      activeDropdown === item.label ? 'header__nav-link--active' : ''
                    }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-controls={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    role="menuitem"
                  >
                    {item.label}
                    <svg className="header__dropdown-arrow" viewBox="0 -960 960 960" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                    </svg>
                  </button>
                ) : (
                  item.external ? (
                    <a
                      href={item.href || '#'}
                      className="header__nav-link"
                      role="menuitem"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="header__nav-link"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="header__language">
          <LanguageSwitcher 
            className="header__language-switcher"
            currentLanguage={currentLanguage}
            onLanguageChange={(language) => {
              console.log('Language changed to:', language);
              // Language switching is now handled in the LanguageSwitcher component
            }}
          />
        </div>
      </div>

      {/* Desktop Dropdown Menus */}
      {navigationItems.map((item, index) => (
        item.hasDropdown && item.dropdownContent && (
          <MegaMenu
            key={index}
            title={item.dropdownContent.title}
            columns={item.dropdownContent.columns}
            isOpen={activeDropdown === item.label}
            onClose={handleDropdownClose}
            onMouseEnter={handleMegaMenuMouseEnter}
            className={`header__mega-menu header__mega-menu--${item.labelEn.toLowerCase().replace(/\s+/g, '-')}`}
          />
        )
      ))}

      {/* Mobile Navigation Menu */}
      <NavigationMenu
        items={navigationItems}
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        className="header__mobile-nav"
      />
    </header>
  );
};
