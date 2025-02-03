import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import SearchDomain from '../components/home/SearchDomain'
import OurVentures from '../components/shared/OurVentures';
import LetsGetStarted from '../components/shared/LetsGetStarted';
import CtaRegister from '../components/shared/CtaRegister';
import { windowScroll } from '../utils/windowScroll';

const DomainRegistration = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Layout>
            {/* Domain Section */}
            <section className="relative md:pt-[70px] max-md:pt-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='flex gap-[20px] max-lg:flex-col'>
                        <div className='relative bg-[#fff] pt-[30px] rounded-[20px] lg:w-4/6 grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                            <div className='md:text-left text-center md:px-[30px] '>
                                <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Domain Name</h4>
                                <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Get a .com for ₹ 1.00/1st yr.</h1>
                                <p className='font-semibold mb-[10px] md:text-[18px] text-[17px]'>Grab the world's most popular domain.</p>
                                <p className='md:mb-[30px] max-md:mb-[20px]'>3-year purchase required. Additional year(s) ₹ 1.00</p>
                                <Link onClick={windowScroll} className='md:mb-[30px] md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Get Started<FaArrowRightLong className='ml-[10px]' /></Link>
                            </div>
                            <div>
                                <img src={ImageIcons.domainbanner} alt='vps linux cadre' className='md:absolute md:bottom-0 md:right-0 w-full 2xl:max-w-[450px] max-2xl:max-w-[350px] mx-auto rounded-br-[20px]' />
                            </div>
                        </div>
                        <div className='lg:w-2/6'>
                            <div className='bg-[#000] lg:px-[40px] max-lg:px-[20px] lg:py-[50px] max-lg:py-[30px] rounded-[20px]'>
                                <h5 className='text-[#fff] font-semibold text-center mb-[10px]'>Web Hosting</h5>
                                <h3 className='font-bold text-[#fff] text-center md:mb-[20px] max-md:mb-[15px]'>Secured Hosting from ₹ 199.00/mo.</h3>
                                <ul className='block max-w-[415px] mx-auto pt-[5px] mb-[30px] pl-[30px]'>
                                    <li className='relative text-[#fff] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Improved page loads and SEO
                                    </li>
                                    <li className='relative text-[#fff] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />24/7 network security
                                    </li>
                                    <li className='relative text-[#fff] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />30-day money back guarantee
                                    </li>
                                </ul>
                                <div className='text-center'>
                                    <Link onClick={windowScroll} className='mx-auto md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>View Plans<FaArrowRightLong className='ml-[10px]' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domain Search Section */}
            <SearchDomain />

            {/* What are Domain Services Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>What are <span className='text-[#00A51A]'>Domain</span> Services?</h2>
                            <p className='mb-[20px]'>Domain services are the services which provide a lot many solutions like registration, management, and protection of domain names. Other services included in domain services are</p>
                            <ul className='block pb-[10px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain registration
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain renewal
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain transfer
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain privacy protection
                                </li>
                            </ul>
                            <p>These services are very important for those who are looking to create a professional online identity along with ensuring that their website can easily be accessed by the users worldwide.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.domainservices} alt='vps linux cadre' className='w-full md:max-w-[640px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* What are some of the features of Domain Services Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className=''>
                        <h2 className='mb-[20px]'>Get Seamless Domain Services With Velosting</h2>
                        <p className='max-w-[900px] md:mb-[40px] max-md:mb-[30px]'>Velsoting offers users with a broad array of domain services which have been designed to offer you with a strong online presence. Our reliable domain services allow you to protect and promote your brand effortlessly.</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.domainregicon} alt='Easy Domain Registration' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Easy Domain Registration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>These services provide users with a quick and easy way to secure their preferred domain name.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.widerangeicon} alt='Wide Range of TLDs' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Wide Range of TLDs</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Users can find the ideal fit for their business by selecting from a broad range of domains</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.dnsmanagementicon} alt='DNS Management' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>DNS Management</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Domain services provide users with a wide range of tools so that they can manage their domain’s DNS records for the purpose of getting optimal performance and reliability.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.domainprivacyprotecticon} alt='Domain Privacy Protection' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Domain Privacy Protection</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Your personal information is being safeguarded with the help of privacy protection services.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Domain Renewal Reminders' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Domain Renewal Reminders</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Ensure domain owners renew on time, preventing service interruptions and potential domain loss.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.transferassistanceicon} alt='Domain Transfer Assistance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Domain Transfer Assistance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>You can transfer domains to Velosting in an easier way with the support of our professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Advanced Security Features' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Advanced Security Features</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The advanced security features used by domain service providers allow you to protect your domain from any of the unauthorised accesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.bulkdomainmanagement} alt='Bulk-Domain Management' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Bulk-Domain Management</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With us, you can take care of management of domains with our user-friendly interface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister/>

            {/* Why Choose Velosting Domain Services Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[1024px] mx-auto'>
                        <h2>Why Choose Velosting <span className='text-[#00A51A]'>Domain Services?</span></h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Velosting offers users with multiple benefits like reliability, security and outstanding customer support. Join our community of thousands of satisfied customers and get experience of our seamless domain services.</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.instantdomainactivation} alt='Instant Domain Activation' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Instant Domain Activation</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>We ensure that your domain will get up and running in seconds, as we offer a prompt activation process.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.globaldomainreach} alt='Global Domain Reach' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Global Domain Reach</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>With us, you can access a broad array of international domains which will help enhance your global presence.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.multilanguagesupport} alt='Multi-Language Support' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Multi-Language Support</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>With us, domain can be managed in your own preferred language, as we offer multi-language support.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.domainlacking} alt='Domain Lacking' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Domain Lacking</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our domain locking feature allows you to safeguard your domain from any of the unauthorised transfers.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.advanceddnscontrol} alt='Advanced DNS Control' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Advanced DNS Control</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>With us, you can have complete control over the DNS setting with the help of our state-of-the-art DNS management tools.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.seotoolsintegration} alt='SEO Tools Integration' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>SEO Tools Integration</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our SEO integration tools help you boost the search engine ranking of your website.</p>
                        </div>
                        <div className='relative bg-[#fff] md:py-[40px] max-md:py-[30px] md:px-[35px] max-md:px-[20px] rounded-[15px] shadow-[0px_4px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.freewhoisprivacy} alt='Free WHOIS Privacy' className='w-full max-w-[60px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Free WHOIS Privacy</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>We also offer our users a free WHOIS privacy so that you can safeguard your personal information.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let’s Get Started Section */}
            <LetsGetStarted/>

            {/* Our Venture’s Section */}
            <OurVentures/>

            {/* Frequently Asked Questions Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
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
        </Layout>
    )
}
const faqData = [
    {
        question: "What is Domain Registration?",
        answer: "In this, a name on the internet is reserved for a certain time period, generally a year. It is essential for creating a unique online identity.",
    },
    {
        question: "How can the domain be transferred to Velosting?",
        answer: "You just have to unlock your domain at your current registrar and then you have to obtain the transfer authorisation code.",
    },
    {
        question: "What is DNS Management?",
        answer: "It is the process of configuring and maintaining domain’s DNS records so that your website and email are routed correctly and are made accessible.",
    },
    {
        question: "How is the information protected while registering a domain?",
        answer: "We offer privacy protection services like WHOIS which provide protection against spam along with identifying thefts.",
    },
    {
        question: "What happens in case the domain expires?",
        answer: "You may lose access to it. We also send renewal reminders to our users."
    }
];
export default DomainRegistration
