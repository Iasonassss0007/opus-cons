/**
 * Navigation Performance Monitor
 * Enterprise-grade performance monitoring for navigation interactions
 */

export interface PerformanceMetrics {
  interactionType: string;
  latency: number;
  timestamp: number;
  userAgent: string;
  viewport: {
    width: number;
    height: number;
  };
}

export class NavigationPerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private frameRateHistory: number[] = [];
  private isMonitoring = false;
  private frameCount = 0;
  private lastTime = 0;

  constructor() {
    this.setupFrameRateMonitoring();
  }

  public measureInteractionLatency(interactionType: string) {
    const startTime = performance.now();
    
    return {
      complete: () => {
        const endTime = performance.now();
        const latency = endTime - startTime;
        
        const metric: PerformanceMetrics = {
          interactionType,
          latency,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight
          }
        };

        this.metrics.push(metric);

        // Report performance issues
        if (latency > 16.67) { // > 1 frame at 60fps
          console.warn(`Navigation interaction exceeded frame budget: ${latency}ms`);
          this.reportPerformanceIssue(interactionType, latency);
        }

        return metric;
      }
    };
  }

  private setupFrameRateMonitoring() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.lastTime = performance.now();
    
    const measureFrameRate = (currentTime: number) => {
      this.frameCount++;
      
      if (currentTime >= this.lastTime + 1000) {
        const fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
        this.frameRateHistory.push(fps);
        
        // Keep only last 60 measurements (1 minute at 1fps measurement)
        if (this.frameRateHistory.length > 60) {
          this.frameRateHistory.shift();
        }
        
        if (fps < 55) {
          this.reportLowFrameRate(fps);
        }
        
        this.frameCount = 0;
        this.lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFrameRate);
    };
    
    requestAnimationFrame(measureFrameRate);
  }

  private reportPerformanceIssue(interactionType: string, latency: number) {
    // In a real application, this would send data to analytics
    console.error(`Performance Issue: ${interactionType} took ${latency}ms`);
    
    // Could integrate with services like:
    // - Google Analytics
    // - Sentry
    // - Custom analytics endpoint
  }

  private reportLowFrameRate(fps: number) {
    console.warn(`Low frame rate detected: ${fps} FPS`);
    
    // Could trigger performance optimizations
    this.optimizeForLowFrameRate();
  }

  private optimizeForLowFrameRate() {
    // Reduce animation complexity
    document.documentElement.style.setProperty('--transition-duration', '150ms');
    
    // Disable complex animations
    document.documentElement.classList.add('reduced-motion');
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getAverageLatency(interactionType?: string): number {
    const relevantMetrics = interactionType 
      ? this.metrics.filter(m => m.interactionType === interactionType)
      : this.metrics;
    
    if (relevantMetrics.length === 0) return 0;
    
    const totalLatency = relevantMetrics.reduce((sum, metric) => sum + metric.latency, 0);
    return totalLatency / relevantMetrics.length;
  }

  public getFrameRateStats() {
    if (this.frameRateHistory.length === 0) return null;
    
    const average = this.frameRateHistory.reduce((sum, fps) => sum + fps, 0) / this.frameRateHistory.length;
    const min = Math.min(...this.frameRateHistory);
    const max = Math.max(...this.frameRateHistory);
    
    return { average, min, max, samples: this.frameRateHistory.length };
  }

  public clearMetrics() {
    this.metrics = [];
    this.frameRateHistory = [];
  }
}
