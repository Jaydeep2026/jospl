import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function OtherPolicies() {
  return (
    <>
      <Breadcrumb
        title="Other Policies"
        items={[{ label: 'Home', to: '/' }, { label: 'Other Policies' }]}
      />
      <ContentSection className="pb-0">
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <h3>Risk Management System</h3>
              <h4>Definitions</h4>
              <h5>RMS (Risk Management System)</h5>
              <p>
                Helps Jas One Securities manage the risk of the company and clients from market
                volatility. Organizations face risks in different ways, and risk management is a
                tool to manage these risks in an uncertain environment.
              </p>
              <h5>Cash</h5>
              <p>The clear balance available in the customer's ledger account in our books.</p>
              <h5>Margin</h5>
              <p>
                The underlying stake provided by the customer in the form of cash, FDR, and/or stock
                to mitigate market (price) or settlement (auction) risk.
              </p>
              <h3>Nature of Transactions</h3>
              <h4>Setting Up Limits</h4>
              <h5>Equity Segment (Cash)</h5>
              <p>
                If a client wishes to use margin, they can place orders with a product code. Once
                the trade is filled, only a portion of the full applicable margin will be blocked.
                The full amount of margin is applicable at the time of order.
              </p>
              <h3>Risk Management</h3>
              <h5>Buying Options</h5>
              <p>The full premium margin amount is required.</p>
              <h5>Selling Options</h5>
              <p>Clients need to block their share for a particular time period.</p>
              <h5>Liability Disclaimer</h5>
              <p>
                Jas One Securities shall not be liable for any loss arising due to RMS selling on
                non-payment as well as loss in cases where RMS Selling may not be executed due to
                any reason.
              </p>
              <h5>Policy Changes</h5>
              <p>
                Jas One Securities reserves the right to change policies anytime within
                Exchange/FMC/SEBI regulations/guidelines.
              </p>
              <h3>Risk Management (Online Surveillance)</h3>
              <h5>Automated RMS</h5>
              <p>
                Jas One Securities uses a margin-based automated RMS. Total deposits of the clients
                are uploaded into the system, and exposure is based on the margin applicable for the
                respective security as per the VaR-based margining system of the stock exchange
                and/or RMS team-defined margin based on risk perception.
              </p>
              <h5>Credit for Sale</h5>
              <p>
                Clients can benefit from “credit for sale,” meaning they can sell shares held as
                margin by selecting the delivery option through the order entry window on the
                trading platform. The value of shares sold will be added to deposits, allowing for
                fresh exposure. If exposure is taken based on shares margin, payment is required
                before the exchange pay-in date.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
