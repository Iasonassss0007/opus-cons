'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getLanguageFromPath, switchLanguage, type Language } from '@/utils/language';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
  flagSvg: string;
}

interface LanguageSwitcherProps {
  className?: string;
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  currentLanguage,
  onLanguageChange
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    (currentLanguage as Language) || getLanguageFromPath(pathname)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    {
      code: 'en',
      name: 'ΕΝ',
      flag: '🇬🇧',
      flagSvg: '/gb.svg'
    },
    {
      code: 'el',
      name: 'ΕΛ',
      flag: '🇬🇷',
      flagSvg: '/gr.svg'
    }
  ];

  const currentLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  // Update selected language when pathname changes
  useEffect(() => {
    const newLanguage = getLanguageFromPath(pathname);
    setSelectedLanguage(newLanguage);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLanguageSelect = (languageCode: string) => {
    const newLanguage = languageCode as Language;
    setSelectedLanguage(newLanguage);
    setIsOpen(false);
    
    // Navigate to the new language version of the current page
    const newPath = switchLanguage(pathname, newLanguage);
    router.push(newPath);
    
    if (onLanguageChange) {
      onLanguageChange(languageCode);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`language-switcher ${className}`} ref={dropdownRef}>
      <button
        className={`language-switcher__button ${isOpen ? 'language-switcher__button--open' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <img 
          src={currentLang.flagSvg} 
          alt={`${currentLang.name} flag`}
          className="language-switcher__flag" 
          title={currentLang.name}
        />
        <span className="language-switcher__text">{currentLang.name}</span>
        <svg 
          className={`language-switcher__arrow ${isOpen ? 'language-switcher__arrow--open' : ''}`}
          viewBox="0 -960 960 960" 
          width="16" 
          height="16" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown" role="listbox">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-switcher__option ${
                language.code === selectedLanguage ? 'language-switcher__option--selected' : ''
              }`}
              onClick={() => handleLanguageSelect(language.code)}
              role="option"
              aria-selected={language.code === selectedLanguage}
            >
              <img 
                src={language.flagSvg} 
                alt={`${language.name} flag`}
                className="language-switcher__option-flag" 
                title={language.name}
              />
              <span className="language-switcher__option-text">{language.name}</span>
              {language.code === selectedLanguage && (
                <svg 
                  className="language-switcher__check" 
                  viewBox="0 0 24 24" 
                  width="16" 
                  height="16" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
