/**
 * Navigation Error Boundary
 * Enterprise-grade error handling and graceful degradation
 */

export class NavigationErrorBoundary {
  private fallbackStyles: HTMLStyleElement | null = null;
  private isFallbackActive = false;

  constructor() {
    this.setupErrorHandling();
    this.detectCapabilities();
  }

  private setupErrorHandling() {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
  }

  private handleError(event: ErrorEvent) {
    if (this.isNavigationError(event)) {
      console.error('Navigation error:', event.error);
      this.fallbackToBasicNavigation();
      this.reportError(event.error);
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent) {
    if (this.isNavigationPromiseRejection(event)) {
      console.error('Navigation promise rejection:', event.reason);
      this.fallbackToBasicNavigation();
      this.reportError(event.reason);
    }
  }

  private isNavigationError(event: ErrorEvent): boolean {
    const errorMessage = event.error?.message || event.message || '';
    const errorStack = event.error?.stack || '';
    
    return (
      errorMessage.includes('navigation') ||
      errorMessage.includes('menu') ||
      errorMessage.includes('hamburger') ||
      errorStack.includes('Navigation') ||
      event.filename?.includes('navigation') ||
      event.filename?.includes('menu')
    );
  }

  private isNavigationPromiseRejection(event: PromiseRejectionEvent): boolean {
    const reason = event.reason;
    if (typeof reason === 'string') {
      return reason.includes('navigation') || reason.includes('menu');
    }
    if (reason?.message) {
      return this.isNavigationError({ error: reason } as ErrorEvent);
    }
    return false;
  }

  private fallbackToBasicNavigation() {
    if (this.isFallbackActive) return;
    
    this.isFallbackActive = true;
    
    // Remove all JavaScript enhancements
    document.querySelectorAll('.nav-container, .header').forEach(nav => {
      nav.classList.add('fallback-mode');
    });

    // Enable basic CSS-only functionality
    this.injectFallbackStyles();
    
    // Announce to screen readers
    this.announceFallbackMode();
  }

  private injectFallbackStyles() {
    if (this.fallbackStyles) return;

    this.fallbackStyles = document.createElement('style');
    this.fallbackStyles.textContent = `
      .fallback-mode .hamburger:focus + .nav-menu,
      .fallback-mode .hamburger:hover + .nav-menu {
        display: block !important;
      }
      
      .fallback-mode .nav-menu {
        position: static !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        display: none;
      }
      
      .fallback-mode .mega-menu {
        position: static !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        display: none;
      }
      
      .fallback-mode .nav-link--dropdown:hover + .mega-menu,
      .fallback-mode .nav-link--dropdown:focus + .mega-menu {
        display: block !important;
      }
      
      .fallback-mode * {
        transition: none !important;
        animation: none !important;
      }
    `;
    
    document.head.appendChild(this.fallbackStyles);
  }

  private announceFallbackMode() {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Navigation has switched to basic mode for better compatibility.';
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 3000);
  }

  private detectCapabilities() {
    const capabilities = {
      cssAnimations: this.detectCSSAnimationSupport(),
      touch: this.detectTouchSupport(),
      intersectionObserver: this.detectIntersectionObserverSupport(),
      customProperties: this.detectCustomPropertiesSupport()
    };

    this.applyCapabilityFallbacks(capabilities);
  }

  private detectCSSAnimationSupport(): boolean {
    const element = document.createElement('div');
    return 'animation' in element.style || 'webkitAnimation' in element.style;
  }

  private detectTouchSupport(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  private detectIntersectionObserverSupport(): boolean {
    return 'IntersectionObserver' in window;
  }

  private detectCustomPropertiesSupport(): boolean {
    return CSS.supports('color', 'var(--test)');
  }

  private applyCapabilityFallbacks(capabilities: Record<string, boolean>) {
    if (!capabilities.cssAnimations) {
      document.documentElement.classList.add('no-css-animations');
    }
    
    if (!capabilities.touch) {
      document.documentElement.classList.add('no-touch');
    }
    
    if (!capabilities.intersectionObserver) {
      document.documentElement.classList.add('no-intersection-observer');
    }
    
    if (!capabilities.customProperties) {
      document.documentElement.classList.add('no-custom-properties');
    }
  }

  private reportError(error: Error) {
    // In a real application, this would send error data to monitoring services
    console.error('Navigation Error Report:', {
      message: error?.message || 'Unknown error',
      stack: error?.stack || 'No stack trace',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
    
    // Could integrate with:
    // - Sentry
    // - LogRocket
    // - Custom error reporting endpoint
  }

  public cleanup() {
    if (typeof window === 'undefined') return;
    
    window.removeEventListener('error', this.handleError.bind(this));
    window.removeEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    
    if (this.fallbackStyles) {
      document.head.removeChild(this.fallbackStyles);
      this.fallbackStyles = null;
    }
  }
}
