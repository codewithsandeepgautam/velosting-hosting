import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'

const TallyOnCloud = () => {
    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    const prizesign = useSelector(state => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
    const [tab, setTab] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
    const productData = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [1, 2, 4, 44].includes(p?.pid));
    });
    const updateToggle = (id) => {
        setTab(id)
    }
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
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Cloud-Based Tally Solutions</h1>
                            <h4 className='text-[20px] text-[#00A51A]'>Discover the Best Cloud-Based Tally Solutions in India</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px] mb-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Easy access to tally anywhere, anytime
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />High-performance support for tally operations
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Secure cloud storage and backup
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Budget friendly subscription plans
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Flexible Solutions to meet with your business needs
                                </li>
                            </ul>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.tallycloudpic} alt='Cloud-Based Tally' className='w-full md:max-w-[500px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cloud-Based Tally Plans Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Cloud-Based Tally Plans</h2>
                        <p className='md:mb-[35px] max-md:mb-[20px]'>One Stop Shop for Domain Web Hosting India</p>
                    </div>
                    <div className="mb-4">
                        <ul className="flex flex-wrap gap-[10px] max-w-[795px] mx-auto justify-center lg:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                            {hostingOptions.map((item, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => updateToggle(i)}
                                        className={`inline-block rounded-full px-[20px] py-[10px] bg-[#fff] text-[#00A51A] w-[185px] border border-[#00A51A] hover:text-[#fff] hover:bg-[#00A51A] ${tab === i ? 'text-white !bg-[#00A51A]' : ''}`}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[20px] md:mt-[30px]'>
                        {productData.map((item, index) => (
                            <div key={index} className="relative bg-[#F3F7FB] rounded-[15px] pt-[24px]">
                                {item?.products?.product.map((plan, index) => (
                                    <div key={index}>
                                        <div className='flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-full p-[5px] mx-auto'>
                                            <div className='bg-[#F3F7FB] flex items-center justify-center w-[70px] h-[70px] rounded-full p-[5px]'>
                                                <img src={ImageIcons.cloudiconone} alt='Domain icon' className='w-full max-w-[45px]' />
                                            </div>
                                        </div>
                                        <div className='flex max-sm:flex-col justify-between max-sm:text-center gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
                                                <p className='text-[#646773] text-[14px] mb-0'>Starting From</p>
                                            </div>
                                            <div>
                                                {prizesign === "INR" ? (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>₹
                                                    {
                                                        tab === index
                                                            ? plan?.pricing?.INR?.monthly
                                                            : tab === 2
                                                                ? plan?.pricing?.INR?.semiannually
                                                                : tab === 3
                                                                    ? plan?.pricing?.INR?.annually
                                                                    : plan?.pricing?.INR?.quarterly
                                                    }

                                                </h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>$
                                                    {
                                                        tab === index
                                                            ? plan?.pricing?.USD?.monthly
                                                            : tab === 2
                                                                ? plan?.pricing?.USD?.semiannually
                                                                : tab === 3
                                                                    ? plan?.pricing?.USD?.annually
                                                                    : plan?.pricing?.USD?.quarterly
                                                    }

                                                </h2>)}
                                                {prizesign === "INR" ? (<p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>₹
                                                    {tab === 1
                                                        ? plan?.pricing?.INR?.triennially
                                                        : plan?.pricing?.INR?.annually
                                                    }
                                                </p>) : (
                                                    <p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>$
                                                        {tab === 1
                                                            ? plan?.pricing?.USD?.triennially
                                                            : plan?.pricing?.USD?.annually
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='border-t-[1px] border-[#00A51A]/[20%] mx-[20px]'>
                                            {/* Discount Offer Code */}
                                            <div className="relative">
                                                <span className="wdp-ribbon h-[28px] text-[14px] leading-[24px] text-[#fff] bg-[#00A51A] text-center whitespace-nowrap inline-block px-[15px] py-[2px] absolute -top-[15px] -right-[20px] before:content-[''] before:inline-block before:absolute before:top-0 before:-left-[9px] before:border-x-[8px] before:border-y-[14px] before:border-[#00A51A] before:border-l-transparent before:border-solid before:h-[28px]">Upto 40% Off</span>
                                            </div>
                                            <ul className='max-w-[300px] mx-auto md:py-[40px] max-md:py-[30px] px-[30px]'>
                                                <li className='relative text-[#000] mb-[10px]'>
                                                    <div className="ul-tag-circle"
                                                        dangerouslySetInnerHTML={{ __html: plan?.description }}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='pb-[40px]'>
                                            <Link to={`${plan?.product_url}&currency=${prizesign === "USD" ? "4" :"1"}`}><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Buy Now</button></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting Cloud-Based Tally */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>Why Choose Velosting Cloud-Based Tally</h2>
                        <p className='max-w-[992px] mx-auto md:mb-[40px] max-md:mb-[30px] text-center'>As listed below, Velosting provides users with a number of advantages for cloud-based Tally management</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.ssdstorage} alt='Exceptional Efficiency' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Exceptional Efficiency</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With the help of strong servers and fast SSDs, our cloud-based Tally solution guarantees seamless and quick data access, enabling you to manage accounting chores with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.customizabilityicon} alt='Complete Flexibility' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Complete Flexibility</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With Velosting's cloud Tally, you have complete control over how your environment is customized. Work safely from anywhere at any time, modify settings, and incorporate add-ons.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Superior Data Security' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Superior Data Security</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With strong encryption and frequent backups, we put your financial data security first, ensuring that it is secure and available when you need it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures />

            {/* What is a Cloud-Based Tally Section */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        <div className='max-md:order-1'>
                            <h2>What is a Cloud-Based Tally</h2>
                            <p className='md:mb-[30px] max-md:mb-[0px]'>The cloud-based variant of Tally, a well-known accounting program used by companies to handle their accounts, is called Tally on Cloud. You may now access your accounting data from any device, anywhere, at any time, with our technology that supports Tally's relocation to the cloud. In addition to offering business owners secure backups and real-time data changes, our tally on cloud solution eliminates the requirement for local infrastructure, which facilitates team collaboration.</p>
                        </div>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.vpshostingpana} alt='VPS' className='w-full md:max-w-[650px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features of Cloud-Based Tally */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>Features of Cloud-Based Tally</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.scalabilityicon} alt='Real-Time Financial Reporting' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Real-Time Financial Reporting</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Users may create cash flow, profit & loss, and balance sheet reports in real-time using cloud Tally. Based on the most recent financial data, this assists business owners in making well-informed decisions.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.fullrootaccess} alt='Automatic Software Updates' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Automatic Software Updates</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Tally's cloud service makes sure users are always running the most recent version of the program. To ensure adherence to the most recent accounting standards and regulatory modifications, updates are immediately transmitted to the cloud.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Data Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Data Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Tally's cloud service by velosting has strong security features like encryption, safe login procedures, and access controls that guarantee private financial information is shielded from online dangers and unwanted access.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.remoteaccess} alt='Multi-User Collaboration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Multi-User Collaboration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Perfect for companies with various departments or branches since it allows multiple users to work on the same data at the same time. To manage user access and guarantee data security, permissions can be established.</p>
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

            <section className="md:py-[40px] max-md:py-[30px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                <img src={ImageIcons.twofourhras} alt='24 Hrs' className='w-full max-w-[30px] mx-auto' />
                            </div>
                            <h4 className='md:text-[20px] max-md:text-[17px] text-[#fff] mb-0'>DEDICATED 24/7 LIVE SUPPORT</h4>
                        </div>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                <img src={ImageIcons.clockicon} alt='clock' className='w-full max-w-[30px] mx-auto' />
                            </div>
                            <h4 className='md:text-[20px] max-md:text-[17px] text-[#fff] mb-0'>99.9% UPTIME GUARANTEE</h4>
                        </div>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                <img src={ImageIcons.dollericon} alt='doller' className='w-full max-w-[30px] mx-auto' />
                            </div>
                            <h4 className='md:text-[20px] max-md:text-[17px] text-[#fff] mb-0'>TRY FOR 10 DAYS RISK-FREE!</h4>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
const hostingOptions = [
    { text: "Monthly" },
    { text: "Quarterly" },
    { text: "Semi-Annually" },
    { text: "Annually" },
];
const faqData = [
    {
        question: "How can I use the cloud version of Tally?",
        answer: "Any device with an internet connection can use Cloud-Based Tally; to access your account, use an RDP or TSPlus and a web browser to connect."
    },
    {
        question: "Is it possible for several people to access Cloud-Based Tally simultaneously?",
        answer: "Yes, your team may work together in real time and access the same data from many locations thanks to Cloud-Based Tally's support for multiple users."
    },
    {
        question: "How can I use Cloud-Based Tally to backup my data?",
        answer: "You don't have to bother about manual backups because Cloud-Based Tally automatically backs up your data. Secure cloud servers are used to store your data."
    }
];

export default TallyOnCloud
