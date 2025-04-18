import Image from 'next/image';
import Contact from '@/components/contact';
import React from 'react'
import { featuresData } from '@/constants/data/about';

const AboutPage = () => {
  return (
    <div>
          <section className="flex justify-between items-center py-28 px-24 gap-8">
      <div className="w-1/2">
        <Image
          src={"/Images/LandingPage/GroupPicture.png"}
          alt="who we are"
          width={473}
          height={450}
        />
      </div>
      <div className="flex flex-col text-left w-1/2 h-[450px] justify-between font-Montserrat">
        <div>
          <Image
            src={"/Images/LandingPage/wwa.png"}
            alt="group frame"
            width={323}
            height={80}
          />
        </div>
        <span className="text-gray-400">
          We simplify access to loans, empowering you to achieve your goals.
        </span>
        <p className="leading-8">
          At Mighty Fin, we believe everyone deserves access to convenient and
          flexible financing solutions. We leverage technology to create a
          seamless loan application process, with competitive rates and
          transparent terms.
        </p>
        <button className="px-12 py-4 w-1/2 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Learn More
        </button>
      </div>
    </section>
    <div className='bg-yellow-500 flex flex-col gap-5 items-center h-[100vh] px-10 py-16'>
      <h2 className='text-4xl font-semibold pb-3'>Our Unique Features</h2>
      <div className='flex items-center gap-12'>
        {featuresData.map((item, idx) => (
          <div key={idx} className='w-[340px] h-[400px] rounded-md px-4 py-6 flex flex-col items-center gap-3 bg-white'>
          <Image src={item.icon} alt='icon' height={80} width={80} />
          <h3>{item.title}</h3>
          <p className='text-center font-light '>{item.text1}</p>
          <p className='text-center font-light '>{item.text2}</p>
        </div>
        ))}
      </div>
    </div>
      <Contact />
    </div>
  )
}

export default AboutPage;
