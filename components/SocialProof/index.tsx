import Image from "next/image";
import { PartnershipData } from "@/constants/data/landingPage";

const SocialProof = () => {
  return (
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
  );
};

export default SocialProof;
