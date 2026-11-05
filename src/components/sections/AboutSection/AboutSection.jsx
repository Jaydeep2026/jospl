import { Link } from 'react-router-dom';
import './AboutSection.css';

/** Image on the left, headline + copy on the right. Optional call-to-action button. */
export default function AboutSection({ image, imageAlt, title, lead, text, action }) {
  return (
    <div id="about" className="about-area reverse default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 thumb">
            <img src={image} alt={imageAlt} />
          </div>

          <div className="col-lg-6">
            <div className="content">
              <h2>{title}</h2>
              <h3>{lead}</h3>
              <p>{text}</p>
              {action && (
                <Link to={action.to} className="btn btn-dark btn-sm-lm">
                  {action.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
