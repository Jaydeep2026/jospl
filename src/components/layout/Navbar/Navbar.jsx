import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../../data/navigation';
import useScrolled from '../../../hooks/useScrolled';
import useWindowWidth from '../../../hooks/useWindowWidth';
import NavDropdown from './NavDropdown';
import './Navbar.css';

const MOBILE_BREAKPOINT = 1023;

export default function Navbar() {
  const width = useWindowWidth();
  const scrolled = useScrolled();
  const { pathname } = useLocation();

  const isMobile = width <= MOBILE_BREAKPOINT;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTouched, setMenuTouched] = useState(false); // once toggled the header keeps extra height
  const [closeSignal, setCloseSignal] = useState(0);

  const closeDropdowns = () => setCloseSignal((n) => n + 1);

  // Navigating to another page closes the mobile menu.
  useEffect(() => {
    setMenuOpen(false);
    closeDropdowns();
  }, [pathname]);

  // Leaving the mobile layout resets the slide-in menu.
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
    closeDropdowns();
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setMenuTouched(true);
    closeDropdowns();
  };

  const navClasses = [
    'navbar',
    'mobile-sidenav',
    'navbar-style-one',
    'attr-border',
    'navbar-sticky',
    'navbar-default',
    'validnavs',
    'on',
    'no-full',
  ];
  if (scrolled && width > MOBILE_BREAKPOINT) navClasses.push('sticked');
  if (isMobile && menuOpen) navClasses.push('navbar-responsive');
  if (isMobile && menuTouched) navClasses.push('force-sticky');

  const collapseClasses = ['collapse', 'navbar-collapse'];
  if (isMobile) collapseClasses.push('collapse-mobile');
  if (isMobile && menuOpen) collapseClasses.push('show');

  return (
    <header className={isMobile && menuTouched ? 'adjust-height' : undefined}>
      <nav className={navClasses.join(' ')} onMouseLeave={isMobile ? closeDropdowns : undefined}>
        <div className="container-fluid d-flex justify-content-between align-items-center px-md-5">
          {/* Brand + mobile toggle */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={isMobile ? toggleMenu : undefined}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo.png" className="logo" alt="Logo" />
              <img src="/assets/img/logo-icon.png" className="logo-mob" alt="Logo" />
            </Link>
          </div>

          {/* Menu */}
          <div className={collapseClasses.join(' ')} id="navbar-menu">
            <div className="collapse-header">
              <img src="/assets/img/logo.png" alt="" />
              <button
                type="button"
                className="navbar-toggle"
                onClick={isMobile ? toggleMenu : undefined}
              >
                <i className="fa fa-times fa-bars"></i>
              </button>
            </div>

            <ul className="nav navbar-nav navbar-right">
              {NAV_ITEMS.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && ' '}
                  {item.children ? (
                    <NavDropdown item={item} isMobile={isMobile} closeSignal={closeSignal} />
                  ) : (
                    <li>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay behind the mobile menu */}
        <div className={`overlay-screen${isMobile && menuOpen ? ' opened' : ''}`}></div>
      </nav>
    </header>
  );
}
