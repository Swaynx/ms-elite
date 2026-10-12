import LegalPage from '../../components/LegalPage';
import { pageMetadata, LEGAL_UPDATED } from '../../utils/site';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL } from '../../utils/whatsapp';

export const metadata = pageMetadata({
  path: '/terms',
  title: 'Terms of Service',
  description: 'The terms that apply when you use the MS ELITE website or work with us on personal branding, content production, video editing and marketing projects.',
});

// General terms only. Project-specific scope, fees, timelines and payment terms belong in each written proposal.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={LEGAL_UPDATED}
      intro="These terms apply when you use the MS ELITE website or work with us. By using the website or engaging our services, you agree to them."
    >
      <h2>1. About these terms</h2>
      <p>
        &ldquo;MS ELITE&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean MS ELITE, a digital marketing and creative agency based in
        Chennai, Tamil Nadu, India. &ldquo;You&rdquo; means the person or business using our website or services.
      </p>

      <h2>2. Using our website</h2>
      <p>
        You may use this website to learn about our services and to contact us. Please do not misuse it, try to disrupt it or
        copy its content for commercial use without our written permission. We may update or change the website at any time.
      </p>

      <h2>3. Our services</h2>
      <p>
        We offer personal branding, short-form video editing and reels production, professional shoots and content production,
        social media content strategy, static creatives and social media design, Meta Ads management, content planning and
        performance review.
      </p>
      <p>
        The scope, deliverables, timelines, fees and payment terms for each project are set out in a written proposal or
        agreement shared with you (for example, by email or WhatsApp). If that document differs from these terms, the
        project document applies.
      </p>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>give us accurate information and the material we need, on time;</li>
        <li>make sure you own, or have permission to use, everything you send us, including footage, photos, music, logos and any personal information about other people;</li>
        <li>review and approve work within the agreed time, so the project stays on schedule;</li>
        <li>follow the rules of any professional body that applies to you (for example, medical advertising rules) for content published in your name.</li>
      </ul>

      <h2>5. Approvals and publishing</h2>
      <p>
        You are responsible for approving content before it is published or used in advertising. Once you approve it, the
        decision to publish is yours.
      </p>

      <h2>6. Fees and payment</h2>
      <p>
        Fees and payment schedules are agreed in writing before work begins. Unless agreed otherwise, any advertising spend on
        platforms such as Meta is separate from our fees and is governed by that platform&rsquo;s own terms. Work may be paused if
        payments are overdue.
      </p>

      <h2>7. Ownership of work</h2>
      <p>
        Once you have paid in full, you own the final deliverables we create for you, unless the project document says
        otherwise. You keep ownership of the material you give us. We keep ownership of our own methods, templates, project
        files and know-how. Stock assets, music and fonts remain subject to their own licences.
      </p>

      <h2>8. Portfolio use</h2>
      <p>
        We will only show your name, logo, screenshots, videos or results on our website, social media or portfolio with
        your permission.
      </p>

      <h2>9. No guaranteed results</h2>
      <p>
        We work hard to help you build a stronger digital presence, but results such as reach, followers, leads or sales depend
        on many things outside our control, including platform algorithms, your industry and audience, and how often you
        publish. We do not guarantee any specific outcome.
      </p>

      <h2>10. Third-party platforms</h2>
      <p>
        Our work often relies on platforms such as Instagram, Facebook, WhatsApp and YouTube. We are not responsible for
        changes to these platforms, their policies, account restrictions or outages.
      </p>

      <h2>11. Confidentiality</h2>
      <p>
        We keep the private information you share about your business confidential and use it only for your project, except
        where the law requires us to disclose it.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent the law allows, MS ELITE is not liable for any indirect or consequential loss, such as loss of profit,
        revenue or data. Our total liability for any project is limited to the fees you paid us for that project.
      </p>

      <h2>13. Ending a project</h2>
      <p>
        Either of us may end a project as set out in the project document. You agree to pay for work completed up to that
        point.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts
        in Chennai, Tamil Nadu.
      </p>

      <h2>15. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top shows when they last changed.
      </p>

      <h2>16. Contact us</h2>
      <ul>
        <li>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        <li>WhatsApp: {WHATSAPP_DISPLAY}</li>
      </ul>
    </LegalPage>
  );
}
