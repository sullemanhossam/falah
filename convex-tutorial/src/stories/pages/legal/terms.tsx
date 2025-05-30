// File: /pages/terms.jsx (or /src/pages/terms.jsx in some setups)

import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">ClinConnect.io Terms of Use</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using ClinConnect.io, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Account Registration and Access</h2>
        <p>
          To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Use of the Platform</h2>
        <h3 className="text-xl font-medium mt-4">Posting Studies</h3>
        <p>
          Sponsors may post studies subject to our approval and content guidelines.
        </p>
        <h3 className="text-xl font-medium mt-4">Submitting Proposals</h3>
        <p>
          Researchers can submit proposals in response to available studies. All submissions must comply with our guidelines and ethics policies.
        </p>
        <h3 className="text-xl font-medium mt-4">Communication Features</h3>
        <p>
          Users may interact using messaging tools. Misuse of communication features will result in suspension or termination of access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content, trademarks, and data on ClinConnect.io are the intellectual property of the company or its licensors and may not be used without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. User Conduct & Prohibited Activities</h2>
        <p>
          Users may not engage in unlawful, harmful, or abusive behavior. Prohibited activities include spamming, impersonation, hacking, or uploading malicious code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Payment Terms</h2>
        <p>
          If applicable, all payments made through the platform are subject to our billing and refund policies. Users agree to provide accurate billing information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Platform Availability and Downtime</h2>
        <p>
          While we strive for 99.9% uptime, ClinConnect.io may be unavailable from time to time due to maintenance, updates, or unforeseen outages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless ClinConnect.io and its affiliates from any claims, liabilities, or damages resulting from your use of the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Modification of Terms</h2>
        <p>
          We reserve the right to change these Terms of Use at any time. Changes will be posted on this page and are effective immediately upon posting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Governing Law & Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of the state or country in which ClinConnect.io is headquartered. Disputes shall be resolved in the corresponding courts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">12. Contact Info</h2>
        <p>
          For questions regarding these Terms, please contact us at <a href="mailto:support@clinconnect.io" className="text-blue-600 underline">support@clinconnect.io</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;