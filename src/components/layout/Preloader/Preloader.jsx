import { useEffect, useState } from 'react';
import './Preloader.css';

const FADE_MS = 600;

/** Full-screen loader shown until the window has finished loading, then fades out. */
export default function Preloader() {
  const [phase, setPhase] = useState('visible'); // visible -> fading -> gone

  useEffect(() => {
    let timer;
    const startFade = () => {
      setPhase('fading');
      timer = setTimeout(() => setPhase('gone'), FADE_MS);
    };
    if (document.readyState === 'complete') {
      startFade();
    } else {
      window.addEventListener('load', startFade);
    }
    return () => {
      window.removeEventListener('load', startFade);
      clearTimeout(timer);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      className="se-pre-con"
      style={
        phase === 'fading' ? { opacity: 0, transition: `opacity ${FADE_MS}ms ease` } : undefined
      }
    />
  );
}
