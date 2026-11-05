import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import HelpCta from '../../components/sections/HelpCta/HelpCta';
import ManagementTeam from '../../components/sections/ManagementTeam/ManagementTeam';
import { MANAGEMENT_TEAM } from '../../data/management';

export default function OurManagement() {
  return (
    <>
      <Breadcrumb
        title="Our Management"
        items={[
          { label: 'Home', to: '/' },
          { label: 'About us', to: '#' },
          { label: 'Our Management' },
        ]}
      />
      <ManagementTeam members={MANAGEMENT_TEAM} />
      <HelpCta />
    </>
  );
}
