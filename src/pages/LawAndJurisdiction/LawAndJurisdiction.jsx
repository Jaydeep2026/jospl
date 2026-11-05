import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import ContentSection from '../../components/sections/AboutSection/ContentSection';
import HelpCta from '../../components/sections/HelpCta/HelpCta';

export default function LawAndJurisdiction() {
  return (
    <>
      <Breadcrumb
        title="Law & Jurisdiction"
        items={[{ label: 'Home', to: '/' }, { label: 'Law & Jurisdiction' }]}
      />
      <ContentSection>
        <div className="row align-center justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <p>
                1. In addition to the specific rights set out in this document, the Member,
                Authorised Person and the client shall be entitled to exercise any other rights
                which the Member or the client may have under the Rules, Bye-laws and Regulations of
                the Exchanges in which the client chooses to trade and circulars/notices issued
                thereunder or Rules and Regulations of SEBI.
              </p>
              <p>
                2. The provisions of this document shall always be subject to Government
                notifications, any rules, regulations, guidelines and circulars/notices issued by
                SEBI and Rules, Regulations and Bye laws of the relevant stock ex-changes, where the
                trade is executed, that may be in force from time to time.
              </p>
              <p>
                3. The Member and the client shall abide by any award passed by the Arbitrator(s)
                under the Arbitration and Conciliation Act, 1996. However, there is also a provision
                of appeal within the stock exchanges, if either party is not satisfied with the
                arbitration award.
              </p>
              <p>
                4. Words and expressions which are used in this document but which are not defined
                herein shall, unless the context otherwise requires, have the same meaning as
                assigned thereto in the Rules, Byelaws and Regulations and circulars/notices issued
                thereunder of the Exchanges/SEBI.
              </p>
              <p>
                5. All additional voluntary clauses/document added by the Member should not be in
                contravention with rules/regulations/notices/circulars of Exchanges/SEBI. Any
                changes in such voluntary clauses/document(s) need to be preceded by a notice of 15
                days. Any changes in the rights and obligations which are specified by
                Exchanges/SEBI shall also be brought to the notice of the clients.
              </p>
              <p>
                6. If the rights and obligations of the parties hereto are altered by virtue of
                change in Rules and regulations of SEBI or Bye-laws, Rules and Regulations of the
                relevant stock Exchanges where the trade is executed, such changes shall be deemed
                to have been incorporated herein.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      <HelpCta />
    </>
  );
}
