import Image from 'next/image';
import {
  ArrowUpRightIcon,
  StethoscopeIcon,
  BarbellIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StorefrontIcon,
  QuotesIcon,
} from '@phosphor-icons/react/dist/ssr';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppCTA from '../../components/WhatsAppCTA';
import { CLIENTS, ClientCard } from '../../components/Clients';
import { pageMetadata, SERVICES, SITE_URL, TAGLINE } from '../../utils/site';
import { AUDIENCES, PRINCIPLES, JOURNEY } from '../../utils/content';
import { ORG_ID } from '../../utils/structuredData';

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Us',
  description:
    'Meet MS ELITE, a Chennai creative agency for personal branding, video editing, content production and social media marketing, founded by a video editor.',
});

const AUDIENCE_ICONS = [StethoscopeIcon, BarbellIcon, RocketLaunchIcon, SparkleIcon, StorefrontIcon];

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${SITE_URL}/about`,
  name: 'About MS ELITE',
  about: { '@id': ORG_ID },
};

export default function AboutPage() {
  return (
    <div className="site-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <Navbar />
      <main id="main-content" className="subpage">
        {/* 1. Page hero */}
        <section className="page-hero" aria-labelledby="about-hero-title">
          <div className="page-hero-deco" aria-hidden="true">
            <span className="page-hero-glow" />
            <span className="page-hero-ring page-hero-ring-1" />
            <span className="page-hero-ring page-hero-ring-2" />
            <span className="page-hero-dots" />
            <span className="page-hero-outline">BEYOND MARKETING</span>
          </div>

          <div className="container page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
            <span className="mono-eyebrow">ABOUT MS ELITE</span>
            <h1 id="about-hero-title" className="page-hero-title">
              The Story Behind <br />
              <span className="hero-pop-highlight">MS ELITE.</span>
            </h1>
            <p className="page-hero-sub">
              A creative agency in Chennai focused on personal branding, professional content production,
              video editing and social media marketing.
            </p>
            <ul className="page-hero-chips" aria-label="What we focus on">
              <li>Personal Branding</li>
              <li>Video Editing</li>
              <li>Content Production</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
        </section>

        {/* 2. Who we are */}
        <section className="section-padding surface-light about-intro" aria-labelledby="who-title">
          <div className="container about-intro-grid">
            <div className="about-intro-media">
              <div className="about-intro-frame">
                <Image
                  src="/images/service-editing.jpg"
                  alt="Video editing suite with a colour-graded timeline"
                  width={900}
                  height={700}
                  sizes="(max-width: 900px) 100vw, 520px"
                  className="about-intro-img"
                />
              </div>
              <span className="about-intro-badge" aria-hidden="true">
                <span>Editor-Led</span>
                <small>Video Editing Roots</small>
              </span>
            </div>

            <div className="about-intro-text">
              <span className="mono-eyebrow">WHO WE ARE</span>
              <h2 id="who-title" className="section-title">Beyond Marketing.</h2>
              <p className="about-intro-lead">
                MS ELITE is a creative agency focused on personal branding, professional content production,
                video editing, and social media marketing.
              </p>
              <p className="about-intro-copy">
                We help professionals, coaches, healthcare experts, and business owners build a stronger digital
                presence through consistent, high-quality content.
              </p>
              <blockquote className="about-quote">
                <QuotesIcon size={30} weight="fill" aria-hidden="true" />
                <p>{TAGLINE}</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3. Founder journey */}
        <section className="section-padding about-journey" aria-labelledby="journey-title">
          <div className="container">
            <div className="section-header about-center-header">
              <span className="mono-eyebrow">OUR STORY</span>
              <h2 id="journey-title" className="section-title">
                From the Edit Suite <br />
                to an Agency.
              </h2>
              <p className="section-subtext">
                Our founder started as a freelance video editor and developed that experience into a creative agency.
              </p>
            </div>

            <ol className="journey-track">
              {JOURNEY.map((step) => (
                <li key={step.num} className="journey-step">
                  <span className="journey-node" aria-hidden="true">{step.num}</span>
                  <div className="journey-card">
                    <h3 className="journey-title">{step.title}</h3>
                    <p className="journey-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="journey-note">
              With a hands-on background in video editing, content creation, and working with influencer clients, the
              founder focuses on building content systems that support personal brands and businesses.
            </p>
          </div>
        </section>

        {/* 4. Principles */}
        <section className="section-padding surface-light about-values" aria-labelledby="values-title">
          <div className="container">
            <div className="section-header about-center-header">
              <span className="mono-eyebrow">WHAT WE STAND FOR</span>
              <h2 id="values-title" className="section-title">
                Clarity. Consistency. <br />
                Credibility.
              </h2>
            </div>

            <div className="values-grid">
              {PRINCIPLES.map((item) => (
                <article key={item.num} className="value-card">
                  <span className="value-num" aria-hidden="true">{item.num}</span>
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What we do + who we work with */}
        <section className="section-padding about-offer" aria-labelledby="offer-title">
          <div className="container offer-grid">
            <div className="offer-col">
              <span className="mono-eyebrow">WHAT WE DO</span>
              <h2 id="offer-title" className="section-title">
                Everything Your <br />
                Brand Needs.
              </h2>
              <ol className="offer-list">
                {SERVICES.map((service, i) => (
                  <li key={service}>
                    <span className="offer-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ol>
              <a href="/#what-we-do" className="hero-link-secondary offer-link">
                <span>See our services</span>
                <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>

            <div className="offer-col">
              <span className="mono-eyebrow">WHO WE WORK WITH</span>
              <h2 className="section-title">
                Built for People <br />
                With Expertise.
              </h2>
              <ul className="audience-list">
                {AUDIENCES.map((audience, i) => {
                  const Icon = AUDIENCE_ICONS[i];
                  return (
                    <li key={audience} className="audience-item">
                      <span className="audience-item-icon" aria-hidden="true">
                        <Icon size={20} weight="duotone" />
                      </span>
                      <span>{audience}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Creators */}
        <section className="section-padding surface-light about-creators" aria-labelledby="creators-title">
          <div className="container">
            <div className="section-header about-center-header">
              <span className="mono-eyebrow">CREATORS WE'VE WORKED WITH</span>
              <h2 id="creators-title" className="section-title">Trusted by Creators &amp; Brands.</h2>
            </div>

            <div className="client-marquee">
              <div className="client-track">
                <ul className="client-wall" aria-label="Creators and brands we've worked with">
                  {CLIENTS.map((client) => (
                    <ClientCard key={client.name} client={client} />
                  ))}
                </ul>
                <ul className="client-wall client-wall-clone" aria-hidden="true">
                  {CLIENTS.map((client) => (
                    <ClientCard key={client.name} client={client} clone />
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-creators-cta">
              <a href="/contact" className="btn-primary">
                <span>Start Your Project</span>
                <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
