import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
<section className="relative px-4 overflow-hidden py-14 bg-gradient-to-b from-gray-50 to-white md:px-8">
   <Helmet>
          <title>Privacy Policy | Faces Solutions</title>
        </Helmet>
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-green-400/30 blur-[140px]" />
    <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-400/30 blur-[140px]" />
  </div>

  <div className="relative z-10 max-w-5xl p-6 mx-auto shadow-md rounded-2xl md:p-10">
     
      

        {/* Header */}
        <header className="pb-6 mb-10 border-b">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Privacy Policy (Faces Solutions)
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Effective date: 16 January 2024
          </p>
        </header>

        {/* Intro */}
        <p className="mb-10 leading-relaxed text-gray-700">
          This Privacy Policy explains how <strong>Faces Solutions Ltd</strong>
          (“Faces Solutions”, “we”, “us”, “our”) collects, uses, stores and shares
          personal information when you visit or interact with our website and
          services.
        </p>

        <p className="mb-10 leading-relaxed text-gray-700">
          This policy applies to visitors and customers using our website and
          related services.
        </p>

        {/* 1 */}
        <Section title="1. Summary">
          <p><strong>Data controller</strong></p>
          <p>Faces Solutions is the data controller for personal information collected through our website and communications.</p>

          <p className="mt-4"><strong>How we collect information</strong></p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>You provide it to us (e.g., by email, phone, forms, or placing an order)</li>
            <li>You use our website (e.g., via cookies, analytics, and server logs)</li>
            <li>We receive it occasionally from third parties (e.g., service partners involved in delivery)</li>
          </ul>

          <p className="mt-4"><strong>Information we collect</strong></p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Name and contact details (email, phone number, address)</li>
            <li>Business details (company name, VAT number where applicable)</li>
            <li>Payment-related information (processed via third-party payment providers)</li>
            <li>Technical data such as IP address, device/browser details, and usage data</li>
            <li>Approximate location based on IP address</li>
          </ul>

          <p className="mt-4"><strong>How we use your information</strong></p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Respond to enquiries and provide support</li>
            <li>Deliver services and process orders</li>
            <li>Manage accounts and subscriptions</li>
            <li>Improve our website and services</li>
            <li>Send marketing where permitted (with opt-out available)</li>
            <li>Protect our website, prevent fraud, and enforce legal rights</li>
            <li>Comply with legal obligations</li>
          </ul>

          <p className="mt-4"><strong>Sharing your information</strong></p>
          <p>We share information only where necessary with trusted providers or where legally required.</p>

          <p className="mt-4"><strong>Do we sell your information?</strong></p>
          <p>No. We do not sell your personal information.</p>

          <p className="mt-4"><strong>How long we keep your information</strong></p>
          <p>We keep information only as long as necessary for the purposes outlined and to meet legal obligations.</p>

          <p className="mt-4"><strong>How we protect your information</strong></p>
          <p>We use appropriate technical and organisational measures, including access controls and encryption where applicable.</p>

          <p className="mt-4"><strong>Cookies</strong></p>
          <p>We use essential, functional, analytical and marketing cookies. Please see our Cookies Policy for more details.</p>
        </Section>

        {/* 2 */}
        <Section title="2. Our details">
          <p>
            Email:{" "}
            <a
              href="mailto:support@facessolutions.tech"
              className="font-semibold text-blue-600 underline"
            >
              support@facessolutions.tech
            </a>
          </p>
        </Section>

        {/* 3 */}
        <Section title="3. Information we collect when you visit our website">
          <p><strong>3.1 Web server log information</strong></p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>IP address</li>
            <li>Date and time of access</li>
            <li>Pages viewed</li>
            <li>Referring source</li>
            <li>Device and browser details</li>
          </ul>

          <p className="mt-4"><strong>3.2 Using logs for security</strong></p>
          <p>Logs may be used to monitor activity, prevent attacks, and maintain security.</p>

          <p className="mt-4"><strong>3.3 Using logs to improve the website</strong></p>
          <p>Aggregated data may be analysed to understand traffic, usage patterns, and improve services.</p>
        </Section>

        {/* 4 */}
        <Section title="4. Cookies and similar technologies">
          <ul className="pl-6 space-y-2 list-disc">
            <li>Essential cookies</li>
            <li>Functional cookies</li>
            <li>Analytics cookies</li>
            <li>Marketing/targeting cookies</li>
          </ul>
          <p className="mt-4">You can control non-essential cookies through your browser or cookie settings.</p>
        </Section>

        {/* 5 */}
        <Section title="5. Information we collect when you contact us">
          <p>Email, forms, phone, or post.</p>
          <p>We collect details you provide in order to respond to enquiries and provide services.</p>
          <p>Calls are not recorded.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Website features, accounts, and payments">
          <ul className="pl-6 space-y-2 list-disc">
            <li>Newsletter sign-ups (with consent and unsubscribe option)</li>
            <li>Account registration details</li>
            <li>Orders and payments (processed by third-party providers; no full card data stored)</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section title="7. Information collected from third parties">
          <p>We may receive information from third parties where needed to deliver services.</p>
          <p>Any data received without a lawful basis is deleted.</p>
        </Section>

        {/* 8 */}
        <Section title="8. Sharing your information">
          <ul className="pl-6 space-y-2 list-disc">
            <li>Email services</li>
            <li>Hosting providers</li>
            <li>Analytics providers</li>
            <li>Payment processors</li>
            <li>Domain registrars</li>
            <li>Live chat providers</li>
          </ul>
          <p className="mt-4">We may also share data where legally required or to protect our rights.</p>
        </Section>

        {/* 9 */}
        <Section title="9. International transfers">
          <p>Some providers process data outside the UK/EEA. Appropriate safeguards are used where required.</p>
        </Section>

        {/* 10 */}
        <Section title="10. Automated decision-making">
          <p>We do not use automated decision-making that produces legal or similarly significant effects.</p>
        </Section>

        {/* 11 */}
        <Section title="11. Data retention">
          <ul className="pl-6 space-y-2 list-disc">
            <li>Server logs: up to 10 years</li>
            <li>Orders and invoices: up to 6 years</li>
            <li>Enquiries: as long as necessary</li>
            <li>Marketing data: until you unsubscribe</li>
          </ul>
        </Section>

        {/* 12 */}
        <Section title="12. Security">
          <p>We use technical and organisational measures to protect data.</p>
          <p>Internet transmission is never completely secure and is done at your own risk.</p>
        </Section>

        {/* 13 */}
        <Section title="13. Your rights">
          <p>You have rights including access, correction, deletion, restriction, objection, and withdrawal of consent.</p>
          <p>
            To exercise your rights, email:{" "}
            <a
              href="mailto:support@facessolutions.tech"
              className="font-semibold text-blue-600 underline"
            >
              support@facessolutions.tech
            </a>
          </p>
          <p>You may also complain to the UK Information Commissioner’s Office (ICO).</p>
        </Section>

        {/* 14 */}
        <Section title="14. Marketing preferences">
          <p>You can opt out of marketing at any time by:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Clicking unsubscribe in emails</li>
            <li>
              Emailing{" "}
              <a
                href="mailto:support@facessolutions.tech"
                className="font-semibold text-blue-600 underline"
              >
                support@facessolutions.tech
              </a>{" "}
              with “OPT OUT”
            </li>
          </ul>
        </Section>

        {/* 15 */}
        <Section title="15. Sensitive information">
          <p>We do not intentionally collect sensitive personal data.</p>
        </Section>

        {/* 16 */}
        <Section title="16. Policy updates">
          <p>This policy may be updated from time to time.</p>
          <p>Significant changes will be communicated where appropriate.</p>
        </Section>

        {/* 17 */}
        <Section title="17. Children’s privacy">
          <p>Our services are not intended for children under 18.</p>
        </Section>

        {/* 18 */}
        <Section title="18. Do Not Track">
          <p>We may not respond consistently to all Do Not Track signals.</p>
          <p>Cookie settings can be managed via your browser.</p>
        </Section>

        {/* 19 */}
        <Section title="19. Credits">
          <p>This Privacy Policy is based on a GDPR-compliant template and adapted for Faces Solutions.</p>
        </Section>

       

     
  </div>

</section>

  
  );
};

const Section = ({ title, children }) => (
  <div className="mb-10 space-y-2 leading-relaxed text-gray-700">
    <h2 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">
      {title}
    </h2>
    {children}
  </div>
);

export default PrivacyPolicy;
