import './AboutSection.css';

/**
 * Standard white content block used by the text-heavy pages
 * (policies, charter, downloads…). `className` adds spacing helpers such as "pb-0".
 */
export default function ContentSection({ className = '', children }) {
  return (
    <div
      id="about"
      className={`about-area reverse default-padding${className ? ` ${className}` : ''}`}
    >
      <div className="container">{children}</div>
    </div>
  );
}
