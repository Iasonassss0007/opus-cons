'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AriaStateManager } from '../Navigation/AriaStateManager';

interface SearchSuggestion {
  title: string;
  description?: string;
  href: string;
  category: string;
}

interface SearchInterfaceProps {
  className?: string;
  placeholder?: string;
  suggestions?: SearchSuggestion[];
}

export const SearchInterface: React.FC<SearchInterfaceProps> = ({
  className = '',
  placeholder = 'Search...',
  suggestions = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const ariaManagerRef = useRef<AriaStateManager | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Default suggestions for demonstration
  const defaultSuggestions: SearchSuggestion[] = [
    {
      title: 'Public Sector Consulting',
      description: 'Strategic advisory for government institutions',
      href: '/services/public-sector',
      category: 'Services'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your technology infrastructure',
      href: '/services/technology/digital-transformation',
      category: 'Services'
    },
    {
      title: 'ESG Strategy Implementation',
      description: 'Environmental, Social, and Governance consulting',
      href: '/services/specialized/esg-strategy',
      category: 'Services'
    },
    {
      title: 'About Our Team',
      description: 'Meet our expert consultants',
      href: '/team',
      category: 'Company'
    },
    {
      title: 'Recent Projects',
      description: 'View our latest case studies',
      href: '/projects',
      category: 'Projects'
    },
    {
      title: 'E-learning Platform',
      description: 'Professional development courses',
      href: '/e-learning',
      category: 'Services'
    }
  ];

  const searchSuggestions = suggestions.length > 0 ? suggestions : defaultSuggestions;

  useEffect(() => {
    ariaManagerRef.current = new AriaStateManager();
    return () => {
      if (ariaManagerRef.current) {
        ariaManagerRef.current.releaseFocus();
      }
    };
  }, []);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (query.length > 0) {
      setIsLoading(true);
      debounceTimerRef.current = setTimeout(() => {
        performSearch(query);
        setIsLoading(false);
      }, 300);
    } else {
      setFilteredSuggestions([]);
      setSelectedIndex(-1);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query]);

  const performSearch = (searchQuery: string) => {
    const filtered = searchSuggestions.filter(suggestion =>
      suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suggestion.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suggestion.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setSelectedIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsExpanded(true);
    if (ariaManagerRef.current) {
      ariaManagerRef.current.announceToScreenReader('Search expanded');
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay blur to allow clicking on suggestions
    setTimeout(() => {
      if (!resultsContainerRef.current?.contains(document.activeElement)) {
        setIsExpanded(false);
        setSelectedIndex(-1);
      }
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
          handleSuggestionClick(filteredSuggestions[selectedIndex]);
        } else if (query) {
          handleSearch(query);
        }
        break;
      case 'Escape':
        setIsExpanded(false);
        setQuery('');
        setSelectedIndex(-1);
        searchInputRef.current?.blur();
        break;
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    window.location.href = suggestion.href;
    setIsExpanded(false);
    setQuery('');
  };

  const handleSearch = (searchQuery: string) => {
    // In a real application, this would navigate to search results
    console.log('Searching for:', searchQuery);
    setIsExpanded(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      handleSearch(query);
    }
  };

  return (
    <div className={`search-interface ${isExpanded ? 'search-interface--expanded' : ''} ${className}`}>
      <form className="search-interface__form" onSubmit={handleSubmit}>
        <label htmlFor="search-input" className="visually-hidden">
          Search site content
        </label>
        <div className="search-interface__input-container">
          <input
            ref={searchInputRef}
            id="search-input"
            type="search"
            value={query}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            aria-describedby="search-instructions"
            aria-expanded={isExpanded}
            aria-autocomplete="list"
            className="search-interface__input"
          />
          <button
            type="submit"
            className="search-interface__submit"
            aria-label="Submit search"
          >
            <svg className="search-interface__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
        
        <div id="search-instructions" className="visually-hidden">
          Use arrow keys to navigate suggestions, enter to search, escape to close
        </div>
      </form>

      {/* Search Results */}
      {isExpanded && (query.length > 0 || filteredSuggestions.length > 0) && (
        <div
          ref={resultsContainerRef}
          className="search-interface__results"
          role="listbox"
          aria-label="Search suggestions"
        >
          {isLoading ? (
            <div className="search-interface__loading">
              <div className="search-interface__spinner"></div>
              <span>Searching...</span>
            </div>
          ) : filteredSuggestions.length > 0 ? (
            <>
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`search-interface__suggestion ${
                    index === selectedIndex ? 'search-interface__suggestion--selected' : ''
                  }`}
                  role="option"
                  aria-selected={index === selectedIndex}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="search-interface__suggestion-content">
                    <div className="search-interface__suggestion-title">
                      {suggestion.title}
                    </div>
                    {suggestion.description && (
                      <div className="search-interface__suggestion-description">
                        {suggestion.description}
                      </div>
                    )}
                  </div>
                  <div className="search-interface__suggestion-category">
                    {suggestion.category}
                  </div>
                </div>
              ))}
            </>
          ) : query.length > 0 ? (
            <div className="search-interface__no-results">
              <div className="search-interface__no-results-icon">🔍</div>
              <div className="search-interface__no-results-text">
                No results found for &quot;{query}&quot;
              </div>
              <button
                className="search-interface__search-all"
                onClick={() => handleSearch(query)}
              >
                Search all content
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
