import Image from "next/image";
import Step from "./step";
import { LoanStepsData } from "@/constants/data/landingPage";

const LoanSteps = () => {
  return (
    <section className="flex flex-col w-full py-16 md:px-24 sm:px-12 px-5 items-center">
      <div className="flex flex-col items-center md:w-4/5 pb-10">
        <h1 className="lg:text-5xl sm:text-3xl text-xl font-extrabold pb-2 text-primary">
          How it works
        </h1>
        <p className="text-primary/70 sm:text-xl sm:text-left text-center">
          3 Simple Steps to Begin Your Journey
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="m-0 lg:block hidden">
          <Image
            src={
              "/Images/LandingPage/woman-checking-her-smartphone-notifications-1.png"
            }
            alt="woman-checking-smartphone"
            width={380}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-3 pr-8">
          {LoanStepsData.map((item, idx) => {
            return <Step key={idx} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanSteps;
