import { Link } from 'react-router-dom';
import './AboutSection.css';

/** Image on the left, eyebrow + headline + copy on the right. Optional call-to-action button. */
export default function AboutSection({ image, imageAlt, eyebrow, title, lead, text, action }) {
  return (
    <div id="about" className="about-area about-modern default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 thumb">
            <img src={image} alt={imageAlt} />
          </div>

          <div className="col-lg-6">
            <div className="content">
              {eyebrow && <p className="about-eyebrow">{eyebrow}</p>}
              <h2>{title}</h2>
              <h3>{lead}</h3>
              <p>{text}</p>
              {action && (
                <Link to={action.to} className="about-btn">
                  {action.label}
                  <i className="ti-arrow-right" aria-hidden="true"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}