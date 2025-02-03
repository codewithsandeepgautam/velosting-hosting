import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaLinux, FaWindows, FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Main from '../utils/main';
import { useSelector } from 'react-redux'
import InformationCta from '../components/shared/InformationCta';
import { windowScroll } from '../utils/windowScroll';
import GetInquiryForm from '../components/shared/GetInquiryForm';

const GetVpsServer = () => {
    const prizesign = useSelector(state => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
    const [tab, setTab] = useState(0)
    const [tabWindow, setTabWindow] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
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

    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <Layout>
            <Main />
            {/* Hero Section */}
            <section className="relative py-[45px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='flex w-full gap-[20px] max-lg:flex-col'>
                        <div className='lg:w-3/5 max-lg:w-full'>
                            <div className='flex w-full items-center max-md:flex-col h-full bg-[#fff] py-[20px] rounded-[20px]'>
                                <div className='md:w-1/2 max-md:w-full max-md:text-center relative md:px-[20px] max-md:px-[15px]'>
                                    <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Get Up to</h4>
                                    <h1 className='font-bold text-[#000] md:mb-[15px] max-md:mb-[10px]'>40% Off</h1>
                                    <h4 className='font-normal md:mb-[15px] max-md:mb-[10px]'>on VPS Server Hosting Plans Starting at Just</h4>
                                    <h2 className='md:mb-[30px] max-md:mb-[20px] font-bold'>₹489/<span className='font-normal'>Month</span></h2>
                                    <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                                </div>
                                <div className='md:w-1/2 max-md:w-full'>
                                    <img src={ImageIcons.vpsiconpic} alt='VPS Server Hosting Plans' className='w-full 2xl:max-w-[450px] max-2xl:max-w-[400px] mx-auto' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-2/5 max-lg:w-full'>
                            <div className='h-full rounded-[20px] bg-[#104223] lg:px-[20px] md:px-[25px] max-md:px-[15px] lg:py-[20px] md:py-[30px] max-md:py-[30px]'>
                                <h2 className='text-white font-bold md:mb-[20px] max-md:mb-[15px] text-center'>Get in touch</h2>
                                <div>
                                    {/* Get in touch Inquiry Form */}
                                    <GetInquiryForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* InformationCta Section */}
            <InformationCta />

            {/* Linux VPS Product Plans Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='mb-[5px]'><span className='font-bold text-[#00A51A] inline-flex items-center gap-[5px]'><FaLinux size={35} /> Linux</span></h2>
                        <h2 className='md:mb-[20px] max-md:mb-[15px]'>VPS Product Plans</h2>
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

            {/* Windows VPS Product Plans Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='mb-[5px]'><span className='font-bold text-[#00A51A] inline-flex items-center gap-[5px]'><FaWindows size={35} /> Windows</span></h2>
                        <h2 className='md:mb-[20px] max-md:mb-[15px]'>VPS Product Plans</h2>
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
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[20px] md:mt-[30px]'>
                        {windowProducts?.map((item, index) => (
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

            {/* Special Offer Don't Miss It */}
            <section className="md:py-[70px] max-md:py-[50px] bg-[#2B2B2B] relative bg-no-repeat bg-cover bg-center before:bg-[#104223]/[35%] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:w-full before:h-full" style={{backgroundImage: `url(${ImageIcons.vpsbgbanner})` }}>
                <div className="lg:container mx-auto px-4 relative">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='text-center'>
                            <h4 className='text-[#00D752]'>Special Offer Don't Miss It</h4>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px] mb-[0px]'>Reach out for Special</h2>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px]'>Discount !</h2>
                        </div>
                        <div>
                            <img src={ImageIcons.vpsserverbox} alt='Special Offer' className='w-full md:max-w-[350px] max-md:max-w-[250px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* What Are Some of The Features of VPS Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[40px] max-md:mb-[30px]'>What Are Some of The Features of VPS?</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicatedresources} alt='Dedicated Resources' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Dedicated Resources</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We allow our customers to enjoy dedicated CPU, RAM, and storage for all your applications, providing consistent performance.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.fullrootaccess} alt='Full Root Access' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Full Root Access</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You are provided with complete control of the server environment along with offering you full root access so that you can custom configurations and installations.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.scalabilityicon} alt='Scalability' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Scalability</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting provides you with the flexibility of scaling your resources as per the needs of your business that too without any downtime.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.enhancedsecurity} alt='Enhanced Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Enhanced Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, you will get to experience state-of-the-art security features like firewalls and regular environments which help you provide protection to your data.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.ssdstorage} alt='SSD Storage' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>SSD Storage</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>SSD storage provides you with faster access to data along with improving performance if compared to earlier used HDDs.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.nintynineuptimeguarantee} alt='99.9% Uptime Guarantee' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>99.9% Uptime Guarantee</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With our robust infrastructure, your servers will always remain online and you will be able to access them at any time you want.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.sevensupport} alt='24/7 Support' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>24/7 Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our team of experts offers round the clock customer support to the customers to address all of their issues timely.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.managedservices} alt='Managed Services' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Managed Services</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our experts will be responsible for looking after all the server management tasks along with updates, security, and backups.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.databackuprecovery} alt='Data Backup and Recovery' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Data Backup and Recovery</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, your data will be kept safe and you will be provided free weekly automated backup and recovery solutions.</p>
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

            {/* Get your custom email address */}
            <section>
                <div className='relative w-full overflow-hidden'>
                    <div className="lg:container mx-auto sm:py-[80px] max-sm:mb-[20px]">
                        <div className='relative w-full h-full flex flex-col justify-center z-10 px-[15px] py-[15px]'>
                            <div className='sm:w-1/2'>
                                <h2 className='text-center max-w-[570px] mx-auto'>Get your custom email address: Build trust in your business.</h2>
                                <p className='text-center max-w-[570px] mx-auto mb-[30px]'>Send the right message to your customers and prospects by using a proafessional email address like <Link to="mailto:help@velosting.com" target='_blank'>help@velosting.com</Link>. Adding custom email addresses to your domain is easy and adds credibility to your company. Check out our email options.</p>  
                                <div className='text-center max-w-[570px] mx-auto'>
                                    <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#00A51A] text-[#fff] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Register Now <FaArrowRightLong className='ml-[10px]' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={ImageIcons.girlwithphonepic} alt='girl with phone pic' className='sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-y-[-50%] sm:translate-x-[-50%] w-full h-full object-center object-cover' />
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
        question: "Differentiate between VPS and Shared Hosting?",
        answer: "In VPS, users are provided with an isolated environment and dedicated resources, however in shared hosting, resources are being shared by multiple users. In VPS, users are provided with improved performance and better security.",
    },
    {
        question: "Do you provide secure VPS services?",
        answer: "Yes, we offer advanced security features like:",
        faqList: ["Firewalls", "Regular updates", "Isolated environments",]
    },
    {
        question: "Is it possible to install custom software on my VPS?",
        answer: "Yes, if you have full root access, it is easier to install any software.",
    },
    {
        question: "Am I allowed to upgrade my VPS plan later on?",
        answer: "Yes, as mentioned above, we offer scalable solutions so that businesses can adjust according to their growing needs.",
    },
    {
        question: "What kind of support do you provide?",
        answer: "Our customer support team is available round the clock to assist you in case you face any issues or have any questions."
    }
];

export default GetVpsServer
