/**
 * Navigation Lifecycle Manager
 * Manages memory cleanup and resource optimization
 */

export class NavigationLifecycleManager {
  private eventListeners = new Map<Element, Array<{
    event: string;
    handler: EventListener;
    options?: AddEventListenerOptions;
  }>>();
  
  private observers = new Set<IntersectionObserver | MutationObserver | ResizeObserver>();
  private timers = new Set<number>();
  private animationFrames = new Set<number>();

  public addEventListener(
    element: Element, 
    event: string, 
    handler: EventListener, 
    options?: AddEventListenerOptions
  ) {
    element.addEventListener(event, handler, options);
    
    // Track for cleanup
    if (!this.eventListeners.has(element)) {
      this.eventListeners.set(element, []);
    }
    this.eventListeners.get(element)!.push({ event, handler, options });
  }

  public addObserver(observer: IntersectionObserver | MutationObserver | ResizeObserver) {
    this.observers.add(observer);
  }

  public addTimer(timerId: number) {
    this.timers.add(timerId);
  }

  public addAnimationFrame(frameId: number) {
    this.animationFrames.add(frameId);
  }

  public cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach((listeners, element) => {
      listeners.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
    });
    
    // Disconnect observers
    this.observers.forEach(observer => observer.disconnect());
    
    // Clear timers
    this.timers.forEach(timer => clearTimeout(timer));
    
    // Cancel animation frames
    this.animationFrames.forEach(frame => cancelAnimationFrame(frame));
    
    // Clear maps and sets
    this.eventListeners.clear();
    this.observers.clear();
    this.timers.clear();
    this.animationFrames.clear();
  }

  public removeElementListeners(element: Element) {
    const listeners = this.eventListeners.get(element);
    if (listeners) {
      listeners.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      this.eventListeners.delete(element);
    }
  }

  public removeTimer(timerId: number) {
    clearTimeout(timerId);
    this.timers.delete(timerId);
  }

  public removeAnimationFrame(frameId: number) {
    cancelAnimationFrame(frameId);
    this.animationFrames.delete(frameId);
  }
}
