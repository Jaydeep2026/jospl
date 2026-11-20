// import './ContactCard.css';

// export default function ContactCard({ title, children }) {
//   return (
//     <div className="col-lg-4">
//       <div className="contact-card">
//         <h4>{title}</h4>
//         {children}
//       </div>
//     </div>
//   );
// }

import './ContactCard.css';

const cardIcons = {
  'New account opening': (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M19 8v6M16 11h6" />
    </svg>
  ),

  'Customer Support': (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <path d="M3 14h3v6H5a2 2 0 0 1-2-2z" />
      <path d="M21 14h-3v6h1a2 2 0 0 0 2-2z" />
      <path d="M18 20c-1 1-2 1-4 1" />
    </svg>
  ),

  'Call & Trade': (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.92a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69a2 2 0 0 1 1.72 2.05z" />
    </svg>
  ),
};

const cardLabels = {
  'New account opening': 'ACCOUNT SERVICES',
  'Customer Support': 'CLIENT ASSISTANCE',
  'Call & Trade': 'TRADING SERVICES',
};

export default function ContactCard({ title, children }) {
  return (
    <div className="col-lg-4 contact-card-column">
      <div className="contact-card">

        {/* CARD HEADER */}
        <div className="contact-card-header">

          <div className="contact-card-icon">
            {cardIcons[title]}
          </div>

          <div className="contact-card-heading">
            <span>{cardLabels[title]}</span>
            <h4>{title}</h4>
          </div>

        </div>

        {/* CARD CONTENT */}
        <div className="contact-card-body">
          {children}
        </div>

      </div>
    </div>
  );
}
