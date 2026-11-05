import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function RiskDisclosure() {
  return (
    <>
      <Breadcrumb
        title="Risk Disclosure"
        items={[{ label: 'Home', to: '/' }, { label: 'Risk Disclosure' }]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <h4>
                The purpose of the document is to provide essential information about the Services
                in a manner to assist and enable the prospective client/client in making an informed
                decision for engaging in our services before onboarding.
              </h4>
              <p>
                <b>1. History, Present business and Background:</b>
                <br />
                Jas-One Securities is registered with SEBI as Broker with Registration No.
                INB230643536. The he got its registration on Date 26th October 1996.
              </p>
              <p>
                <b>2. Terms and conditions of Stock Broking Services</b>
                <br />
                The Research Services will be limited to providing independent research
                recommendation and shall not be involved in any advisory or portfolio allocation
                services.
                <br />
                We never guarantee the returns on the recommendation provided. Investor shall take
                note that Investment/trading in stocks/Index or other securities is always subject
                to market risk. Past performance is never a guarantee of same future results. The
                Broker shall not be responsible for any loss to the Investors.
              </p>
              <p>
                <b>3. Details of its associates</b>
                <br />
                No associates
              </p>
              <p>
                <b>4. Disclosures with respect to Research and Recommendations Services</b>
              </p>
              <ul>
                <li>
                  The Broker or any of its officer/employee does not trade in securities which are
                  subject matter of recommendation.
                </li>
                <li>
                  There are no actual or potential conflicts of interest arising from any connection
                  to or association with any issuer of products/ securities, including any material
                  information or facts that might compromise its objectivity or independence in the
                  carrying on of Broker services. Such conflict of interest shall be disclosed to
                  the client as and when they arise.
                </li>
                <li>
                  Broker or its employee or its associates have not received any compensation from
                  the company which is subject matter of recommendation.
                </li>
                <li>
                  Broker or its employee or its associates have not managed or co-managed the public
                  offering of any company.
                </li>
                <li>
                  Broker or its employee or its associates have not received any compensation for
                  investment banking or merchant banking of brokerage services from the subject
                  company.
                </li>
                <li>
                  Broker or its employee or its associates have not received any compensation for
                  products or services other than above from the subject company.
                </li>
                <li>
                  Broker or its employee or its associates have not received any compensation or
                  other benefits from the Subject Company or 3rd party in connection with the
                  research report/ recommendation.
                </li>
                <li>
                  The subject company was not a client of Broker or its employee or its associates
                  during twelve months preceding the date of recommendation services provided.
                </li>
                <li>
                  Brokers or its employee or its associates has not served as an officer, director
                  or employee of the subject company.
                </li>
                <li>
                  Brokers has not been engaged in market making activity of the subject company.
                </li>
              </ul>
              <p>
                <b>5. Standard Warning</b>
                <br />
                "Investment in securities market is subject to market risks. Read all the related
                documents carefully before investing."
              </p>
              <p>
                <b>6. Disclaimer</b>
                <br />
                "Registration granted by SEBI, and certification from NISM in no way guarantee
                performance of the Broker or provide any assurance of returns to investors."
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
