import Image from "next/image";
import { WhyUsCardType } from "@/types";

const WhyUsCard = ({ title, icon, text }: WhyUsCardType) => {
  return (
    <div className="w-[270px] h-[280px] bg-white pt-4 px-6 flex justify-center rounded-3xl">
      <div className="flex flex-col pt-6 gap-3 ">
        <Image src={icon} width={40} height={40} alt="card-icon" />
        <h3 className="font-bold text-purple-500 pt-4">{title}</h3>
        <p className="text-[#4E4E4E]">{text}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
