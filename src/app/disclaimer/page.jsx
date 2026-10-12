import LegalPage from '../../components/LegalPage';
import { pageMetadata, LEGAL_UPDATED } from '../../utils/site';
import { CONTACT_EMAIL } from '../../utils/whatsapp';

export const metadata = pageMetadata({
  path: '/disclaimer',
  title: 'Disclaimer',
  description: 'Important information about results, client work, images and third-party links on the MS ELITE website.',
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated={LEGAL_UPDATED}
      intro="Please read this disclaimer before relying on anything on the MS ELITE website."
    >
      <h2>1. General information</h2>
      <p>
        The content on this website is for general information about MS ELITE and our services. It is not professional,
        legal, medical or financial advice. While we try to keep it accurate and up to date, we make no guarantee that it is
        complete or current.
      </p>

      <h2>2. Results</h2>
      <p>
        Any results, reels or client stories shown on this website reflect the experience of those clients. Every brand is
        different, and results depend on many factors outside our control, such as platform algorithms, audience, industry and
        consistency. They are not a promise of what you will achieve.
      </p>

      <h2>3. Client names and work</h2>
      <p>
        Client names, videos, screenshots and logos appear on this website with permission. They remain the property of their
        owners and may not be copied or reused.
      </p>

      <h2>4. Images</h2>
      <p>
        Some images on this website are illustrative or licensed stock photography and do not show real clients, projects or
        team members.
      </p>

      <h2>5. Trademarks</h2>
      <p>
        Instagram, Facebook, WhatsApp and Meta are trademarks of Meta Platforms, Inc. Other names and logos belong to their
        respective owners. MS ELITE is not affiliated with or endorsed by these companies.
      </p>

      <h2>6. External links</h2>
      <p>
        This website links to WhatsApp, Instagram and other third-party sites. We are not responsible for their content,
        availability or privacy practices.
      </p>

      <h2>7. Questions</h2>
      <p>
        If you have any questions about this disclaimer, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
