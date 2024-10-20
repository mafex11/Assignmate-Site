import { Navbar } from "@/components";
import { Wrapper } from "@/components";
import { Container } from "@/components";
import { Footer } from "@/components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Newsletter from "../newsletter/page";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 ">

        {/* Hero Section */}
        <Wrapper>
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        </Wrapper>

        {/* Privacy Policy Content */}
        <Wrapper className="flex flex-col items-center justify-center relative">
          <Container className="flex flex-col w-full md:gap-4 py-10 md:py-20 flex-wrap max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="text-justify font-light">
              We collect personal information that you voluntarily provide when you use our services, including but not limited to:
            </p>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Payment Information</li>
              <li>Assignment Details and Requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-justify font-light">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>Provide and manage the services you request.</li>
              <li>Process payments and provide customer support.</li>
              <li>Improve our services and enhance your experience on our website.</li>
              <li>Communicate with you regarding your orders and services.</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Data Security</h2>
            <p className="text-justify font-light">
              We are committed to ensuring the security of your personal information. We use industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <h2 className="text-2xl font-semibold">4. Data Retention</h2>
            <p className="text-justify font-light">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold">5. Sharing Your Information</h2>
            <p className="text-justify font-light">
              We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="text-justify font-light">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>Access: You can request access to the personal information we hold about you.</li>
              <li>Correction: You can request correction of inaccurate or incomplete personal information.</li>
              <li>Deletion: You can request the deletion of your personal information under certain circumstances.</li>
              <li>Opt-out: You can opt out of receiving promotional emails.</li>
            </ul>

            <h2 className="text-2xl font-semibold">7. Cookies and Tracking Technologies</h2>
            <p className="text-justify font-light">
              Our website uses cookies and similar technologies to improve your experience.
            </p>

            <h2 className="text-2xl font-semibold">8. Children&apos;s Privacy</h2>
            <p className="text-justify font-light">
              Our services are not intended for individuals under the age of 18.
            </p>

            <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
            <p className="text-justify font-light">
              We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Effective Date.&quot;
            </p>

            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
            <p className="text-justify font-light">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              <br />
              [Business Name] <br />
              Email: [Email Address] <br />
              Phone: [Phone Number] <br />
              Address: [Business Address]
            </p>
          </Container>
        </Wrapper>

        {/* Subscription Section */}
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-20">
          <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <Container className="relative z-[999999]">
              <div className="flex items-center justify-center w-full -mt-40">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 shadow-2xl shadow-black ">
                  <Newsletter />
                </div>
              </div>
            </Container>
          </Wrapper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
