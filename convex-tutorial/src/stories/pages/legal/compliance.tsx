// File: /pages/compliance.jsx

import React from 'react';

const CompliancePage = () => {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Platform Compliance & Certifications</h1>

      {/* 1. General Statement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. General Statement</h2>
        <p>
          ClinConnect.io is committed to ensuring regulatory compliance across all its platform operations and partner collaborations. We align with industry standards to support the integrity, security, and traceability of clinical trial activities.
        </p>
      </section>

      {/* 2. GxP Compliance Areas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">2. GxP Compliance Areas</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Document control & audit trails:</strong> Every action taken on a study document is logged and traceable for full accountability.</li>
          <li><strong>Access restriction & user roles:</strong> Role-based access ensures only authorized users can perform or view specific actions.</li>
          <li><strong>Version control for study documents:</strong> All edits are version-controlled to preserve data integrity and historical accuracy.</li>
        </ul>
      </section>

      {/* 3. Data Protection Standards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. Data Protection Standards</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>GDPR-compliant user rights & data handling:</strong> Users can request access, modification, or deletion of their personal data as outlined in GDPR.</li>
          <li><strong>Optional HIPAA compliance:</strong> For U.S.-based clinical partners, HIPAA-compatible handling of personal health information (PHI) is available on request.</li>
        </ul>
      </section>

      {/* 4. Smart Contracts & Blockchain */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">4. Smart Contracts & Blockchain</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>How we log digital agreements:</strong> Blockchain-backed smart contracts record digital study agreements and amendments with immutable logs.</li>
          <li><strong>Integrity of payment flow and milestone triggers:</strong> Payments are automatically triggered based on verified study milestones, reducing delays and disputes.</li>
        </ul>
      </section>

      {/* 5. Security Certifications */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Security Certifications</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>ISO/IEC 27001:</strong> Currently pursuing ISO/IEC 27001 certification to formalize our information security management practices.</li>
          <li><strong>Penetration testing schedule:</strong> We conduct quarterly third-party penetration tests and respond rapidly to any identified vulnerabilities.</li>
        </ul>
      </section>

      {/* 6. Audit & Quality Assurance Process */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Audit & Quality Assurance Process</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Internal audit cycle:</strong> Routine audits are performed bi-annually across systems and procedures to ensure ongoing compliance.</li>
          <li><strong>CRO and Sponsor feedback integration:</strong> We actively incorporate structured feedback from Contract Research Organizations and Sponsors into platform improvements.</li>
        </ul>
      </section>
    </div>
  );
};

export default CompliancePage;