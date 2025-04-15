import Hero from "@/components/hero";
import LoanSteps from "@/components/LoanSteps";
import Products from "@/components/Products";
import Whyus from "@/components/Whyus";
export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Whyus />
      <LoanSteps />
    </div>
  );
}