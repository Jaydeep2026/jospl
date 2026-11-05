import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Preloader from '../Preloader/Preloader';
import TopBar from '../TopBar/TopBar';
import ScrollToTop from './ScrollToTop';

/** Shared page shell: preloader, top bar, navigation, page content, footer. */
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Preloader />
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
