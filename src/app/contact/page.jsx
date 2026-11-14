import { ArrowUpRightIcon, EnvelopeSimpleIcon, MapPinIcon } from '@phosphor-icons/react/dist/ssr';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { WhatsAppIcon, InstagramIcon } from '../../components/icons/CustomIcons';
import { pageMetadata, SITE_URL } from '../../utils/site';
import { ORG_ID } from '../../utils/structuredData';
import {
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
} from '../../utils/whatsapp';

export const metadata = pageMetadata({
  path: '/contact',
  title: 'Contact Us',
  description:
    'Start your personal branding or content project with MS ELITE in Chennai. Send an enquiry, or reach us on WhatsApp, email or Instagram.',
});

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact MS ELITE',
  about: { '@id': ORG_ID },
};

const CHANNELS = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    action: 'Chat now',
    href: getWhatsAppUrl(WHATSAPP_MESSAGES.general),
    icon: <WhatsAppIcon size={22} variant="brand" />,
    external: true,
  },
  {
    key: 'email',
    label: 'Email',
    value: CONTACT_EMAIL,
    action: 'Write to us',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <EnvelopeSimpleIcon size={22} weight="duotone" />,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: '@ms_elite_growth',
    action: 'Follow',
    href: INSTAGRAM_URL,
    icon: <InstagramIcon size={20} variant="brand" gradientId="ig-contact" />,
    external: true,
  },
];

const NEXT_STEPS = [
  { title: 'Send your enquiry', desc: 'Tell us who you are and what you want to build.' },
  { title: 'We talk it through', desc: 'We learn about you, your audience and your goals.' },
  { title: 'We plan your content', desc: 'A clear content direction, then shoots, editing and delivery.' },
];

export default function ContactPage() {
  return (
    <div className="site-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Navbar />
      <main id="main-content" className="subpage">
        <section className="page-hero page-hero-compact" aria-labelledby="contact-hero-title">
          <div className="page-hero-deco" aria-hidden="true">
            <span className="page-hero-glow" />
            <span className="page-hero-ring page-hero-ring-1" />
            <span className="page-hero-dots" />
            <span className="page-hero-outline">LET'S TALK</span>
          </div>

          <div className="container page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <span className="mono-eyebrow">CONTACT</span>
            <h1 id="contact-hero-title" className="page-hero-title">
              Let's Build <span className="hero-pop-highlight">Your Brand.</span>
            </h1>
            <p className="page-hero-sub">
              Tell us about you and your goals. Fill in the form, or reach us directly on WhatsApp, email or Instagram.
            </p>
          </div>
        </section>

        <section className="section-padding surface-light contact-main" aria-label="Contact options and enquiry form">
          <div className="container contact-grid">
            <aside className="contact-side">
              <ul className="contact-cards">
                {CHANNELS.map((c) => (
                  <li key={c.key}>
                    <a
                      href={c.href}
                      className={`contact-card contact-card-${c.key}`}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="contact-card-icon" aria-hidden="true">{c.icon}</span>
                      <span className="contact-card-body">
                        <span className="contact-card-label">{c.label}</span>
                        <span className="contact-card-value">{c.value}</span>
                      </span>
                      <span className="contact-card-action">
                        <span>{c.action}</span>
                        <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <div className="contact-card contact-card-static">
                    <span className="contact-card-icon" aria-hidden="true">
                      <MapPinIcon size={22} weight="duotone" />
                    </span>
                    <span className="contact-card-body">
                      <span className="contact-card-label">Based in</span>
                      <span className="contact-card-value">Chennai, Tamil Nadu, India</span>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="next-steps">
                <h2 className="next-steps-title">What happens next</h2>
                <ol>
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title}>
                      <span className="next-steps-num" aria-hidden="true">{i + 1}</span>
                      <span>
                        <strong>{step.title}</strong>
                        <small>{step.desc}</small>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="contact-form-card">
              <div className="contact-form-head">
                <span className="mono-eyebrow">ENQUIRY FORM</span>
                <h2 className="contact-form-title">Tell us about your project</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
