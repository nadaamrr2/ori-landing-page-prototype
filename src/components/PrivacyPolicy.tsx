import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Privacy Policy | ORI Agent';

    let metaDesc = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    let originalDesc = '';

    if (metaDesc) {
      originalDesc = metaDesc.getAttribute('content') || '';
      metaDesc.setAttribute(
        'content',
        'Read the ORI Agent Privacy Policy from Origin Technology Solutions, including how personal information is collected, used, shared, stored, and protected.'
      );
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(
        'content',
        'Read the ORI Agent Privacy Policy from Origin Technology Solutions, including how personal information is collected, used, shared, stored, and protected.'
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
    { id: 'information-we-collect', label: '1. Information We Collect' },
    { id: 'how-we-use-information', label: '2. How We Use Personal Information' },
    { id: 'artificial-intelligence', label: '3. Artificial Intelligence' },
    { id: 'google-sign-in-and-api', label: '4. Google Sign-In and Google API Data' },
    { id: 'how-we-share-information', label: '5. How We Share Personal Information' },
    { id: 'storage-and-transfers', label: '6. Data Storage and International Transfers' },
    { id: 'data-retention', label: '7. Data Retention' },
    { id: 'how-we-protect-information', label: '8. How We Protect Personal Information' },
    { id: 'your-privacy-rights', label: '9. Your Privacy Rights' },
    { id: 'children', label: '10. Children' },
    { id: 'changes-to-policy', label: '11. Changes to This Privacy Policy' },
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

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-900/30 mb-3">
          ORI Agent · Origin Technology Solutions
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Last updated August 18, 2026
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
                      className="block py-1.5 px-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors leading-relaxed font-medium"
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
        <article className="lg:col-span-8 max-w-[850px] space-y-12 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Introduction
            </h2>
            <p>
              ORI Agent is an AI-agent platform provided by <strong>Origin Technology Solutions</strong> (“<strong>Origin</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you access or use ORI Agent, visit our website, create an account, interact with an ORI agent, or otherwise use our related services (collectively, the “<strong>Services</strong>”).
            </p>
            <p>
              The information we process depends on how you use the Services and the features you choose to enable.
            </p>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, you may contact us at{' '}
              <a
                href="mailto:support@ask-ori.com"
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                support@ask-ori.com
              </a>.
            </p>
          </section>

          {/* TABLE OF CONTENTS (In-body list, visible on mobile & standard layout) */}
          <section className="lg:hidden space-y-4 p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
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

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 1 */}
          <section id="information-we-collect" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              1. Information We Collect
            </h2>

            <div className="space-y-3">
              <p>We may collect personal information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Name;</li>
                <li>Email address;</li>
                <li>Phone number;</li>
                <li>Job title;</li>
                <li>Company or business information;</li>
                <li>Account information;</li>
                <li>Information submitted through forms or communications with us; and</li>
                <li>Other information you choose to provide through the Services.</li>
              </ul>
              <p>
                The exact information processed depends on how the business customer configures and uses the Services.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Information relating to third parties
              </h3>
              <p>
                Because ORI Agent is designed for businesses, information processed through the Services may relate to the business customer&apos;s own customers, prospects, employees, or other end users.
              </p>
              <p>
                Where a business customer provides or makes personal information available through the Services, the customer is responsible for ensuring that it has the appropriate rights, notices, permissions, and legal basis to permit that information to be processed.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Sensitive information
              </h3>
              <p>
                ORI Agent is not intended for the processing of sensitive or special-category personal information, and we do not intentionally request such information.
              </p>
              <p>
                Business customers are responsible for ensuring that sensitive information is submitted or processed through ORI Agent only where they are legally authorized to do so.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Payment information
              </h3>
              <p>
                If you purchase a paid ORI Agent subscription, payment information is handled and stored by <strong>Paddle</strong>, our payment provider.
              </p>
              <p>
                For more information about how Paddle processes personal information, please review Paddle&apos;s Privacy Notice.
              </p>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 2 */}
          <section id="how-we-use-information" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              2. How We Use Personal Information
            </h2>
            <p>We use personal information as necessary to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Create, authenticate, and manage user accounts;</li>
              <li>Provide and operate ORI Agent;</li>
              <li>Generate AI-powered responses and functionality;</li>
              <li>Perform tasks and workflows requested or authorized through the Services;</li>
              <li>Process information made available through customer-authorized services;</li>
              <li>Manage subscriptions and payments;</li>
              <li>Respond to questions, requests, and support inquiries;</li>
              <li>Send administrative and service-related communications;</li>
              <li>Maintain the security and integrity of the Services;</li>
              <li>Detect and prevent fraud, misuse, or unauthorized access;</li>
              <li>Improve and maintain the Services where appropriate; and</li>
              <li>Comply with applicable laws and legal obligations.</li>
            </ul>
            <p>
              We may also process personal information for other purposes where we have an appropriate legal basis or where you have provided consent when required.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 3 */}
          <section id="artificial-intelligence" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              3. Artificial Intelligence
            </h2>
            <p>
              ORI Agent uses artificial intelligence and machine-learning technologies to provide its Services.
            </p>
            <p>
              Information submitted through ORI Agent may be processed by third-party AI service providers where necessary to provide the requested functionality.
            </p>
            <p>
              This information may include prompts, conversations, instructions, relevant knowledge-base information, contextual information, generated outputs, and personal information contained within that content.
            </p>
            <p>
              We require personal information processed through our AI functionality to be handled in accordance with this Privacy Policy and our applicable arrangements with service providers.
            </p>
            <p>
              We do not make representations in this Privacy Policy regarding the use of customer information for training general-purpose AI models unless such practices and applicable provider arrangements have been confirmed.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 4 */}
          <section id="google-sign-in-and-api" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              4. Google Sign-In and Google API Data
            </h2>
            <p>ORI Agent allows users to register or log in using <strong>Google Sign-In</strong>.</p>
            <p>
              When you choose to use Google Sign-In, we may receive limited account information from Google, such as your:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Name;</li>
              <li>Email address; and</li>
              <li>Unique Google account identifier.</li>
            </ul>
            <p>
              We use this information to authenticate you, create and manage your ORI Agent account, and provide access to the Services.
            </p>
            <p>We do not receive your Google account password.</p>
            <p>
              Our use of information received from Google APIs will comply with the <strong>Google API Services User Data Policy</strong>, including the applicable Limited Use requirements.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 5 */}
          <section id="how-we-share-information" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              5. How We Share Personal Information
            </h2>
            <p>We do not sell personal information.</p>
            <p>
              We may disclose personal information to third parties where necessary to operate and provide the Services, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>AI and technology service providers;</li>
              <li>Cloud infrastructure and hosting providers;</li>
              <li>Authentication providers;</li>
              <li>Integration and connectivity providers;</li>
              <li>Payment and billing providers;</li>
              <li>Professional advisers and other service providers acting on our behalf; and</li>
              <li>Third-party services that a business customer chooses to connect to ORI Agent.</li>
            </ul>
            <p>
              These providers may process personal information only as necessary to provide their services to us or as otherwise permitted by applicable agreements and law.
            </p>
            <p>We may also disclose personal information:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Where required by applicable law, regulation, court order, or valid legal process;</li>
              <li>To protect the rights, security, or property of Origin, our users, or others;</li>
              <li>To investigate fraud, abuse, security incidents, or violations of our agreements; or</li>
              <li>In connection with a merger, financing, acquisition, reorganization, sale of assets, or similar business transaction.</li>
            </ul>
            <p>
              Where appropriate, we may maintain additional information about third-party service providers separately from this Privacy Policy.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 6 */}
          <section id="storage-and-transfers" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              6. Data Storage and International Transfers
            </h2>
            <p>ORI Agent uses cloud infrastructure hosted in <strong>Germany</strong>.</p>
            <p>
              Personal information may also be processed by service providers in other countries depending on the services and functionality used.
            </p>
            <p>
              Where personal information is transferred internationally, we take appropriate steps to comply with applicable data-protection requirements and use relevant safeguards where required.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 7 */}
          <section id="data-retention" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              7. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy.
            </p>
            <p>The applicable retention period may depend on:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>The nature of the information;</li>
              <li>The purpose for which it is processed;</li>
              <li>The duration of the customer relationship;</li>
              <li>Contractual requirements;</li>
              <li>Security and fraud-prevention requirements; and</li>
              <li>Applicable legal or regulatory obligations.</li>
            </ul>
            <p>
              When personal information is no longer required, we may delete or anonymize it.
            </p>
            <p>
              Where immediate deletion is not technically possible, such as where information remains in backup systems, it may be securely retained and isolated from further active processing until deletion is possible.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 8 */}
          <section id="how-we-protect-information" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              8. How We Protect Personal Information
            </h2>
            <p>
              We use appropriate technical and organizational measures designed to protect personal information.
            </p>
            <p>These measures include:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Network security controls;</li>
              <li>Access restrictions;</li>
              <li>System monitoring;</li>
              <li>Vulnerability assessments;</li>
              <li>Dependency assessments; and</li>
              <li>Measures intended to detect and prevent unauthorized access.</li>
            </ul>
            <p>
              We review and improve our security measures based on the risks associated with our systems and processing activities.
            </p>
            <p>
              However, no method of electronic transmission or information storage can be guaranteed to be completely secure.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 9 */}
          <section id="your-privacy-rights" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              9. Your Privacy Rights
            </h2>
            <p>
              Depending on where you are located and the applicable law, you may have rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Access personal information relating to you;</li>
              <li>Correct inaccurate or incomplete information;</li>
              <li>Request deletion of personal information;</li>
              <li>Restrict or object to certain processing;</li>
              <li>Request portability of certain information; and</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>These rights may be subject to limitations or exceptions under applicable law.</p>
            <p>
              To exercise an applicable privacy right, you may contact us at{' '}
              <a
                href="mailto:engapps@origin-me.com"
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                engapps@origin-me.com
              </a>{' '}
              or submit a Data Subject Access Request.
            </p>
            <p>We may need to verify your identity before completing a request.</p>
            <p>
              Where we process personal information on behalf of one of our business customers, we may direct your request to, or coordinate with, that business customer where appropriate.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 10 */}
          <section id="children" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              10. Children
            </h2>
            <p>ORI Agent is not intended for individuals under 18 years of age.</p>
            <p>We do not knowingly solicit or collect personal information directly from children under 18.</p>
            <p>
              If we become aware that we have collected personal information from a child in circumstances where such collection is not permitted, we will take reasonable steps to delete it.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 11 */}
          <section id="changes-to-policy" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to the Services, our data-processing practices, our service providers, or applicable legal requirements.
            </p>
            <p>
              When we update this Privacy Policy, we will revise the “<strong>Last updated</strong>” date at the top of this page.
            </p>
            <p>Where required by law, we may provide additional notice of material changes.</p>
          </section>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* SECTION 12 */}
          <section id="contact-us" className="scroll-mt-28 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              12. Contact Us
            </h2>
            <p>
              If you have questions, concerns, or requests relating to this Privacy Policy or our processing of personal information, please contact us at:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="font-bold text-slate-900 dark:text-white text-base">
                Origin Technology Solutions
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:engapps@origin-me.com"
                  className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 dark:hover:text-blue-300"
                >
                  engapps@origin-me.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> 11/12 Mostafa Refaat, Cairo Governorate, Egypt
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
