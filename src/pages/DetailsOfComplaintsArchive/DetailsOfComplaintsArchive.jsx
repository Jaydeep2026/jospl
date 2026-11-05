import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function DetailsOfComplaintsArchive() {
  return (
    <>
      <Breadcrumb
        title="Details of Complaints"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Investor Charter', to: '#' },
          { label: 'Details of Complaints' },
        ]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center pb-0">
          <div className="col-lg-8">
            <div className="content text-center">
              <h3>Grievance Redressal / Escalation Matrix</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <div className="table-responsive mb-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>
                        Received
                        <br />
                        from
                      </th>
                      <th>
                        Pending
                        <br />
                        at the End
                      </th>
                      <th>Received</th>
                      <th>Resolved</th>
                      <th>
                        Total
                        <br />
                        Pending
                      </th>
                      <th>
                        Pending
                        <br />
                        Complaints
                      </th>
                      <th>
                        Avg. Resolution
                        <br />
                        Time (Days)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Directly from Investors</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>SEBI (SCORES)</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Smart ODR</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>-</td>
                    </tr>
                    <tr className="table-footer">
                      <td colSpan="2">
                        <b>Grand Total</b>
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content text-center">
              <h3>Trend of monthly disposal of complaints</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <div className="table-responsive mb-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Month</th>
                      <th>
                        Carried Forward
                        <br />
                        from Previous Month
                      </th>
                      <th>Received</th>
                      <th>Resolved</th>
                      <th>Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>February 2026</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>January 2026</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>December 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>November 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>October 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>September 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>August 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>July 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>June 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>May 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>April 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>March 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>February 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>January 2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>December 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>November 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>October 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>September 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>August 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>July 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>June 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>May 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>April 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>March 2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content text-center">
              <h3>Trend of annual disposal of complaints</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <div className="table-responsive mb-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Year</th>
                      <th>
                        Carried Forward
                        <br />
                        from Previous Year
                      </th>
                      <th>Received</th>
                      <th>Resolved</th>
                      <th>Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2025-2026</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2024-2025</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2023-2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <h4>
                Handling of Investor's claims/complaints in case of default of a Trading
                Member/Clearing Member (TM/CM)
              </h4>
              <p>
                <b>
                  Following steps are carried out by Stock Exchange for benefit of investor, in case
                  stock broker defaults:
                </b>
              </p>
              <ul>
                <li>
                  Circular is issued to inform about declaration of Stock Broker as Defaulter.
                </li>
                <li>
                  Information of defaulter stock broker is disseminated on Stock Exchange website.
                </li>
                <li>
                  Public Notice is issued informing declaration of a stock broker as defaulter and
                  inviting claims within specified period.
                </li>
                <li>
                  Intimation to clients of defaulter stock brokers via emails and SMS for
                  facilitating lodging of claims within the specified period.
                </li>
              </ul>
              <p>
                <b>
                  Following information is available on Stock Exchange website for information of
                  investors:
                </b>
              </p>
              <ul>
                <li>Norms for eligibility of claims for compensation from IPF.</li>
                <li>Claim form for lodging claim against defaulter stock broker.</li>
                <li>FAQ on processing of investors' claims against Defaulter stock broker.</li>
                <li>Provision to check online status of client's claim.</li>
                <li>
                  Level 3-The complaint not redressed at Stock Broker/Stock Exchange level, may be
                  lodged with SEBI on SCORES (a web based centralized grievance redressal system of
                  SEBI) @{' '}
                  <a
                    href="https://scores.gov.in/scores/Welcome.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://scores.gov.in/scores/Welcome.html
                  </a>
                  .
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
