import Image from "next/image";
import { LeftSidebarData } from "@/constants/data/dashboard";
import styles from "@/styles/Dashboard.module.css";

const LeftSidebar = () => {
  return (
    <div
      className={`${styles.leftSidebarContainer} gap-8 col-[_1/_2] row-span-2`}
    >
      <div className="flex justify-center py-12">
        <Image
          src={"/Icons/mf-logo.png"}
          height={40}
          width={60}
          alt="mighty-fin logo"
        />
      </div>
      <div className="flex flex-col items-start gap-9">
        {LeftSidebarData.map((item, idx) => (
          <div
            className="flex justify-start pl-5 gap-4 items-center w-[240px] hover:font-bold cursor-pointer"
            key={idx}
            onClick={item.onClick}
            id={item.title}
          >
            <Image src={item.icon} alt={item.alt} width={25} height={25} />
            <span className="text-white">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
