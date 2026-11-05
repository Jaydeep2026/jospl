import AboutSection from '../../components/sections/AboutSection/AboutSection';
import HeroBanner from '../../components/sections/HeroBanner/HeroBanner';
import HelpCta from '../../components/sections/HelpCta/HelpCta';
import WorkProcess from '../../components/sections/WorkProcess/WorkProcess';
import { HOME_STEPS } from '../../data/accountSteps';
import { HOME_INTRO } from '../../data/home';

export default function Home() {
  return (
    <>
      <HeroBanner title="Invest and Trade with us in the NSE Equity Market" videoId="263gAd_4IDM" />

      <AboutSection
        image={HOME_INTRO.image}
        imageAlt={HOME_INTRO.alt}
        title={HOME_INTRO.title}
        lead={HOME_INTRO.lead}
        text={HOME_INTRO.text}
        action={{ to: '/who-we-are', label: 'Learn More' }}
      />

      <WorkProcess
        title="Open Account in 3 Steps"
        image="/assets/img/account-opening.jpg"
        imageAlt="Account Opening"
        steps={HOME_STEPS}
      />

      <HelpCta />
    </>
  );
}
