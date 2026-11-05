import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';

export default function NotFound() {
  return (
    <>
      <Breadcrumb title="Page not found" items={[{ label: 'Home', to: '/' }, { label: '404' }]} />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content text-center">
              <h1>404</h1>
              <p>The page you are looking for does not exist.</p>
              <Link to="/" className="btn btn-dark btn-sm-lm">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
