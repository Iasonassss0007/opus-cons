import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/company-overview.css';

export default function CompanyOverview() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="company-overview">
          {/* Hero Section */}
          <section className="company-overview__hero">
            <div className="company-overview__container">
              <div className="company-overview__hero-content">
                <div className="company-overview__hero-badge">
                  Strategic Excellence Since 2008
                </div>
                <h1 className="company-overview__hero-title">
                  Transforming Organizations Through Strategic Consulting
                </h1>
                <p className="company-overview__hero-subtitle">
                  We partner with forward-thinking organizations to deliver measurable results, 
                  drive innovation, and create sustainable competitive advantages in an 
                  ever-evolving business landscape.
                </p>
                <div className="company-overview__hero-stats">
                  <div className="company-overview__hero-stat">
                    <span className="company-overview__hero-stat-number">15+</span>
                    <span className="company-overview__hero-stat-label">Years of Excellence</span>
                  </div>
                  <div className="company-overview__hero-stat">
                    <span className="company-overview__hero-stat-number">200+</span>
                    <span className="company-overview__hero-stat-label">Successful Projects</span>
                  </div>
                  <div className="company-overview__hero-stat">
                    <span className="company-overview__hero-stat-number">95%</span>
                    <span className="company-overview__hero-stat-label">Client Retention</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="company-overview__about">
            <div className="company-overview__container">
              <div className="company-overview__about-content">
                <div className="company-overview__about-text">
                  <h2 className="company-overview__section-title">
                    About OPUS Consulting
                  </h2>
                  <p className="company-overview__about-description">
                    OPUS Consulting is a premier strategic consulting firm that empowers 
                    organizations to achieve transformative growth through data-driven insights, 
                    innovative methodologies, and deep industry expertise.
                  </p>
                  <p className="company-overview__about-description">
                    Our multidisciplinary team combines decades of experience across public sector, 
                    technology, and investment management domains to deliver solutions that drive 
                    measurable impact and sustainable competitive advantage.
                  </p>
                </div>
                <div className="company-overview__about-image">
                  <div className="company-overview__image-container">
                    <img 
                      src="/hero2.png" 
                      alt="OPUS Consulting Team" 
                      className="company-overview__image"
                    />
                    <div className="company-overview__image-overlay">
                      <div className="company-overview__overlay-content">
                        <h3>Excellence in Action</h3>
                        <p>Delivering results that matter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="company-overview__expertise">
            <div className="company-overview__container">
              <h2 className="company-overview__section-title company-overview__section-title--centered">
                Our Expertise
              </h2>
              <div className="company-overview__expertise-grid">
                <div className="company-overview__expertise-card">
                  <div className="company-overview__expertise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="company-overview__expertise-title">Strategic Planning</h3>
                  <p className="company-overview__expertise-description">
                    Comprehensive strategic frameworks that align organizational vision with 
                    market opportunities and operational capabilities.
                  </p>
                </div>
                <div className="company-overview__expertise-card">
                  <div className="company-overview__expertise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h3 className="company-overview__expertise-title">Digital Transformation</h3>
                  <p className="company-overview__expertise-description">
                    Technology-driven solutions that modernize operations, enhance customer 
                    experiences, and unlock new growth opportunities.
                  </p>
                </div>
                <div className="company-overview__expertise-card">
                  <div className="company-overview__expertise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    </svg>
                  </div>
                  <h3 className="company-overview__expertise-title">Public Sector</h3>
                  <p className="company-overview__expertise-description">
                    Specialized expertise in government operations, policy development, and 
                    public-private partnerships that drive societal impact.
                  </p>
                </div>
                <div className="company-overview__expertise-card">
                  <div className="company-overview__expertise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <h3 className="company-overview__expertise-title">Investment Management</h3>
                  <p className="company-overview__expertise-description">
                    Advanced portfolio strategies and risk management frameworks that optimize 
                    returns while maintaining prudent risk profiles.
                  </p>
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

          {/* Leadership Section */}
          <section className="company-overview__leadership">
            <div className="company-overview__container">
              <h2 className="company-overview__section-title company-overview__section-title--centered">
                Leadership Team
              </h2>
              <div className="company-overview__leadership-grid">
                <div className="company-overview__leader">
                  <div className="company-overview__leader-image">
                    <img 
                      src="/opus-logo.png" 
                      alt="CEO Profile" 
                      className="company-overview__leader-photo"
                    />
                  </div>
                  <div className="company-overview__leader-info">
                    <h3 className="company-overview__leader-name">John Smith</h3>
                    <p className="company-overview__leader-role">Chief Executive Officer</p>
                    <p className="company-overview__leader-bio">
                      Strategic leader with 20+ years of consulting experience across 
                      multiple industries and sectors. Former McKinsey Principal.
                    </p>
                    <div className="company-overview__leader-credentials">
                      <span>MBA, Harvard Business School</span>
                      <span>Former McKinsey Principal</span>
                    </div>
                  </div>
                </div>
                
                <div className="company-overview__leader">
                  <div className="company-overview__leader-image">
                    <img 
                      src="/opus-logo.png" 
                      alt="CTO Profile" 
                      className="company-overview__leader-photo"
                    />
                  </div>
                  <div className="company-overview__leader-info">
                    <h3 className="company-overview__leader-name">Sarah Johnson</h3>
                    <p className="company-overview__leader-role">Chief Technology Officer</p>
                    <p className="company-overview__leader-bio">
                      Technology innovator specializing in digital transformation 
                      and emerging technologies. Former Accenture Technology Lead.
                    </p>
                    <div className="company-overview__leader-credentials">
                      <span>MS Computer Science, MIT</span>
                      <span>Former Accenture Technology Lead</span>
                    </div>
                  </div>
                </div>
                
                <div className="company-overview__leader">
                  <div className="company-overview__leader-image">
                    <img 
                      src="/opus-logo.png" 
                      alt="COO Profile" 
                      className="company-overview__leader-photo"
                    />
                  </div>
                  <div className="company-overview__leader-info">
                    <h3 className="company-overview__leader-name">Michael Chen</h3>
                    <p className="company-overview__leader-role">Chief Operating Officer</p>
                    <p className="company-overview__leader-bio">
                      Operations expert focused on process optimization and 
                      organizational excellence. Former BCG Principal.
                    </p>
                    <div className="company-overview__leader-credentials">
                      <span>MBA, Wharton School</span>
                      <span>Former BCG Principal</span>
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
