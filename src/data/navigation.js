/**
 * Main navigation structure.
 * An item with `children` renders as a dropdown.
 */
export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  {
    label: 'About us',
    children: [
      { label: 'Who We Are', to: '/who-we-are' },
      { label: 'Our Management', to: '/our-management' },
      { label: 'Job Opening', to: '/job-opening' },
    ],
  },
  { label: 'Account Opening', to: '/account-opening' },
  {
    label: 'Investor Relations',
    children: [
      { label: 'Investor Charter', to: '/investor-charter' },
      { label: 'Advisory for Investors', to: '/advisory-for-investors' },
      {
        label: 'Investors Grievances',
        to: '/grievance-redressal-escalation-matrix',
      },
      { label: 'Details of Complaints', to: '/details-of-complaints' },
      { label: 'Downloads', to: '/document-downloads' },
    ],
  },
  { label: 'Contact us', to: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Risk Disclosure', to: '/risk-disclosure' },
  { label: 'Law & Jurisdiction', to: '/law-and-jurisdiction' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Other Policies', to: '/other-policies' },
  {
    label: 'Treatment of Inactive Trading Account',
    to: '/treatment-of-inactive-trading-account',
  },
  {
    label: 'Vernacular Client Registration Documents',
    href: 'https://www.nseindia.com/trade/members-client-registration-documents',
  },
];
