import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';
import OurManagement from './pages/OurManagement/OurManagement';
import JobOpening from './pages/JobOpening/JobOpening';
import AccountOpening from './pages/AccountOpening/AccountOpening';
import InvestorCharter from './pages/InvestorCharter/InvestorCharter';
import AdvisoryForInvestors from './pages/AdvisoryForInvestors/AdvisoryForInvestors';
import GrievanceRedressal from './pages/GrievanceRedressal/GrievanceRedressal';
import DetailsOfComplaints from './pages/DetailsOfComplaints/DetailsOfComplaints';
import DocumentDownloads from './pages/DocumentDownloads/DocumentDownloads';
import Contact from './pages/Contact/Contact';
import RiskDisclosure from './pages/RiskDisclosure/RiskDisclosure';
import LawAndJurisdiction from './pages/LawAndJurisdiction/LawAndJurisdiction';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import OtherPolicies from './pages/OtherPolicies/OtherPolicies';
import InactiveTradingAccount from './pages/InactiveTradingAccount/InactiveTradingAccount';
import GrievanceRedressalBackup from './pages/GrievanceRedressalBackup/GrievanceRedressalBackup';
import DetailsOfComplaintsArchive from './pages/DetailsOfComplaintsArchive/DetailsOfComplaintsArchive';
import NotFound from './pages/NotFound/NotFound';

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/who-we-are', element: <WhoWeAre /> },
  { path: '/our-management', element: <OurManagement /> },
  { path: '/job-opening', element: <JobOpening /> },
  { path: '/account-opening', element: <AccountOpening /> },
  { path: '/investor-charter', element: <InvestorCharter /> },
  { path: '/advisory-for-investors', element: <AdvisoryForInvestors /> },
  { path: '/grievance-redressal-escalation-matrix', element: <GrievanceRedressal /> },
  { path: '/details-of-complaints', element: <DetailsOfComplaints /> },
  { path: '/document-downloads', element: <DocumentDownloads /> },
  { path: '/contact', element: <Contact /> },
  { path: '/risk-disclosure', element: <RiskDisclosure /> },
  { path: '/law-and-jurisdiction', element: <LawAndJurisdiction /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/other-policies', element: <OtherPolicies /> },
  { path: '/treatment-of-inactive-trading-account', element: <InactiveTradingAccount /> },
  { path: '/grievance-redressal-escalation-matrix-bckup', element: <GrievanceRedressalBackup /> },
  { path: '/details-of-complaints-1', element: <DetailsOfComplaintsArchive /> },
];

/** Old links such as /contact.html keep working by redirecting to /contact. */
function LegacyHtmlRedirect() {
  const { pathname, search, hash } = useLocation();
  if (pathname.endsWith('.html')) {
    const clean = pathname.replace(/\/?index\.html$/, '/').replace(/\.html$/, '');
    return <Navigate to={`${clean || '/'}${search}${hash}`} replace />;
  }
  return <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<LegacyHtmlRedirect />} />
      </Route>
    </Routes>
  );
}
