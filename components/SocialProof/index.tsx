import Image from "next/image";
import { PartnershipData } from "@/constants/data/landingPage";
import styles from "../../styles/landingPage.module.css";

const SocialProof = () => {
  return (
    <div>
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
                <Image src={item.url} alt={item.alt} width={113} height={95} />
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
          className={`${styles.footerCtaMain} md:w-[80%] flex justify-between`}
        >
          <div className="p-6 md:w-2/3">
            <h2 className="md:text-3xl sm:text-2xl text-xl sm:leading-[2.5rem] font-extrabold pb-4 sm:text-left text-center">
              Embrace A Brighter Financial Future With
              <span className="text-yellow-300"> Mighty Fin </span>
              Starting Today!
            </h2>
            <h4 className="md:font-bold md:text-xl pb-8 sm:text-left text-center">
              Financial Solutions at Your Fingertips: Secure Loans, Manage
              Accounts
            </h4>
            <button className="px-12 py-4 w-[300px] text-center sm:mx-0 mx-auto bg-purple-500 hover:bg-purple-primary rounded-3xl text-white font-bold">
              Apply Now!
            </button>
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
