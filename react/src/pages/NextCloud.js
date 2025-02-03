import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'
import InformationCta from '../components/shared/InformationCta';
import InquiryForm from '../components/shared/InquiryForm';

const NextCloud = () => {
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
        return product?.products?.product.some(p => [53, 54, 55, 56, 57].includes(p?.pid));
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
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>{heroData.titleh1}</h1>
                            <p className='mb-[15px]'>{heroData.paraone}</p>
                            <p className='mb-[30px]'>{heroData.paratwo}</p>

                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>{heroData.btnName}<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={heroData.heroImg} alt={heroData.heroImgAlt} className='w-full max-w-[550px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            {/* InformationCta Section */}
            <InformationCta />

            {/* Features of Cloud VPS Server Section */}
            <section className="md:pt-[70px] max-md:pt-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center mx-auto'>
                        <h2 className='md:mb-[20px] max-md:mb-[15px]'>What are some of the features of NextCloud Enterprise Hosting?</h2>
                        <p className='md:mb-[40px]'>There are many features of nextcloud enterprise hosting which are mentioned below:-</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        {securityData.map((item, i) => (
                            <div key={i} className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                                <div className='flex items-center md:gap-[15px] max-md:gap-[10px] mb-[15px]'>
                                    <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                        <img src={item.iconpic} alt={item.iconalt} className='w-full max-w-[40px] mx-auto' />
                                    </div>
                                    <h4 className='text-[20px] mb-0'>{item.titleh4}</h4>
                                </div>
                                <p className='text-[#646773] text-[15px] mb-0'>{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Nextcloud Enterprise Hosting Plan */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>NextCloud Enterprise Hosting Plan</h2>
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
                    <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[15px] md:mt-[30px]'>
                        {productData.map((item, index) => (
                            <div key={index} className="relative bg-[#F3F7FB] rounded-[15px] pt-[24px]">
                                {item?.products?.product.map((plan, index) => (
                                    <div key={index}>
                                        <div className='flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-full p-[5px] mx-auto'>
                                            <div className='bg-[#F3F7FB] flex items-center justify-center w-[70px] h-[70px] rounded-full p-[5px]'>
                                                <img src={ImageIcons.cloudiconone} alt='Domain icon' className='w-full max-w-[45px]' />
                                            </div>
                                        </div>
                                        <div className='flex max-sm:flex-col justify-between max-sm:text-center gap-[10px] px-[15px] pt-[24px] pb-[35px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
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
                                            </div>
                                        </div>
                                        <div className='border-t-[1px] border-[#00A51A]/[20%] mx-[20px]'>
                                            {/* Discount Offer Code */}
                                            <div className="relative">
                                                <span className="wdp-ribbon h-[28px] text-[14px] leading-[24px] text-[#fff] bg-[#00A51A] text-center whitespace-nowrap inline-block px-[15px] py-[2px] absolute -top-[15px] -right-[20px] before:content-[''] before:inline-block before:absolute before:top-0 before:-left-[9px] before:border-x-[8px] before:border-y-[14px] before:border-[#00A51A] before:border-l-transparent before:border-solid before:h-[28px]">Upto 40% Off</span>
                                            </div>
                                            <ul className='max-w-[300px] mx-auto md:py-[40px] max-md:py-[30px] px-[30px]'>
                                                <li className='text-[14px] relative text-[#000] mb-[10px]'>
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
                    <div className='mt-[30px] text-center'>
                        <p>All prices exclude VAT at 18% IGST (IGST is exclude) <span className='border-[#00a63f] border-b'>Compare features</span></p>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section*/}
            <InquiryForm />

            {/* Why Choose Velosting Cloud Storage */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>{whyChooseData.titleh2}</h2>
                        <p className='max-w-[750px] mx-auto md:mb-[40px] max-md:mb-[30px] text-center'>{whyChooseData.para}</p>
                    </div>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
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

            {/* Our Venture’s */}
            <OurVentures />

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
    titleh1: "NextCloud Enterprise Hosting",
    paraone: "Velosting, in collaboration with Nextcloud, offers hosted services in India, providing a robust cloud storage and collaboration platform. It enables seamless file syncing, sharing, and collaboration, with features tailored for personal, organizational, and enterprise use.",
    paratwo: "It ensures end-to-end encryption and advanced file access control for enhanced security and privacy.",
    heroImg: ImageIcons.nextcloudthree,
    heroImgAlt: "VPS Hosting",
    btnName: "View Plans",
    faCheckCircle: ImageIcons.faCheckCircle,
    altfaCheck: "Green Circle Tick"
}

const securityData = [
    {
        iconpic: ImageIcons.iconlinuxeleven,
        iconalt: "File Syncing",
        titleh4: "File Syncing",
        para: "Automatically sync files across your laptop, desktop, and mobile devices, ensuring your data is always up-to-date."
    },
    {
        iconpic: ImageIcons.transferassistanceicon,
        iconalt: "Sharing",
        titleh4: "Sharing",
        para: "Share files and folders with users, with customizable permissions such as view-only, editing, or public links, along with password protection."
    },
    {
        iconpic: ImageIcons.databackuprecovery,
        iconalt: "Data Backup and Recovery",
        titleh4: "Data Backup and Recovery",
        para: "Your data is securely backed up in the cloud, and if deleted by mistake, it can be restored from the cloud’s deleted items."
    },
    {
        iconpic: ImageIcons.iconlinuxsix,
        iconalt: "Version Control",
        titleh4: "Version Control",
        para: "Nextcloud tracks file changes and retains older versions, which can be restored when needed."
    },
    {
        iconpic: ImageIcons.iconlinuxnine,
        iconalt: "Nextcloud Talk",
        titleh4: "Nextcloud Talk",
        para: "Enjoy group chats, voice calls, video calls, and screen sharing with Nextcloud Talk."
    },
    {
        iconpic: ImageIcons.infrastructurestability,
        iconalt: "Nextcloud Calendar",
        titleh4: "Nextcloud Calendar",
        para: "Manage personal and shared calendars with CalDav support for seamless scheduling.",
    },
    {
        iconpic: ImageIcons.securityfeaturesicon,
        iconalt: "Mobile Apps",
        titleh4: "Mobile Apps",
        para: "Native apps for iOS and Android allow you to sync files from your mobile device to the server.",
    },
    {
        iconpic: ImageIcons.fullrootaccess,
        iconalt: "Desktop Clients",
        titleh4: "Desktop Clients",
        para: "Nextcloud offers file syncing for desktops through clients available for Windows, macOS, and Linux.",
    },
    {
        iconpic: ImageIcons.remoteaccess,
        iconalt: "Collaboration and Office Docs",
        titleh4: "Collaboration and Office Docs",
        para: "Collaborate on office documents in real-time, including word processing, spreadsheets, and presentations.",
    },
    {
        iconpic: ImageIcons.acceleratedmachine,
        iconalt: "High-Speed File Transfer",
        titleh4: "High-Speed File Transfer",
        para: "Experience high-speed data transfer that transforms the way information is shared.",
    }
]

const whyChooseData = {
    titleh2: "Why choose Velosting NextCloud Enterprise Hosting?",
    para: "Velosting offers its users with the best nextcloud enterprise hosting solutions which have been designed to offer excellence in every aspect.",
    contentInfo: [
        {
            iconpic: ImageIcons.infrastructurestability,
            iconalt: "NextCloud Enterprise",
            titleh4: "NextCloud Enterprise",
            para: "We provide Nextcloud Enterprise License tailored to meet your business needs. This license ensures full GDPR compliance for secure data handling. It also includes certified compliance to maintain the highest industry standards."
        },
        {
            iconpic: ImageIcons.iconlinuxthree,
            iconalt: "Unmatched Performance",
            titleh4: "Unmatched Performance",
            para: "Our cloud storage servers deliver exceptional performance, powered by advanced technology and high-quality hardware. We are also connected to a high-speed network and storage for optimal efficiency."
        },
        {
            iconpic: ImageIcons.iconlinuxfour,
            iconalt: "Full Control and Customization",
            titleh4: "Full Control and Customization",
            para: "You gain access to admin controls, allowing full system management, portal customization, unique control implementation, and the ability to showcase your company branding by adding your logo."
        },
        {
            iconpic: ImageIcons.acceleratedmachine,
            iconalt: "Reliability and Uptime",
            titleh4: "Reliability and Uptime",
            para: "Velosting's advanced data centers feature redundant servers and scalable storage, with 24/7 monitoring to prevent downtime and enhance reliability."
        }
    ]
}

const faqData = [
    {
        question: "How is Nextcloud different from other cloud services?",
        answer: "Unlike public cloud services, Nextcloud is self-hosted. This means you have full control over your data, where it is stored, and who has access to it, ensuring higher levels of privacy and security."
    },
    {
        question: "Can I integrate Nextcloud with existing tools?",
        answer: "Yes, Nextcloud supports integration with a wide range of third-party apps and tools like Office 365, Google Workspace, and enterprise IT systems via APIs and plugins."
    },
    {
        question: "Is Nextcloud free to use?",
        answer: "Nextcloud's core software is open-source and free. However, enterprise solutions with additional features, support, and customization may incur costs."
    },
    {
        question: "Does Nextcloud support mobile devices?",
        answer: "Yes, Nextcloud has mobile apps for iOS and Android, allowing you to access files, sync data, and collaborate on the go."
    },
    {
        question: "Can I customize Nextcloud for my organization?",
        answer: "Yes, Nextcloud is fully customizable. You can add branding, integrate apps, and configure it to meet your organization’s specific needs."
    }
];

export default NextCloud
