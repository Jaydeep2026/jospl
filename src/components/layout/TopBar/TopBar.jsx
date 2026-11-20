import { SITE } from '../../../data/siteInfo';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="top-bar-area">
      <div className="container-fluid px-md-5">
        <div className="topbar-info">
          <ul className="topbar-list">
            <li>
              <i className="icon_profile"></i>
              <span>Accounts | Trade | Support: {SITE.phoneDisplay}</span>
            </li>
            <li className="topbar-divider" aria-hidden="true"></li>
            <li>
              <i className="icon_clock"></i>
              <span>Monday – Friday 9:00 AM – 5:00 PM</span>
            </li>
          </ul>

          <ul className="topbar-list">
            <li>
              <i className="icon_mail"></i>
              <span>
                Investors Grievances Email:{' '}
                <a href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}