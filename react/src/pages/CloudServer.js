import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaLinux, FaWindows, FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'
import InformationCta from '../components/shared/InformationCta';

const CloudServer = () => {
    const sectionRef = useRef(null);
    const prizesign = useSelector(state => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
    const [tab, setTab] = useState(0)
    const [tabWindow, setTabWindow] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    const productData = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [1, 2, 4, 44].includes(p?.pid));
    });
    const windowProducts = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [27, 28, 29, 30].includes(p?.pid));
    })
    const updateToggle = (id) => {
        setTab(id)
    }
    const updateToggleWindow = (id) => {
        setTabWindow(id);
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
                            <h1 className='max-w-[535px] font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>{heroData.titleh1}</h1>
                            <h4 className='text-[20px] text-[#00A51A]'>{heroData.titleh4}</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px] mb-[30px]'>
                                {heroData.heroList.map((items, i) => (
                                    <li key={i} className='relative text-[#000] mb-[10px]'>
                                        <img src={heroData.faCheckCircle} alt={heroData.altfaCheck} className='w-[20px] absolute -left-[30px]' />{items}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>{heroData.btnName}<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={heroData.heroImg} alt={heroData.heroImgAlt}  className='w-full md:max-w-[500px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Linux Cloud VPS Server Plans Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='mb-[5px]'><span className='font-bold text-[#00A51A] inline-flex items-center gap-[5px]'><FaLinux size={35} /> Linux</span></h2>
                        <h2>Cloud VPS Server Plans</h2>
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
                                        <div className='flex max-sm:flex-col max-sm:text-center justify-between gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
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

            {/* Windows Cloud VPS Server Plans Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='mb-[5px]'><span className='font-bold text-[#00A51A] inline-flex items-center gap-[5px]'><FaWindows size={35} /> Windows</span></h2>
                        <h2>Cloud VPS Server Plans</h2>
                        <p className='md:mb-[35px] max-md:mb-[20px]'>One Stop Shop for Domain Web Hosting India</p>
                    </div>
                    <div className="mb-4">
                        <ul className="flex flex-wrap gap-[10px] max-w-[795px] mx-auto justify-center lg:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                            {hostingOptions.map((item, j) => (
                                <li key={j}>
                                    <button
                                        onClick={() => updateToggleWindow(j)}
                                        className={`inline-block rounded-full px-[20px] py-[10px] bg-[#fff] text-[#00A51A] w-[185px] border border-[#00A51A] hover:text-[#fff] hover:bg-[#00A51A] ${tabWindow === j ? 'text-white !bg-[#00A51A]' : ''}`}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px] md:mt-[30px]'>
                        {windowProducts?.map((item, index) => (
                            <div key={index} className="relative bg-[#F3F7FB] rounded-[15px] pt-[24px]">
                                {item?.products?.product.map((plan, index) => (
                                    <div key={index}>
                                        <div className='flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-full p-[5px] mx-auto'>
                                            <div className='bg-[#F3F7FB] flex items-center justify-center w-[70px] h-[70px] rounded-full p-[5px]'>
                                                <img src={ImageIcons.cloudiconone} alt='Domain icon' className='w-full max-w-[45px]' />
                                            </div>
                                        </div>
                                        <div className='flex max-sm:flex-col max-sm:text-center justify-between gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
                                                <p className='text-[#646773] text-[14px] mb-0'>Starting From</p>
                                            </div>
                                            <div>
                                                {prizesign === "INR" ? (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>₹
                                                    {
                                                        tabWindow === index
                                                            ? plan?.pricing?.INR?.monthly
                                                            : tabWindow === 2
                                                                ? plan?.pricing?.INR?.semiannually
                                                                : tabWindow === 3
                                                                    ? plan?.pricing?.INR?.annually
                                                                    : plan?.pricing?.INR?.quarterly

                                                    }
                                                </h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>$
                                                    {
                                                        tabWindow === index
                                                            ? plan?.pricing?.USD?.monthly
                                                            : tabWindow === 2
                                                                ? plan?.pricing?.USD?.semiannually
                                                                : tabWindow === 3
                                                                    ? plan?.pricing?.USD?.annually
                                                                    : plan?.pricing?.USD?.quarterly
                                                    }

                                                </h2>)}
                                                {prizesign === "INR" ? (<p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>₹
                                                    {tabWindow === 1
                                                        ? plan?.pricing?.INR?.triennially
                                                        : plan?.pricing?.INR?.annually
                                                    }
                                                </p>) : (
                                                    <p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>$
                                                        {tabWindow === 1
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

            {/* CTA Section */}
            <CtaRegister />

            {/* What are Cloud Dedicated Servers Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.vpshostingpana} alt='VPS' className='w-full md:max-w-[600px] max-md:max-w-[450px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>What is a Cloud Server</h2>
                            <p className='md:mb-[30px] max-md:mb-[20px]'>A virtual server that runs in a cloud computing environment is called a cloud server. Our cloud servers provide resources like processing power, storage, and network capabilities without requiring physical hardware, making it scalable, adaptable, and economical. As your company expands, you may scale your resources to make sure you only pay for what you use.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting Cloud Servers */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>{whyChooseData.titleh2}</h2>
                        <p className='max-w-[992px] mx-auto md:mb-[40px] max-md:mb-[30px] text-center'>{whyChooseData.para}</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        {whyChooseData.contentInfo.map((item, i) => (
                            <div key={i} className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                                <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                    <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                        <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[45px]' />
                                    </div>
                                </div>
                                <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                    <div>
                                        <h4 className='text-[20px] mb-[15px]'>{item.titleh4}</h4>
                                        <p className='text-[#646773] text-[15px] mb-0'>{item.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Venture’s */}
            <OurVentures />

            {/* Features of Cloud VPS Server Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>{featuresData.titleh2}</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        {featuresData.contentInfo.map((item, i) => (
                            <div key={i} className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                                <div className='flex items-center md:gap-[15px] max-md:gap-[10px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[40px] mx-auto' />
                                    </div>
                                    <h4 className='mb-0'>{item.titleh4}</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>{item.para}</p>
                            </div>
                        ))}
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

            {/* InformationCta Section */}
            <InformationCta/>

        </Layout>
    )
}

const hostingOptions = [
    { text: "Monthly" },
    { text: "Quarterly" },
    { text: "Semi-Annually" },
    { text: "Annually" },
];

const heroData = {
        titleh1: "Cloud VPS Server",
        titleh4: "Discover the Best Cloud Server Solutions in India",
        heroList: ["Scalable Performance", "Secure Cloud Hosting", "99.9% Uptime Guarantee", "Easy-to-Use Control Panel", "Flexible Resource Allocation", "Built-in-DDoS Protection", "Expert Technical Support", "Hassle-Free Cloud Management"],
        heroImg: ImageIcons.vpsserverbg,
        heroImgAlt: "VPS Hosting",
        btnName: "View Plans",
        faCheckCircle: ImageIcons.faCheckCircle,
        altfaCheck: "Green Circle Tick"
}

const whyChooseData = {
    titleh2: "Why Choose Velosting Cloud Servers",
    para: "Velosting cloud servers are made to satisfy the expanding needs of contemporary companies. With the flexibility, scalability, and security that our cloud hosting solutions offer, businesses can maximize their IT infrastructure without having to make expensive hardware expenditures.",
    contentInfo: [
        {
            iconpic: ImageIcons.infrastructurestability,
            iconalt: "Outstanding Customer Service",
            titleh4: "Outstanding Customer Service",
            para: "At Velosting, we recognize the value of dependable client service. Our committed support staff is on hand around-the-clock to help with any problems or inquiries you might have. Our team is available via phone or email if you need assistance with server configuration, resource scalability, or troubleshooting."
        },
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "Exceptional Speed and Efficiency",
            titleh4: "Exceptional Speed and Efficiency",
            para: "Our cloud servers are designed to deliver superior speed with the latest technology and superior hardware. Equipped with high-speed SSDs, powerful CPUs and scalable resources. Our cloud servers ensure optimal efficiency for all your needs."
        },
        {
            iconpic: ImageIcons.securityfeaturesicon,
            iconalt: "Advanced Data Protection",
            titleh4: "Advanced Data Protection",
            para: "Our cloud servers are fortified with top-tier security protocols, including DDoS protection, data encryption, and proactive updates, keeping your data secure 24/7."
        }
    ]
}

const featuresData = {
    titleh2: "Features of Cloud VPS Server",
    contentInfo: [
        {
            iconpic: ImageIcons.scalabilityicon,
            iconalt: "Scalability",
            titleh4: "Scalability",
            para: "Velosting cloud servers make it simple to scale resources (CPU, RAM, and storage) up or down to satisfy demand, enabling companies to smoothly adjust to shifting demands."
        },
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "High Availability",
            titleh4: "High Availability",
            para: "By using failover procedures and redundant architecture,velosting cloud servers guarantees little downtime and offers constant access to services and apps."
        },
        {
            iconpic: ImageIcons.costeffectiveness,
            iconalt: "Cost-effectiveness",
            titleh4: "Cost-effectiveness",
            para: "Cloud servers are an affordable choice for new and expanding organizations because they provide pay-as-you-go pricing schemes that let users only pay for the resources they utilize."
        },
        {
            iconpic: ImageIcons.dedicatedresources,
            iconalt: "On-Demand Resources",
            titleh4: "On-Demand Resources",
            para: "Cloud servers give organizations control over their hosting environment by offering resources that can be provisioned and deprovisioned as needed."
        },
        {
            iconpic: ImageIcons.securityfeaturesicon,
            iconalt: "Security",
            titleh4: "Security",
            para: "Multi-factor authentication, firewalls, and data encryption are examples of advanced security features that help guarantee the privacy and security of data transferred and stored in the cloud."
        },
        {
            iconpic: ImageIcons.managedservices,
            iconalt: "Managed Services",
            titleh4: "Managed Services",
            para: "Velosting cloud hosting companies provide managed services, which relieve internal IT teams of the strain by having professionals take care of server upkeep, security patches, and performance monitoring."
        }
    ]
}

const faqData = [
    {
        question: "How do cloud server billing procedures operate?",
        answer: "With Velosting's pay-as-you-go pricing approach, you are only charged for the CPU, RAM, storage, and bandwidth that you really utilize. Because of this, cloud servers are more flexible and reasonably priced than traditional hosting options that have set prices. Resources can be scaled up or down as needed without resulting in extra fees."
    },
    {
        question: "Are managed cloud services something you provide?",
        answer: "Yes, managed cloud server options are available from Velosting. Server management, including software upgrades, security patches, performance monitoring, and troubleshooting, is handled by our knowledgeable staff. As we take care of the technical parts of server management, you can concentrate on your main business."
    },
    {
        question: "How can I make the payment ?",
        answer: "You can make the payment via debit card, credit card or any online payment method."
    }
];

export default CloudServer
