// import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
// import ContactCard from '../../components/common/ContactCard/ContactCard';
// import ContentSection from '../../components/sections/AboutSection/ContentSection';
// import ContactLocation from '../../components/sections/ContactLocation/ContactLocation';
// import { SITE } from '../../data/siteInfo';

// export default function Contact() {
//   const call = <a href={SITE.phoneHref}>{SITE.phone}</a>;

//   return (
//     <>
//       <Breadcrumb
//         title="Contact us"
//         items={[{ label: 'Home', to: '/' }, { label: 'Contact us' }]}
//       />

//       <ContentSection>
//         <div className="row align-center justify-content-center mb-5">
//           <ContactCard title="New account opening">
//             <p>
//               <b>Monday - Friday</b>
//               <br />
//               9:00 AM - 5:00 PM
//             </p>
//             <p>
//               <b>Saturday</b>
//               <br />
//               9:00 AM - 2:00 PM
//               <br />
//               Call {call}
//             </p>
//           </ContactCard>
//           <ContactCard title="Customer Support">
//             <p>
//               <b>Monday - Friday</b>
//               <br />
//               9:00 AM - 5:00 PM
//               <br />
//               Call {call}
//             </p>
//           </ContactCard>
//           <ContactCard title="Call & Trade">
//             <p>
//               <b>Monday - Friday</b>
//               <br />
//               9:00 AM - 3:30 PM
//               <br />
//               Call {call}
//             </p>
//           </ContactCard>
//         </div>

//         <div className="row align-center justify-content-center mb-5">
//           <div className="col-lg-8">
//             <div className="content">
//               <h4>How to Create a Ticket</h4>
//               <p>
//                 Write to us on <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a> or call us
//                 on {call}
//               </p>
//               <p>
//                 We will provide you with a ticket number. Please use that ticket number for
//                 reference while communicating with us about that query/complaint.
//               </p>
//               <h4>Segregation of Client Collateral</h4>
//               <p>
//                 With a view to providing visibility of client-wise cash and non-cash collateral at
//                 TM, CM, and Clearing Corporation (CC) levels, daily reporting of such collaterals to
//                 CC is put in place by us, in compliance with SEBI Circular
//                 SEBI/HO/MRD2_DCAP/CIR/2021/0598 dated 20-July-2021 read with NCL circular
//                 NCL/CMPL/49348 dated August 20, 2021, NCL/CMPL/49640 dated September 17, 2021, and
//                 NCL/CMPL/49764 dated September 29, 2021.
//               </p>
//             </div>
//           </div>
//         </div>

//         <ContactLocation />
//       </ContentSection>
//     </>
//   );
// }

import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContactCard from '../../components/common/ContactCard/ContactCard';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import ContactLocation from '../../components/sections/ContactLocation/ContactLocation';
import { SITE } from '../../data/siteInfo';

/* CALENDAR ICON */
const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

/* CLOCK ICON */
const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/* PHONE ICON */
const PhoneIcon = () => (
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
);

/* WORKING DAY AND TIME */
const ScheduleItem = ({ day, time }) => (
  <div className="contact-schedule-item">
    <div className="contact-info-icon">
      <CalendarIcon />
    </div>

    <div className="contact-schedule-content">
      <b>{day}</b>

      <div className="contact-time">
        <ClockIcon />
        <span>{time}</span>
      </div>
    </div>
  </div>
);

/* CONTACT PHONE */
const PhoneItem = ({ children }) => (
  <div className="contact-phone-item">
    <PhoneIcon />
    <span>{children}</span>
  </div>
);

export default function Contact() {
  const call = (
    <a href={SITE.phoneHref}>
      {SITE.phone}
    </a>
  );

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        title="Contact us"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Contact us' },
        ]}
      />

      <ContentSection>

        {/* THREE CONTACT CARDS */}
        <div className="row justify-content-center mb-5 contact-cards-row">

          {/* NEW ACCOUNT OPENING */}
          <ContactCard title="New account opening">
            <ScheduleItem
              day="Monday - Friday"
              time="9:00 AM - 5:00 PM"
            />

            <ScheduleItem
              day="Saturday"
              time="9:00 AM - 2:00 PM"
            />

            <PhoneItem>
              {call}
            </PhoneItem>
          </ContactCard>

          {/* CUSTOMER SUPPORT */}
          <ContactCard title="Customer Support">
            <ScheduleItem
              day="Monday - Friday"
              time="9:00 AM - 5:00 PM"
            />

            <PhoneItem>
              {call}
            </PhoneItem>
          </ContactCard>

          {/* CALL & TRADE */}
          <ContactCard title="Call & Trade">
            <ScheduleItem
              day="Monday - Friday"
              time="9:00 AM - 3:30 PM"
            />

            <PhoneItem>
              {call}
            </PhoneItem>
          </ContactCard>

        </div>

        {/* HOW TO CREATE A TICKET */}
        <div className="row align-center justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="content">

              <h4>How to Create a Ticket</h4>

              <p>
                Write to us on{' '}
                <a href={`mailto:${SITE.infoEmail}`}>
                  {SITE.infoEmail}
                </a>{' '}
                or call us on {call}
              </p>

              <p>
                We will provide you with a ticket number. Please use that
                ticket number for reference while communicating with us
                about that query/complaint.
              </p>

              <h4>Segregation of Client Collateral</h4>

              <p>
                With a view to providing visibility of client-wise cash and
                non-cash collateral at TM, CM, and Clearing Corporation (CC)
                levels, daily reporting of such collaterals to CC is put in
                place by us, in compliance with SEBI Circular
                SEBI/HO/MRD2_DCAP/CIR/2021/0598 dated 20-July-2021 read with
                NCL circular NCL/CMPL/49348 dated August 20, 2021,
                NCL/CMPL/49640 dated September 17, 2021, and
                NCL/CMPL/49764 dated September 29, 2021.
              </p>

            </div>
          </div>
        </div>

        {/* CONTACT LOCATION */}
        <ContactLocation />

      </ContentSection>
    </>
  );
}
