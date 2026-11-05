import YouTubeBackground from './YouTubeBackground';
import './HeroBanner.css';

export default function HeroBanner({ title, videoId }) {
  return (
    <div id="home" className="banner-area">
      <div id="sofolbanner" className="carousel slide animate_text text-center">
        <div className="ytb-container">
          <YouTubeBackground id="ytbg" className="home-ytbg" videoId={videoId} />
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
