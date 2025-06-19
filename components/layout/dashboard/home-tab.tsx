import styles from "@/styles/Dashboard.module.css";
import CenterBar from "./centerBar";
import RightSideBar from "./ui/rightSidebar";

const DashboardHome = () => {
  return (
    <div className={`${styles.main} grid grid-cols-[850px_1fr] gap-1`}>
      <CenterBar />
      <RightSideBar />
    </div>
  );
};

export default DashboardHome;
