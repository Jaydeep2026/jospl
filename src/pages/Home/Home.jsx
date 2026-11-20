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
        image="/assets/img/welcome-money.jpg"
        imageAlt="Coins with growing plants"
        eyebrow="Invest now. Invest always."
        title="A Trusted Financial Partner for Nearly 30 Years"
        lead="Jas-One Securities Pvt Ltd is a trusted financial services firm with nearly 30 years of experience in the industry."
        text="We specialize in providing seamless investing and trading solutions in the equity markets on the NSE, offering a secure and efficient platform for both seasoned traders and new investors. Whether you're looking for short-term trading opportunities or long-term investment growth, we provide the resources and support needed to navigate the market with confidence."
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
