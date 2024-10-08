import { Navbar } from "@/components";
import { Wrapper } from "@/components";
import { Container } from "@/components";
import { Footer } from "@/components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Newsletter from "../newsletter/page";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 ">

        {/* Hero Section */}
        <Wrapper>
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        </Wrapper>

        {/* About Us Content */}
        <Wrapper className="flex flex-col items-center justify-center relative">
          <Container className="flex flex-col w-full md:gap-4 py-10 md:py-20 flex-wrap max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-justify font-light">
              Welcome to [Business Name], your trusted partner for academic support and professional writing services. 
              We specialize in helping students achieve their academic goals by providing high-quality, 100% handwritten essays, assignments, and projects.
              Our team of expert writers and educators is dedicated to ensuring that each piece of content is crafted from scratch, tailored to meet your unique requirements, 
              and free from any AI-generated text.
            </p>
            <p className="text-justify font-light">
              We understand the importance of originality and excellence in academic work. 
              That’s why our mission is to deliver custom, meticulously researched, and well-written papers that not only meet your expectations 
              but also help you succeed in your studies. Whether it’s a complex research paper, an essay, or a time-sensitive assignment, 
              we’re here to take the stress out of your academic life.
            </p>

            <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
            <ul className="list-disc list-inside pl-5">
              <li>Every piece of content is handwritten by our skilled writers, ensuring originality and uniqueness.</li>
              <li>Our team comes from various academic fields, producing high-quality work for all your academic needs.</li>
              <li>We respect deadlines and deliver assignments on time without compromising quality.</li>
              <li>We work closely with you to understand your specific requirements and offer personalized support.</li>
              <li>Your privacy is our priority. All transactions and communications are kept confidential and secure.</li>
            </ul>

            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-justify font-light">
              At [Business Name], our mission is to provide students with the resources they need to excel in their academic pursuits. 
              We believe that personalized support and expertly crafted content can make a significant difference in helping students reach their educational goals.
            </p>

            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-justify font-light">
              We envision a future where every student has access to the tools and support they need to succeed academically. 
              By providing high-quality, handwritten content, we aim to empower students to approach their studies with confidence and achieve their full potential.
            </p>

            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-justify font-light">
              If you have any questions or would like to get started on your next assignment, feel free to contact us. 
              We’re here to help you every step of the way. Let’s make your academic journey a success together!
            </p>
          </Container>
        </Wrapper>

        {/* Subscription Section */}
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-20">
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 shadow-2xl shadow-black ">
              <Newsletter/>
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

export default AboutUs;
