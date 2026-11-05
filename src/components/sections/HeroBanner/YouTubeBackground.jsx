import { useEffect, useRef, useState } from 'react';

const ASPECT = 16 / 9;
const OFFSET = 200; // extra px so the video always overflows the box

let apiPromise = null;
/** Loads the YouTube IFrame API once and resolves with window.YT. */
function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previous) previous();
        resolve(window.YT);
      };
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    });
  }
  return apiPromise;
}

/**
 * Muted, looping, autoplaying YouTube video that covers its parent box.
 * The parent must be `position: relative` (see .ytb-container).
 */
export default function YouTubeBackground({ videoId, className = '', id }) {
  const boxRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Keep the iframe "cover"-sized relative to the box.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    const resize = () => {
      const parent = box.parentNode;
      const h = parent.offsetHeight + OFFSET;
      const w = parent.offsetWidth + OFFSET;
      if (ASPECT > w / h) setSize({ width: h * ASPECT, height: h });
      else setSize({ width: w, height: w / ASPECT });
    };
    resize();
    const observer = new ResizeObserver(() => window.requestAnimationFrame(resize));
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  // Attach the YouTube player to the iframe (autoplay + loop).
  useEffect(() => {
    if (playerRef.current) return;
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || playerRef.current || !iframeRef.current) return;
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: (e) => e.target.playVideo(),
          onStateChange: (e) => {
            if (e.data === 0) {
              e.target.seekTo(0, true);
              e.target.playVideo();
            }
            if (e.data === -1) e.target.playVideo();
            if (e.data === 1) setVisible(true);
          },
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const src =
    `https://www.youtube.com/embed/${videoId}?&enablejsapi=1&disablekb=1&controls=0&rel=0` +
    `&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0` +
    `&mute=1&autoplay=1&loop=1`;

  return (
    <div
      id={id}
      ref={boxRef}
      className={`${className} youtube-background video-background`}
      style={{
        height: '100%',
        width: '100%',
        zIndex: 0,
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        pointerEvents: 'none',
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <iframe
        ref={iframeRef}
        title="Jas-One Securities background video"
        src={src}
        frameBorder="0"
        allow="autoplay; mute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          position: 'absolute',
          opacity: visible ? 1 : 0,
          width: size.width,
          height: size.height,
        }}
      />
    </div>
  );
}
