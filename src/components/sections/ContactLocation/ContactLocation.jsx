import './ContactLocation.css';

const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.0173143822003!2d73.02838566931827!3d19.090942104873516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c104d824001d%3A0xb96150ae9aff9229!2sc%2C%20107%2C%20TTC%20Industrial%20Area%2C%20MIDC%20Industrial%20Area%2C%20Pawne%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710!5e0!3m2!1sen!2sin!4v1740779205176!5m2!1sen!2sin';

/** Google map + registered address. */
export default function ContactLocation() {
  return (
    <div className="row align-center justify-content-center">
      <div className="col-lg-7">
        <iframe
          src={MAP_URL}
          className="contact-map"
          title="Jas-One Securities location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-lg-5">
        <div className="content">
          <h3>Registered Address.</h3>
          <h4>
            C-107, TTC Industrial Area, Pawane,
            <br />
            Turbhe, Navi Mumbai 400705.
          </h4>
        </div>
      </div>
    </div>
  );
}
