/**
 * Navigation State Manager - McKinsey-style state management
 * Implements finite state machine pattern with CSS custom properties
 */

export interface NavigationStates {
  CLOSED: 'closed';
  OPENING: 'opening';
  OPEN: 'open';
  CLOSING: 'closing';
}

export interface NavigationConfig {
  transitionDuration: number;
  staggerDelay: number;
  easing: {
    menu: string;
    hamburger: string;
    search: string;
    dropdown: string;
  };
}

export class NavigationStateManager {
  private states: NavigationStates = {
    CLOSED: 'closed',
    OPENING: 'opening',
    OPEN: 'open',
    CLOSING: 'closing'
  };

  private currentState: string = this.states.CLOSED;
  private transitionLock: boolean = false;
  private config: NavigationConfig;

  constructor(config?: Partial<NavigationConfig>) {
    this.config = {
      transitionDuration: 300,
      staggerDelay: 100,
      easing: {
        menu: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        hamburger: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        search: 'cubic-bezier(0.0, 0.0, 0.58, 1.0)',
        dropdown: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
      },
      ...config
    };

    this.initializeCSSProperties();
  }

  private initializeCSSProperties(): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--nav-state', this.currentState);
      root.style.setProperty('--hamburger-rotation', '0deg');
      root.style.setProperty('--menu-opacity', '0');
      root.style.setProperty('--overlay-display', 'none');
      root.style.setProperty('--scroll-lock', 'auto');
      root.style.setProperty('--transition-duration', `${this.config.transitionDuration}ms`);
      root.style.setProperty('--stagger-delay', `${this.config.staggerDelay}ms`);
      root.style.setProperty('--easing-menu', this.config.easing.menu);
      root.style.setProperty('--easing-hamburger', this.config.easing.hamburger);
      root.style.setProperty('--easing-search', this.config.easing.search);
      root.style.setProperty('--easing-dropdown', this.config.easing.dropdown);
    }
  }

  public transitionTo(newState: string): Promise<void> {
    return new Promise((resolve) => {
      if (this.transitionLock || this.currentState === newState) {
        resolve();
        return;
      }

      this.transitionLock = true;
      const previousState = this.currentState;
      this.currentState = this.states.OPENING;

      // Update CSS custom properties to trigger animations
      this.updateCSSProperties(newState);

      // Release lock after transition completes
      setTimeout(() => {
        this.currentState = newState;
        this.transitionLock = false;
        resolve();
      }, this.config.transitionDuration);
    });
  }

  private updateCSSProperties(state: string): void {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    switch (state) {
      case this.states.OPEN:
        root.style.setProperty('--nav-state', 'open');
        root.style.setProperty('--hamburger-rotation', '45deg');
        root.style.setProperty('--menu-opacity', '1');
        root.style.setProperty('--overlay-display', 'block');
        root.style.setProperty('--scroll-lock', 'hidden');
        break;
      
      case this.states.CLOSED:
        root.style.setProperty('--nav-state', 'closed');
        root.style.setProperty('--hamburger-rotation', '0deg');
        root.style.setProperty('--menu-opacity', '0');
        root.style.setProperty('--overlay-display', 'none');
        root.style.setProperty('--scroll-lock', 'auto');
        break;
    }
  }

  public getCurrentState(): string {
    return this.currentState;
  }

  public isOpen(): boolean {
    return this.currentState === this.states.OPEN;
  }

  public isTransitioning(): boolean {
    return this.transitionLock;
  }

  public toggle(): Promise<void> {
    return this.isOpen() 
      ? this.transitionTo(this.states.CLOSED)
      : this.transitionTo(this.states.OPEN);
  }

  public close(): Promise<void> {
    return this.transitionTo(this.states.CLOSED);
  }

  public open(): Promise<void> {
    return this.transitionTo(this.states.OPEN);
  }
}
