import { SITE } from '../../../data/siteInfo';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="top-bar-area bg-dark text-light">
      <div className="container-fluid">
        <div className="topbar-info">
          <div className="row">
            <div className="top-address col-lg-7">
              <ul>
                <li>
                  <i className="icon_phone"></i>Accounts|Trade|Support : {SITE.phoneDisplay}
                </li>{' '}
                <li>
                  <i className="icon_clock"></i>Monday - Friday 9:00 AM - 5:00 PM
                </li>
              </ul>
            </div>
            <div className="top-address col-lg-5">
              <ul className="text-end">
                <li>
                  <i className="icon_mail"></i> Investors Grievances Email: {SITE.adminEmail}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
