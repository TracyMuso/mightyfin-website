import Link from "next/link";
import Image from "next/image";
import { ContactLinks } from "@/constants/data/footerLinks";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col sm:items-start items-center gap-5 py-16 lg:px-16 sm:px-0 px-8">
      <div className="flex md:flex-row justify-between flex-col items-center m-0 gap-10 lg:px-12 w-full">
        <div className=" flex flex-col justify-between sm:items-start items-center gap-9">
          <div className="flex flex-col sm:items-start items-center gap-5">
            <h3 className="lg:text-3xl font-semibold text-xl sm:text-2xl sm:text-start text-center text-black">Get in touch</h3>
            <p className="xl:text-xl md:text-base sm:text-m sm:text-start text-center">We`d love to hear from you ! <br />
            Here is how you can reach  us</p>
          </div>
          <div className="flex flex-col gap-4 min-w-[250px] flex-1 sm:flex-none">
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
         <ContactForm />
      </div>
    </div>
  )
}

export default Contact;