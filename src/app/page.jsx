import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServiceList from '../components/ServiceList';
import GrowthSystem from '../components/GrowthSystem';
import KineticMarqueeSection from '../components/KineticMarqueeSection';
import CaseStudy from '../components/CaseStudy';
// GoogleReviews and VideoTestimonials are hidden until genuine client reviews are provided.
// import GoogleReviews from '../components/GoogleReviews';
// import VideoTestimonials from '../components/VideoTestimonials';
import AboutSection from '../components/AboutSection';
import TrustRibbonBanner from '../components/TrustRibbonBanner';
import FAQ from '../components/FAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ServiceList />
        <GrowthSystem />
        <KineticMarqueeSection />
        <CaseStudy />
        {/* <GoogleReviews /> — hidden until genuine reviews are provided */}
        {/* <VideoTestimonials /> — hidden until genuine video testimonials are provided */}
        <AboutSection />
        <TrustRibbonBanner />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
