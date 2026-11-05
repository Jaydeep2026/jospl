import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function InactiveTradingAccount() {
  return (
    <>
      <Breadcrumb
        title="Treatment of Inactive Trading Account"
        items={[{ label: 'Home', to: '/' }, { label: 'Treatment of Inactive Trading Account' }]}
      />
      <ContentSection className="pb-0">
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <p>This document refers to Exchange circulars:</p>
              <ul>
                <li>
                  <strong>NSE/INSP/43488</strong> dated February 10, 2020
                </li>
                <li>
                  <strong>NSE/INSP/46506</strong> dated December 01, 2020
                </li>
                <li>
                  <strong>NSE/INSP/49743</strong> dated September 27, 2021
                </li>
              </ul>
              <p>
                These circulars provide guidelines on the **Treatment of Inactive Trading
                Accounts**.
              </p>
              <h3>Definition of Inactive Trading Account</h3>
              <p>
                An inactive trading account is defined as an account where none of the following
                activities have been carried out by the client for the last **24 (Twenty-Four)
                months**:
              </p>
              <p>
                Trading or participation in OFS (Offer for Sale), buy-back, or Open Offer across any
                of the exchanges/segments through the same Member.
              </p>
              <p>Transactions in</p>
              <ul>
                <li>Cash/Equity Derivative</li>
                <li>Currency Derivative</li>
                <li>Commodities Derivative</li>
                <li>EGR (Electronic Gold Receipt)</li>
                <li>Debt/Online Bond Platform</li>
                <li>Execution Only Platform</li>
                <li>
                  Any other segment as permitted by SEBI/stock exchanges from time to time.
                  <p></p>
                </li>
              </ul>
              <p>
                Modification/updation of email ID, mobile number, or address in the KYC record of
                the client through the same Member, ensuring the details are uploaded to KRA (KYC
                Registration Agency) for validated/registered status.
              </p>
              <h3>Reactivation of an Inactive Trading Account</h3>
              <p>
                If a client flagged as **inactive** seeks to reactivate their trading account, the
                Trading Member must comply with the following requirements:
              </p>
              <ul>
                <li>
                  Mandatory **In-Person Verification (IPV)** or **Video In-Person Verification
                  (VIPV)** as specified in the **SEBI Master Circular on KYC** dated **October 12,
                  2023**.
                </li>
              </ul>
              <h3>Reference Circulars</h3>
              <p>For further details, refer to the following circulars:</p>
              <ul>
                <li>
                  <strong>NSE/INSP/43488</strong>
                </li>
                <li>
                  <strong>NSE/INSP/46506</strong>
                </li>
                <li>
                  <strong>NSE/INSP/49743</strong>
                </li>
                <li>
                  <strong>NSE/INSP/64718</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
