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

const GetCloudDedicatedServer = () => {
    const prizesign = useSelector(state => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
    const [tab, setTab] = useState(0)
    const [tabWindow, setTabWindow] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
    const productData = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [32, 33, 38, 40].includes(p?.pid));
    });
    const windowProducts = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [5, 6, 7, 8].includes(p?.pid));
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
            <section className="relative py-[45px] bg-[#00A51A]/[5%]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex w-full gap-[20px] max-md:flex-col'>
                        <div className='lg:w-3/5 max-lg:w-full'>
                            <div className='flex w-full items-center max-md:flex-col h-full bg-[#fff] py-[20px] md:px-[20px] max-md:px-[15px] md:gap-[10px] max-md:gap-[30px] rounded-[20px]'>
                                <div className='md:w-1/2 max-md:w-full max-md:text-center relative'>
                                    <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Get Up to</h4>
                                    <h1 className='font-bold text-[#000] md:mb-[15px] max-md:mb-[10px]'>40% Off</h1>
                                    <h4 className='font-normal md:mb-[15px] max-md:mb-[10px]'>on Dedicated Server Hosting Plans Starting at just</h4>
                                    <h2 className='md:mb-[30px] max-md:mb-[20px] font-bold'>₹3999/<span className='font-normal'>Month</span></h2>
                                    <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                                </div>
                                <div className='md:w-1/2 max-md:w-full'>
                                    <img src={ImageIcons.dedicatedmiddle} alt='Dedicated Server Hosting' className='w-full 2xl:max-w-[320px] max-2xl:max-w-[300px] mx-auto' />
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
                                            <Link to={plan?.product_url}><button className="block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Buy Now</button></Link>
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

            {/* Cloud Dedicated Server Features Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2>Cloud Dedicated Server Features</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px] text-center'>Dedicated servers provide users with multifarious features which are mentioned below:                        </p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.enhancedperformance} alt='Enhanced Performance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Enhanced Performance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>GPU servers prove to be very efficient for demanding tasks like AI, machine learning and scientific simulations. With us, you will be able to experience the complete power of a cloud dedicated server without any need of sharing the resources.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.acceleratedmachine} alt='Accelerated Machine Learning' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Accelerated Machine Learning</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>As these servers always offer required computing power in order to train complex models, these are being leveraged widely in machine learning applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.scalabilityiconone} alt='Scalability' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Scalability</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>At Velosting, users are provided with scalable services, where users can upgrade their resources according to the changing needs of their organisation.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.customizabilityicon} alt='Customizability' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Customizability</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With GPU servers, customers are allowed to customise their hardware configurations in accordance to their requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.costeffectiveness} alt='Cost-Effectiveness' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Cost-Effectiveness</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Velosting GPU servers proves to be very cost effective in comparison to building and maintaining in-house GPU infrastructure. Moreover, a pay-as-you-go model is being followed, resulting in more savings for users.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.remoteaccess} alt='Remote Access and collaboration' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Remote Access and collaboration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We, at Velosting, allow you to access your GPU servers remotely, so that you can utilise the full potential of computing power while sitting in any corner of the world. With this, teams also become able to collaborate with each other.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.efficientresource} alt='Efficient Resource Utilisation' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Efficient Resource Utilisation</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The workload is being distributed between different GPUs and this provides higher throughput along with efficient utilisation of computing resources.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.infrastructurestability} alt='Infrastructure Stability' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Infrastructure Stability</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The infrastructure of GPU servers is robust and offers reliability so that stable and uninterrupted operations can be ensured even during heavy workloads.</p>
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
        question: "How can I get access to my cloud dedicated server?",
        answer: "On receiving the order, it is being reviewed by our billing department. After the approval, within 4 hours, servers are being provisioned with Linux based dedicated servers and for windows servers, the time taken is usually around 4 to 6 hours."
    },
    {
        question: "What do you mean by uplink port and bandwidth?",
        answer: "It is a port speed that is linked to the internet."
    },
    {
        question: "Is it possible to upgrade and downgrade cloud dedicated servers?",
        answer: "Yes, as we offer flexible solutions, you will never be stuck using one server."
    },
    {
        question: "What payment options do you accept?",
        answer: "We accept various payment options like credit cards, debit cards and other online payment methods."
    },
    {
        question: "Do you provide secure cloud dedicated servers?",
        answer: "Yes our cloud dedicated servers ensure cutting edge security measures like firewalls, DDoS protection and other security measures."
    }
];


export default GetCloudDedicatedServer
