import React, { useEffect } from 'react';
import { View } from '../App';

interface RefundPolicyProps {
  onNavigate?: (view: View) => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onNavigate }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Refund Policy | ORI Agent';
    window.scrollTo({ top: 0, behavior: 'instant' });

    let metaDesc = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    let originalDesc = '';

    if (metaDesc) {
      originalDesc = metaDesc.getAttribute('content') || '';
      metaDesc.setAttribute(
        'content',
        'Read the ORI Agent Refund Policy from Origin Technology Solution, covering subscription payments, cancellation terms, billing error reviews, and refund eligibility.'
      );
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(
        'content',
        'Read the ORI Agent Refund Policy from Origin Technology Solution, covering subscription payments, cancellation terms, billing error reviews, and refund eligibility.'
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
    { id: 'overview', label: '1. Overview' },
    { id: 'refund-request-window', label: '2. Refund Request Window' },
    { id: 'subscription-cancellation', label: '3. Subscription Cancellation' },
    { id: 'subscription-renewals', label: '4. Subscription Renewals' },
    { id: 'refund-eligibility', label: '5. Refund Eligibility' },
    { id: 'situations-not-qualifying', label: '6. Situations That May Not Qualify' },
    { id: 'third-party-services', label: '7. Third-Party Services' },
    { id: 'requesting-a-refund', label: '8. Requesting a Refund' },
    { id: 'approved-refunds', label: '9. Approved Refunds' },
    { id: 'consumer-rights', label: '10. Consumer Rights' },
    { id: 'changes-to-this-policy', label: '11. Changes to This Policy' },
    { id: 'contact-us', label: '12. Contact Us' },
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
      const targetPath = view === 'terms' ? '/terms-of-service' : view === 'privacy' ? '/privacy-policy' : '/';
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
          Refund Policy
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
          <section id="overview" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              1. Overview
            </h2>
            <p>
              This Refund Policy applies to purchases and paid subscriptions for <strong>ORI Agent</strong>, accessible at{' '}
              <a
                href="/"
                onClick={(e) => handleInternalNav(e, 'landing')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                https://ask-ori.com/
              </a>
              .
            </p>
            <p>
              ORI Agent is operated by <strong>Origin Technology Solution</strong> (&ldquo;ORI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              Eligibility for refunds is subject to this Refund Policy, our{' '}
              <a
                href="/terms-of-service"
                onClick={(e) => handleInternalNav(e, 'terms')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                Terms of Service
              </a>
              , and any mandatory rights provided by applicable consumer-protection law.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 2 */}
          <section id="refund-request-window" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              2. Refund Request Window
            </h2>
            <p>
              Customers may submit a refund request within <strong>14 days of the applicable purchase</strong>, subject to eligibility under this policy and applicable law.
            </p>
            <p>
              Submitting a refund request does not automatically guarantee that a refund will be approved, except where applicable law provides the customer with a mandatory right to a refund or statutory withdrawal.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 3 */}
          <section id="subscription-cancellation" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              3. Subscription Cancellation
            </h2>
            <p>You may cancel your subscription at any time through your account settings or by contacting support.</p>
            <p>
              Cancelling your subscription prevents future automatic renewal charges from occurring.
            </p>
            <p>
              Unless otherwise stated, your cancellation will take effect at the conclusion of your current paid billing period, and you may continue using the applicable paid features until that date.
            </p>
            <p>
              Cancellation does not automatically entitle you to a prorated refund for the unused portion of your current billing period.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 4 */}
          <section id="subscription-renewals" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              4. Subscription Renewals
            </h2>
            <p>
              Paid subscriptions may renew automatically at the end of each billing period unless cancelled prior to the scheduled renewal date.
            </p>
            <p>
              If you do not wish to be billed for a subsequent billing period, you must cancel your subscription before your renewal date.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 5 */}
          <section id="refund-eligibility" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              5. Refund Eligibility
            </h2>
            <p>
              Refund requests will be reviewed in circumstances such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>a valid, documented refund request submitted within the applicable 14-day refund request window;</li>
              <li>verified duplicate charges or erroneous duplicate transactions;</li>
              <li>incorrect billing amounts resulting from an administrative or technical billing error;</li>
              <li>appropriately verified unauthorized charges made on your payment method;</li>
              <li>significant, documented technical problems that prevent reasonable use of a paid ORI service and cannot reasonably be resolved by ORI within a reasonable timeframe; or</li>
              <li>situations where applicable law mandates a refund or statutory cancellation right.</li>
            </ul>
            <p>
              All requests falling into these categories will be carefully reviewed on their merits in accordance with this policy and applicable law.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 6 */}
          <section id="situations-not-qualifying" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              6. Situations That May Not Qualify
            </h2>
            <p>
              Unless required by applicable law, a refund may not normally be provided solely because:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the customer stopped using ORI during the active billing cycle;</li>
              <li>the customer changed their mind after the expiration of the 14-day refund request window;</li>
              <li>the customer forgot to cancel their subscription before a scheduled renewal date;</li>
              <li>the customer incorrectly configured an AI agent, its system instructions, or workspace parameters;</li>
              <li>an AI agent produced an unexpected AI-generated response or interpreted an instruction differently from what the user expected;</li>
              <li>the user configured incorrect permissions, knowledge sources, or tools;</li>
              <li>a third-party integration, API, or connected external service became unavailable or experienced an issue outside ORI&apos;s reasonable control; or</li>
              <li>the customer&apos;s account or workspace access was suspended or restricted due to a material violation of our Terms of Service.</li>
            </ul>
            <p>
              <strong>Artificial Intelligence Notice:</strong> ORI utilizes artificial intelligence models to process instructions and generate outputs. Because AI outputs can naturally vary, a particular AI-generated response or workflow result is not guaranteed, and an unexpected output alone does not automatically create a right to a refund.
            </p>
            <p>
              Nothing in this section limits or excludes any mandatory consumer rights that cannot legally be waived.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 7 */}
          <section id="third-party-services" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              7. Third-Party Services
            </h2>
            <p>
              ORI may rely on third-party services to deliver certain capabilities, including authorized third-party payment providers, merchants of record, and external platform integrations.
            </p>
            <p>
              Refund processing, reconciliation, and payment flows may therefore depend partly on the rules, policies, and systems of the payment provider used for the transaction.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 8 */}
          <section id="requesting-a-refund" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              8. Requesting a Refund
            </h2>
            <p>
              To request a refund, please send an email to our support team at:{' '}
              <a
                href="mailto:support@ask-ori.com"
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                support@ask-ori.com
              </a>
            </p>
            <p>Please include the following information in your request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the email address associated with your ORI account;</li>
              <li>transaction, invoice, or receipt information (if available);</li>
              <li>a clear description of the reason for your refund request; and</li>
              <li>any relevant details or screenshots that may assist our team in investigating the issue.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <em>Security Note:</em> For your protection, never send passwords, full credit card numbers, CVV/security codes, or other sensitive payment credentials via email.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 9 */}
          <section id="approved-refunds" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              9. Approved Refunds
            </h2>
            <p>
              Approved refunds will generally be returned through the original payment method used at the time of purchase, where possible.
            </p>
            <p>
              Processing times for refunded funds to reflect in your balance may vary depending on the payment method, payment provider, and your financial institution or bank.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 10 */}
          <section id="consumer-rights" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              10. Consumer Rights
            </h2>
            <p>
              This Refund Policy does not remove, restrict, or limit any mandatory rights that customers may have under applicable consumer-protection laws.
            </p>
            <p>
              Where applicable law provides non-waivable statutory withdrawal, cancellation, or refund rights, those statutory rights continue to apply in full.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 11 */}
          <section id="changes-to-this-policy" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              11. Changes to This Policy
            </h2>
            <p>
              ORI may update or revise this Refund Policy from time to time to reflect modifications in our services, billing procedures, or legal requirements.
            </p>
            <p>
              When changes are made, we will update the &ldquo;Effective Date&rdquo; displayed at the top of this page. Where required by applicable law, we will provide appropriate notice of material changes.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 12 */}
          <section id="contact-us" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              12. Contact Us
            </h2>
            <p>If you have any questions or inquiries regarding this Refund Policy, please contact us at:</p>
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

export default RefundPolicy;
