import LegalPage from '../../components/LegalPage';
import { pageMetadata, LEGAL_UPDATED } from '../../utils/site';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, INSTAGRAM_URL } from '../../utils/whatsapp';

export const metadata = pageMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy',
  description: 'How MS ELITE collects, uses and protects the personal information you share with us through our website, WhatsApp, email and Instagram.',
});

// Written for India's Digital Personal Data Protection Act, 2023 and the IT Act, 2000.
// Update the "Information we collect" section if analytics, cookies or an enquiry form are added.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      intro="This policy explains what personal information MS ELITE collects when you visit our website or contact us, how we use it, and the choices you have."
    >
      <h2>1. Who we are</h2>
      <p>
        MS ELITE (&ldquo;MS ELITE&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a digital marketing and creative agency based in
        Chennai, Tamil Nadu, India. We are responsible for the personal information described in this policy.
      </p>

      <h2>2. Information we collect</h2>
      <p><strong>Information you give us.</strong> When you message us on WhatsApp, email us or contact us on Instagram, we receive what you choose to share, such as:</p>
      <ul>
        <li>your name, phone number, email address and social media handle;</li>
        <li>your business or practice name and details about your project;</li>
        <li>photos, videos, logos, documents and other material you send for a project.</li>
      </ul>
      <p>
        <strong>Information collected automatically.</strong> Our website does not use advertising or analytics cookies and does
        not ask you to create an account. Like most websites, our hosting provider may automatically record basic technical
        information, such as your IP address, browser type and the pages you request, to keep the site secure and working.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>to reply to your enquiry and discuss your project;</li>
        <li>to prepare proposals and deliver the services you ask for;</li>
        <li>to send project updates, invoices and related messages;</li>
        <li>to keep our website secure and fix technical problems;</li>
        <li>to meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use it to send you marketing messages you have not asked for.</p>

      <h2>4. Your consent</h2>
      <p>
        By contacting us, you consent to us using the information you share for the purposes above. You can withdraw your
        consent at any time by writing to us (see &ldquo;Contact us&rdquo;). Withdrawing consent does not affect anything done before
        you withdrew it, but we may not be able to continue a project without the information we need.
      </p>

      <h2>5. Client content</h2>
      <p>
        Material you share for a project (for example, footage, photos or details about your patients, students or customers)
        is used only to deliver that project. Please make sure you have the right to share it with us. We will not publish your
        name, logo, screenshots, videos or results in our portfolio or on our website without your permission.
      </p>

      <h2>6. Who we share it with</h2>
      <p>We share personal information only when it is needed to run our business or deliver your project:</p>
      <ul>
        <li><strong>Communication platforms</strong> you choose to contact us on, such as WhatsApp and Instagram (Meta) and Gmail (Google);</li>
        <li><strong>Service providers</strong> that help us work, such as website hosting, cloud storage and editing tools;</li>
        <li><strong>Advertising platforms</strong>, such as Meta Ads, when you ask us to run campaigns for you;</li>
        <li><strong>Authorities</strong>, when the law requires it.</li>
      </ul>
      <p>
        These providers may store data on servers outside India. They have their own privacy policies, and we encourage you to
        read them.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We keep your information for as long as we need it for the purposes above: usually for the length of our working
        relationship and for a reasonable period afterwards, or longer where the law requires us to keep records. When we no
        longer need it, we delete it.
      </p>

      <h2>8. How we protect it</h2>
      <p>
        We take reasonable security measures to protect your information from loss, misuse and unauthorised access. No method
        of sending or storing data online is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>9. Your rights</h2>
      <p>Under the Digital Personal Data Protection Act, 2023, you can ask us to:</p>
      <ul>
        <li>tell you what personal information we hold about you and how we use it;</li>
        <li>correct, complete or update it;</li>
        <li>delete it, where we no longer need to keep it;</li>
        <li>let you nominate someone to exercise these rights for you;</li>
        <li>respond to a grievance about how we handle your information.</li>
      </ul>
      <p>To make a request, email us. We will reply within a reasonable time.</p>

      <h2>10. Children</h2>
      <p>
        Our website and services are meant for adults and businesses. We do not knowingly collect personal information from
        anyone under 18 without the consent of a parent or guardian.
      </p>

      <h2>11. Links to other websites</h2>
      <p>
        Our website links to WhatsApp, Instagram and other sites we do not control. Their privacy practices are their own, and
        this policy does not cover them.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it last changed.
      </p>

      <h2>13. Contact us</h2>
      <p>For privacy questions, requests or grievances, contact MS ELITE:</p>
      <ul>
        <li>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        <li>WhatsApp: {WHATSAPP_DISPLAY}</li>
        <li>Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@ms_elite_growth</a></li>
      </ul>
    </LegalPage>
  );
}
