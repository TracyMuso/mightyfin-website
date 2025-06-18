import React from "react";
import Contact from "@/components/contact";
import NavMenu from "@/components/layout/nav";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div>
      <NavMenu />
      <div className="px-3 sm:px-12 pt-12 w-full">
        <h2 className="lg:text-5xl sm:text-3xl text-xl px-4">
          Got an enquiry?
        </h2>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
