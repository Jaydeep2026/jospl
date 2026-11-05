import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        title="Privacy Policy"
        items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <p>
                <strong>Jas-One Securities</strong> respects and values the ‘Right to Privacy’ of
                individuals. We are esteemed by the relationship and by becoming our clients you
                have a promise from our side that we shall remain loyal to all our clients and
                non-clients whose information resides with us. This Privacy Policy of Nifty Research
                applies to the current clients as well as former clients.
              </p>
              <h4>Consent &amp; Communication</h4>
              <ul>
                <li>
                  By registering with us, clients agree to be contacted by our personnel or to
                  receive SMS messages.
                </li>
                <li>
                  It shall be treated as ‘opt-in’ if the registered contact number is subscribed in
                  the DND registry (Do Not Disturb).
                </li>
                <li>
                  By registering for our services, you also agree to comply with our Privacy Policy
                  and Terms &amp; Conditions.
                </li>
                <li>
                  You may receive calls related to service promotions, contests, and polls organized
                  by us.
                </li>
                <li>If your contact information changes, please notify us via call or email.</li>
              </ul>
              <h4>Information Protection</h4>
              <ul>
                <li>
                  Your information (public or private) will not be sold, rented, exchanged,
                  transferred, or given to any company/individual without your consent.
                </li>
                <li>
                  Exceptions apply if required under statutory law, by a regulator, government, or
                  court of law.
                </li>
                <li>
                  Your data may be shared with Nifty Research and its affiliates, including
                  subsidiaries and associate companies.
                </li>
              </ul>
              <h4>Usage of Information</h4>
              <ul>
                <li>
                  Your information will be used <strong>ONLY</strong> to provide the services you
                  have subscribed to.
                </li>
                <li>The information you share represents your identity with us.</li>
                <li>
                  Please update us via email or call whenever any details you provided change.
                </li>
              </ul>
              <h4>Additional Use of Information</h4>
              <ul>
                <li>
                  Your information (e.g., Mobile Number, Email ID) may be used to send newsletters,
                  surveys, contest information, or details about new services.
                </li>
                <li>
                  By subscribing to our services, you agree that Nifty Research has the right to
                  send such communications.
                </li>
              </ul>
              <h4>Agreement</h4>
              <ul>
                <li>
                  By subscribing to our services, you consent to our <strong>Privacy Policy</strong>{' '}
                  and <strong>Terms &amp; Conditions</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
