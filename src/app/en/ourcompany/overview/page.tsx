import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/company-overview.css';
import { CountUpAnimation } from '@/components/Metrics/CountUpAnimation';

export default function CompanyOverview() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="company-overview">
          {/* Hero Section */}
          <section className="company-overview__hero">
            <video 
              className="company-overview__hero-video"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/hero-overview.mp4" type="video/mp4" />
            </video>
            <div className="company-overview__hero-overlay"></div>
            <div className="company-overview__container">
              <h2 className="company-overview__hero-subtitle">
                About OPUS Management Consultants
              </h2>
              <div className="company-overview__hero-content">
                <h1 className="company-overview__hero-title">
                  We empower organizations with expertise, innovation, and integrity.
                </h1>
              </div>
            </div>
          </section>

          {/* Gradient Section */}
          <section className="company-overview__logo-section">
            <div className="company-overview__container">
              <div className="company-overview__logo-content">
                <p className="company-overview__logo-text company-overview__logo-text--first">
                  Our clients look ahead with ambition. They seek progress, challenge convention, and drive transformation.
                </p>
                <p className="company-overview__logo-text company-overview__logo-text--second">
                  We stand beside them every step, shaping strategies that deliver impact in the public sector and beyond. We bring clarity to complex investments, strengthen organizations through technology, and design sustainable solutions for the future.
                  Together, we turn vision into action building resilience, creating opportunity, and advancing growth that lasts.
                </p>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="company-overview__image-section">
            <div className="company-overview__image-content">
              <div className="company-overview__image-text">
                <h2 className="company-overview__image-title">Who we are</h2>
                <p className="company-overview__image-description">
                  Since 1993, Opus Consulting has supported businesses and the public sector in Greece and abroad, offering strategic consulting, project management, and financing solutions with focus on trust and long-term partnerships.
                </p>
              </div>
            </div>
            <div className="company-overview__image-container">
              <img 
                src="/opusb.jpg" 
                alt="OPUS Management Consultants" 
                className="company-overview__image"
              />
            </div>
          </section>

          {/* Metrics Section */}
          <section className="company-overview__metrics">
            <div className="company-overview__container">
              <h2 className="company-overview__section-title company-overview__section-title--centered">
                Our Impact in Numbers
              </h2>
              <div className="company-overview__metrics-simple">
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={482} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Finished Projects</span>
                </div>
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={700} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Satisfied Partners</span>
                </div>
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={315} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Prosperous Collaborations</span>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="company-overview__vision-mission">
            <div className="company-overview__container">
              <div className="company-overview__vision-content">
                <div className="company-overview__vision-text">
                  <h2 className="company-overview__section-title">
                    Our Foundation
                  </h2>
                  <div className="company-overview__vision-grid">
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Vision</h3>
                      <p className="company-overview__vision-description">
                        To be the global leader in strategic consulting, empowering organizations 
                        to achieve sustainable growth and competitive advantage through innovative 
                        solutions and transformative expertise.
                      </p>
                    </div>
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Mission</h3>
                      <p className="company-overview__vision-description">
                        To deliver exceptional consulting services that drive measurable results, 
                        foster innovation, and create lasting value for our clients across diverse 
                        industries and sectors.
                      </p>
                    </div>
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Values</h3>
                      <p className="company-overview__vision-description">
                        Integrity, excellence, innovation, and collaboration guide everything we do. 
                        We are committed to ethical practices, continuous learning, and building 
                        strong partnerships with our clients and communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="company-overview__cta">
            <div className="company-overview__container">
              <div className="company-overview__cta-content">
                <h2 className="company-overview__cta-title">
                  Ready to Transform Your Organization?
                </h2>
                <p className="company-overview__cta-description">
                  Let's discuss how our strategic expertise can help you achieve your most 
                  ambitious goals and create lasting competitive advantage.
                </p>
                <div className="company-overview__cta-buttons">
                  <button className="company-overview__cta-button company-overview__cta-button--primary">
                    Start a Conversation
                  </button>
                  <button className="company-overview__cta-button company-overview__cta-button--secondary">
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
