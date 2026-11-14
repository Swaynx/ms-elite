import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThankYouContent from '../../components/ThankYouContent';

// Shown after the enquiry form. Kept out of search results.
export const metadata = {
  title: 'Thank You',
  description: 'Thanks for your enquiry. MS ELITE will get back to you soon.',
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content" className="subpage thanks-page">
        <div className="thanks-deco" aria-hidden="true">
          <span className="page-hero-glow" />
          <span className="page-hero-ring page-hero-ring-1" />
          <span className="page-hero-ring page-hero-ring-2" />
          <span className="thanks-spark thanks-spark-1" />
          <span className="thanks-spark thanks-spark-2" />
          <span className="thanks-spark thanks-spark-3" />
          <span className="thanks-spark thanks-spark-4" />
          <span className="thanks-spark thanks-spark-5" />
        </div>
        <div className="container thanks-container">
          <ThankYouContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
