import styles from "@/styles/landingPage.module.css";
import { Button } from "../button";
import { WhyUsCardData } from "@/constants/data/landingPage";
import WhyUsCard from "../Cards/whyUs";

const Whyus = () => {
  return (
    <section
      className={`${styles.whyUs} flex lg:flex-row flex-col items-center gap-12 lg:gap-1 py-[64px] md:px-[100px] sm:px-12 px-5 justify-between`}
    >
      <div className="text-content xl:w-1/3 lg:w-1/4 flex flex-col gap-5 text-center md:text-left">
        <h2 className="font-extrabold lg:text-4xl sm:text-2xl text-xl text-white leading-[56px]">
          Why <span className="text-yellow-300">Mightyfin </span>Stands Out
        </h2>
        <p className="text-white py-2">
          At Mighty Fin, we understand that access to funding is crucial. We`re
          here to make the loan process fast, easy, and transparent.
        </p>
        <div className="w-2/5 md:mx-0 mx-auto">
          <Button text="Apply now" variant="tertiary" />
        </div>
      </div>
      <div className="mf-pros grid md:grid-rows-2 md:grid-cols-2 grid-cols-1 xl:w-1/2 justify-center gap-5">
        {WhyUsCardData.map((item, idx) => (
          <WhyUsCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Whyus;
