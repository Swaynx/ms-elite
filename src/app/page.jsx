import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServiceList from '../components/ServiceList';
import GrowthSystem from '../components/GrowthSystem';
import KineticMarqueeSection from '../components/KineticMarqueeSection';
import CaseStudy from '../components/CaseStudy';
import VideoResults from '../components/VideoResults';
import AboutSection from '../components/AboutSection';
import TrustRibbonBanner from '../components/TrustRibbonBanner';
import FAQ from '../components/FAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Footer from '../components/Footer';
import { homeJsonLd } from '../utils/structuredData';

export default function HomePage() {
  return (
    <div className="site-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ServiceList />
        <GrowthSystem />
        <KineticMarqueeSection />
        <CaseStudy />
        <VideoResults />
        {/* Testimonials: add a section here once genuine client reviews are provided */}
        <AboutSection />
        <TrustRibbonBanner />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
