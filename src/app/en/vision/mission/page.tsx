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
                  At Opus Consulting, our mission is to deliver solutions that create lasting value for businesses, institutions, and society. This purpose guides our strategy and defines how we work with our clients. It unites our team across Athens and Western Macedonia and strengthens our commitment to offering expertise, integrity, and tailored consulting services. It allows us to keep our promise of building trust and delivering measurable results.
                  </p>
                  <p className="mission-content__paragraph">
                  Since 1993, we have worked alongside Greek and international organizations, providing strategic consulting, investment project management, and financing solutions. Our scale and experience give us a unique perspective to support growth and transformation. By combining our services with a focus on continuous learning, responsible practices, and strong partnerships, we contribute not only to the success of our clients but also to sustainable development within the wider community.
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


        </main>
      </div>
    </AppLayout>
  );
}
