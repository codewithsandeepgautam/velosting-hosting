import React, { useState } from 'react';
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import CtaRegister from '../components/shared/CtaRegister';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [openIndex1, setOpenIndex1] = useState(null);
    const toggleAccordion1 = (index) => {
        setOpenIndex1(openIndex1 === index ? null : index);
    };

    const [openIndex2, setOpenIndex2] = useState(null);
    const toggleAccordion2 = (index) => {
        setOpenIndex2(openIndex2 === index ? null : index);
    };

    const [openIndex3, setOpenIndex3] = useState(null);
    const toggleAccordion3 = (index) => {
        setOpenIndex3(openIndex3 === index ? null : index);
    };

    const [openIndex4, setOpenIndex4] = useState(null);
    const toggleAccordion4 = (index) => {
        setOpenIndex4(openIndex4 === index ? null : index);
    };

    const [openIndex5, setOpenIndex5] = useState(null);
    const toggleAccordion5 = (index) => {
        setOpenIndex5(openIndex5 === index ? null : index);
    };

    const [openIndex6, setOpenIndex6] = useState(null);
    const toggleAccordion6 = (index) => {
        setOpenIndex6(openIndex6 === index ? null : index);
    };
    const [openIndex7, setOpenIndex7] = useState(null);
    const toggleAccordion7 = (index) => {
        setOpenIndex7(openIndex7 === index ? null : index);
    };
    const [openIndex8, setOpenIndex8] = useState(null);
    const toggleAccordion8 = (index) => {
        setOpenIndex8(openIndex8 === index ? null : index);
    };
    const [openIndex9, setOpenIndex9] = useState(null);
    const toggleAccordion9 = (index) => {
        setOpenIndex9(openIndex9 === index ? null : index);
    };

    return (
        <Layout>
            {/* Hero Banner Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[length:100%_100%] bg-top bg-no-repeat" style={{ backgroundImage: `url(${ImageIcons.domainsecbg})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        <div className='md:text-left text-center'>
                            <h1 className='h2 font-bold md:mb-[20px] max-md:mb-[15px]'>General Frequently Asked Questions</h1>
                            <p className='md:mb-[30px]'>If you have any queries about our services, pricing or anything, you can read the below given FAQS, so that you can make an informed decision. If you feel like your questions have not been answered, you can contact our support team and they will provide you personalised assistance.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.faqimgthree} alt='faq pic' className='rounded-[90px_2px_90px_2px] w-full md:max-w-[450px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-[40px] md:pb-[40px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex md:gap-10 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Domain Hosting FAQs</h3>
                            <div>
                                {faqdoMainHosting.map((item, i) => (
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
                        </div>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Colocation Services FAQs</h3>
                            <div>
                                {faqColocationServices.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion1(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex1 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex1 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex1 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex md:gap-10 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Dedicated Server FAQs</h3>
                            <div>
                                {faqDedicatedServer.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion2(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex2 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex2 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex2 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>cPanel FAQs</h3>
                            <div>
                                {faqcPanel.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion3(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex3 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex3 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex3 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex md:gap-10 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>WordPress Hosting FAQs</h3>
                            <div>
                                {faqWordPressHosting.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion4(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex4 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex4 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex4 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Plesk Hosting FAQs</h3>
                            <div>
                                {faqcPleskHosting.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion5(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex5 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex5 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex5 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex md:gap-10 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>GPU Servers FAQs</h3>
                            <div>
                                {faqGpuServers.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion6(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex6 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex6 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex6 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>On Premises Fully Managed Dedicated Servers FAQs</h3>
                            <div>
                                {faqManagedDedicated.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion7(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex7 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex7 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex7 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex md:gap-10 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Virtual Private Server FAQs</h3>
                            <div>
                                {faqVirtualPrivateServer.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion8(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex8 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex8 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex8 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h3>Window Hosting FAQs</h3>
                            <div>
                                {faqWindowHosting.map((item, i) => (
                                    <div key={i} className='bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] mb-[15px] rounded-md duration-500 overflow-hidden border-b-[1px] border-b-[#01A51A]/[30%]'>
                                        <button onClick={() => toggleAccordion9(i)} className='lg:px-[25px] px-[15px] lg:py-[20px] py-[16px] w-full text-left cursor-pointer'>
                                            <div className='relative pr-[22px] flex justify-between items-start'>
                                                <h5 className={`md:text-[19px] max-md:text-[17px] mb-0 font-medium ${openIndex9 === i ? "text-[#00A51A]" : ""}`}>{item.question}</h5>
                                                {openIndex9 === i ? (
                                                    <FaChevronUp size="15" className='absolute right-0 text-[#00A51A]' />
                                                ) : (
                                                    <FaChevronDown size="15" className='absolute right-0' />
                                                )}
                                            </div>
                                        </button>
                                        <div className={`duration-300 faq-content ${openIndex9 === i ? "opacity-100 mt-[2px] pb-[20px]" : "opacity-0 mt-0 pb-0 max-h-[0px]"} lg:px-[25px] px-[15px]`}>
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
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister />
        </Layout>
    )
}
const faqdoMainHosting = [
    {
        question: "What is a Domain Name?",
        answer: "A domain name is just like a physical address but is online. It helps visitors to locate your website.",
    },
    {
        question: "What is the need of buying a domain name?",
        answer: "It helps visitors to find your website hassle-free. If there is no website name, users would not be able to locate a website without its IP address and IP address is very difficult to remember.",
    },
    {
        question: "What kind of domain is best for my Website?",
        answer: "Selecting a particular name for domain is just one part of having a perfect name and before doing so, you just need to follow some simple steps:",
        faqList: ["Domain name should be short, that is two to three words.", "You should never use long or hard words.", "Consider including a keyword from your particular industry.", "Do not add numbers as these are difficult to memorise.", "Your domain should include your brand name.",]
    },
    {
        question: "Is it possible to modify a domain name after registering?",
        answer: "No, if the web address has been registered, it can not be modified. You will need to buy a new one for your website.",
    },
    {
        question: "For how long the registration of a new domain name lasts?",
        answer: "It should be registered at least for a year."
    }
]
const faqColocationServices = [
    {
        question: "Is It possible to take a tour of the data centre before choosing Velosting Colocation Services?",
        answer: "Yes, we allow individuals to pay a visit to our data centres, so that they can check our security measures and other services provided by us.",
    },
    {
        question: "How long does it take for a colocation facility to get ready?",
        answer: "The colocation facility is made ready within a business day.",
    },
    {
        question: "What type of support is provided by Velosting colocation service providers?",
        answer: "Velosting customer support is available round the clock to support you with every issue you face.",
    },
    {
        question: "What kind of security measures are being used by Velosting?",
        answer: "We use multi-layered security like biometric access, round the clock surveillance, strong physical security so that your equipment can be kept safely.",
    }
]
const faqDedicatedServer = [
    {
        question: "Is there any need for a unique IP address for each website?",
        answer: "No, you can use a single IP address in order to host different websites.",
    },
    {
        question: "What is done in case a server hardware failure occurs?",
        answer: "If there is any hardware failure, we provide free of cost repairs or if needed, hardware is being replaced. The data of the customers is also backed up by ensuring minimum downtime.",
    },
    {
        question: "How are the data centres and the servers being monitored?",
        answer: "Our team of certified professionals ensure round the clock monitoring of our data centres.",
    },
    {
        question: "What benefits will I get by using a dedicated server?",
        answer: "You will get multiple benefits such as:",
        faqList: ["Better performance", "Security", "Customisation", "Reliability",]
    }
]
const faqcPanel = [
    {
        question: "What is cPanel Hosting?",
        answer: "It is a user-friendly web-based control panel which helps in the management of your website, emails and databases.",
    },
    {
        question: "How can cPanel dashboard be accessed?",
        answer: "You just need to log into your Velosting, following which you need to go to the cPanel.",
    }
]
const faqWordPressHosting = [
    {
        question: "What do you mean by WordPress Hosting?",
        answer: "It is especially being optimised for wordpress websites and it leads to improved performance and security.",
    },
    {
        question: "Does Velosting provide managed WordPress hosting services?",
        answer: "Yes, we, at Velosting, offer these services including automatic updates, daily backups, and expert guidance in order to ensure that your website operates seamlessly.",
    },
    {
        question: "Is there any need for Hosting for WordPress?",
        answer: "Yes, although this platform is already free, you will have to purchase a hosting plan along with a domain name.",
    },
    {
        question: "How can I Secure My WordPress Web Hosting?",
        answer: "You just need to purchase our WebPress hosting plan, which includes a web app firewall, malware scanner etc.",
    }
]
const faqcPleskHosting = [
    {
        question: "What does it mean by Plesk Hosting?",
        answer: "Plesk hosting is the service of providing a wide-ranging control panel for the purpose of management of your websites, apps and other server resources.",
    },
    {
        question: "How can applications be installed using Plesk?",
        answer: "You just need to go to the application section and choose the desired app from the available options.",
    },
    {
        question: "What are some of the features of Plesk Hosting?",
        answer: "It provides users with a plethora of features like:",
        faqList: ["Centralised control panel", "Robust security", "Automated updates", "Compatibility with different CMS & development tools.",]
    },
    {
        question: "How can domains be managed in Plesk?",
        answer: "There is a user-friendly interface which manages multiple domains, DNS settings and SSL certificates.",
    }
]
const faqGpuServers = [
    {
        question: "What is a GPU Server?",
        answer: "GPU servers are the servers which contain powerful graphics and processing units, which are ideal for those tasks which require more computational power like AI and ML.",
    },
    {
        question: "How can I choose the right one for my requirements?",
        answer: "You just need to contact our customer support team and they will help you select the right GPU server.",
    },
    {
        question: "What are some of the benefits of GPU Servers?",
        answer: "There are many benefits of GPU servers like:",
        faqList: ["Superior performance", "Reduced processing time", "Enhanced Capabilities for data analysis.",]
    },
    {
        question: "Is it Possible to customise the GPU server configuration?",
        answer: "Yes, Velosting offers customisable GPU server configurations so that you can meet the particular needs of your projects and apps.",
    }
]
const faqManagedDedicated = [
    {
        question: "What is fully managed hosting?",
        answer: "Fully managed hosting is the type of service where our team will look after all technical aspects of managing your dedicated server.",
    },
    {
        question: "What are some of the services which you provide in fully managed hosting?",
        answer: "Our services include:",
        faqList: ["Round the clock monitoring", "Regular software updates", "Security Patches", "Performance Optimisation","Backups","Technical Support",]
    },
    {
        question: "What are the benefits of fully managed hosting for my business?",
        answer: "It provides you with multiple advantages like:",
        faqList: ["Ensuring that your server runs securely.", "Reduces downtime.", "Improves performance.",]
    },
    {
        question: "Is it possible to customise my fully managed hosting plan?",
        answer: "Yes, Velosting offers users with customisable plans so that you can meet the specific needs of your business. You can contact our sales team and they will help you choose and tailoring the plans according to your needs.",
    }
]
const faqVirtualPrivateServer = [
    {
        question: "What are VPS hosting services?",
        answer: "VPS is an acronym for Virtual Private Servers and is the service which offers:",
        faqList: ["Faster data access", "Improved performance", "Greater reliability",]
    },
    {
        question: "How is VPS hosting beneficial for my website?",
        answer: "It leads to better performance, faster loading times, and increased reliability.",
    },
    {
        question: "Is there any difference between VPS hosting and shared hosting?",
        answer: "In VPS hosting, resources are exclusively dedicated to your server, however in shared hosting, these have to be shared with other users.",
    },
    {
        question: "Is it possible to upgrade my VPS hosting plan?",
        answer: "Yes, we offer scalable services, allowing you to scale the resources as per the needs of your business.",
    }
]
const faqWindowHosting = [
    {
        question: "What is Windows hosting?",
        answer: "It is a type of hosting which uses windows operating system. It proves to be the perfect solution for websites and applications which are dependent on the windows technologies.",
    },
    {
        question: "How can I access my Windows Control Panel?",
        answer: "It can be accessed via the Plesk interface. You just need to log into your account and then you have to go to the Plesk section.",
    },
    {
        question: "Is windows hosting expensive in comparison to other types of hosting?",
        answer: "It is slightly expensive than others but the benefits like compatibility and integration with microsoft technologies justify the cost.",
    },
    {
        question: "What databases are supported by Windows hosting?",
        answer: "It supports:",
        faqList: ["Microsoft SQL Server", "Microsoft Access Databases", "MySQL",]
    }
]
export default Faqs
