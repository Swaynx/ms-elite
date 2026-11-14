import Image from 'next/image';
import { InstagramIcon } from './icons/CustomIcons';

// Instagram creators and brands from the MS ELITE brief. Logos, screenshots and results need
// client permission first. When the client shares them, add per client:
//   photo: '/images/clients/<name>.jpg'   (square profile picture) — replaces the initials
//   instagram: 'https://www.instagram.com/<handle>/'   — makes the card a link to their profile
export const CLIENTS = [
  {
    name: 'Santhosh Prem',
    initials: 'SP',
    photo: '/images/clients/santhosh-prem.jpg',
    instagram: 'https://www.instagram.com/santhosh_prem/',
  },
  {
    name: 'Finance with Harish',
    initials: 'FH',
    photo: '/images/clients/finance-with-harish.jpg',
    instagram: 'https://www.instagram.com/financewithharishofficial/',
  },
  {
    name: 'Physiora',
    initials: 'P',
    photo: '/images/clients/physiora.jpg',
    instagram: 'https://www.instagram.com/the_physiora/',
  },
  {
    name: 'Kavya Suha',
    initials: 'KS',
    photo: '/images/clients/kavya-suha.jpg',
    instagram: 'https://www.instagram.com/_kavyasuha_/',
  },
  { name: 'Fit.edu', initials: 'F' },
];

// Profile picture in a gold "story ring"; initials until a real photo is added
export function ClientAvatar({ client, size }) {
  return (
    <span className="client-ring" style={{ '--avatar': `${size}px` }}>
      <span className="client-avatar">
        {client.photo ? (
          <Image src={client.photo} alt="" fill sizes={`${size}px`} className="client-avatar-img" />
        ) : (
          <span className="client-initials">{client.initials}</span>
        )}
      </span>
    </span>
  );
}

export function ClientCard({ client, clone = false }) {
  const handle = client.instagram?.match(/instagram\.com\/([^/?#]+)/)?.[1];
  const content = (
    <>
      <ClientAvatar client={client} size={72} />
      <span className="client-name">{client.name}</span>
      <span className={`client-tag${handle ? ' client-tag-handle' : ''}`}>
        <InstagramIcon size={12} />
        <span>{handle ? `@${handle}` : 'Instagram'}</span>
      </span>
    </>
  );

  return (
    <li className="client-card">
      {client.instagram ? (
        <a
          href={client.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="client-card-inner"
          aria-label={`${client.name} on Instagram`}
          tabIndex={clone ? -1 : undefined}
        >
          {content}
        </a>
      ) : (
        <div className="client-card-inner">{content}</div>
      )}
    </li>
  );
}
