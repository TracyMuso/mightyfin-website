"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/data/navmenu";
import MobileNav from "./mobilenav";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div className="py-4 px-9 flex lg:gap-6 gap-3 border-gray-50 border-b-2 justify-between items-center m-0 w-full font-Montserrat">
      <div className="logo p-0">
        <Link href={"/"}>
          <Image
            src="/Images/Logo.png"
            alt="logo"
            className="w-[130px] h-[50px] lg:w-[225px] lg:h-[70px]"
            width={225}
            height={70}
          />
        </Link>
      </div>
      <div className="nav-items hidden md:flex justify-between lg:gap-2 py-4 px-6 rounded-[50px]">
        {navLinks.map((item, idx) => (
          <Link
            className={`${pathname == item.url ? "nav-item-active" : ""} px-4 py-2 text-sm lg:text-[16px] rounded-[50px]`}
            href={item.url}
            key={idx}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href={"auth/signin"}
          className="bg-purple-800 hover:bg-purple-700 px-5 py-2 rounded-lg text-white text-sm lg:text-[16px] font-semibold"
        >
          Log in
        </Link>
      </div>
      <MobileNav />
      {/* <div className="w-1/4 flex items-center justify-between">
        <div className="2/5">
          <Button
            onBtnClick={() => {
              void router.push("/auth/sign-in");
            }}
            text="log in"
            variant="secondary"
          />
        </div>
        <div className="w-3/5">
          <Button
            onBtnClick={() => {
              void router.push("/auth/signup");
            }}
            text="Sign Up"
            variant="primary"
          />
        </div>
      </div> */}
    </div>
  );
};

export default NavMenu;
