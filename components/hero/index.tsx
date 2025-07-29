import Image from "next/image";
import Point from "./point";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="md:mx-0 mx-auto lg:flex items-center md:justify-between justify-center bg-yellow-100 lg:bg-white px-6 font-Montserrat">
      <div className="main-text sm:text-left lg:w-1/2 sm:pb-12 sm:px-12 px-0">
        <article className="py-12 gap-2 md:text-left text-center flex flex-col md:items-start items-center">
          <span className="md:text-3xl sm:text-xl">
            Financial Solutions Built for You
          </span>
          <h1 className="lg:text-5xl sm:text-3xl text-xl font-extrabold md:leading-12 pb-2 md:pb-8 md:pt-6 leading text-purple-500">
            <span className="text-yellow-400">Business Growth</span> & Personal
            Loans
          </h1>
          <span className="italic font-semibold text-green-600">
            Approved in 24 Hours <CheckCircle className="inline" />
          </span>
          <p className="sm:w-4/5 w-full text-gray-600 text-xl font-medium">
            Tailored funding for small businesses and civil servants -
            competitive rates, flexible terms, and no hidden fees
          </p>
        </article>
        <div className="lg:mx-0 mx-auto lg:block h-[100px] lg:h-auto flex justify-center">
          <span className="">
            <a
              className="px-8 py-4 md:text-xl bg-purple-800 hover:bg-purple-700 transition-all text-center sm:w-full rounded-md font-semibold text-white"
              href={"https://app.mightyfinance.co.zm/"}
              target="_blank"
            >
              Get Started!
            </a>
          </span>
        </div>
      </div>
      <div className="relative flex-1 lg:block hidden">
        <Image
          src={"/Images/LandingPage/hero-img.png"}
          width={540}
          height={392}
          alt="smiling-woman-scrolling-on-phone"
        />
        <div className="absolute top-[170px] right-[7px]">
          <Point
            title="Financing At Your Fingertips"
            text="Apply in 5-10 mins"
          />
        </div>
        <div className="absolute top-[7px] left-[5px]">
          <Point title="Bank said No?" text="Give us a go" />
        </div>
        <div className="absolute top-[300px] left-[15px]">
          <Point title="Free Workshops" text="Learn smart money management" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
