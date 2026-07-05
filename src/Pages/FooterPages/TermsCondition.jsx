import React from "react";
import { Helmet } from "react-helmet-async";

const TermsCondition = () => {
  return (
    <section className="relative px-4 overflow-hidden text-white bg-black py-14 md:px-8">

      <Helmet>
        <title>Terms & Conditions | Faces Solutions</title>
      </Helmet>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-red-600 opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-red-500 opacity-10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl p-6 mx-auto border rounded-2xl bg-white/5 border-white/10 backdrop-blur-md md:p-10">

        {/* Header */}
        <header className="pb-6 mb-10 border-b border-white/10">
          <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-red-500 to-white bg-clip-text">
            Terms & Conditions (Faces Solutions)
          </h1>
        </header>

        {/* 1 */}
        <Section title="1. Definitions">
          <p><strong className="text-white">“You” / “Client”</strong> refers to any individual, individuals, business or organisation using the services provided by Faces Solutions.</p>
          <p><strong className="text-white">“We”, “Us”, “Our”</strong> refers to Faces Solutions.</p>
          <p><strong className="text-white">“Project”</strong> refers to any work conducted or service provided by Faces Solutions at the Client’s request, as described in the order confirmation email.</p>
          <p><strong className="text-white">“Domain”</strong> refers to the website address specified by the Client.</p>
          <p><strong className="text-white">“Hosting”</strong> refers to the annual service fee required to keep the Client’s website active online.</p>
          <p><strong className="text-white">“Content” / “Material”</strong> refers to all text, images, graphics and data supplied by the Client or created by Faces Solutions for the Project.</p>
        </Section>

        {/* 2 */}
        <Section title="2. General Terms">
          <p>2.1 The contract between Faces Solutions and the Client shall be governed by these Terms & Conditions.</p>
          <p>2.2 Any amendments to these Terms & Conditions shall have no effect unless confirmed in writing by Faces Solutions via email or post.</p>
          <p>2.3 Full details of the work to be carried out are outlined in Faces Solutions’ order confirmation email.</p>
        </Section>

        {/* 3 */}
        <Section title="3. Development Stages & Delivery">
          <p>3.1 Work will commence only after receipt of the agreed deposit and signed contract or written order confirmation.</p>
          <p>3.2 Faces Solutions will provide unlimited design revisions until the Client confirms satisfaction, at no additional cost.</p>
          <p>3.3 The Client must provide written approval (via email) of the final design. Any changes requested after approval will incur additional charges.</p>
          <p>3.4 Upon design approval, the project will be converted into a functional website and the second payment will become due.</p>
          <p>3.5 The Client will be asked to review all internal pages and functionality. Changes will be made based on feedback provided.</p>
          <p>3.6 Final delivery is deemed complete once all agreed requirements have been fulfilled.</p>
        </Section>

        {/* 4 */}
        <Section title="4. Warranty">
          <p>4.1 Faces Solutions provides a 30-day warranty from the date of final delivery.</p>
          <p>4.2 The warranty includes minor adjustments, functional fixes, minor content changes, error corrections and limited training or support where applicable.</p>
          <p>4.3 Any issues reported within the warranty period will be corrected free of charge.</p>
          <p>4.4 After the warranty period expires, all changes and support will be charged at £20.00 per hour.</p>
        </Section>

        {/* 5 */}
        <Section title="5. Timeline & Payment Schedule">
          <p>5.1 A development schedule will be created after receipt of the initial deposit.</p>
          <p>5.2 The first design concept will be presented within 7 working days.</p>
          <p>5.3 Delays in Client feedback may result in delays to project completion.</p>
          <p>5.4 Completion dates provided are estimates only and not guaranteed.</p>
          <p>5.5 Faces Solutions will notify the Client in advance of any significant delays and provide a valid reason.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Content & Graphics Materials">
          <p>6.1 The Client is responsible for ensuring all supplied content complies with copyright laws.</p>
          <p>6.2 Faces Solutions shall not be held liable for any copyright infringement arising from Client-supplied materials.</p>
          <p>6.3 Any content created by Faces Solutions will be royalty-free unless otherwise agreed.</p>
        </Section>

        {/* 7 */}
        <Section title="7. Termination & Refund Policy">
          <p>
            7.1 The Client may terminate the agreement at any time by providing written notice to{" "}
            <span className="text-red-400 underline">support@facessolutions.tech</span>.
          </p>

          <ul className="pl-6 my-4 space-y-2 list-disc text-white/70">
            <li>Within 7 days of deposit receipt: Faces Solutions retains 50% of the deposit</li>
            <li>After 7 days but before design demonstration: Faces Solutions retains 100% of the deposit</li>
            <li>After design demonstration: full project payment becomes due</li>
          </ul>

          <p className="text-white/70">7.2 Upon termination, the Client may request any completed work to date.</p>

          <p className="text-white/70">7.3 Faces Solutions reserves the right to terminate the agreement and invoice in full if:</p>
          <ul className="pl-6 my-4 space-y-2 list-disc text-white/70">
            <li>Unlawful requests are made</li>
            <li>Requests exceed agreed scope financially or technically</li>
            <li>No communication is received for more than 28 days</li>
            <li>Payments remain overdue for more than 14 days</li>
          </ul>

          <p className="text-white/70">7.4 All instructions must be provided in writing (email or document). Verbal instructions will not be accepted.</p>
          <p className="text-white/70">7.5 Restarting a terminated project requires full payment plus an additional restart fee.</p>
        </Section>

        {/* 8 */}
        <Section title="8. Ownership & Intellectual Property">
          <p className="text-white/70">8.1 All website assets remain the property of Faces Solutions until full payment is received.</p>
          <p className="text-white/70">8.2 Ownership is transferred to the Client once final payment is cleared.</p>
          <p className="text-white/70">8.3 After the warranty period, the Client is responsible for backups unless a maintenance plan is active.</p>
          <p className="text-white/70">8.4 Faces Solutions may display branding and include completed projects in its portfolio.</p>
          <p className="text-white/70">8.5 Branding removal or portfolio exclusion must be requested in writing and may incur a fee.</p>
        </Section>

        {/* 9 */}
        <Section title="9. Service & Maintenance">
          <p className="text-white/70">9.1 Support is not provided beyond the warranty period unless a service plan is purchased.</p>
          <p className="text-white/70">9.2 Without a service plan, the Client assumes responsibility for security, updates and data loss.</p>
          <p className="text-white/70">9.3 Faces Solutions is not liable for malicious attacks or viruses.</p>
          <p className="text-white/70">9.4 Ongoing support may be provided at additional cost.</p>
        </Section>

        {/* 10 */}
        <Section title="10. Domain & Hosting Renewal">
          <p className="text-white/70">9.1 Domain and hosting renewals are the Client’s responsibility.</p>
          <p className="text-white/70">9.2 Faces Solutions is not responsible for data loss caused by non-renewal.</p>
          <p className="text-white/70">9.3 Hosting data is retained for 14 days after expiration.</p>
          <p className="text-white/70">9.4 After 14 days, data may be permanently deleted.</p>
          <p className="text-white/70">9.5 Domain renewal after expiration cannot be guaranteed.</p>
          <p className="text-white/70">9.6 Renewal reminders will be sent 7 days prior to expiration.</p>
        </Section>

        {/* 11 */}
        <Section title="11. Recurring Payments">
          <p className="text-white/70">11.1 Recurring payments are billed monthly or yearly depending on service selection.</p>
          <p className="text-white/70">11.2 Cancellation requires one month’s written notice.</p>
          <p className="text-white/70">
            11.3 Cancellation requests must be sent to{" "}
            <span className="text-red-400 underline">support@facessolutions.tech</span>.
          </p>
          <p className="text-white/70">11.4 Cancellation confirmation will be issued within 24–48 hours.</p>
        </Section>

        {/* 12 */}
        <Section title="12. Control Panel & FTP Access">
          <p className="text-white/70">12.1 Control panel, FTP access and backup instructions will be provided once final payment is received.</p>
        </Section>

        {/* 13 */}
        <Section title="13. Third-Party Expenses">
          <p className="text-white/70">13.1 Faces Solutions is not liable for any third-party expenses incurred by the Client.</p>
        </Section>

        {/* 14 */}
        <Section title="14. Missing Payments & Project Delays">
          <p className="text-white/70">14.1 Faces Solutions will notify the Client of overdue payments or missing content.</p>
          <p className="text-white/70">14.2 Development may be paused or the contract terminated if payment is delayed.</p>
        </Section>

        {/* 15 */}
        <Section title="15. Communication">
          <p className="text-white/70">15.1 The Client must notify Faces Solutions of any email address changes.</p>
          <p className="text-white/70">15.2 The Client must respond to correspondence within 28 days.</p>
          <p className="text-white/70">15.3 Failure to respond may result in contract termination.</p>
        </Section>

      </div>
    </section>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-10 space-y-2 leading-relaxed text-white/70">
    <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl">
      {title}
    </h2>
    {children}
  </div>
);

export default TermsCondition;