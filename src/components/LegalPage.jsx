import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Shared layout for Privacy Policy, Terms of Service and Disclaimer.
export default function LegalPage({ title, updated, intro, children }) {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content" className="legal-page">
        <div className="container legal-container">
          <header className="legal-header">
            <span className="mono-eyebrow">LEGAL</span>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">Last updated: {updated}</p>
            {intro && <p className="legal-intro">{intro}</p>}
          </header>
          <div className="legal-body">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
