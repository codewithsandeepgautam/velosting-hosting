import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'
import InformationCta from '../components/shared/InformationCta';

const CloudCamera = () => {
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
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
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
                            <img src={heroData.heroImg} alt={heroData.heroImgAlt} className='w-full md:max-w-[550px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cloud Camera Plans Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Cloud Camera Plans</h2>
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

            {/* Why Choose Velosting Cloud Camera */}
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

            {/* What are Cloud Dedicated Servers Section */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
                        <div>
                            <h2>What is a Cloud Camera</h2>
                            <p className='md:mb-[30px] max-md:mb-[0px]'>Instead of storing video footage on local servers or hard drives, a cloud camera system is a futuristic security solution that stores it remotely on the cloud. With our cloud camera’s improved security capabilities, customers may now view CCTV footage at any time and from any location. It offers more dependable backup options and fits in with the requirement for on-site storage equipment. Additionally, our cloud cameras come with capabilities like remote viewing and real-time alerts.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.cloudcamaratwo} alt='Cloud Camera' className='w-full md:max-w-[400px] max-md:max-w-[300px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features of Cloud Camera */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>{featuresData.titleh2}</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        {featuresData.contentInfo.map((item, i) => (
                            <div key={i} className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                                <div className='flex items-center gap-[15px] mb-[15px]'>
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
                                            </ul>}
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
    titleh1: "Cloud Camera Solutions",
    titleh4: "Discover the Best Cloud Camera Solutions in India",
    heroList: ["24/7 Surveillance", "Secure Cloud Storage", "Remote Access Anytime, Anywhere", "High-quality Video Recording", "Motion Detection Alerts", "Cost Effective Plans", "Scalable Solutions"],
    heroImg: ImageIcons.cloudcamarahero,
    heroImgAlt: "Cloud Camara",
    btnName: "View Plans",
    faCheckCircle: ImageIcons.faCheckCircle,
    altfaCheck: "Green Circle Tick"
}

const whyChooseData = {
    titleh2: "Why Choose Velosting Cloud Camera",
    para: "As listed below, Velosting provides consumers with a number of advantages that guarantee excellent surveillance solutions:",
    contentInfo: [
        {
            iconpic: ImageIcons.iconlinuxfive,
            iconalt: "Superior Video Quality",
            titleh4: "Superior Video Quality",
            para: "You won't ever miss a detail thanks to the exceptional video resolution and clarity that our cloud cameras provide. They are equipped with cutting-edge technology that allows them to record in any kind of illumination."
        },
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "Remote Observation and Personalization",
            titleh4: "Remote Observation and Personalization",
            para: "You may view live feeds at any time and from any location with Velosting's cloud cameras. Tailor alerts, integrations, and recording settings to your unique security requirements."
        },
        {
            iconpic: ImageIcons.securityfeaturesicon,
            iconalt: "Strong Security Features",
            titleh4: "Strong Security Features",
            para: "End-to-end encryption and sophisticated data protection features are included into our cloud cameras to shield your video from unwanted access."
        }
    ]
}

const featuresData = {
    titleh2: "Features of Cloud Camera",
    contentInfo: [
        {
            iconpic: ImageIcons.scalabilityicon,
            iconalt: "Motion Detection Alerts",
            titleh4: "Motion Detection Alerts",
            para: "When motion is detected within the camera's field of vision, motion sensors installed in cloud cameras instantly send out alerts and messages to users. This improves security by guaranteeing prompt reactions to activity."
        },
        {
            iconpic: ImageIcons.fullrootaccess,
            iconalt: "High-Definition Video",
            titleh4: "High-Definition Video",
            para: "For personal or company security purposes, velosting cloud cameras provide HD or 4K video quality, guaranteeing crisp and detailed film that aids in precise identification in the event of an incident."
        },
        {
            iconpic: ImageIcons.securityfeaturesicon,
            iconalt: "Integration with Smart Home Devices",
            titleh4: "Integration with Smart Home Devices",
            para: "To provide smooth automation and improved security, a lot of cloud cameras can be connected to other smart home systems, including lights, alarms, and voice assistants like Google Assistant and Alexa."
        },
        {
            iconpic: ImageIcons.sevensupport,
            iconalt: "Night Vision",
            titleh4: "Night Vision",
            para: "To ensure 24-hour surveillance, cloud cameras frequently have infrared (IR) night vision, which enables them to record crisp video in total darkness or low light."
        },
        {
            iconpic: ImageIcons.iconlinuxnine,
            iconalt: "Two-Way Audio",
            titleh4: "Two-Way Audio",
            para: "This function enables customers to talk with guests, delivery drivers, or intruders straight from the mobile app or online interface by enabling them to hear sounds and interact via the camera."
        },
        {
            iconpic: ImageIcons.dedicatedresources,
            iconalt: "Remote Access",
            titleh4: "Remote Access",
            para: "Cloud cameras ensure continuous monitoring even while you're away from home or work by enabling users to see recorded movies and live footage from any location in the world using web browsers or mobile apps."
        }
    ]
}

const faqData = [
    {
        question: "Can I View Footage Remotely?",
        answer: "Yes, as long as you have an internet connection, you may use the camera's web site or mobile app to view both recorded and live footage from any location."
    },
    {
        question: "Is a steady internet connection required?",
        answer: "Yes, in order to see live footage and upload it to the cloud, cloud cameras need a steady internet connection."
    },
    {
        question: "Do smart home systems work with cloud cameras?",
        answer: "Voice control and device integration are made possible by the compatibility of numerous cloud cameras with smart home systems such as Google Assistant, Alexa, and others."
    }
];

export default CloudCamera
