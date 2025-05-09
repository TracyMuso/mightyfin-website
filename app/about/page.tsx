import Image from 'next/image';
import Contact from '@/components/contact';
import React from 'react'
import { featuresData } from '@/constants/data/about';
import styles from '@/styles/aboutPage.module.css'

const AboutPage = () => {
  return (
    <div>
      <section className='lg:px-16 sm:px-12 px-8 py-10 md:h-[100vh] md:relative'>
        <h1 className='lg:text-4xl sm:text-2xl pb-3 text-xl text-purple-600'>Simplifying Finance, Empowering Dreams
        Your Fintech Ally</h1>
        <div className={`${styles.hero} w-full hidden sm:block`}>
        </div>
        <div className='p-4 rounded-md bg-gray-50 md:text-left md:absolute left-24 bottom-12 sm:w-[500px]'>
          <h4 className='text-xl'>Problem We Solve</h4>
          <p className='font-light pt-3'>
            Many people struggle with confusing loan applications, hidden fees, and inflexible repayment options. Mighty Fin simplifies the process with an easy-to-use platform, clear rates, and personalized, flexible repayment plans, making borrowing straightforward and stress-free.
          </p>
        </div>
      </section>
          <section className="flex md:flex-row flex-col justify-between items-center ld:py-28 py-16 lg:px-24 sm:px-12 px-8 gap-8">
      <div className="md:w-1/2">
        <Image
          src={"/Images/LandingPage/GroupPicture.png"}
          alt="who we are"
          width={473}
          height={450}
        />
      </div>
      <div className="flex flex-col text-left md:w-1/2 md:h-[450px] justify-between font-Montserrat">
        <div className='md:block hidden'>
          <Image
            src={"/Images/LandingPage/wwa.png"}
            alt="group frame"
            width={323}
            height={80}
          />
        </div>
        <span className="text-gray-400 text-center md:text-left">
          We simplify access to loans, empowering you to achieve your goals.
        </span>
        <p className="sm:leading-8 py-5 md:pb-0 text-center md:text-left">
          At Mighty Fin, we believe everyone deserves access to convenient and
          flexible financing solutions. We leverage technology to create a
          seamless loan application process, with competitive rates and
          transparent terms.
        </p>
        <button className="px-12 py-4 sm:w-1/2 w-full text-center mx-auto md:mx-0 bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Learn More
        </button>
      </div>
    </section>
    <div className='bg-yellow-500 flex flex-col gap-5 items-center xl:h-[100vh] px-10 py-16'>
      <h2 className='md:text-4xl sm:text-2xl text-xl font-semibold pb-3 text-center'>Our Unique Features</h2>
      <div className='flex md:flex-row md:flex-wrap xl:flex-nowrap flex-col items-center xl:gap-12 lg:gap-5 md:gap-1 gap-8'>
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
