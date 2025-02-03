import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import Main from '../utils/main';
import InformationCta from '../components/shared/InformationCta';
import { Link } from 'react-router-dom';
import { windowScroll } from '../utils/windowScroll';

const CloudBackup = () => {
    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Layout>
            <Main />
            {/* Hero Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h1 className='max-w-[535px] font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Cloud Backup Solutions</h1>
                            <h4 className='text-[20px] text-[#00A51A]'>Discover the Best Cloud Backup Solutions in India</h4>
                            <ul className='block pt-[5px] pl-[30px] mb-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Simple backup access from anywhere at any time
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Support for data restoration with high performance
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Cloud storage that is safe and has automated backup
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Subscription options that are affordable
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Adaptable solutions to satisfy your needs for corporate data
                                </li>
                            </ul>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.cloudbackuppic} alt='Acronis Cloud Backup' className='w-full md:max-w-[500px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Table */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className=''>
                        <h2 className='text-center mb-[30px]'>Cloud Backup Plans</h2>
                    </div>
                    <div className='grid grid-cols-1 xl:gap-[40px] max-xl:gap-[30px]'>
                        <div className='w-full'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-md:pb-[10px]">
                                <table className="w-full text-left text-text-[#000]">
                                    <thead className="text-[#000]">
                                        <tr>
                                            <th scope="col" className="max-md:whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold bg-gray-50">Acronis Backup Plans</th>
                                            <th scope="col" className="max-md:whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold">Per GB Price</th>
                                            <th scope="col" className="max-md:whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold bg-gray-50">Data Transfer</th>
                                            <th scope="col" className="max-md:whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibol">Total/Mo</th>
                                            <th scope="col" className="max-md:whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold bg-gray-50">Total/Annum</th>
                                            <th scope="col" className="whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibol"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">100GB</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">1200</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">14400</td>
                                            <td className="whitespace-nowrap md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">200GB</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">2000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">24000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">500GB</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">9</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">4500</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">54000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">1TB</td>                                           
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">7</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">7000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">84000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">2TB</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">6.5</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">13000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">156000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">10TB</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">5.5</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">Unlimited</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">55000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">660000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-center"><Link onClick={windowScroll} to="/contact-us" className='text-[13px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[5px] px-[12px] py-[6px] inline-flex items-center'>Buy Now</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cloud Backup Features */}
            <section className="md:pb-[90px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[40px] max-md:mb-[30px]'>Top Acronis Cloud Backup Features</h2>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Ease of Restoration' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Ease of Restoration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With only a few clicks, customers may restore files or entire systems thanks to velosting cloud backup services and quick and easy data recovery solutions. In the event of data loss, this guarantees little downtime, facilitating quick and effective recovery.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.cloudintegrationicon} alt='Data Encryption' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Data Encryption</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting cloud backup services use strong encryption methods to protect data both during transfer and while stored on remote servers. This ensures that sensitive information remains secure from unauthorized access and cyber threats.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.customizabilityicon} alt='Data Redundancy' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Data Redundancy</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Cloud backup providers by velosting typically store data in dispersed data centers. This redundancy ensures that data remains available even in the event of hardware failure or natural disasters, reducing the risk of data loss.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.databackuprecovery} alt='Versioning' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Versioning</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting cloud backup services support versioning, allowing users to restore previous versions of files or folders. This feature is useful in case of accidental file corruption, deletion, or other issues, enabling easy recovery to earlier versions.</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures />

            {/* Why Choose Velosting Cloud Backup */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className=''>
                        <h2>Why Choose Velosting Cloud Backup</h2>
                        <p className='md:mb-[30px] max-md:mb-[30px]'>Velosting offers users a variety of benefits for cloud backup, few are mentioned below</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Reliable Data Protection' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Reliable Data Protection</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our cloud backup services use redundant storage options and advanced encryption to guarantee your data is always safe. Our powerful technology will protect your data from corruption or loss.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Scalability and Customization' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Scalability and Customization</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>As your needs change, so do our services. You may easily expand your storage space and alter backup configurations to suit your particular needs. We can help you regardless of how big or small your company is.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Improved Accessibility' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Improved Accessibility</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>You may access your backup data at any time and from any location. File retrieval has never been simpler because of our user-friendly UI and smooth syncing features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                        <div className='md:w-1/2 max-md:mb-[30px]'>
                            <h2 className='max-w-[390px]'>Got questions? Well, we've got answers.</h2>
                            <p className='max-w-[640px] mb-[30px]'>From 24/7 support that acts as your extended team to incredibly fast website performance</p>
                            <div className='w-full'>
                                <img src={ImageIcons.faqpic} alt='Faq Pic' className='w-full max-w-[400px]' />
                            </div>
                        </div>
                        <div className='md:w-1/2 max-md:w-full'>
                            <div>
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
                                            <p dangerouslySetInnerHTML={{ __html: item.answer }} className='last:mb-0 mb-[15px] md:text-[16px] max-md:text-[15px]' />
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

           <InformationCta/>
        </Layout>
    )
}

const faqData = [
    {
        question: "Why should I use cloud backup?",
        answer: "Cloud backup provides remote storage that will store data and provide disaster recovery in case if primary location fails."
    },
    {
        question: "How frequently should I create a cloud backup of my data?",
        answer: "Depending on your requirements, frequent backups, daily or weekly, are advised to keep your data safe and current."
    },
    {
        question: "Is it possible to recover my files from a cloud backup?",
        answer: "Yes, you can easily restore your files from cloud backups utilizing a recovery option offered by the service or a straightforward download."
    }
];

export default CloudBackup
