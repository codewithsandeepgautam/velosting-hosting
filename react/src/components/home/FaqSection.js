import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="md:pt-[20px] md:pb-[70px] max-md:pb-[50px]">
      <div className="lg:container mx-auto px-4 md:py-[10px]">
        <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
          <div className='md:w-1/2 max-md:mb-[30px]'>
            <h2 className='max-w-[390px]'>Got questions? Well, we've got answers.</h2>
            <p className='max-w-[640px] mb-[30px]'>From 24/7 support that acts as your extended team to incredibly fast website performance</p>
            <div className='w-full'>
              <img src={ImageIcons.faqpic} alt='Faq Pic' className='w-full max-w-[400px]' />
            </div>
          </div>
          <div className='md:w-1/2 max-md:w-full'>
            <div className='mb-[30px]'>
              {faqData.map((item, i) => (
                <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                  <button onClick={() => toggleAccordion(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                    <div className='relative pr-[22px] flex justify-between items-start'>
                      <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                      {openIndex === i ? (
                        <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                      ) : (
                        <FaChevronDown size="15" className='absolute right-0' />
                      )}
                    </div>
                  </button>
                  <div className={`duration-300 faq-content ${openIndex === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} className='last:mb-0 md:text-[16px] max-md:text-[15px]' />
                    {item.faqList && <ul className='list-disc'>
                      {item.faqList.map((itemList, i) => (
                        <li className='mb-[5px] text-[15px] relative ml-[25px]'>
                          {itemList}</li>
                      ))}
                    </ul>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/faqs'>More FAQs<FaArrowRightLong className='ml-[10px]' /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const faqData = [
  {
    question: "What is Domain Registration?",
    answer: "It is the process of getting the name reserved on the internet for a particular period of time, called a Domain Name.",
  },
  {
    question: "Why Choose Velosting for Web Hosting?",
    answer: "It's We offer:",
    faqList: ["Reliable Uptime", "High Performance", "Comprehensive Hosting Options", "Advanced Security", "Scalability", "User-Friendly Interfaces", "Round the Clock Support", "Affordable Pricing",]
  },
  {
    question: "What are VPS Hosting Solutions?",
    answer: "A VPS is a kind of machine on which all the softwares and data which is required to run an application are hosted.",
  },
  {
    question: "What Is Shared Hosting?",
    answer: "Shared hosting is the service where multiple websites are being hosted on the single server.",
  },
  {
    question: "What Is cPanel Hosting?",
    answer: "Our cloud dedicated servers are known for providing impeccable performance with advanced technology along with hardware.Our cloud dedicated servers have high-speed SSDS, robust CPUs and lots of RAM."
  },
  {
    question: "What Is Plesk Hosting?",
    answer: "Plesk hosting is a kind of control panel for both virtual and dedicated servers. It offers an intuitive interface and automation tools."
  }
];
export default FaqSection
