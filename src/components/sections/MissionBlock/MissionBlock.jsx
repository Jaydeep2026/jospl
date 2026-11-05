import './MissionBlock.css';

function Thumb({ image, alt }) {
  return (
    <div className="col-lg-6 thumb">
      <img src={image} alt={alt} />
    </div>
  );
}

function Copy({ title, text }) {
  return (
    <div className="col-lg-6">
      <div className="px-4">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

/**
 * Alternating image/text rows.
 * items: [{ title, text, image, imageAlt, imageFirst }]
 */
export default function MissionBlock({ items }) {
  return (
    <div className="our-mission default-padding pt-0 bottom-less">
      <div className="container">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`row${index > 0 ? ' pt-5 mt-5' : ''} align-items-center`}
          >
            {item.imageFirst ? (
              <>
                <Thumb image={item.image} alt={item.imageAlt} />
                <Copy title={item.title} text={item.text} />
              </>
            ) : (
              <>
                <Copy title={item.title} text={item.text} />
                <Thumb image={item.image} alt={item.imageAlt} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
