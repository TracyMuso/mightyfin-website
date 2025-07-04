import CenterBar from "./centerBar";
import RightSideBar from "./ui/rightSidebar";

const DashboardHome = () => {
  return (
    <div className={`flex gap-1 bg-gray-50`}>
      <CenterBar />
      <RightSideBar />
    </div>
  );
};

export default DashboardHome;
