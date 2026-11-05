import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function GrievanceRedressal() {
  return (
    <>
      <Breadcrumb
        title="Investors Grievances"
        items={[
          { label: 'Home', to: '/' },
          { label: 'Investor Charter', to: '#' },
          { label: 'Investors Grievances' },
        ]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
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
                      <th>Contact Person</th>
                      <th>Designation</th>
                      <th>Registered Address</th>
                      <th>Contact No</th>
                      <th>Email ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jasvant Parikh</td>
                      <td>Chairman</td>
                      <td>Plot No. C-107, TTC Industrial Area MIDC Pawane Turbhe- 400705</td>
                      <td>022-40327393</td>
                      <td>jasone@janamcorp.com</td>
                    </tr>
                    <tr>
                      <td>Chirag Parikh</td>
                      <td>Managing Director</td>
                      <td>Plot No. C-107, TTC Industrial Area MIDC Pawane Turbhe- 400705</td>
                      <td>022-40327393</td>
                      <td>chirag@janamcorp.com</td>
                    </tr>
                    <tr>
                      <td>Anjali Magare</td>
                      <td>Compliance Officer</td>
                      <td>Plot No. C-107, TTC Industrial Area MIDC Pawane Turbhe- 400705</td>
                      <td>7021688292</td>
                      <td>admin@jospl.com</td>
                    </tr>
                    <tr>
                      <td>Trupti Hape</td>
                      <td>Customer Care</td>
                      <td>C-107, TTC Industrial Area MIDC Pawane Turbhe- 400705</td>
                      <td>8169259317</td>
                      <td>info@jospl.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="content">
              <h4>The Grievance Redressal policy follows the following principles:</h4>
              <ul>
                <li>Investors will be treated fairly at all times</li>
                <li>
                  Complaints raised by Investors will be dealt with courtesy and in a timely manner
                </li>
              </ul>
              <p>
                We have dedicated Client Servicing Team which is responsible for timely and prompt
                communication with our clients, while having an open attitude towards service
                recovery, and providing alternate solutions to investors, thus ensuring healthy
                relationships with our clients. The Client Servicing Team 7021688292.
              </p>
              <h4>Grievance Redressal Mechanism:</h4>
              <p>
                Client's queries / complaints may arise due to lack of understanding or a deficiency
                of service experienced by clients. Deficiency of service may include lack of
                explanation, clarifications.
              </p>
              <ol>
                <li>
                  Clients can call on our customer care team available from Mon-Fri 9am to 5pm
                  Contact no. 7021688292 - Client can expect the reply to their concern from
                  customer care team within 24 to 48 working hours.
                </li>
                <li>
                  The Investor may write to <a href="mailto:admin@jospl.com">admin@jospl.com</a> and
                  the client can expect a reply/resolution within 10 business days after approaching
                  the Client Servicing Team.
                </li>
                <li>
                  In case you are not satisfied with our response you can lodge your grievance with
                  SEBI at{' '}
                  <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer">
                    https://scores.sebi.gov.in/
                  </a>{' '}
                  or you may also write to any of the offices of SEBI.
                </li>
                <li>
                  In case you are not satisfied with our response you can lodge your grievance at{' '}
                  <a href="https://smartodr.in/" target="_blank" rel="noreferrer">
                    https://smartodr.in/
                  </a>
                  .
                </li>
              </ol>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
