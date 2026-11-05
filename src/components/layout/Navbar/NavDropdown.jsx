import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FADE_MS = 400;

/**
 * One dropdown entry of the main menu.
 * - Desktop: opens on hover with a fade animation.
 * - Mobile: opens/closes on click.
 */
export default function NavDropdown({ item, isMobile, closeSignal }) {
  const [phase, setPhase] = useState('closed'); // 'closed' | 'open' | 'closing'
  const phaseRef = useRef('closed');
  const timer = useRef(null);

  const update = (next) => {
    phaseRef.current = next;
    setPhase(next);
  };

  const open = useCallback(() => {
    clearTimeout(timer.current);
    update('open');
  }, []);

  const close = useCallback(() => {
    if (phaseRef.current === 'closed') return;
    clearTimeout(timer.current);
    update('closing');
    timer.current = setTimeout(() => update('closed'), FADE_MS);
  }, []);

  // Close when the navbar asks all dropdowns to close (mouse leave on mobile, toggle, route change…)
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    close();
  }, [closeSignal, close]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleToggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isMobile) return;
    if (phaseRef.current === 'open') close();
    else open();
  };

  const isOpen = phase === 'open';
  const menuClasses = ['dropdown-menu', 'animated'];
  if (isOpen) menuClasses.push('fadeInDown');
  if (phase === 'closing' && !isMobile) menuClasses.push('fadeOutUp');

  return (
    <li
      className={`dropdown${isOpen ? ' on' : ''}`}
      onMouseEnter={!isMobile ? open : undefined}
      onMouseLeave={!isMobile ? close : undefined}
    >
      <a href="#" className="dropdown-toggle" onClick={handleToggleClick}>
        {item.label}
      </a>
      <ul
        className={menuClasses.join(' ')}
        style={phase !== 'closed' ? { display: 'block' } : undefined}
      >
        {item.children.map((child) => (
          <li key={child.to}>
            <Link to={child.to}>{child.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
