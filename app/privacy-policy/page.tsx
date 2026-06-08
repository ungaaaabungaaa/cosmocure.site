import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 py-24 text-muted sm:py-32">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 font-body text-sm uppercase text-caramel">
          Privacy Policy
        </p>
        <h1 className="font-display text-5xl font-bold leading-tight text-espresso sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-8 text-base font-light leading-8">
          <p className="text-lg text-espresso">
            This Privacy Policy explains how Cosmocure collects, uses, and
            protects your information when you visit this website, contact us,
            or book our services.
          </p>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              1. Information We Collect
            </h2>
            <p>
              We may collect information you choose to share with us, including
              your name, phone number, email address, appointment details,
              service preferences, and any message you send through our contact
              methods.
            </p>
            <p>
              When you visit the website, we may also receive limited technical
              information such as browser type, device type, IP address, pages
              visited, and the time and date of your visit. This helps us keep
              the website working properly and understand basic usage.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to respond to enquiries, confirm or
              manage appointments, provide salon services, communicate about
              bookings, and improve the website and overall client experience.
            </p>
            <p>
              We may also use limited technical information to maintain site
              security, prevent misuse, and understand which pages are most
              helpful to visitors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              3. How We Share Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information only when it is needed to operate our business, such
              as with service providers that help host the website, deliver
              messages, or support appointment communication.
            </p>
            <p>
              We may also disclose information if required by law, regulation,
              legal process, or to protect our rights, users, staff, or the
              public.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              4. Cookies and Analytics
            </h2>
            <p>
              This website may use essential cookies or similar technologies to
              keep the site functioning properly. If analytics or other tracking
              tools are added in the future, they will be used only to help us
              understand site performance and improve the experience.
            </p>
            <p>
              You can control cookies through your browser settings. Some parts
              of the site may not work as expected if cookies are disabled.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              5. Data Retention
            </h2>
            <p>
              We keep personal information only for as long as needed to handle
              enquiries, manage appointments, maintain records for our business
              operations, or meet legal and accounting obligations.
            </p>
            <p>
              When information is no longer needed, we will delete it or
              anonymize it where appropriate.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              6. Data Security
            </h2>
            <p>
              We take reasonable steps to protect your information from
              unauthorized access, loss, misuse, or disclosure. However, no
              method of transmission over the internet or method of electronic
              storage is completely secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              7. Third-Party Links and Services
            </h2>
            <p>
              The website may contain links to third-party services such as
              WhatsApp, phone links, maps, or social platforms. Those services
              are governed by their own privacy policies and terms, not this
              one.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              8. Your Choices and Rights
            </h2>
            <p>
              You may contact us to ask about the information we hold about
              you, request corrections, or ask us to stop using your
              information for a particular communication where applicable.
            </p>
            <p>
              If you no longer want to receive messages from us, you can let us
              know directly using the contact details below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are not intended for children under the
              age of 13. We do not knowingly collect personal information from
              children without appropriate consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-espresso">
              10. Changes To This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised effective date. Your
              continued use of the website means you accept the updated policy.
            </p>
          </div>

          <div className="space-y-4 border-t border-caramel/20 pt-6">
            <h2 className="font-display text-2xl font-bold text-espresso">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle
              your information, contact Cosmocure at{" "}
              <a
                className="font-medium text-caramel transition-colors hover:text-espresso"
                href="mailto:cosmocure7@gmail.com"
              >
                cosmocure7@gmail.com
              </a>{" "}
              or call{" "}
              <a
                className="font-medium text-caramel transition-colors hover:text-espresso"
                href="tel:+918794201743"
              >
                +91 87942 01743
              </a>
              .
            </p>
            <p>
              Address: Ground floor, Yomcha building Medical line Behind
              General Hospital Aalo West Siang, Arunachal Pradesh.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
