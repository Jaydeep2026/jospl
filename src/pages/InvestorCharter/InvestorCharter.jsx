import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function InvestorCharter() {
  return (
    <>
      <Breadcrumb
        title="Investor Charter"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Investor Relations', to: '#' },
          { label: 'Investor Charter' },
        ]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content text-center">
              <h3>Annexure-A</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <h4>Vision:</h4>
              <p>
                To follow highest standards of ethics and compliances while facilitating the trading
                by clients in securities in a fair and transparent manner, so as to contribute in
                creation of wealth for investors.
              </p>
              <h4>Mission:</h4>
              <p>
                i) To provide high quality and dependable service through innovation, capacity
                enhancement and use of technology.
              </p>
              <p>
                ii) To establish and maintain a relationship of trust and ethics with the investors.
              </p>
              <p>iii) To observe highest standard of compliances and transparency.</p>
              <p>
                iv) To always keep protection of investors' interest' as goal while providing
                service.
              </p>
              <h4>Services provided to Investors</h4>
              <ul>
                <li>Execution of trades on behalf of investors.</li>
                <li>Issuance of Contract Notes.</li>
                <li>Issuance of intimations regarding margin due payments.</li>
                <li>Facilitate execution of early pay-in obligation instructions.</li>
                <li>Settlement of client's funds.</li>
                <li>
                  Intimation of securities held in Client Unpaid Securities Account (CUSA) Account.
                </li>
                <li>Issuance of retention statement of funds.</li>
                <li>Risk management systems to mitigate operational and market risk.</li>
                <li>
                  Facilitate client profile changes in the system as instructed by the client.
                </li>
                <li>Information sharing with the client w.r.t. exchange circulars.</li>
                <li>Redressal of Investor's grievances.</li>
              </ul>
              <h4>Rights of Investors</h4>
              <ul>
                <li>
                  <b>Ask</b> for and receive information from a firm about the work history and
                  background of the person handling your account, as well as information about the
                  firm itself.
                </li>
                <li>
                  <b>Receive</b> complete information about the risks, obligations, and costs of any
                  investment before investing.
                </li>
                <li>
                  <b>Receive</b> recommendations consistent with your financial needs and investment
                  objectives.
                </li>
                <li>
                  <b>Receive</b> a copy of all completed account forms and agreements.
                </li>
                <li>
                  <b>Receive</b> account statements that are accurate and understandable.
                </li>
                <li>
                  <b>Understand</b> the terms and conditions of transactions you undertake.
                </li>
                <li>
                  <b>Access</b> your funds in a timely manner and receive information about any
                  restrictions or limitations on access.
                </li>
                <li>
                  <b>Receive</b> complete information about maintenance or service charges,
                  transaction or redemption fees, and penalties.
                </li>
                <li>
                  <b>Discuss</b> your grievances with compliance officer of the firm and receive
                  prompt attention to and fair consideration of your concerns.
                </li>
                <li>
                  <b>Discuss</b> your grievances with compliance officer of the firm and receive
                  prompt attention to and fair consideration of your concerns.
                </li>
              </ul>
              <h4>Various activities of Stock Brokers with timelines</h4>
              <div className="table-responsive pb-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Sr. No</th>
                      <th>Activities</th>
                      <th>Expected Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>KYC entered into KRA System and CKYCR</td>
                      <td>10 days of account opening</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>Client Onboarding</td>
                      <td>Immediate, but not later than one week</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>Order execution</td>
                      <td>Immediately on receipt of order, but not later than the same day</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>Allocation of Unique Client Code</td>
                      <td>Before trading</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>Copy of duly completed Client Registration Documents to clients</td>
                      <td>
                        7 days from the date of upload of Unique Client Code to the Exchange by the
                        trading member
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>Issuance of contract notes</td>
                      <td>Within 24 hours of execution of trades</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>Collection of upfront margins from client</td>
                      <td>Before initiation of trade</td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>Issuance of intimations regarding other margin due payments</td>
                      <td>At the end of the T Day</td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>Settlement of client funds</td>
                      <td>
                        30 days/90 days for running account settlement (RAS) as per client
                        preference. If consent not given for RAS, within 24 hours of pay-out
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">10</td>
                      <td>Statement of Accounts for Funds, Securities and Commodities</td>
                      <td>Weekly basis (within four trading days of the following week)</td>
                    </tr>
                    <tr>
                      <td className="text-center">11</td>
                      <td>Issuance of retention statement of funds/commodities</td>
                      <td>Same day as date of settlement</td>
                    </tr>
                    <tr>
                      <td className="text-center">12</td>
                      <td>Issuance of Annual Global Statement</td>
                      <td>30 days from the end of the financial year</td>
                    </tr>
                    <tr>
                      <td className="text-center">13</td>
                      <td>Investor grievances redressal</td>
                      <td>30 days from the receipt of the complaint</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>DOs and DON'Ts for Investors</h4>
              <p>
                <b>DO's</b>
              </p>
              <ol>
                <li>Read all documents and conditions before signing the account opening form.</li>
                <li>Receive a copy of KYC, account opening documents, and Unique Client Code.</li>
                <li>
                  Read the product operational framework/timelines related to Trading and Clearing
                  &amp; Settlement processes.
                </li>
                <li>Receive all information about brokerage, fees, and other charges levied.</li>
                <li>
                  Register your mobile number and email ID in your trading, Demat, and bank accounts
                  to get regular transaction alerts.
                </li>
                <li>
                  If executed, receive a copy of Power of Attorney. However, PoA is not mandatory as
                  per SEBI Stock Exchanges. Carefully examine its scope before granting it.
                </li>
                <li>
                  Receive contract notes for trades executed, showing transaction price, brokerage,
                  GST, and STT separately, within 24 hours.
                </li>
                <li>Receive funds and securities/commodities within 24 hours from pay-out.</li>
                <li>
                  Verify trade details, contract notes, and statements of account, and approach
                  relevant authorities for any discrepancies.
                </li>
                <li>
                  Receive periodic account statements. If opted for running account settlement, it
                  must be settled by the stock broker as per the selected option (30 or 90 days).
                </li>
                <li>
                  In case of grievances, approach the stock broker, Stock Exchange, or SEBI for
                  resolution within prescribed timelines.
                </li>
              </ol>
              <p>
                <b>DON'Ts</b>
              </p>
              <ol>
                <li>Do not deal with unregistered stock brokers.</li>
                <li>Do not forget to strike off blanks in your account opening and KYC form.</li>
                <li>Do not submit an incomplete account opening and KYC form.</li>
                <li>
                  Do not forget to inform any change in information linked to your trading account
                  and obtain confirmation of updating in the system.
                </li>
                <li>
                  Do not transfer trading funds to anyone other than a stock broker. No payments
                  should be made in the name of a stock broker's employee.
                </li>
                <li>
                  Do not ignore emails/SMS received regarding trades from the Stock Exchange; raise
                  concerns if discrepancies are observed.
                </li>
                <li>Do not opt for digital contracts if unfamiliar with computers.</li>
                <li>Do not share your trading password.</li>
                <li>Do not fall prey to fixed/guaranteed returns schemes.</li>
                <li>
                  Do not fall for fraudsters sending emails and SMSs luring you into trading
                  stocks/securities with promises of huge profits.
                </li>
                <li>
                  Do not follow herd mentality for investments. Seek expert and professional advice.
                </li>
              </ol>
              <h4>ECN (Electronic Contract Notes)</h4>
              <p>
                In case, client opts to receive the contract note in electronic form, he shall
                provide an appropriate e-mail id to the Member. The client shall communicate to the
                Member any change in the email-id through a physical letter.
              </p>
              <p>
                If the client has opted for internet trading, the request for change of email id may
                be made through the secured access by way of client specific user id and password.
                The Member shall ensure that all ECNs sent through the e-mail shall be digitally
                signed, encrypted, non-tamper able and in compliance with the provisions of the IT
                Act, 2000. In case, ECN is sent through e-mail as an attachment, the attached file
                shall also be secured with the digital signature, encrypted and non-tamper able.
              </p>
              <p>
                The client shall note that non-receipt of bounced mail notification by the Member
                shall amount to delivery of the contract notes at the e-mail ID of the client.
              </p>
              <p>
                The Member shall retain ECN and acknowledgement of the e-mail in a soft and
                non-tamper able form in the manner prescribed by the exchange in compliance with the
                provisions of the IT Act, 2000 and as per the extant
                rules/regulations/circulars/guidelines issued by SEBI/Stock Exchanges from time to
                time. The proof of delivery i.e., log report generated by the system at the time of
                sending the contract notes shall be maintained by the Member for the specified
                period under the extant regulations of SEBI/stock exchanges. The log report shall
                provide the details of the contract notes that are not delivered to the
                client/e-mails rejected or bounced back. The Member shall take all possible steps to
                ensure receipt of notification of bounced mails by him at all times within the
                stipulated time period under the extant regulations of SEBI/stock exchanges.
              </p>
              <p>
                Receive the contract notes in the electronic form. Wherever the ECNs have not been
                delivered to the client or has been rejected (bouncing of mails) by the e-mail ID of
                the client, the Member shall send a physical contract note to the client within the
                stipulated time under the extant regulations of SEBI/stock exchanges and maintain
                the proof of delivery of such physical contract notes.
              </p>
              <p>
                In addition to the e-mail communication of the ECNs to the client, the Member shall
                simultaneously publish the ECN on his designated web-site, if any, in a secured way
                and enable relevant access to the clients and for this purpose, shall allot a unique
                user name and password to the client, with an option to the client to save the
                contract note electronically and/or take a print out of the same.
              </p>
              <h4>
                AP (Framework for Supervision of Authorised Persons (APs) &amp; Branches by Members)
              </h4>
              <p>
                Members shall ensure adequate scanning of social media to identify any mis-selling/
                assured returns or unauthorised schemes operated by AP including loan transactions.
                It is hereby reiterated that Members shall be mandatorily required to report any
                observed incidents related to assured returns or unauthorised schemes operated by
                the AP to the Exchange within one working day. On identification of any such case
                the Member shall inspect the AP concerned/ investigate the matter and take
                appropriate actions as required. Additionally, as communicated in Exchange circular
                ref no. NSE/COMP/ 56947 dated June 02, 2023, Members are required to take necessary
                actions, including withdrawal of approval on disciplinary grounds, withholding funds
                due to the APs until investor issues are resolved, sending alert messages to
                investors in the APs location, filing complaints with the relevant police station,
                and implementing all necessary measures to safeguard the interests of investors and
                the market. Members are required to maintain and provide documentary evidence of
                police complaints, press releases, advertisements issued to the market,
                communication logs of alert messages sent to investors, and other measures taken to
                safeguard interest of investors including disciplinary actions taken against the
                APs. All Members are advised to take note of the same and ensure compliance. The
                provisions of this circular shall come into effect from immediate basis.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
