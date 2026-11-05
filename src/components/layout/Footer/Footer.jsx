import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../../data/navigation';
import { SITE } from '../../../data/siteInfo';
import './Footer.css';

const USEFUL_LINKS = [
  { label: 'NSE', href: 'https://www.nseindia.com/' },
  { label: 'SEBI', href: 'https://www.sebi.gov.in/' },
  { label: 'NSDL', href: 'https://www.nsdl.co.in/' },
  { label: 'SCORES', href: 'https://scores.sebi.gov.in/' },
];

const EVOTING_LINKS = [
  {
    label: 'CDSL Login',
    href: 'https://evoting.cdslindia.com/Evoting/EvotingLogin',
  },
  {
    label: 'NSDL Login',
    href: 'https://www.evoting.nsdl.com/eVotingWeb/commonhtmls/Login.jsp?userType=IN',
  },
];

/** Renders "Label : A | B | C" with external links. */
function LinkList({ label, links }) {
  return (
    <p>
      {label} :{' '}
      {links.map((link, i) => (
        <Fragment key={link.label}>
          {i > 0 && ' | '}
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </Fragment>
      ))}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="default-padding text-light">
      <div className="container">
        <div className="f-items fv1">
          <div className="row">
            <div className="col-lg-4 col-md-4 item">
              <div className="f-item">
                <h4>{SITE.name}</h4>
                <p>Member of National Stock Exchange</p>
                <p>SEBI Registration Number: INB230643536</p>
                <p>CIN: U67120MH1994PTC078633</p>
                <LinkList label="Useful Links" links={USEFUL_LINKS} />
                <LinkList label="E-Voting Links" links={EVOTING_LINKS} />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 item">
              <div className="f-item">
                <h4>Registered Address.</h4>
                <div className="address">
                  <p>
                    <b></b>
                  </p>
                  <ul className="mb-3">
                    <li>
                      <i className="icon_pin"></i>{' '}
                      <span>
                        C-107, TTC Industrial Area, Pawane, <br /> Turbhe, Navi Mumbai 400705.
                      </span>
                    </li>
                  </ul>
                  <p>
                    For any complaints &amp; queries pertaining to securities broking please write
                    to <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 item">
              <div className="f-item">
                <h4>Important Links</h4>
                <div className="address">
                  <ul className="footer-links">
                    {FOOTER_LINKS.map((link) => (
                      <li key={link.label}>
                        {link.to ? (
                          <Link to={link.to}>{link.label}</Link>
                        ) : (
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 item">
              <div className="f-item recent-post mt-md-5">
                <p>
                  Please ensure you carefully read the Risk Disclosure Document as prescribed by
                  SEBI | ICF
                </p>
                <p>
                  Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
                  details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
                  ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p>
                  Investments in securities market are subject to market risks; read all the related
                  documents carefully before investing.
                </p>
                <p>
                  <b>Attention investors</b>
                </p>
                <p>
                  1. Stock brokers can accept securities as margins from clients only by way of
                  pledge in the depository system w.e.f September 01, 2020.
                </p>
                <p>
                  2. Update your e-mail and phone number with your stock broker / depository
                  participant and receive OTP directly from depository on your e-mail and/or mobile
                  number to create pledge.
                </p>
                <p>
                  3. Check your securities in the consolidated account statement issued by NSDL/CDSL
                  every month.
                </p>
                <p>
                  "Prevent unauthorised transactions in your account. Update your mobile
                  numbers/email IDs with your stock brokers. Receive information of your
                  transactions directly from Exchange on your mobile/email at the end of the day.
                  Issued in the interest of investors. KYC is one time exercise while dealing in
                  securities markets - once KYC is done through a SEBI registered intermediary
                  (broker, DP, Mutual Fund etc.), you need not undergo the same process again when
                  you approach another intermediary." Dear Investor, if you are subscribing to an
                  IPO, there is no need to issue a cheque. Please write the Bank account number and
                  sign the IPO application form to authorize your bank to make payment in case of
                  allotment. In case of non allotment the funds will remain in your bank account. As
                  a business we don't give stock tips, and have not authorized anyone to trade on
                  behalf of others. If you find anyone claiming to be part of Jas-One Securities and
                  offering such services, please create a ticket by mailing us to:{' '}
                  <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-center">
            <div className="col-lg-6">
              <p>&copy; Copyright 2025 All Rights Reserved</p>
            </div>
            <div className="col-lg-6 text-end">
              <p>{SITE.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
