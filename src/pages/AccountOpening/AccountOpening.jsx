import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import WorkProcess from '../../components/sections/WorkProcess/WorkProcess';
import { ACCOUNT_OPENING_STEPS } from '../../data/accountSteps';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function AccountOpening() {
  return (
    <>
      <Breadcrumb
        title="Account Opening"
        items={[{ label: 'Home', to: '/' }, { label: 'Account Opening' }]}
      />
      <WorkProcess title="Open Account in 3 Steps" steps={ACCOUNT_OPENING_STEPS} />
      <ContentSection className="pt-5">
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <ul>
                <li>
                  Once all the documents are ready, e-mail the soft copy of all the forms to
                  accounts@jospl.com.
                </li>
                <li>The forms will be reviewed in case any corrections are required.</li>
                <li>
                  After the forms are reviewed, courier the documents and a cheque in favor of
                  Jas-One Securities Pvt Limited for the following amount: <b>₹500</b> towards
                  Equity trading account opening charges.
                </li>
              </ul>
              <h4>Courier all the documents to:</h4>
              <ul>
                <li>
                  Jas-One Securities Pvt Ltd, C-107, TTC Industrial Estate, Pawane, Turbhe 400705
                </li>
                <li>
                  To know about charges involved while trading and investing, call us on 02240327393
                </li>
              </ul>
              <div className="row align-center justify-content-between">
                <div className="col-lg-7">
                  <h4>Bank Details / QR for Amount Transfers:</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Bank Name</td>
                          <td>HDFC BANK</td>
                        </tr>
                        <tr>
                          <td>Account Number</td>
                          <td>00010340001855</td>
                        </tr>
                        <tr>
                          <td>IFSC Code</td>
                          <td>JAS ONE SECURITIES PVT LTD</td>
                        </tr>
                        <tr>
                          <td>IFSC Code</td>
                          <td>HDFC0000001</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <img
                    src="/assets/img/paymentqr-jasone.png"
                    className="img-fluid img-thumbnail"
                    alt="jasone.brk@validhdfc "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
