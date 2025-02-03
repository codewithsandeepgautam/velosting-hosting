import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'
import InformationCta from '../components/shared/InformationCta';

const CloudPc = () => {
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
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px] items-center'>
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

            {/* Cloud PC Solutions Plans */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Cloud PC Solutions Plans</h2>
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

            {/* Why Choose Velosting Cloud PC */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>{whyChooseData.titleh2}</h2>
                        <p className='max-w-[992px] mx-auto md:mb-[40px] max-md:mb-[30px] text-center'>{whyChooseData.para}</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
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
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>What is a Cloud PC</h2>
                            <p className='md:mb-[30px] max-md:mb-[0px]'>Without depending on a physical computer, users now can obtain a full desktop experience with our advanced cloud PC, which is basically a virtual desktop hosted in the cloud.  Significant benefits of our cloud PCs include centralized management, scalability, and multi-device access. Cloud PCs offer convenience and flexibility, whether for distant work, business continuity, or increased security.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.cloudpcpictwo} alt='Cloud PC' className='w-full md:max-w-[400px] max-md:max-w-[300px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features of Cloud PC */}
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
    titleh1: "Cloud PC Solutions",
    titleh4: "Discover the Best Cloud PC Solutions in India",
    heroList: ["Easy Access to Your Virtual Desktop", "Safe Cloud Storage and Backup", "High-Performance Computing Power", "Smooth App and Software Integration", "Cost-Effective Subscription Plans", "Scalable Solutions for Expanding Businesses"],
    heroImg: ImageIcons.cloudpcpic,
    heroImgAlt: "Cloud PC Solutions",
    btnName: "View Plans",
    faCheckCircle: ImageIcons.faCheckCircle,
    altfaCheck: "Green Circle Tick"
}

const whyChooseData = {
    titleh2: "Why Choose Velosting Cloud PC",
    para: "Velosting ensures a smooth and effective cloud computing experience by providing a number of important advantages:",
    contentInfo: [
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "Power for High-Performance Computing",
            titleh4: "Power for High-Performance Computing",
            para: "The outstanding performance of Velosting's Cloud PCs allows for seamless multitasking, quick processing, and dependable access to all of your files and apps, regardless of their complexity."
        },
        {
            iconpic: ImageIcons.customappicon,
            iconalt: "Customization and Remote Access",
            titleh4: "Customization and Remote Access",
            para: "You can access your Cloud PC at any time and from any location. Velosting allows you to manage files, install software, and alter settings to meet your personal or professional requirements."
        },
        {
            iconpic: ImageIcons.securityfeaturesicon,
            iconalt: "Strong Security Features",
            titleh4: "Strong Security Features",
            para: "Your Cloud PC and all critical data are shielded from unwanted access by top-tier security, which includes end-to-end encryption and sophisticated data protection safeguards."
        }
    ]
}

const featuresData = {
    titleh2: "Features of Cloud PC",
    contentInfo: [
        {
            iconpic: ImageIcons.scalabilityicon,
            iconalt: "Multi-Device Compatibility",
            titleh4: "Multi-Device Compatibility",
            para: "Velosting cloud PCs work with a wide range of platforms, such as Windows, macOS, iOS, and Android, you can easily access your desktop experience from almost any device, increasing your convenience and flexibility."
        },
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "Automatic Updates and Maintenance",
            titleh4: "Automatic Updates and Maintenance",
            para: "Takes care of security patches, software updates, and system maintenance automatically, keeping the system current and relieving users of the stress of doing these things themselves."
        },
        {
            iconpic: ImageIcons.costeffectiveness,
            iconalt: "Data Security",
            titleh4: "Data Security",
            para: "To reduce the chance of data loss, velosting cloud PCs store data in encrypted data centers with backup capabilities. Data is also less susceptible to theft or device damage because it is not locally stored."
        },
        {
            iconpic: ImageIcons.dedicatedresources,
            iconalt: "Cost-effectiveness",
            titleh4: "Cost-effectiveness",
            para: "Compared to maintaining actual PCs, cloud PCs by velosting are less expensive because users just pay for the resources they use. This lowers long-term maintenance costs and does away with upfront hardware costs."
        }
    ]
}

const faqData = [
    {
        question: "On a cloud PC, how do I save my work?",
        answer: "Since all of your data and files are automatically stored in the cloud, you may access them at any time and from any location."
    },
    {
        question: "On a cloud PC, is my data secure?",
        answer: "Indeed, cutting-edge security measures safeguard cloud PCs, guaranteeing that your data is shielded from unwanted access."
    },
    {
        question: "Is it affordable to use a cloud PC?",
        answer: "Because cloud PCs do not require costly hardware or ongoing maintenance, they are frequently more affordable than traditional desktop computers."
    }
];

export default CloudPc
