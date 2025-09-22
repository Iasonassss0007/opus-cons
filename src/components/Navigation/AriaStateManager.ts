/**
 * ARIA State Manager - Comprehensive accessibility support
 * Implements dynamic ARIA attributes and focus management
 */

export class AriaStateManager {
  private focusableSelector = 'a[href], button, [tabindex]:not([tabindex="-1"])';
  private activeElement: Element | null = null;
  private focusTrapElements: Element[] = [];

  constructor() {
    this.setupKeyboardListeners();
  }

  public updateNavigationState(isOpen: boolean): void {
    const hamburgerButton = document.querySelector('.hamburger');
    const navigationMenu = document.querySelector('.nav-menu');
    
    if (hamburgerButton) {
      hamburgerButton.setAttribute('aria-expanded', isOpen.toString());
    }
    
    if (navigationMenu) {
      navigationMenu.setAttribute('aria-hidden', (!isOpen).toString());
      
      if (isOpen) {
        this.trapFocus(navigationMenu);
      } else {
        this.releaseFocus();
      }
    }
  }

  public trapFocus(container: Element): void {
    const focusableElements = Array.from(
      container.querySelectorAll(this.focusableSelector)
    ) as HTMLElement[];

    if (focusableElements.length === 0) return;

    this.focusTrapElements = focusableElements;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Store the element that was focused before opening the menu
    this.activeElement = document.activeElement;

    // Focus the first element
    firstElement.focus();

    // Add keyboard event listener for focus trapping
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const eventListener = handleKeyDown as EventListener;
    container.addEventListener('keydown', eventListener);
    
    // Store the handler for cleanup
    (container as HTMLElement & { _focusTrapHandler?: EventListener })._focusTrapHandler = eventListener;
  }

  public releaseFocus(): void {
    // Remove focus trap event listeners
    document.querySelectorAll('.nav-menu').forEach(menu => {
      const handler = (menu as HTMLElement & { _focusTrapHandler?: EventListener })._focusTrapHandler;
      if (handler) {
        menu.removeEventListener('keydown', handler);
        delete (menu as HTMLElement & { _focusTrapHandler?: EventListener })._focusTrapHandler;
      }
    });

    // Restore focus to the element that was active before opening the menu
    if (this.activeElement && this.activeElement instanceof HTMLElement) {
      this.activeElement.focus();
    }

    this.focusTrapElements = [];
    this.activeElement = null;
  }

  private setupKeyboardListeners(): void {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Escape':
          this.closeAllMenus();
          break;
        case 'ArrowDown':
          if (this.isMenuOpen()) {
            e.preventDefault();
            this.focusNextItem();
          }
          break;
        case 'ArrowUp':
          if (this.isMenuOpen()) {
            e.preventDefault();
            this.focusPreviousItem();
          }
          break;
        case 'Home':
          if (this.isMenuOpen()) {
            e.preventDefault();
            this.focusFirstItem();
          }
          break;
        case 'End':
          if (this.isMenuOpen()) {
            e.preventDefault();
            this.focusLastItem();
          }
          break;
      }
    });
  }

  private isMenuOpen(): boolean {
    const navMenu = document.querySelector('.nav-menu');
    return navMenu ? navMenu.getAttribute('aria-hidden') === 'false' : false;
  }

  private focusNextItem(): void {
    const currentIndex = this.focusTrapElements.indexOf(document.activeElement as Element);
    const nextIndex = (currentIndex + 1) % this.focusTrapElements.length;
    (this.focusTrapElements[nextIndex] as HTMLElement)?.focus();
  }

  private focusPreviousItem(): void {
    const currentIndex = this.focusTrapElements.indexOf(document.activeElement as Element);
    const prevIndex = currentIndex === 0 
      ? this.focusTrapElements.length - 1 
      : currentIndex - 1;
    (this.focusTrapElements[prevIndex] as HTMLElement)?.focus();
  }

  private focusFirstItem(): void {
    if (this.focusTrapElements.length > 0) {
      (this.focusTrapElements[0] as HTMLElement)?.focus();
    }
  }

  private focusLastItem(): void {
    if (this.focusTrapElements.length > 0) {
      const lastElement = this.focusTrapElements[this.focusTrapElements.length - 1];
      (lastElement as HTMLElement)?.focus();
    }
  }

  private closeAllMenus(): void {
    // Trigger close event for navigation
    const hamburgerButton = document.querySelector('.hamburger');
    if (hamburgerButton) {
      (hamburgerButton as HTMLElement).click();
    }
  }

  public updateDropdownState(dropdownId: string, isOpen: boolean): void {
    const dropdown = document.getElementById(dropdownId);
    const trigger = document.querySelector(`[aria-controls="${dropdownId}"]`);
    
    if (dropdown) {
      dropdown.setAttribute('aria-expanded', isOpen.toString());
      dropdown.setAttribute('aria-hidden', (!isOpen).toString());
    }
    
    if (trigger) {
      trigger.setAttribute('aria-expanded', isOpen.toString());
    }
  }

  public announceToScreenReader(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
}
