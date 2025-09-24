import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import { HistoryHero } from '@/components/History/HistoryHero';
import { Timeline } from '@/components/Timeline/Timeline';
import { BackToTop } from '@/components/BackToTop/BackToTop';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/history-hero.css';
import '@/styles/timeline.css';
import '@/styles/back-to-top.css';

export default function OurHistory() {
  const timelineItems = [
    {
      year: '1993',
      description: 'OPUS Management Consultants was founded with the mission to provide strategic consulting services in the public sector and support the development of sustainable solutions.'
    },
    {
      year: '1995',
      description: 'Completion of our first major consulting projects and establishment of strong partnerships with government agencies, solidifying our credibility in the industry.'
    },
    {
      year: '1998',
      description: 'Expansion of our services with the addition of technological solutions and digital transformation consulting, establishing us as pioneers in the field.'
    },
    {
      year: '2001',
      description: 'Introduction of new project management methodologies and development of specialized evaluation tools, enhancing the effectiveness of our services.'
    },
    {
      year: '2005',
      description: 'Significant growth of our client network and the beginning of partnerships with major public institutions, strengthening our presence in the Greek market.'
    },
    {
      year: '2008',
      description: 'Development of specialized services for energy transition and introduction of innovative solutions for sustainable development.'
    },
    {
      year: '2010',
      description: 'Introduction of new investment project management services and the development of specialized methods for project evaluation and monitoring.'
    },
    {
      year: '2012',
      description: 'Expansion of our activities in digital governance and development of solutions for digitalization of public services.'
    },
    {
      year: '2015',
      description: 'Expansion of our activities abroad and the creation of a global network of partners, strengthening our international presence.'
    },
    {
      year: '2017',
      description: 'Introduction of consulting services for ESG strategy implementation and support for organizations in environmental and social responsibility.'
    },
    {
      year: '2020',
      description: 'Adaptation to the new challenges of the digital era and the development of innovative solutions to support our clients during the pandemic period.'
    },
    {
      year: '2022',
      description: 'Expansion of our services in artificial intelligence and development of solutions for automation of public processes.'
    },
    {
      year: '2024',
      description: 'Establishment as a leader in strategic consulting and development of pioneering solutions for digital transformation of organizations.'
    },
    {
      year: '2025',
      description: 'Continuous growth and innovation, with the goal of providing excellent consulting services and supporting the sustainable development of our organizations.'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <HistoryHero 
          title="Our History"
          subtitle="A journey of excellence and innovation"
          description="Since 1993, OPUS Management Consultants has been shaping the future of consulting in the public sector. Discover the milestones that led us to become leaders in our field."
        />
        <main className="our-history">
          <Timeline items={timelineItems} />
        </main>
        <BackToTop />
      </div>
    </AppLayout>
  );
}
