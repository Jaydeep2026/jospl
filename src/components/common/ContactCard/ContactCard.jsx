import './ContactCard.css';

/** One column with a boxed contact card (title + opening hours). */
export default function ContactCard({ title, children }) {
  return (
    <div className="col-lg-4">
      <div className="contact-card">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}
