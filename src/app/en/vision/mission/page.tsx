import React from 'react';
import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/mission-statement.css';

export default function VisionMissionPage() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="mission-page">
          {/* Hero Section */}
          <section className="mission-hero">
            <div className="mission-hero__background">
              <div className="mission-hero__overlay"></div>
            </div>
            <div className="mission-hero__content">
              <h1 className="mission-hero__title">Our Mission</h1>
            </div>
          </section>

          {/* Two-Column Mission Content */}
          <section className="mission-content">
            <div className="mission-content__container">
              <div className="mission-content__text">
                <h2 className="mission-content__heading">Our Commitment to Excellence</h2>
                <div className="mission-content__paragraphs">
                  <p className="mission-content__paragraph">
                    At the heart of our mission lies an unwavering commitment to delivering exceptional consulting services that transform businesses and drive meaningful change. We believe that every organization, regardless of size or industry, deserves access to world-class strategic guidance that can unlock their true potential.
                  </p>
                  <p className="mission-content__paragraph">
                    Our approach is built on the foundation of trust, integrity, and deep expertise. We understand that each client faces unique challenges and opportunities, which is why we tailor our solutions to meet specific needs while maintaining the highest standards of professionalism and ethical conduct.
                  </p>
                  <p className="mission-content__paragraph">
                    Through our comprehensive consulting framework, we empower leaders to make informed decisions, optimize operations, and achieve sustainable growth. We are dedicated to being more than just consultants – we are strategic partners committed to your long-term success.
                  </p>
                </div>
              </div>
              <div className="mission-content__image">
                <img 
                  src="/land2.jpg" 
                  alt="Professional consulting team in discussion"
                  className="mission-content__photo"
                />
              </div>
            </div>
          </section>

          {/* Full-Width Callout Section */}
          <section className="mission-callout">
            <div className="mission-callout__background">
              <div className="mission-callout__overlay"></div>
            </div>
            <div className="mission-callout__content">
              <blockquote className="mission-callout__quote">
                &ldquo;We are committed to guiding businesses toward sustainable growth and long-term success.&rdquo;
              </blockquote>
            </div>
          </section>

          {/* Three-Column Supporting Statements */}
          <section className="mission-pillars">
            <div className="mission-pillars__container">
              <div className="mission-pillars__grid">
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/hero2.png" 
                      alt="Strategic Vision"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Strategic Vision</h3>
                  <p className="mission-pillar__description">
                    We provide forward-thinking strategies that anticipate market trends and position our clients for future success.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/hero.png" 
                      alt="Integrity"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Integrity</h3>
                  <p className="mission-pillar__description">
                    Every recommendation we make is grounded in ethical principles and transparent communication.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/p1i2t4jnt0npk1cs8119f1f541uu5e_1440.png" 
                      alt="Client-Focused Solutions"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Client-Focused Solutions</h3>
                  <p className="mission-pillar__description">
                    We customize our approach to address the specific needs and objectives of each unique client.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Closing Section */}
          <section className="mission-closing">
            <div className="mission-closing__background">
              <div className="mission-closing__overlay"></div>
            </div>
            <div className="mission-closing__content">
              <p className="mission-closing__statement">
                Together, we build the foundation for lasting success and create value that extends far beyond our partnership.
              </p>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
