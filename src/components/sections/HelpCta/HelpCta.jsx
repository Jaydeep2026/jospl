import { SITE } from '../../../data/siteInfo';
import './HelpCta.css';

/** "Need help?" call-to-action shown above the footer on most pages. */
export default function HelpCta() {
  return (
    <div id="contact" className="contact-info-area default-padding bottom-less">
      <div className="container">
        <div className="contact-items">
          <div className="row">
            <div className="col-lg-12 subscribe">
              <div className="subscribe-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="subscribe-info">
                      <span className="icon">?</span>
                      <h3>Need help?</h3>
                      <h4>
                        Call Jas-One Securities new account opening desk at{' '}
                        <a href={SITE.phoneHref}>{SITE.phone}</a> or
                        <br />
                        create a ticket by mailing us at{' '}
                        <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
