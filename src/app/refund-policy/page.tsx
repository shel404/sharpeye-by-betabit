import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Refund Policy - SharpEye Films",
  description:
    "Learn about our refund policy and procedures for SharpEye Films services.",
  url: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-300">
              Understanding our refund procedures and policies.
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

            <h2>1. General Refund Policy</h2>
            <p>
              At SharpEye Films, we strive to deliver exceptional video
              production services that exceed your expectations. Our refund
              policy is designed to be fair while protecting the interests of
              both our clients and our business.
            </p>

            <h2>2. Deposit Refunds</h2>
            <h3>2.1 Before Production Begins</h3>
            <p>
              If you cancel your project before any production work has
              commenced, you may be eligible for a partial refund of your
              deposit:
            </p>
            <ul>
              <li>
                <strong>More than 14 days before scheduled production:</strong>{" "}
                80% refund
              </li>
              <li>
                <strong>7-14 days before scheduled production:</strong> 50%
                refund
              </li>
              <li>
                <strong>Less than 7 days before scheduled production:</strong>{" "}
                25% refund
              </li>
              <li>
                <strong>Less than 48 hours before scheduled production:</strong>{" "}
                No refund
              </li>
            </ul>

            <h3>2.2 After Production Begins</h3>
            <p>
              Once production has commenced, deposits are generally
              non-refundable due to resources already committed to your project.
            </p>

            <h2>3. Project Completion Refunds</h2>
            <h3>3.1 Unsatisfactory Work</h3>
            <p>
              If you are unsatisfied with the final deliverables, we will first
              attempt to resolve the issue through:
            </p>
            <ul>
              <li>Additional revisions (within reason)</li>
              <li>Re-editing or re-shooting specific segments</li>
              <li>Collaborative problem-solving</li>
            </ul>

            <h3>3.2 Refund Eligibility</h3>
            <p>
              Refunds for completed projects may be considered in the following
              circumstances:
            </p>
            <ul>
              <li>Failure to deliver agreed-upon services</li>
              <li>Significant deviation from approved project scope</li>
              <li>Technical issues that cannot be resolved</li>
              <li>Breach of contract by SharpEye Films</li>
            </ul>

            <h2>4. Partial Refunds</h2>
            <p>
              In cases where partial work has been completed, refunds will be
              calculated based on:
            </p>
            <ul>
              <li>Percentage of work completed</li>
              <li>Resources already expended</li>
              <li>Deliverables already provided</li>
              <li>Time invested in the project</li>
            </ul>

            <h2>5. Non-Refundable Items</h2>
            <p>The following are generally non-refundable:</p>
            <ul>
              <li>
                Third-party costs (equipment rentals, location fees, talent
                fees)
              </li>
              <li>Travel expenses already incurred</li>
              <li>Completed deliverables that meet project specifications</li>
              <li>Time spent on pre-production planning</li>
            </ul>

            <h2>6. Refund Process</h2>
            <h3>6.1 Request Procedure</h3>
            <p>To request a refund:</p>
            <ol>
              <li>
                Contact us in writing within 30 days of project completion
              </li>
              <li>Provide detailed reasons for the refund request</li>
              <li>Include relevant project documentation</li>
              <li>Allow up to 10 business days for initial response</li>
            </ol>

            <h3>6.2 Review Process</h3>
            <p>
              All refund requests are reviewed on a case-by-case basis. We may
              request additional information or schedule a meeting to discuss
              the issues.
            </p>

            <h3>6.3 Processing Time</h3>
            <p>
              Approved refunds will be processed within 14 business days and
              returned via the original payment method.
            </p>

            <h2>7. Force Majeure</h2>
            <p>
              In cases where projects cannot be completed due to circumstances
              beyond our control (natural disasters, government restrictions,
              etc.), refunds will be calculated based on work completed up to
              that point.
            </p>

            <h2>8. Client Responsibilities</h2>
            <p>Refund eligibility may be affected if clients fail to:</p>
            <ul>
              <li>Provide timely feedback and approvals</li>
              <li>Supply necessary materials or access</li>
              <li>Communicate changes or concerns promptly</li>
              <li>Meet payment obligations</li>
            </ul>

            <h2>9. Dispute Resolution</h2>
            <p>
              If you disagree with our refund decision, we encourage open
              communication to resolve the matter. If necessary, disputes may be
              resolved through mediation or arbitration as outlined in our Terms
              & Conditions.
            </p>

            <h2>10. Exceptions</h2>
            <p>This policy may not apply to:</p>
            <ul>
              <li>Custom contracts with specific refund terms</li>
              <li>
                Government or institutional clients with special agreements
              </li>
              <li>
                Projects with unique circumstances requiring individual
                consideration
              </li>
            </ul>

            <h2>11. Policy Updates</h2>
            <p>
              This refund policy may be updated from time to time. Changes will
              not affect projects already in progress unless mutually agreed
              upon.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              For refund requests or questions about this policy, please contact
              us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>SharpEye Films - Billing Department</strong>
              </p>
              <p className="mb-2">Email: billing@sharpeyefilms.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">
                Address: 123 Creative Street, Los Angeles, CA 90210
              </p>
              <p className="mb-0">
                <strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00
                PM PST
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
              <p className="text-yellow-800 mb-0">
                <strong>Note:</strong> We believe in the quality of our work and
                are committed to client satisfaction. Most issues can be
                resolved through communication and collaboration before refunds
                become necessary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
