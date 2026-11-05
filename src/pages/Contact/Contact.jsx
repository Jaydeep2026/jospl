import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContactCard from '../../components/common/ContactCard/ContactCard';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import ContactLocation from '../../components/sections/ContactLocation/ContactLocation';
import { SITE } from '../../data/siteInfo';

export default function Contact() {
  const call = <a href={SITE.phoneHref}>{SITE.phone}</a>;

  return (
    <>
      <Breadcrumb
        title="Contact us"
        items={[{ label: 'Home', to: '/' }, { label: 'Contact us' }]}
      />

      <ContentSection>
        <div className="row align-center justify-content-center mb-5">
          <ContactCard title="New account opening">
            <p>
              <b>Monday - Friday</b>
              <br />
              9:00 AM - 5:00 PM
            </p>
            <p>
              <b>Saturday</b>
              <br />
              9:00 AM - 2:00 PM
              <br />
              Call {call}
            </p>
          </ContactCard>
          <ContactCard title="Customer Support">
            <p>
              <b>Monday - Friday</b>
              <br />
              9:00 AM - 5:00 PM
              <br />
              Call {call}
            </p>
          </ContactCard>
          <ContactCard title="Call & Trade">
            <p>
              <b>Monday - Friday</b>
              <br />
              9:00 AM - 3:30 PM
              <br />
              Call {call}
            </p>
          </ContactCard>
        </div>

        <div className="row align-center justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="content">
              <h4>How to Create a Ticket</h4>
              <p>
                Write to us on <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a> or call us
                on {call}
              </p>
              <p>
                We will provide you with a ticket number. Please use that ticket number for
                reference while communicating with us about that query/complaint.
              </p>
              <h4>Segregation of Client Collateral</h4>
              <p>
                With a view to providing visibility of client-wise cash and non-cash collateral at
                TM, CM, and Clearing Corporation (CC) levels, daily reporting of such collaterals to
                CC is put in place by us, in compliance with SEBI Circular
                SEBI/HO/MRD2_DCAP/CIR/2021/0598 dated 20-July-2021 read with NCL circular
                NCL/CMPL/49348 dated August 20, 2021, NCL/CMPL/49640 dated September 17, 2021, and
                NCL/CMPL/49764 dated September 29, 2021.
              </p>
            </div>
          </div>
        </div>

        <ContactLocation />
      </ContentSection>
    </>
  );
}
