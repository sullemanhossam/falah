// File: /pages/privacy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">ClinConnect.io Privacy Policy</h1>

      <p className="italic mb-8 text-center">
        We comply with the General Data Protection Regulation (EU 2016/679).
      </p>

      {/* 1. Who We Are */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Who We Are (Data Controller)</h2>
        <p>
          ClinConnect.io is the data controller responsible for handling your personal data. You can contact us using the information provided at the bottom of this policy.
        </p>
      </section>

      {/* 2. What Personal Data We Collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">2. What Personal Data We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Registration data:</strong> Name, email, organization, role, and other identifiers.</li>
          <li><strong>Usage logs:</strong> Activity on the platform, IP address, device information.</li>
          <li><strong>Uploaded content:</strong> Documents, proposals, messages, and other user-generated data.</li>
        </ul>
      </section>

      {/* 3. How We Use Your Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Platform operation:</strong> To provide core functionality such as account access, study matching, and workflow tools.</li>
          <li><strong>Proposal generation:</strong> To facilitate research engagement, document submission, and review processes.</li>
          <li><strong>Communication:</strong> To send important updates, respond to inquiries, and deliver system notifications.</li>
        </ul>
      </section>

      {/* 4. Legal Bases for Processing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">4. Legal Bases for Processing</h2>
        <p>
          We process personal data under the following GDPR legal bases:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li><strong>Article 6(1)(a):</strong> Consent</li>
          <li><strong>Article 6(1)(b):</strong> Contract performance</li>
          <li><strong>Article 6(1)(c):</strong> Legal obligations</li>
          <li><strong>Article 6(1)(f):</strong> Legitimate interests</li>
        </ul>
      </section>

      {/* 5. Data Sharing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Data Sharing</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Third-party processors:</strong> We engage vetted service providers for hosting, analytics, and communication services.</li>
          <li><strong>No data resale:</strong> We do not sell or lease your personal information to third parties.</li>
        </ul>
      </section>

      {/* 6. Cookies & Tracking */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Cookies & Tracking</h2>
        <p>
          We use cookies and similar technologies for session management, analytics, and personalization. You can manage cookie preferences through your browser or our cookie settings tool.
        </p>
      </section>

      {/* 7. How We Store and Secure Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">7. How We Store and Secure Data</h2>
        <p>
          Data is stored on encrypted servers with access controls and monitored for unauthorized access. We use best practices to maintain the confidentiality and integrity of your data.
        </p>
      </section>

      {/* 8. User Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">8. User Rights</h2>
        <p>Under the GDPR, you have the right to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion (“right to be forgotten”)</li>
          <li>Request data portability</li>
          <li>Object to certain processing activities</li>
        </ul>
      </section>

      {/* 9. Data Retention Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">9. Data Retention Policy</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Inactive accounts may be reviewed after 24 months.
        </p>
      </section>

      {/* 10. International Transfers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">10. International Transfers</h2>
        <p>
          Where data is transferred outside the EU/EEA, we implement appropriate safeguards, such as Standard Contractual Clauses (SCCs) or equivalent protections.
        </p>
      </section>

      {/* 11. Changes to the Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">11. Changes to the Privacy Policy</h2>
        <p>
          We may update this policy from time to time. All changes will be posted on this page with the effective date clearly indicated.
        </p>
      </section>

      {/* 12. Contact DPO */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">12. Contact DPO</h2>
        <p>
          If you have any questions about this policy or wish to exercise your rights, contact our Data Protection Officer at <a href="mailto:dpo@clinconnect.io" className="text-blue-600 underline">dpo@clinconnect.io</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;