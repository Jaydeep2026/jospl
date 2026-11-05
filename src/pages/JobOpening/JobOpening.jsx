import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function JobOpening() {
  return (
    <>
      <Breadcrumb
        title="Job Opening"
        items={[
          { label: 'Home', to: '/' },
          { label: 'About us', to: '#' },
          { label: 'Job Opening' },
        ]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content text-center">
              <h1>No open Vacancy</h1>
              <p>
                Currently we do not have any openings.
                <br />
                Do check here regularly for any updates on openings
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
