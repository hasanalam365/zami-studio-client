import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <section className="relative px-4 overflow-hidden text-white bg-black py-14 md:px-8">
      <Helmet>
        <title>Privacy Policy | Zami Studio</title>
      </Helmet>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-red-600 opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-red-500 opacity-10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl p-6 mx-auto border rounded-2xl bg-white/5 border-white/10 backdrop-blur-md md:p-10">

        {/* Header */}
        <header className="pb-6 mb-10 border-b border-white/10">
          <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-red-500 to-white bg-clip-text">
            Privacy Policy (Faces Solutions)
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Effective date: 16 January 2024
          </p>
        </header>

        {/* Intro */}
        <p className="mb-10 leading-relaxed text-white/80">
          This Privacy Policy explains how <strong>Faces Solutions Ltd</strong>
          (“Faces Solutions”, “we”, “us”, “our”) collects, uses, stores and shares
          personal information when you visit or interact with our website and
          services.
        </p>

        <p className="mb-10 leading-relaxed text-white/70">
          This policy applies to visitors and customers using our website and
          related services.
        </p>

        {/* Sections */}
        <Section title="1. Summary">
          <p><strong className="text-white">Data controller</strong></p>
          <p className="text-white/70">
            Faces Solutions is the data controller for personal information collected through our website and communications.
          </p>

          <p className="mt-4"><strong className="text-white">How we collect information</strong></p>
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>You provide it to us (e.g., by email, phone, forms, or placing an order)</li>
            <li>You use our website (e.g., via cookies, analytics, and server logs)</li>
            <li>We receive it occasionally from third parties (e.g., service partners involved in delivery)</li>
          </ul>

          <p className="mt-4"><strong className="text-white">Information we collect</strong></p>
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Name and contact details (email, phone number, address)</li>
            <li>Business details (company name, VAT number where applicable)</li>
            <li>Payment-related information (processed via third-party payment providers)</li>
            <li>Technical data such as IP address, device/browser details, and usage data</li>
            <li>Approximate location based on IP address</li>
          </ul>

          <p className="mt-4"><strong className="text-white">How we use your information</strong></p>
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Respond to enquiries and provide support</li>
            <li>Deliver services and process orders</li>
            <li>Manage accounts and subscriptions</li>
            <li>Improve our website and services</li>
            <li>Send marketing where permitted (with opt-out available)</li>
            <li>Protect our website, prevent fraud, and enforce legal rights</li>
            <li>Comply with legal obligations</li>
          </ul>

          <p className="mt-4"><strong className="text-white">Sharing your information</strong></p>
          <p className="text-white/70">We share information only where necessary with trusted providers or where legally required.</p>

          <p className="mt-4"><strong className="text-white">Do we sell your information?</strong></p>
          <p className="text-white/70">No. We do not sell your personal information.</p>

          <p className="mt-4"><strong className="text-white">How long we keep your information</strong></p>
          <p className="text-white/70">We keep information only as long as necessary for the purposes outlined and to meet legal obligations.</p>

          <p className="mt-4"><strong className="text-white">How we protect your information</strong></p>
          <p className="text-white/70">We use appropriate technical and organisational measures, including access controls and encryption where applicable.</p>

          <p className="mt-4"><strong className="text-white">Cookies</strong></p>
          <p className="text-white/70">We use essential, functional, analytical and marketing cookies. Please see our Cookies Policy for more details.</p>
        </Section>

        {/* 2 */}
        <Section title="2. Our details">
          <p className="text-white/70">
            Email:{" "}
            <a
              href="mailto:support@facessolutions.tech"
              className="text-red-400 underline hover:text-red-300"
            >
              support@facessolutions.tech
            </a>
          </p>
        </Section>

        {/* 3 */}
        <Section title="3. Information we collect when you visit our website">
          <p><strong className="text-white">3.1 Web server log information</strong></p>
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>IP address</li>
            <li>Date and time of access</li>
            <li>Pages viewed</li>
            <li>Referring source</li>
            <li>Device and browser details</li>
          </ul>

          <p className="mt-4"><strong className="text-white">3.2 Using logs for security</strong></p>
          <p className="text-white/70">Logs may be used to monitor activity, prevent attacks, and maintain security.</p>

          <p className="mt-4"><strong className="text-white">3.3 Using logs to improve the website</strong></p>
          <p className="text-white/70">Aggregated data may be analysed to understand traffic, usage patterns, and improve services.</p>
        </Section>

        {/* 4 */}
        <Section title="4. Cookies and similar technologies">
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Essential cookies</li>
            <li>Functional cookies</li>
            <li>Analytics cookies</li>
            <li>Marketing/targeting cookies</li>
          </ul>
          <p className="mt-4 text-white/70">
            You can control non-essential cookies through your browser or cookie settings.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. Information we collect when you contact us">
          <p className="text-white/70">Email, forms, phone, or post.</p>
          <p className="text-white/70">We collect details you provide in order to respond to enquiries and provide services.</p>
          <p className="text-white/70">Calls are not recorded.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Website features, accounts, and payments">
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Newsletter sign-ups (with consent and unsubscribe option)</li>
            <li>Account registration details</li>
            <li>Orders and payments (processed by third-party providers; no full card data stored)</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section title="7. Information collected from third parties">
          <p className="text-white/70">We may receive information from third parties where needed to deliver services.</p>
          <p className="text-white/70">Any data received without a lawful basis is deleted.</p>
        </Section>

        {/* 8 */}
        <Section title="8. Sharing your information">
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Email services</li>
            <li>Hosting providers</li>
            <li>Analytics providers</li>
            <li>Payment processors</li>
            <li>Domain registrars</li>
            <li>Live chat providers</li>
          </ul>
          <p className="mt-4 text-white/70">We may also share data where legally required or to protect our rights.</p>
        </Section>

        {/* 9 */}
        <Section title="9. International transfers">
          <p className="text-white/70">Some providers process data outside the UK/EEA. Appropriate safeguards are used where required.</p>
        </Section>

        {/* 10 */}
        <Section title="10. Automated decision-making">
          <p className="text-white/70">We do not use automated decision-making that produces legal or similarly significant effects.</p>
        </Section>

        {/* 11 */}
        <Section title="11. Data retention">
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Server logs: up to 10 years</li>
            <li>Orders and invoices: up to 6 years</li>
            <li>Enquiries: as long as necessary</li>
            <li>Marketing data: until you unsubscribe</li>
          </ul>
        </Section>

        {/* 12 */}
        <Section title="12. Security">
          <p className="text-white/70">We use technical and organisational measures to protect data.</p>
          <p className="text-white/70">Internet transmission is never completely secure and is done at your own risk.</p>
        </Section>

        {/* 13 */}
        <Section title="13. Your rights">
          <p className="text-white/70">You have rights including access, correction, deletion, restriction, objection, and withdrawal of consent.</p>
          <p className="text-white/70">
            To exercise your rights, email:{" "}
            <a href="mailto:support@facessolutions.tech" className="text-red-400 underline">
              support@facessolutions.tech
            </a>
          </p>
          <p className="text-white/70">You may also complain to the UK Information Commissioner’s Office (ICO).</p>
        </Section>

        {/* 14 */}
        <Section title="14. Marketing preferences">
          <p className="text-white/70">You can opt out of marketing at any time by:</p>
          <ul className="pl-6 space-y-2 list-disc text-white/70">
            <li>Clicking unsubscribe in emails</li>
            <li>
              Emailing{" "}
              <a href="mailto:support@facessolutions.tech" className="text-red-400 underline">
                support@facessolutions.tech
              </a>{" "}
              with “OPT OUT”
            </li>
          </ul>
        </Section>

        {/* 15 */}
        <Section title="15. Sensitive information">
          <p className="text-white/70">We do not intentionally collect sensitive personal data.</p>
        </Section>

        {/* 16 */}
        <Section title="16. Policy updates">
          <p className="text-white/70">This policy may be updated from time to time.</p>
          <p className="text-white/70">Significant changes will be communicated where appropriate.</p>
        </Section>

        {/* 17 */}
        <Section title="17. Children’s privacy">
          <p className="text-white/70">Our services are not intended for children under 18.</p>
        </Section>

        {/* 18 */}
        <Section title="18. Do Not Track">
          <p className="text-white/70">We may not respond consistently to all Do Not Track signals.</p>
          <p className="text-white/70">Cookie settings can be managed via your browser.</p>
        </Section>

        {/* 19 */}
        <Section title="19. Credits">
          <p className="text-white/70">This Privacy Policy is based on a GDPR-compliant template and adapted for Faces Solutions.</p>
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

export default PrivacyPolicy;