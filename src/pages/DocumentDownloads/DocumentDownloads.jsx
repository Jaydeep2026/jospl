import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import DownloadLink from '../../components/common/DownloadLink/DownloadLink';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';
import { DOWNLOAD_FILES } from '../../data/downloads';

export default function DocumentDownloads() {
  return (
    <>
      <Breadcrumb
        title="Downloads"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Investor Charter', to: '#' },
          { label: 'Downloads' },
        ]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content text-center">
              <h3>Investors' Download Centre</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                {DOWNLOAD_FILES.map((doc) => (
                  <DownloadLink key={doc.file} file={doc.file} label={doc.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
