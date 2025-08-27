"use client";

import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/data/navmenu";

const NavMenu = () => {
  const pathname = usePathname();
  return (
  <div className="pt-2 px-9 sm:py-4 lg:py-1 py-2 flex items-center justify-between border-b-2 border-gray-50 w-full font-montserrat">
  {/* Left: Logo */}
  <div className="logo sm:w-[235px] h-auto w-[180px]">
    <Link href={"/"}>
      <Image
        src="/Images/Logo.png"
        alt="logo"
        className="w-full h-auto object-contain"
        width={180}
        height={233}
        priority
      />
    </Link>
  </div>

  {/* Middle: Nav */}
  <div className="nav-items hidden md:flex justify-center gap-6 py-4 px-6 rounded-[50px] flex-1">
    <div className="bg-primary/10 p-4 rounded-full"> {navLinks.map((item, idx) => (
      <Link
        className={`${pathname == item.url ? "nav-item-active" : ""} px-4 hover:font-bold py-2 text-sm lg:text-[16px] rounded-[50px]`}
        href={item.url}
        key={idx}
      >
        {item.title}
      </Link>
    ))}</div>
   
  </div>

  {/* Right: Buttons */}
  <div className="flex gap-2">
     <Link target="_blank" href={"https://app.mightyfinance.co.zm/"}> <Button
     
      className="bg-primary hover:bg-primary/90 px-5 py-2 rounded-full text-white text-sm lg:text-[16px] font-semibold"
      
      rel="noopener noreferrer"
    >
      Log in
    </Button></Link>
   
     <Link target="_blank" href={"https://app.mightyfinance.co.zm/"}> <Button
      className="bg-secondary hover:bg-secondary/90 px-5 py-2 rounded-full text-white text-sm lg:text-[16px] font-semibold"
      
      rel="noopener noreferrer"
    >
      Apply
    </Button></Link>
   
  </div>
</div>

  );
};

export default NavMenu;
