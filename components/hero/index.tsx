import Image from "next/image";
import Point from "./point";
import { Button } from "./button";

const Hero = () => {
  return (
    <section className="md:mx-0 mx-auto flex items-center md:justify-between justify-center md:h-[85vh] px-6 font-Montserrat">
      <div className="main-text sm:text-left lg:w-3/5 pb-12 sm:px-12 px-0">
        <article className="py-12 gap-2 md:text-left text-center flex flex-col md:items-start items-center">
          <span className="md:text-3xl text-xl t">Need a loan?</span>
          <h1 className="lg:text-4xl sm:text-2xl text-xl font-extrabold leading-12 md:pb-8 md:pt-6 text-purple-500">
            Fast & <span className="text-yellow-300">Easy </span>Loans Apply in
            Minutes
          </h1>
          <p className="sm:w-4/5 w-full text-gray-400 text-xl">
            We simplify the loan process, so you can focus on your goals
          </p>
        </article>
        <div className="w-2/5 lg:mx-0 mx-auto">
          <Button text="Apply now!" variant="primary" fullWidth />
        </div>
      </div>
      <div className="relative lg:block hidden">
        <Image
          src={"/Images/LandingPage/hero-img.png"}
          width={540}
          height={392}
          alt="smiling-woman-scrolling-on-phone"
        />
        <div className="absolute top-[170px] right-[7px]">
          <Point title="How much do you need?" text="apply now" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
