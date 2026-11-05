import { SITE } from './siteInfo';

/** Content of the "Open Account in 3 Steps" list (home page + account opening page). */

const fillInForm = {
  title: 'Fill in the Application Form',
  content: (
    <p>
      Send us a request at <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a> or call us on{' '}
      <a href={SITE.phoneHref}>{SITE.phone}</a> and we will send it to you.
    </p>
  ),
};

const inPersonVerification = {
  title: 'In-person Verification (IPV)',
  content: (
    <p>
      As part of the mandatory In-Person Verification (IPV) requirement for all brokers, Webcam or a
      physical verification is required.
    </p>
  ),
};

/** Short version shown on the home page. */
export const HOME_STEPS = [
  fillInForm,
  {
    title: 'Submit Supporting Documents for KYC',
    content: (
      <p>
        A passport-size photo, a self-attested copy of your PAN, address proof (Driving License,
        Voter ID, Passport, or Aadhaar Card), and bank account proof.
      </p>
    ),
  },
  inPersonVerification,
];

/** Detailed version shown on the Account Opening page. */
export const ACCOUNT_OPENING_STEPS = [
  fillInForm,
  {
    title: 'Submit Supporting Documents for KYC',
    content: (
      <ul>
        <li>
          A passport-size photograph to affix and sign across on the equity and commodity
          applications.
        </li>
        <li>Self-attested copy of the PAN with the signature under Applicant signature.</li>
        <li>
          Self-attested address proof. Any one of the following documents: Driving licence, voter
          ID, passport, Aadhaar card. If Aadhaar is being submitted as proof, ensure that a masked
          Aadhaar is submitted, i.e., black out the first 8 digits of the Aadhaar number. Only the
          last four digits should be visible. To download a masked Aadhaar online, visit
          myaadhaar.uidai.gov.in/ and tick the Do you want a masked Aadhaar? option while
          downloading Aadhaar.{' '}
        </li>
        <li>
          A bank account proof in the client's name. The bank proof can be one of the following: A
          personalised cancelled cheque with the name printed on it, bank statement, bank passbook
          copy with the bank account number, bank logo, seal, MICR, and IFSC code clearly visible.
        </li>
      </ul>
    ),
  },
  inPersonVerification,
];
