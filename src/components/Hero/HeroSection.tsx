'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };
      
      // Play video when it's ready
      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener('canplay', playVideo);
      }
    }
  }, []);

  return (
    <section className={`hero-section ${className}`}>
      <div className="hero-section__container">
        <div className="hero-section__grid">
          {/* Left Column - Text Content */}
          <div className="hero-section__text-column">
            <div className="hero-section__content">
              <h1 className="hero-section__headline">
                Empowering Organizations with 
                <span className="hero-section__highlight"> Strategic Excellence</span>
              </h1>
              
              <p className="hero-section__subheadline">
                We deliver innovative solutions and transformative expertise across public sector consulting, 
                technology strategy, and investment management to drive sustainable growth and competitive advantage.
              </p>
              
              <div className="hero-section__cta-group">
                <button className="hero-section__cta-button hero-section__cta-button--primary">
                  Explore Our Services
                  <svg 
                    className="hero-section__cta-arrow" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </button>
                
                <button className="hero-section__cta-button hero-section__cta-button--secondary">
                  View Our Work
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="hero-section__trust-indicators">
                <div className="hero-section__trust-item">
                  <span className="hero-section__trust-number">15+</span>
                  <span className="hero-section__trust-label">Years Experience</span>
                </div>
                <div className="hero-section__trust-item">
                  <span className="hero-section__trust-number">200+</span>
                  <span className="hero-section__trust-label">Projects Delivered</span>
                </div>
                <div className="hero-section__trust-item">
                  <span className="hero-section__trust-number">50+</span>
                  <span className="hero-section__trust-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Content */}
          <div className="hero-section__image-column">
            <div className="hero-section__image-container">
              <Image
                src="/hero2.png"
                alt="OPUS Consulting - Strategic Excellence in Action"
                fill
                className="hero-section__image"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="hero-section__image-overlay"></div>
              
              {/* Video Element */}
              <div className="hero-section__video-container">
                <video
                  ref={videoRef}
                  className="hero-section__video"
                  muted
                  loop
                  playsInline
                  poster="/hero2.png"
                  preload="metadata"
                >
                  <source src="/857010-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  <source src="/3795842-hd_1920_1080_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="hero-section__background-elements">
        <div className="hero-section__bg-shape hero-section__bg-shape--1"></div>
        <div className="hero-section__bg-shape hero-section__bg-shape--2"></div>
        <div className="hero-section__bg-shape hero-section__bg-shape--3"></div>
      </div>
    </section>
  );
};