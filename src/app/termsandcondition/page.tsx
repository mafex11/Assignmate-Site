import { Navbar } from "@/components";
import { Wrapper } from "@/components";
import { Container } from "@/components";
import { Footer } from "@/components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 ">

        {/* Hero Section */}
        <Wrapper>
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        </Wrapper>

        {/* Terms and Conditions Content */}
        <Wrapper className="flex flex-col items-center justify-center  relative">
          <Container className="flex flex-col w-full md:gap-4 py-10 md:py-20 flex-wrap max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
            <p className="text-justify font-light">
              Welcome to Assignmoto. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions. 
              Please read these terms carefully before using our services.
            </p>

            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-justify font-light">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, 
              including any additional terms and policies referenced herein. If you do not agree to these terms, you are prohibited from using our website and services.
            </p>

            <h2 className="text-2xl font-semibold">2. Service Use</h2>
            <p className="text-justify font-light">
              You agree to use our services only for lawful purposes. You are prohibited from using our services:
              <ul className="list-disc list-inside pl-5">
                <li>For any unlawful, fraudulent, or malicious activity.</li>
                <li>To violate any applicable laws, regulations, or third-party rights.</li>
                <li>To transmit any unsolicited or unauthorized advertising or promotional materials.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
            <p className="text-justify font-light">
              All content, including text, graphics, logos, and software, available on our website is the property of Assignmoto and is protected by intellectual property laws.
              You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>

            <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
            <p className="text-justify font-light">
              To the fullest extent permitted by law, Assignmoto shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of our services, 
              even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold">5. User Accounts</h2>
            <p className="text-justify font-light">
              You may be required to create an account to use certain features of our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              We reserve the right to suspend or terminate accounts that violate these terms.
            </p>

            <h2 className="text-2xl font-semibold">6. Payments and Refunds</h2>
            <p className="text-justify font-light">
              All payments made for services are non-refundable unless otherwise stated. You agree to provide accurate billing information and authorize us to charge the payment method provided for any fees related to the services.
            </p>

            <h2 className="text-2xl font-semibold">7. Termination of Services</h2>
            <p className="text-justify font-light">
              We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to our business interests or the rights of others.
            </p>

            <h2 className="text-2xl font-semibold">8. Privacy Policy</h2>
            <p className="text-justify font-light">
              Your use of our services is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our website, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold">9. Governing Law</h2>
            <p className="text-justify font-light">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or related to these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
            </p>

            <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
            <p className="text-justify font-light">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with the updated &quotEffective Date.&quot;
              Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2 className="text-2xl font-semibold">11. Contact Us</h2>
            <p className="text-justify font-light">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
              <br />
              <br />
              Assignmoto <br />
              Email: Assignmoto@gmail.com <br />
              Phone: +919328261868 <br />
              Address: Bangalore, India.
            </p>
          </Container>
        </Wrapper>

        {/* Subscription Section */}
        <Wrapper className="flex flex-col items-center justify-center py-12 relative mt-20">
          <Container className="relative z-[999999]">
            <div className="flex items-center justify-center w-full -mt-40">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 shadow-2xl shadow-black">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h4 className="text-xl md:text-2xl font-semibold">Join our newsletter</h4>
                  <p className="text-base text-muted-foreground">For special offers and updates, Join now.</p>
                </div>
                <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                  <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                    <Input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                    />
                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    By subscribing you agree with our{" "}
                    <Link href="privacypolicy">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>

      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
