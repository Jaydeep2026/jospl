import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function AdvisoryForInvestors() {
  return (
    <>
      <Breadcrumb
        title="Advisory for Investors"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Investor Relations', to: '#' },
          { label: 'Advisory for Investors' },
        ]}
      />
      <ContentSection className="pb-0">
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <ul>
                <li>
                  Ensure that pay-out of funds/securities is received in your account within 1
                  working day from the date of pay-out.
                </li>
                <li>
                  Be careful while executing the PoA (Power of Attorney) - specify all the rights
                  that the stock broker can exercise and timeframe for which PoA is valid. It may be
                  noted that PoA is not a mandatory requirement as per SEBI / Exchanges.
                </li>
                <li>
                  Register for online applications viz Speed-e and easiest provided by Depositories
                  for online delivery of securities as an alternative to PoA.
                </li>
                <li>
                  Ensure that you receive Contract Notes within 24 hours of your trades and
                  Statement of Account at least once in a quarter from your Stock Broker
                </li>
                <li>
                  Please note that securities provided by you towards margin are not permitted to be
                  pledged by your Stock Broker for raising funds.
                </li>
                <li>
                  If you have opted for running account, please ensure that the stock broker settles
                  your account regularly and, in any case, not later than 90 days (or 30 days if you
                  have opted for 30 days settlement).
                </li>
                <li>Do not keep funds and securities idle with the Stock Broker.</li>
                <li>
                  Regularly login into your account to verify balances and verify the Demat
                  statement received from depositories for correctness.
                </li>
                <li>
                  Check messages sent by Exchanges on a monthly basis regarding funds and securities
                  balances reported by the trading member and immediately raise a concern if you
                  notice a discrepancy.
                </li>
                <li>
                  Always keep your contact details viz Mobile number / Email ID updated with the
                  stock broker. You may take up the matter with Stock Broker / Exchange if you are
                  not receiving the messages from Exchange / Depositories regularly.
                </li>
                <li>
                  If you observe any discrepancies in your account or settlements, immediately take
                  up the same with your stock broker and if the Stock Broker does not respond, with
                  the Exchange/Depositories
                </li>
              </ul>
              <h4>Media coverage and Press releases issued to caution investors</h4>
              <p>
                Exchange cautions and advice investors NOT to deal with any unscrupulous persons/
                entities operating through Indian and International mobile numbers, through social
                media platforms like WhatsApp Groups, Telegram Channels, Facebook, Instagram
                Channels, etc. falsely claiming to offer trading opportunities through FPI or
                Foreign Institutional Investor (FII) Sub-accounts or Institutional Accounts with
                special privileges and also claiming to be associated with reputed financial
                institutions, showcasing fake certificates purportedly issued by SEBI/ Exchanges.
              </p>
              <p>
                Exchange also cautions and advice investors about unauthorized market practices such
                as assured/guaranteed returns in stock market, offerings to handle trading account
                of investor by asking investors to share their user ID and password by certain
                individuals or entities. Exchange, on being notified about such practice cautions
                the market participants by way of press releases against such schemes/ products
                offered.
              </p>
              <h4>The activities of such persons/ entities may include:</h4>
              <ul>
                <li>Claims of being associated with organisations/individuals of repute,</li>
                <li>
                  Providing unregulated trading platforms and unauthorized trading applications
                  which resemble or impersonate Applications/Websites of registered trading members,
                </li>
                <li>
                  Luring to join/create "Institutional account" to get guaranteed/high returns
                  without the need for an official trading or Demat account,
                </li>
                <li>
                  Offering assured/guaranteed returns on Investment in Capital/Forex/Commodities
                  market,
                </li>
                <li>
                  Offering to handle trading account of investors by asking investors to share their
                  login credentials (including passwords),
                </li>
                <li>
                  Claiming to facilitate pre-IPO subscriptions with false promises of assured
                  profits,
                </li>
                <li>Offering dabba/ illegal trading services,</li>
                <li>
                  Enticing victims through online trading courses, seminars and mentorship programs
                  in the stock market, leveraging social media platforms as well as live broadcasts.
                </li>
              </ul>
              <p>
                The investors may note that for any kind of disputes related to such prohibited
                schemes the following recourses will NOT be available to investors:
              </p>
              <ul>
                <li>Benefits of investor protection under Exchange's Jurisdiction</li>
                <li>Exchange dispute resolution mechanism</li>
                <li>Investor grievance redressal mechanism administered by Exchange.</li>
              </ul>
              <h4>
                <b>SCORES 2.0</b>
                <br />
                New Technology to strengthen SEBI Complaint Redressal System for Investors
              </h4>
              <p>
                In its continuous pursuit of protection of interests of investors in the securities
                market, SEBI has launched the new version of the SEBI Complaint Redress system
                (SCORES 2.0). The new version of SCORES strengthens the investor complaint redress
                mechanism in the securities market by making the process more efficient through auto
                routing, auto escalation, monitoring by the ‘Designated Bodies and reduction of
                timelines The new SCORES system has also been made more user friendly. SCORES is an
                online system where investors in securities market can lodge their complaints
                through web URL and an App. SEBI vide Circular with reference number
                SEBI/HO/OIAE/IGRD/CIR/P/2023/156 dated September 20, 2023 had appointed the
                Designated. Bodies and defined the roles and responsibilities of the SEBI regulated
                entities and the Designated Bo dies.
              </p>
              <p>
                The website URL for SCORES 2.0 is{' '}
                <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
                  https://scores.sebi.gov.in
                </a>
                <br />
                The salient features of SCORES 2.0 are as follows:
              </p>
              <ol>
                <li>
                  Reduced and uniform timelines for redressal of investor complaints across the
                  Securities Market i.e., 21 Calendar days from date of receipt of complaint.
                </li>
                <li>
                  Introduction of auto routing of complaints to the concerned regulated entity so as
                  to eliminate time lapses, if any, in the flow of complaints.
                </li>
                <li>
                  Monitoring of the timely redressal of the investors' complaints by the Designated
                  Bodies'.
                </li>
                <li>
                  Providing two levels of review: First review by the 'Designated Body' if the
                  investor is dissatisfied with the resolution provided by the concerned regulated
                  entity. Second review by SEBI if the investor is still dissatisfied after the
                  first review.
                </li>
                <li>
                  Introduction of automescalation of complaint to the next level in case of non
                  adherence to the prescribed timelines by the regulated entity or the Designated
                  Body as the case may be.
                </li>
                <li>
                  Integration with KYC Registration Agency database for easy registration of the
                  investor on to SCORES.
                </li>
              </ol>
              <p>
                Investors can lodge complaints only through new version of SCORES i.e.{' '}
                <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
                  https://scores.sebi.gov.in
                </a>{' '}
                from April 01, 2024.
              </p>
              <p>
                In the old SCORES i.e.,{' '}
                <a href="https://scores.gov.in" target="_blank" rel="noreferrer">
                  https://scores.gov.in
                </a>{' '}
                investors would not be able to lodge any new complaint. However, Investors can check
                the status of their complaints already lodged in old SCORES and pending in the old
                SCORES. Further, the disposed of complaints filed in the old SCORES can be viewed at
                SCORES 2.0
              </p>
              <h4>To register a complaint online on SCORES portal:</h4>
              <ul>
                <li>Click on "Complaint Registration" under "Investor Corner".</li>
                <li>Fill the complaint registration form containing personal details</li>
                <li>Provide the complaint details</li>
                <li>
                  Ensure that you fill the mandatory fields on the form. These fields include Name,
                  Address for correspondence, State, Email Address of Investor and PAN Card no. in
                  case of complaints against the broker.
                </li>
                <li>Select the correct complaint category, entity name, nature of complaint.</li>
                <li>Provide complaint details in brief (up to 1000 characters).</li>
                <li>
                  A PDF document (up to 2MB of size for each nature of complaint) can also be
                  attached along with the complaint as supporting document. On successful submission
                  of complaint, system generated unique registration number will be displayed on the
                  screen which may be noted for future correspondence. An email acknowledging the
                  complaint with complaint registration number will also be sent to the email id
                  entered in the complaint registration form. In case, you are not able to register
                  a complaint online, you can send your complaint through post to any of the SEBI
                  offices whose addresses are given at SEB Website on{' '}
                  <a
                    href="http://www.sebi.gov.in/cms/sebi_data/templates/SebiAddresses.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.sebi.gov.in/cms/sebi_data/templates/SebiAddresses.html
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-center justify-content-center">
          <div className="col-lg-12">
            <img src="/assets/img/complaint-process.jpg" className="mx-auto mb-5" />
          </div>
        </div>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <h4>
                Timelines for complaint resolution process at Stock Exchanges against stock brokers
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Sr.No</th>
                      <th>Type of Activity</th>
                      <th>Timelines for Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Receipt of Complaint</td>
                      <td>Day of complaint (C Day).</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        Additional information sought from the investor, if any, and provisionally
                        forwarded to stock broker.
                      </td>
                      <td>C+7 Working days.</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>Registration of the complaint and forwarding to the stock broker.</td>
                      <td>C+7 Working days.</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>Amicable Resolution.</td>
                      <td>T+15 Working Days</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>
                        Refer to Grievance Redressal Committee (GRC), in case of no amicable
                        resolution.
                      </td>
                      <td>T+16 Working Days</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>Complete resolution process post GRC</td>
                      <td>T+30 Working Days.</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>
                        In case where the GRC Member requires additional information, GRC order
                        shall be completed within
                      </td>
                      <td>T+45 Working Days.</td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>Implementation of GRC Order.</td>
                      <td>
                        On receipt of GRC Order, if the order is in favour of the investor, debit
                        the funds of the stock broker. Order for debit is issued immediately or as
                        per the directions given in GRC order.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>
                        In case the stock broker is aggrieved by the GRC order, will provide
                        intention to avail arbitration.
                      </td>
                      <td>Within 7 days from receipt of order.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>ODR PORTAL</h4>
              <p>
                ODR Portal could be accessed, if unsatisfied with the response. Your attention is
                drawn to the SEBI circular no. SEBI/HO/ΟΙΑΕ/ΟΙAE_IAD- 1/P/CIR/2023/131 dated July
                31, 2023, on "Online Resolution of Disputes in the Indian Securities Market". A
                common Online Dispute Resolution Portal ("ODR Portal") which harnesses conciliation
                and online arbitration for resolution of disputes arising in the Indian Securities
                Market has been established.
              </p>
              <p>
                ODR Portal can be accessed via the following link -{' '}
                <a href="https://smartodr.in/" target="_blank" rel="noreferrer">
                  https://smartodr.in/
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
