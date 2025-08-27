import Image from "next/image";
import Point from "./point";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="md:mx-0 mx-0 px-0 lg:flex items-center md:justify-between justify-between bg-secondary/20 lg:bg-white font-montserrat">
      <div className="main-text mx-0 px-0 sm:text-left lg:w-1/2 sm:pb-12 sm:px-12 px-0">
        <article className="py-12 gap-2 md:text-left text-center flex flex-col md:items-start items-center">
          <span className="font-semibold text-sm rounded-full bg-secondary/10 p-1 px-2 text-primary">
            Approved in 24 Hours <CheckCircle className="inline" />
          </span>

          <h1 className="lg:text-6xl sm:text-4xl text-2xl font-extrabold md:leading-regular pb-2 md:pb-8 md:pt-6 md:leading-regular text-primary">
            Fast & Easy Loan in <span className="text-secondary">Minutes</span>
           
          </h1>
         <span className="md:text-2xl sm:text-xl">
            Financial Solutions Built for You
          </span>
          <p className="sm:w-4/5 w-full text-gray-600 text-xl font-medium">
            Loans made easy for small businesses, small businesses & civil servants -
            competitive rates, flexible terms, and no hidden fees
          </p>
        </article>
        <div className="flex lg:block justify-center lg:justify-start h-[100px] lg:h-auto">
          <span>
            <Button variant="default"
              className="px-6 lg:h-14 md:text-xl hover:bg-primary/90 transition-all text-center"
              asChild
            >
              <Link href="https://app.mightyfinance.co.zm/" target="_blank">
                Get Started!
              </Link>
            </Button>
          </span>
        </div>
      </div>
      <div className="relative flex-1 lg:block hidden">
        <Image className="rounded-2xl"
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
        <div className="absolute top-[7px] -left-[40px]">
          <Point className="bg-white" title="Bank said No?" text="Give us a go" />
        </div>
        <div className="absolute top-[300px] left-[15px]">
          <Point title="Free Workshops" text="Learn smart money management" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
