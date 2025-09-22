'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HamburgerMenu } from './HamburgerMenu';
import { NavigationMenu } from './NavigationMenu';
import { MegaMenu } from './MegaMenu';
import { LanguageSwitcher } from '../Language/LanguageSwitcher';
// Removed complex state managers for website simplicity

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

interface HeaderProps {
  logo?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  className = ''
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation items based on requirements
  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Our Company',
      hasDropdown: true,
      dropdownContent: {
        title: 'Our Company',
        columns: [
          {
            title: 'About Us',
            items: [
              {
                title: 'Company Overview',
                description: 'Learn about our mission and values',
                href: '/ourcompany/overview'
              },
              {
                title: 'Our History',
                description: 'Discover our journey and milestones',
                href: '/about/history'
              },
              {
                title: 'Leadership Team',
                description: 'Meet our executive leadership',
                href: '/about/leadership'
              }
            ]
          },
          {
            title: 'Our Team',
            items: [
              {
                title: 'Expert Consultants',
                description: 'Meet our industry experts',
                href: '/team/consultants'
              },
              {
                title: 'Advisory Board',
                description: 'Our strategic advisors',
                href: '/team/advisory'
              },
              {
                title: 'Global Network',
                description: 'Worldwide expertise and presence',
                href: '/team/network'
              }
            ]
          },
          {
            title: 'Our Vision',
            items: [
              {
                title: 'Mission Statement',
                description: 'Our commitment to excellence',
                href: '/vision/mission'
              },
              {
                title: 'Strategic Goals',
                description: 'Our roadmap for the future',
                href: '/vision/goals'
              },
              {
                title: 'Sustainability',
                description: 'Environmental and social responsibility',
                href: '/vision/sustainability'
              }
            ]
          }
        ]
      }
    },
    {
      label: 'Services',
      hasDropdown: true,
      dropdownContent: {
        title: 'Our Services',
        columns: [
          {
            title: 'Services',
            items: [
              {
                title: 'Consulting services in the public sector',
                description: 'Strategic advisory and consulting for public institutions',
                href: '/services/public-sector-consulting'
              },
              {
                title: 'Technology and information technology',
                description: 'IT strategy, digital transformation, and technology solutions',
                href: '/services/technology'
              },
              {
                title: 'Investment project management',
                description: 'End-to-end project oversight and delivery',
                href: '/services/investment-management'
              },
              {
                title: 'Strategic and operational planning',
                description: 'Long-term strategic roadmap and operational optimization',
                href: '/services/strategic-planning'
              }
            ]
          },
          {
            title: 'Services',
            items: [
              {
                title: 'Energy studies',
                description: 'Comprehensive energy sector analysis and studies',
                href: '/services/energy-studies'
              },
              {
                title: 'Quality Management Systems',
                description: 'ISO and quality system implementation and certification',
                href: '/services/quality-management'
              },
              {
                title: 'Feasibility Studies',
                description: 'Thorough project viability and feasibility assessment',
                href: '/services/feasibility-studies'
              },
              {
                title: 'ESG Strategy & Implementation',
                description: 'Environmental, Social, and Governance strategy and implementation',
                href: '/services/esg-strategy'
              }
            ]
          }
        ]
      }
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'E-learning',
      href: '/e-learning'
    },
    {
      label: 'News',
      href: '/news'
    }
  ];

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
                  <a
                    href={item.href || '#'}
                    className="header__nav-link"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="header__language">
          <LanguageSwitcher 
            className="header__language-switcher"
            currentLanguage="en"
            onLanguageChange={(language) => {
              console.log('Language changed to:', language);
              // Here you would implement actual language switching logic
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
            className={`header__mega-menu header__mega-menu--${item.label.toLowerCase().replace(/\s+/g, '-')}`}
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
