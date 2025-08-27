import Image from "next/image";
import Contact from "@/components/contact";
import React from "react";
import { featuresData } from "@/constants/data/about";
import styles from "@/styles/aboutPage.module.css";
import NavMenu from "@/components/layout/nav";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div>
      <NavMenu />
      <section className="lg:px-16 sm:px-12 px-8 py-10 md:h-[100vh] md:relative">
        <h1 className="lg:text-4xl sm:text-2xl pb-3 text-xl text-primary">
          Simplifying Finance, Empowering Dreams Your Fintech Ally
        </h1>
        <div className={`${styles.hero} w-full hidden sm:block`}></div>
      </section>
      <div className="px-4 md:px-12 py-4 md:py-8 rounded-xl bg-primary/10 md:text-left">
        <h4 className="text-xl md:text-3xl font-semibold text-center">
          Problem We Solve
        </h4>
        <article className="font-light pt-3">
          <p>
            Every year, thousands of Zambian small businesses and civil servants
            are denied access to credit simply because they lack formal
            collateral or a credit history - even when they have steady income
            and strong repayment capacity. Traditional banks often overlook
            these worthy borrowers, stifling business growth and personal
            financial progress. At Might Fin Zambia, we believe your potential
            shouldn`t be limited by paperwork hurdles. That`s why we`ve created
            innovative solutions that look beyond conventional requirements:
          </p>
          <ul className="list-disc pl-5">
            <li>
              No-Collateral Loans for government workers using salary-backed
              agreements
            </li>
            <li>
              First-Time Business Financing for SMEs without credit history
            </li>
            <li>
              Free Financial Training to help borrowers build creditworthiness
            </li>
            <li>Dedicated Loan Officers who provide ongoing support</li>
          </ul>
          <br />
          <p>
            As a fully digital lender headquartered in Lusaka, we combine global
            best practices with deep local market understanding. Our mission? To
            be Zambia`s most accessible financial partner - offering not just
            loans, but the tools and support to build lasting financial health
          </p>
          .
        </article>
      </div>
      <section className="flex md:flex-row flex-col justify-between items-center ld:py-28 py-16 lg:px-24 sm:px-12 px-8 gap-8">
        <div className="md:w-1/2">
          <Image
            src={"/Images/LandingPage/GroupPicture.png"}
            alt="who we are"
            width={473}
            height={450}
          />
        </div>
        <div className="flex flex-col text-left md:w-1/2 md:h-[450px] justify-between font-montserrat">
          <div className="md:block hidden">
            <Image
              src={"/Images/LandingPage/wwa.png"}
              alt="group frame"
              width={323}
              height={80}
            />
          </div>
          <span className="text-gray-400 text-center md:text-left">
            We simplify access to loans, empowering you to achieve your goals.
          </span>
          <p className="sm:leading-8 py-5 md:pb-0 text-center md:text-left">
            At Mighty Fin, we believe everyone deserves access to convenient and
            flexible financing solutions. We leverage technology to create a
            seamless loan application process, with competitive rates and
            transparent terms.
          </p>
          {/* <button className="px-12 py-4 sm:w-1/2 w-full text-center mx-auto md:mx-0 bg-purple-500 hover:bg-purple-primary rounded-md text-white">
            Learn More
          </button> */}
        </div>
      </section>
      <div className="bg-secondary flex flex-col gap-5 items-center xl:h-[100vh] px-10 py-16">
        <h2 className="md:text-4xl sm:text-2xl text-xl font-semibold pb-3 text-center">
          Our Unique Features
        </h2>
        <div className="flex md:flex-row md:flex-wrap xl:flex-nowrap flex-col items-center xl:gap-12 lg:gap-5 md:gap-1 gap-8">
          {featuresData.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] h-[400px] rounded-xl px-4 py-6 flex flex-col items-center gap-3 bg-white"
            >
              <Image src={item.icon} alt="icon" height={80} width={80} />
              <h3>{item.title}</h3>
              <p className="text-center font-light ">{item.text1}</p>
              <p className="text-center font-light ">{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
