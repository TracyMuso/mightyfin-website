import Image from "next/image";
import Link from "next/link";
import { PartnershipData } from "@/constants/data/landingPage";
import styles from "../../styles/landingPage.module.css";

const SocialProof = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col md:py-2 py-12 items-center md:items-start justify-between gap-4 bg-yellow-300 h-[255px] w-full">
        <div className={`relative md:w-[650px] w-full`}>
          <div
            className={`${styles.rightText} md:w-[450px] lg:w-[500px] sm:h-[250px]`}
          />
          <div className="absolute top-[25%] sm:left-[12%] w-full sm:w-auto border-left-2 border-white px-3 sm:px-0 md:pr-[43px]">
            <h3 className="font-700 font-extrabold md:text-3xl sm:text-2xl text-xl md:leading-14 md:text-left text-center">
              Trusted By Hundreds! Real People, Real Results
            </h3>
          </div>
        </div>
        <div className="flex md:self-center justify-between items-center lg:w-3/5 w-full px-4">
          <span className="flex flex-col sm:gap-3 gap-1 lg:gap-5 items-center justify around w-1/3">
            <p className="font-600 sm:text-xl lg:text-3xl font-bold">3 years</p>
            <small className="lg:text-[18px] sm:text-base text-[12px]">
              Experience
            </small>
          </span>
          <span className="flex flex-col sm:gap-3 gap-1 lg:gap-5 items-center justify around w-1/3">
            <p className="font-600 sm:text-xl lg:text-3xl font-bold">
              Over K 5M
            </p>
            <small className="lg:text-[18px] sm:text-base text-[12px]">
              Loan disbursed
            </small>
          </span>
          <span className="flex flex-col sm:gap-3 gap-1 lg:gap-5 items-center justify around w-1/3">
            <p className="font-600 sm:text-xl lg:text-3xl font-bold">
              Over 750
            </p>
            <small className="lg:text-[18px] sm:text-base text-[12px]">
              Registered users
            </small>
          </span>
        </div>
      </div>
      <section className="font-Montserrat flex flex-col bg-[#FBECFF]">
        <div className="flex md:flex-row flex-col gap-2 justify-between items-center md:w-11/12 px-4 pt-6 pb-12 mx-auto">
          <p className="md:w-2/5 text-gray-500 text-center ">
            Mightyfin is a regulated financial services provider. We are proudly
            associated with:
          </p>
          <div className="flex sm:flex-row flex-col sm:justify-around md:w-1/2 items-center">
            {PartnershipData.map((item, idx) => {
              return (
                <div key={idx}>
                  <Image
                    src={item.url}
                    alt={item.alt}
                    width={113}
                    height={95}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className={`${styles.footerCTAContainer} md:pb-16 md:h-[80vh] pb-6 pt-10 flex justify-center`}
      >
        <div
          className={`${styles.footerCtaMain} lg:w-[80%] flex justify-between`}
        >
          <div className="p-6 md:w-2/3">
            <h2 className="md:text-3xl sm:text-2xl text-xl sm:leading-[2.5rem] font-extrabold pb-4 sm:text-left text-center">
              Building Better Credit begins now with
              <span className="text-yellow-300"> Mighty Fin </span>
            </h2>
            <h4 className="md:font-bold md:text-xl pb-8 sm:text-left text-center">
              Financial Solutions at Your Fingertips: Secure Loans, Manage
              Accounts
            </h4>
            <div className="flex md:flex-row flex-col items-center md:gap-3 gap-2">
              <a
                href={"https://app.mightyfinance.co.zm/"}
                className="px-12 py-4 w-[300px] text-center sm:mx-0 mx-auto bg-purple-800 hover:bg-purple-700 rounded-3xl text-white font-bold"
                target="_blank"
              >
                Apply Now!
              </a>
              <Link
                href={"/about"}
                className="px-12 py-4 w-[300px] text-center sm:mx-0 mx-auto bg-yellow-500 hover:bg-yellow-400 rounded-3xl text-white font-bold"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <Image
              src={"/Images/LandingPage/happy-woman.png"}
              alt="happy black woman"
              width={600}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
