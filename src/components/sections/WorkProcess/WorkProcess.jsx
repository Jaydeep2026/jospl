import './WorkProcess.css';

/**
 * Numbered step list ("Open Account in 3 Steps").
 * steps: [{ title, content, icon }]  (content is any JSX, icon is an icon-font class)
 * - modern: 3 columns with icon tile, number, title and text (home page design)
 * - image:  list next to a picture
 * - default: centered full width list
 */
export default function WorkProcess({ title, steps, image, imageAlt, modern = false }) {
  if (modern) {
    return (
      <div id="process" className="work-process-area process-modern">
        <div className="container">
          <div className="process-heading">
            <h2>{title}</h2>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div className="process-item" key={step.title}>
                <div className="process-icon">
                  <i className={step.icon} aria-hidden="true"></i>
                </div>
                <div className="info">
                  <div className="count">{String(index + 1).padStart(2, '0')}.</div>
                  <h4>{step.title}</h4>
                  {step.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="process" className="work-process-area bg-gray default-padding">
      <div className="container">
        <div className="row">
          <div className="site-heading text-center">
            <div className="col-lg-8 offset-lg-2">
              <h2>{title}</h2>
            </div>
          </div>
        </div>

        <div className="process-content">
          <div className="row justify-content-center align-items-center">
            {image && (
              <div className="col-lg-6">
                <img src={image} alt={imageAlt} />
              </div>
            )}
            <div className={`${image ? 'col-lg-6' : 'col-lg-9'} process-items`}>
              {steps.map((step, index) => (
                <div className="process-item" key={step.title}>
                  <div className="count">{String(index + 1).padStart(2, '0')}.</div>
                  <div className="info">
                    <h4>{step.title}</h4>
                    {step.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}