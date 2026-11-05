import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';
import MissionBlock from '../../components/sections/MissionBlock/MissionBlock';
import ServicesArea from '../../components/sections/ServicesArea/ServicesArea';
import { COMPANY_INTRO, PRINCIPLES, PRINCIPLES_TITLE } from '../../data/whoWeAre';

export default function WhoWeAre() {
  return (
    <>
      <Breadcrumb
        title="Who We Are"
        items={[
          { label: 'Home', to: '/' },
          { label: 'About us', to: '#' },
          { label: 'Who We Are' },
        ]}
      />
      <AboutSection
        image={COMPANY_INTRO.image}
        imageAlt={COMPANY_INTRO.alt}
        title={COMPANY_INTRO.title}
        lead={COMPANY_INTRO.lead}
        text={COMPANY_INTRO.text}
      />
      <ServicesArea title={PRINCIPLES_TITLE} />
      <MissionBlock items={PRINCIPLES} />
      <HelpCta />
    </>
  );
}
