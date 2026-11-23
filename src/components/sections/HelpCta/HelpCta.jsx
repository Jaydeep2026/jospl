import { SITE } from '../../../data/siteInfo';
import './HelpCta.css';

/** "Need help?" call-to-action shown above the footer on most pages. */
export default function HelpCta() {
  return (
    <div id="contact" className="help-modern">
      <div className="container">
        <div className="help-box">
          <div className="help-title">
            <span className="help-icon" aria-hidden="true">?</span>
            <h3>Need Help?</h3>
          </div>

          <div className="help-text">
            <p>
              Call Jas-One Securities new account opening desk at{' '}
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <span className="help-or"> or </span>
              <br className="help-br" />
              create a ticket by mailing us at{' '}
              <a href={`mailto:${SITE.infoEmail}`}>{SITE.infoEmail}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}