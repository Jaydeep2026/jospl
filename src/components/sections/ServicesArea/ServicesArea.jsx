import './ServicesArea.css';

/** Centered section title on the decorative "services" background. */
export default function ServicesArea({ title }) {
  return (
    <div id="services" className="services-area shape-standard default-padding no-top pb-5">
      <div className="container">
        <div className="row">
          <div className="site-heading text-center">
            <div className="col-lg-8 offset-lg-2">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
