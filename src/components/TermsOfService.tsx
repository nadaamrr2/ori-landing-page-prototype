import React, { useEffect } from 'react';
import { View } from '../App';

interface TermsOfServiceProps {
  onNavigate?: (view: View) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Terms of Service | ORI Agent';
    window.scrollTo({ top: 0, behavior: 'instant' });

    let metaDesc = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    let originalDesc = '';

    if (metaDesc) {
      originalDesc = metaDesc.getAttribute('content') || '';
      metaDesc.setAttribute(
        'content',
        'Read the Terms of Service for ORI Agent from Origin Technology Solution, governing access to and use of the ORI website, AI agent platform, integrations, tools, and services.'
      );
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(
        'content',
        'Read the Terms of Service for ORI Agent from Origin Technology Solution, governing access to and use of the ORI website, AI agent platform, integrations, tools, and services.'
      );
      document.head.appendChild(metaDesc);
      createdMeta = true;
    }

    return () => {
      document.title = originalTitle;
      if (createdMeta && metaDesc && metaDesc.parentNode) {
        metaDesc.parentNode.removeChild(metaDesc);
      } else if (metaDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const tocItems = [
    { id: 'the-service', label: '1. The Service' },
    { id: 'accounts-and-permissions', label: '2. Accounts and Permissions' },
    { id: 'acceptable-use', label: '3. Acceptable Use' },
    { id: 'third-party-services-and-integrations', label: '4. Third-Party Services and Integrations' },
    { id: 'your-content-and-data', label: '5. Your Content and Data' },
    { id: 'fees-subscriptions-and-payment', label: '6. Fees, Subscriptions and Payment' },
    { id: 'cancellation-and-refunds', label: '7. Cancellation and Refunds' },
    { id: 'ori-intellectual-property', label: '8. ORI Intellectual Property' },
    { id: 'service-availability-and-disclaimer', label: '9. Service Availability and Disclaimer' },
    { id: 'limitation-of-liability', label: '10. Limitation of Liability' },
    { id: 'suspension-and-termination', label: '11. Suspension and Termination' },
    { id: 'changes-to-the-service-and-these-terms', label: '12. Changes to the Service and These Terms' },
    { id: 'governing-law-and-disputes', label: '13. Governing Law and Disputes' },
    { id: 'general', label: '14. General' },
    { id: 'contact-us', label: '15. Contact Us' },
  ];

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleInternalNav = (e: React.MouseEvent<HTMLAnchorElement>, view: View) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    } else {
      const targetPath = view === 'privacy' ? '/privacy-policy' : view === 'refund' ? '/refund-policy' : '/';
      window.history.pushState({}, '', targetPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-900/30 mb-3">
          ORI Agent · Origin Technology Solution
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Effective Date: 26 August 2026
        </p>
      </header>

      {/* Main Layout: Desktop Sidebar TOC + Reading Column */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Desktop Sticky Table of Contents (Hidden on Mobile/Tablet) */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white mb-3">
              Table of Contents
            </h2>
            <nav aria-label="Table of Contents">
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className="block py-1 px-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors leading-relaxed font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Policy Content Body */}
        <article className="lg:col-span-8 max-w-[850px] space-y-10 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Preamble / Introduction */}
          <div className="space-y-4">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of <strong>ORI Agent</strong>, available at{' '}
              <a
                href="/"
                onClick={(e) => handleInternalNav(e, 'landing')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                https://ask-ori.com/
              </a>
              , including our website, AI agent platform, integrations, tools and related services (the &ldquo;Service&rdquo;).
            </p>
            <p>
              The Service is operated by <strong>Origin Technology Solution</strong>, a partnership established in Egypt (&ldquo;ORI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              By creating an account, purchasing a subscription or using the Service, you agree to these Terms.
            </p>
            <p>
              If you use ORI on behalf of a company or other organization, you confirm that you have authority to accept these Terms on its behalf.
            </p>
            <p>
              If you do not agree to these Terms, you must not use the Service.
            </p>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Mobile TOC */}
          <section className="lg:hidden space-y-4 p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80">
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight uppercase">
              Table of Contents
            </h2>
            <nav aria-label="Mobile Table of Contents">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {item.label.replace(/^\d+\.\s*/, '')}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </section>

          {/* SECTION 1 */}
          <section id="the-service" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              1. The Service
            </h2>
            <p>
              ORI provides a cloud-based artificial intelligence platform that allows users to create, configure and use AI agents.
            </p>
            <p>
              Users may configure agents using instructions, prompts, uploaded files, knowledge sources, integrations, tools and other information provided through the Service.
            </p>
            <p>
              Depending on the features and permissions enabled, ORI agents may generate responses, retrieve information and perform supported actions through connected services.
            </p>
            <p>
              Because ORI uses artificial intelligence, generated responses may occasionally be inaccurate, incomplete or unexpected. You are responsible for reviewing outputs and configuring your agents appropriately before relying on them or allowing them to perform important actions.
            </p>
            <p>
              Features, integrations, usage limits and functionality may vary depending on your subscription plan.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 2 */}
          <section id="accounts-and-permissions" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              2. Accounts and Permissions
            </h2>
            <p>You may need an account to access and use ORI.</p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>providing accurate account information;</li>
              <li>maintaining the security of your account;</li>
              <li>controlling access to your workspace;</li>
              <li>managing the permissions given to users and AI agents; and</li>
              <li>activity performed through your account.</li>
            </ul>
            <p>
              You must notify us at{' '}
              <a
                href="mailto:support@ask-ori.com"
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                support@ask-ori.com
              </a>{' '}
              if you believe your account has been accessed without authorization.
            </p>
            <p>
              ORI is not responsible for permissions or configurations selected by you or your authorized users, except where an issue results directly from a vulnerability in the Service.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 3 */}
          <section id="acceptable-use" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              3. Acceptable Use
            </h2>
            <p>You may use ORI only for lawful purposes.</p>
            <p>You must not use, or allow others to use, the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>violate applicable laws or regulations;</li>
              <li>infringe another person&apos;s intellectual property, privacy or other rights;</li>
              <li>engage in fraud, harassment or unlawful activity;</li>
              <li>upload or distribute malware or harmful code;</li>
              <li>gain unauthorized access to systems, accounts or information;</li>
              <li>interfere with or disrupt the security or operation of ORI;</li>
              <li>bypass security controls or usage restrictions;</li>
              <li>reverse engineer, decompile or attempt to discover ORI&apos;s source code except where permitted by law;</li>
              <li>resell, sublicense or commercially exploit the Service unless expressly authorized by ORI; or</li>
              <li>use an ORI agent to perform an action that you are not authorized to perform yourself.</li>
            </ul>
            <p>
              We may suspend or restrict access where reasonably necessary to protect ORI, its users or third parties from misuse, fraud or security risks.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 4 */}
          <section id="third-party-services-and-integrations" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              4. Third-Party Services and Integrations
            </h2>
            <p>
              ORI may allow you to connect third-party platforms, applications, APIs and services (&ldquo;Third-Party Services&rdquo;).
            </p>
            <p>
              When you connect a Third-Party Service, you authorize ORI to access or interact with that service within the permissions you have granted.
            </p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ensuring that you have authority to connect the relevant account;</li>
              <li>selecting the permissions you grant;</li>
              <li>complying with the third party&apos;s applicable terms; and</li>
              <li>reviewing actions performed through connected services.</li>
            </ul>
            <p>
              Your use of Third-Party Services is governed by their own terms and privacy policies.
            </p>
            <p>
              ORI does not control Third-Party Services and cannot guarantee their availability, security, functionality or continued compatibility with ORI.
            </p>
            <p>
              ORI is not responsible for issues caused by the operation, modification or unavailability of a Third-Party Service outside our reasonable control.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 5 */}
          <section id="your-content-and-data" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              5. Your Content and Data
            </h2>
            <p>
              You may provide, upload, configure or connect information through ORI, including files, prompts, instructions, knowledge-base materials, business information and information retrieved from connected services (&ldquo;User Content&rdquo;).
            </p>
            <p>You retain ownership of your User Content.</p>
            <p>
              You grant ORI a limited, non-exclusive right to host, process, retrieve and use your User Content as necessary to provide, maintain and secure the Service.
            </p>
            <p>
              You are responsible for ensuring that you have the rights and permissions necessary to provide and process User Content through ORI.
            </p>
            <p>
              You must not provide content that violates applicable law or the rights of another person.
            </p>
            <p>
              Personal data is handled in accordance with our Privacy Policy:{' '}
              <a
                href="/privacy-policy"
                onClick={(e) => handleInternalNav(e, 'privacy')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                https://ask-ori.com/privacy-policy
              </a>
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 6 */}
          <section id="fees-subscriptions-and-payment" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              6. Fees, Subscriptions and Payment
            </h2>
            <p>ORI may offer free and paid subscription plans.</p>
            <p>
              The applicable price, billing period, features and usage limits will be displayed before you purchase a subscription.
            </p>
            <p>
              Payments may be handled by a third-party payment provider or merchant of record. Your payment may therefore also be subject to that provider&apos;s terms and privacy policy.
            </p>
            <p>You are responsible for providing accurate and current billing information.</p>
            <p>
              Paid subscriptions may renew automatically at the end of each billing period unless cancelled before the renewal date.
            </p>
            <p>
              We may change our pricing from time to time. Where a pricing change affects an existing subscription, we will provide notice where required by applicable law.
            </p>
            <p>
              If a payment fails, we may retry the payment and may temporarily restrict access to paid functionality until the outstanding amount is paid.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 7 */}
          <section id="cancellation-and-refunds" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              7. Cancellation and Refunds
            </h2>
            <p>You may cancel your subscription at any time.</p>
            <p>
              Unless otherwise stated, your cancellation will take effect at the end of your current paid billing period, and you may continue using the applicable paid features until that date.
            </p>
            <p>
              Cancellation does not automatically entitle you to a prorated refund for the unused portion of your current billing period.
            </p>
            <p>
              Refund requests may be submitted within <strong>14 days</strong> of the applicable purchase, subject to eligibility under our Refund Policy and applicable law.
            </p>
            <p>
              Submitting a refund request does not automatically guarantee that a refund will be approved unless applicable law gives you a mandatory right to a refund.
            </p>
            <p>
              Full details are available in our Refund Policy:{' '}
              <a
                href="/refund-policy"
                onClick={(e) => handleInternalNav(e, 'refund')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                https://ask-ori.com/refund-policy
              </a>
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 8 */}
          <section id="ori-intellectual-property" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              8. ORI Intellectual Property
            </h2>
            <p>
              ORI and its licensors retain all rights, title and interest in the Service, including its software, technology, design, interfaces, branding and documentation.
            </p>
            <p>
              These Terms allow you to access and use ORI but do not transfer ownership of ORI&apos;s intellectual property to you.
            </p>
            <p>No rights are granted except those expressly provided under these Terms.</p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 9 */}
          <section id="service-availability-and-disclaimer" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              9. Service Availability and Disclaimer
            </h2>
            <p>
              ORI is an evolving software service, and we may update, modify or discontinue features from time to time.
            </p>
            <p>
              We aim to keep the Service available and reliable, but we do not guarantee that it will always be uninterrupted, secure or error-free.
            </p>
            <p>
              To the fullest extent permitted by applicable law, the Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
            </p>
            <p>ORI does not guarantee that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-generated outputs will always be accurate or complete;</li>
              <li>agents will always perform requested actions successfully;</li>
              <li>Third-Party Services will always remain available; or</li>
              <li>the Service will meet every particular business requirement.</li>
            </ul>
            <p>Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 10 */}
          <section id="limitation-of-liability" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              10. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, ORI will not be liable for indirect, incidental, special or consequential losses arising from your use of or inability to use the Service, including loss of profits, revenue, business opportunities, goodwill or data.
            </p>
            <p>
              ORI will not be responsible for losses arising from your configuration of agents or permissions, your reliance on AI-generated outputs, or failures of Third-Party Services outside our reasonable control.
            </p>
            <p>
              To the extent permitted by law, ORI&apos;s total liability arising from or relating to the Service will not exceed the total amount you paid for the Service during the 12 months immediately before the event giving rise to the claim.
            </p>
            <p>Nothing in these Terms limits liability where such limitation is prohibited by applicable law.</p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 11 */}
          <section id="suspension-and-termination" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              11. Suspension and Termination
            </h2>
            <p>You may stop using ORI at any time.</p>
            <p>We may suspend or terminate your access if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>you materially violate these Terms;</li>
              <li>amounts owed remain unpaid;</li>
              <li>your use creates a material security or legal risk;</li>
              <li>we reasonably believe your account is being used fraudulently or unlawfully; or</li>
              <li>we are required to do so by law.</li>
            </ul>
            <p>
              Where reasonably possible, we will provide notice before suspending or terminating your account.
            </p>
            <p>
              Termination does not affect payment obligations or other rights and obligations that arose before termination.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 12 */}
          <section id="changes-to-the-service-and-these-terms" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              12. Changes to the Service and These Terms
            </h2>
            <p>ORI is an evolving product, and we may change or update the Service over time.</p>
            <p>
              We may also update these Terms to reflect changes to ORI, our business practices or applicable law.
            </p>
            <p>When we update these Terms, we will revise the effective date shown at the top of this page.</p>
            <p>
              Where a change materially affects your rights or obligations, we will provide reasonable notice where required by applicable law.
            </p>
            <p>
              If you continue using ORI after updated Terms take effect, you will be considered to have accepted the updated Terms where permitted by law.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 13 */}
          <section id="governing-law-and-disputes" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              13. Governing Law and Disputes
            </h2>
            <p>
              These Terms are governed by the laws of the Arab Republic of Egypt, without regard to conflict-of-law principles.
            </p>
            <p>
              Subject to any mandatory rights available under applicable law, disputes arising from or relating to these Terms or the Service will be subject to the jurisdiction of the competent courts of Cairo, Egypt.
            </p>
            <p>
              Before beginning formal proceedings, we encourage you to contact us so that we can attempt to resolve the matter directly.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 14 */}
          <section id="general" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              14. General
            </h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in effect.
            </p>
            <p>
              A failure by ORI to enforce a provision of these Terms does not waive our right to enforce it later.
            </p>
            <p>
              These Terms, together with our Privacy Policy, Refund Policy and any applicable subscription terms presented to you when purchasing the Service, form the agreement between you and ORI regarding your use of the Service.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 15 */}
          <section id="contact-us" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              15. Contact Us
            </h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="font-bold text-slate-900 dark:text-white text-base">
                Origin Technology Solution
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@ask-ori.com"
                  className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
                >
                  support@ask-ori.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href="/"
                  onClick={(e) => handleInternalNav(e, 'landing')}
                  className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
                >
                  https://ask-ori.com/
                </a>
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
