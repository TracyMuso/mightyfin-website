import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/landingPage.module.css";
import {
  footerLinks,
  footerSocialLinks,
  ContactLinks,
} from "@/constants/data/footerLinks";

const Footer = () => {
  return (
    <section className="font-Montserrat pt-6">
      <footer className="flex flex-col px-5">
        <div
          className={`${styles.footerBorder} flex md:flex-row flex-col justify-between lg:gap-2 sm:gap-8 mx-auto pb-8`}
        >
          <div className="w-[370px] text-left">
            <Image src="/Images/Logo.png" alt="logo" width={308} height={80} />
            <p className="text-gray-500 text-sm md:text-m w-4/5 py-3">
              We simplify access to loans, empowering you to achieve your goals.
            </p>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap gap-8 lg:w-3/5 md:mx-0 mx-auto">
            {footerLinks.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-4 min-w-[150px] flex-1 sm:flex-none"
              >
                <Link href={group.titleLink} className="font-bold text-m">
                  {group.title}
                </Link>
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="font-normal text-sm md:text-m"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="flex flex-col gap-4 min-w-[250px]">
              {ContactLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex gap-4 items-center"
                >
                  <Image src={item.icon} alt="icon" width={25} height={25} />
                  <p className="lg:text-m text-sm">{item.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:gap-1 gap-3 justify-between py-8 md:w-[90%] mx-auto">
          <span className="text-gray-400">
            © 2025 All rights reserved | Mighty finance
          </span>
          <div className="flex items-center justify-between md:w-1/5">
            {footerSocialLinks.map((item, idx) => (
              <Image
                key={idx}
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
