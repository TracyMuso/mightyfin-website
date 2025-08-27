import BlogandNews from "@/components/BlogxNews";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import NavMenu from "@/components/layout/nav";
import LoanSteps from "@/components/LoanSteps";
import Products from "@/components/Products";
import SocialProof from "@/components/SocialProof";
import Calculator from "@/components/Laf";

import Whyus from "@/components/Whyus";
export default function Home() {
  return (
    <div>
      <NavMenu  />
      <Hero />
      <Products />
      <Calculator />
      <Whyus />
      <LoanSteps />
      <BlogandNews />
      <SocialProof />
      <Footer />
    </div>
  );
}
