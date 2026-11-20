import YouTubeBackground from './YouTubeBackground';
import './HeroBanner.css';

export default function HeroBanner({ videoId }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content container-fluid px-md-5">
        <p className="hero-eyebrow">
          Invest <span>·</span> Trade <span>·</span> Grow
        </p>
        <h1 className="hero-title">
          Invest and Trade with us in the
          <strong>NSE Equity Market</strong>
        </h1>
        <span className="hero-line" aria-hidden="true"></span>
      </div>

      <div className="hero-media">
        <YouTubeBackground id="ytbg" className="home-ytbg" videoId={videoId} />
      </div>
    </section>
  );
}