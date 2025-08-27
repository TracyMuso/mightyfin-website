import { type HeroPointType } from "@/types";
import styles from "@/styles/landingPage.module.css";

const Point = ({ title, text, className }: HeroPointType) => {
  return (
    <div className={`${styles.heroPoint} z-2 backdrop-blur-sm shadow-sm rounded-md px-5 py-3 ${className || ''}`}>
      <div className="flex flex-col justify-center z-5 text-center text-purpe-600 origin-center cursor-pointer">
        <span className="font-bold text-center">{title}</span>
        <span className="text-center">{text}</span>
      </div>
    </div>
  );
};

export default Point;
