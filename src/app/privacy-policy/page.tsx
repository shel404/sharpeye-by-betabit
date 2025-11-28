import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Privacy Policy - SharpEye Films",
  description:
    "Learn how SharpEye Films collects, uses, and protects your personal information.",
  url: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we protect your
              information.
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

            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, contact us, or use our services. This may
              include:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Project details and requirements</li>
              <li>Payment information</li>
              <li>Communications with our team</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our video production services</li>
              <li>Communicate with you about projects and services</li>
              <li>Process payments and manage accounts</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience
              on our website. You can control cookie settings through your
              browser preferences.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services. We are not
              responsible for the privacy practices of these external sites.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>9. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              for such transfers.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>SharpEye Films</strong>
              </p>
              <p className="mb-2">Email: privacy@sharpeyefilms.com</p>
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
