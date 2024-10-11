"use client";
// import { Navbar } from "@/components";
// import { Wrapper } from "@/components";
// import { Container } from "@/components";
// import { Footer } from "@/components";
import { useState } from "react";
import PaymentFormsPage from "../adminpaymentformspage/page"; // Import the Payment Forms Page
import FormsPage from "../admincustomformspage/page"; // Import the Custom Request Forms Page
import ContactFormsPage from "../admincontactformspage/page"; // Import the Contact Forms Page
import NewsletterPage from "../adminnewsletterpage/page"; // Import the Newsletter Page

const Admin = () => {
  const [activeTab, setActiveTab] = useState("payment");

  return (
    <div className="flex flex-col items-center w-full">
      {/* <Navbar /> */}
      <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        
        {/* Hero Section (Optional) */}
        <div>
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,)] -z-10 h-full]" />
        </div>

        {/* Tab Menu */}
        <div className="flex flex-col items-center justify-center py-12 relative">
          <div className="flex space-x-6 mb-6">
            <button
              className={`px-4 py-2 ${activeTab === "payment" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded-md`}
              onClick={() => setActiveTab("payment")}
            >
              Payment Forms
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "custom" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded-md`}
              onClick={() => setActiveTab("custom")}
            >
              Custom Request Forms
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "contact" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded-md`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Forms
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "newsletter" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded-md`}
              onClick={() => setActiveTab("newsletter")}
            >
              Newsletters
            </button>
          </div>

          {/* Display the corresponding form page based on active tab */}
          <div className="relative z-[999999]">
            {activeTab === "payment" && <PaymentFormsPage />}
            {activeTab === "custom" && <FormsPage />}
            {activeTab === "contact" && <ContactFormsPage />}
            {activeTab === "newsletter" && <NewsletterPage />}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Admin;
