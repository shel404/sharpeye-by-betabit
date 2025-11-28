import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Terms & Conditions - SharpEye Films",
  description:
    "Read our terms and conditions for using SharpEye Films services.",
  url: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 mb-0">
                <strong>Last updated:</strong> January 1, 2024
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using SharpEye Films services, you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>

            <h2>2. Services Description</h2>
            <p>
              SharpEye Films provides professional video production services
              including but not limited to:
            </p>
            <ul>
              <li>Commercial video production</li>
              <li>Corporate video services</li>
              <li>Event videography</li>
              <li>Post-production services</li>
              <li>Photography services</li>
            </ul>

            <h2>3. Project Terms</h2>
            <h3>3.1 Project Scope</h3>
            <p>
              All projects begin with a detailed scope of work that outlines
              deliverables, timelines, and costs. Changes to the scope may
              result in additional charges.
            </p>

            <h3>3.2 Payment Terms</h3>
            <p>
              Payment terms are specified in individual project agreements.
              Generally:
            </p>
            <ul>
              <li>50% deposit required to begin work</li>
              <li>Remaining balance due upon project completion</li>
              <li>Late payments may incur additional fees</li>
            </ul>

            <h3>3.3 Cancellation Policy</h3>
            <p>
              Cancellations must be made in writing. Cancellation fees may apply
              based on work already completed and resources committed.
            </p>

            <h2>4. Intellectual Property</h2>
            <h3>4.1 Client Content</h3>
            <p>
              Clients retain ownership of their original content, logos, and
              materials provided to SharpEye Films.
            </p>

            <h3>4.2 Final Deliverables</h3>
            <p>
              Upon full payment, clients receive full rights to the final video
              deliverables. SharpEye Films retains the right to use completed
              work for portfolio and marketing purposes.
            </p>

            <h3>4.3 Raw Footage</h3>
            <p>
              Raw footage and project files remain the property of SharpEye
              Films unless otherwise specified in the project agreement.
            </p>

            <h2>5. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate project requirements</li>
              <li>Timely feedback and approvals</li>
              <li>Securing necessary permissions and releases</li>
              <li>Providing access to filming locations</li>
              <li>Making payments according to agreed terms</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              SharpEye Films' liability is limited to the total amount paid for
              services. We are not liable for indirect, incidental, or
              consequential damages.
            </p>

            <h2>7. Force Majeure</h2>
            <p>
              SharpEye Films is not liable for delays or failures due to
              circumstances beyond our control, including but not limited to
              natural disasters, government actions, or technical failures.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding client projects and
              proprietary information. Non-disclosure agreements are available
              upon request.
            </p>

            <h2>9. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms will be resolved through
              binding arbitration in accordance with the laws of California.
            </p>

            <h2>10. Revisions and Edits</h2>
            <p>
              Each project includes a specified number of revision rounds.
              Additional revisions beyond the agreed scope may incur additional
              charges.
            </p>

            <h2>11. Delivery and Timeline</h2>
            <p>
              Project timelines are estimates based on the agreed scope. Delays
              in client feedback or approvals may extend delivery dates.
            </p>

            <h2>12. Equipment and Technical Issues</h2>
            <p>
              While we maintain professional equipment and backup systems, we
              are not liable for technical failures beyond our control that may
              affect project delivery.
            </p>

            <h2>13. Modifications to Terms</h2>
            <p>
              These terms may be updated from time to time. Clients will be
              notified of material changes that affect ongoing projects.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These terms are governed by the laws of California, United States,
              without regard to conflict of law principles.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              For questions about these terms and conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>SharpEye Films</strong>
              </p>
              <p className="mb-2">Email: legal@sharpeyefilms.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-0">
                Address: 123 Creative Street, Los Angeles, CA 90210
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
