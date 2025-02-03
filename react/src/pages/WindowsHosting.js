import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';
import { useSelector } from 'react-redux';
import Main from '../utils/main';
import { windowScroll } from '../utils/windowScroll';

const WindowsHosting = () => {
    const [tab, setTab] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
    const prizesign = useSelector((state) => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
    const updateToggle = (id) => {
        setTab(id)
    }
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const windowProducts = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [39, 41, 42, 43].includes(p?.pid));
    });

    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <Layout>
            {/* Hero Section */}
            <Main />
            <section className="relative md:pt-[70px] md:pb-[40px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>Easy Set-up Novice to Average Users</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Window Hosting</h1>
                            <p className='text-[#000] md:mb-[30px] max-md:mb-[20px] md:text-[18px] text-[17px]'>HostCluster is a managed WordPress hosting provider where we take care of all your needs regarding your website. We run our services on cutting edge technology and take support seriously.</p>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' >View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.windowhostingimg} alt='Windows Hosting' className='w-full md:max-w-[500px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple and Transparent Pricing Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Choose Your <span className='text-[#00A51A]'>Simple and Transparent</span> Pricing</h2>
                        <p className='md:mb-[35px] max-md:mb-[20px]'>Check out our new range of great value web hosting plans with dozens of new features.</p>
                    </div>
                    <div className="mb-4">
                        <ul className="flex flex-wrap gap-[10px] max-w-[1185px] mx-auto justify-center lg:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                            {hostingOptions.map((item, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => updateToggle(i)}
                                        className={`inline-block rounded-full px-[20px] py-[10px] bg-[#fff] text-[#00A51A] w-[185px] border border-[#00A51A] hover:text-[#fff] hover:bg-[#00A51A] ${tab === i ? 'text-white !bg-[#00A51A]' : null}`}
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
                                        <div className='flex max-sm:flex-col justify-between max-sm:text-center gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
                                                <p className='text-[#646773] text-[14px] mb-0'>Starting From</p>
                                            </div>
                                            <div>
                                                {prizesign === "INR" ? (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>₹
                                                    {
                                                        tab === 0
                                                            ? plan?.pricing?.INR?.monthly
                                                            : tab === 1
                                                                ? plan?.pricing?.INR?.quarterly
                                                                : tab === 2
                                                                    ? plan?.pricing?.INR?.semiannually
                                                                    : tab === 3
                                                                        ? plan?.pricing?.INR?.annually
                                                                        : tab === 4
                                                                            ? plan?.pricing?.INR?.biennially
                                                                            : plan?.pricing?.INR?.triennially
                                                    }
                                                </h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>$
                                                    {
                                                        tab === 0
                                                            ? plan?.pricing?.USD?.monthly
                                                            : tab === 1
                                                                ? plan?.pricing?.USD?.quarterly
                                                                : tab === 2
                                                                    ? plan?.pricing?.USD?.semiannually
                                                                    : tab === 3
                                                                        ? plan?.pricing?.USD?.annually
                                                                        : tab === 4
                                                                            ? plan?.pricing?.USD?.biennially
                                                                            : plan?.pricing?.USD?.triennially
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
                    <div className='text-center md:mt-[40px] max-md:mt-[20px]'>
                        <p className='text-center font-medium mb-0'>All prices exclude VAT at 18% GST (GST is exclude) Compare features</p>
                    </div>
                </div>
            </section>
            <section className="md:py-[70px] max-md:py-[50px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center max-w-[1200px] mx-auto'>
                        <div className='max-md:text-center'>
                            <h2 className='text-[#fff] md:mb-[15px] max-md:mb-[10px]'>Unlimited Bandwidth*</h2>
                            <p className="text-[#fff] text-[20px] max-w-[500px] max-md:mx-auto md:mb-[30px] max-md:mb-[20px]">Yep, because like Cell Phone Overage Charges, Bandwidth Overages SUCK even more!</p>
                            <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#fff] text-[#00A51A] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Register Now <FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div className='max-md:mt-[20px]'>
                            <img src={ImageIcons.unlimitedbandwidth} alt='Unlimited Bandwidth' className='w-full md:max-w-[550px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our hosting give you more feature */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center mb-[20px]'>Our Hosting Give You More Feature</h2>
                    <p className='text-center max-w-[800px] mx-auto md:mb-[40px] max-md:mb-[30px]'>Running a business can be challenging, so to help we offer a FREE website builder with FREE stock images and FREE email with every domain name.</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.domainregicon} alt='Free Domain Name' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Domain Name</h4>
                            <p className='text-[#646773] mb-[0px]'>All our plans include at least one free .co.uk domain, so you get everything you need to take your new business website online, already included in the price of your hosting package.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconnine} alt='Free Personalised email' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Personalised email</h4>
                            <p className='text-[#646773] mb-[0px]'>Create an email address that matches your domain to give your business a pofessional look. It’s super easy to purchase extra mailboxes if you require more than one.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.enhancedsecurity} alt="Free Let's Encrypt SSL" className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Let's Encrypt SSL</h4>
                            <p className='text-[#646773] mb-[0px]'>Free SSL certificate with Let's Encrypt for all websites managed under your hosting package.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.colocationservices} alt='Free Weekly Backup' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Weekly Backup</h4>
                            <p className='text-[#646773] mb-[0px]'>Make sure you always have a copy of your website in case anything goes wrong. Choose how much space you need at checkout, with 5GB starting at only £15/year, going up to 200GB for £375/year.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.iconlinuxthree} alt='Free Site Migration' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Free Site Migration</h4>
                            <p className='text-[#646773] mb-[0px]'>Our experts will migrate any existing shared web hosting account, seamlessly and free of charge</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.wpappdevser} alt='One-Click WordPress hosting' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>One-Click WordPress hosting</h4>
                            <p className='text-[#646773] mb-[0px]'>Install WordPress, Joomla, Drupal and over 200 web applications. Fast installation, and no advanced technical knowledge require</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose Velosting Plesk Hosting Solutions? */}
            {/* <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <h2 className='md:mb-[40px] max-md:mb-[30px]'>Why choose Velosting Plesk Hosting Solutions?</h2>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxone} alt='Superior Performance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Superior Performance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Velosting uses cutting-edge infrastructure and technology in order to ensure that your website is running seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Robust Security Measures' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Robust Security Measures</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>As we give priority to the security, our Plesk hosting solutions provide integrated firewalls, SSL certificate management, regular updates etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Expert Support' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Expert Support</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our dedicated customer support is available round the clock in order to assist you with any issues and queries.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Intuitive Control Panel' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Intuitive Control Panel</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With us, you will get to experience a user-friendly interface which makes the management of websites very simple and easy.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Flexibility and Scalability' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Flexibility and Scalability</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our flexible solutions allow you to increase your resources as per the growing needs of your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Smooth Integration' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Smooth Integration</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our plesk hosting services allow you to integrate with a broad array of applications and services.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxeleven} alt='Backup Solutions' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Backup Solutions</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>As the integrity of data is very important, we keep your data safeguarded with the help of backup and restore issues.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.bulkdomainmanagement} alt='Competitive Pricing' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Competitive Pricing</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our Plesk hosting solutions are being provided at very affordable prices, allowing you to enjoy premium features at very competitive prices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Ultra Fast Cloud Hosting Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Ultra Fast Cloud Hosting</h2>
                            <p className='mb-[10px]'>Benefits of the Cloud + Simplicity of Shared Hosting</p>
                            <ul className='block md:gap-x-[50px] pt-[15px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Reliable Power</span> Designed for Uninterrupted Operations</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>Network & Security</span> Maximum Uptime & Stability</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' /><span className='font-semibold'>HVAC Protection</span> Resilience and Redundancy at All Levels</li>
                            </ul>
                        </div>
                        <div>
                            <div className="bg-[#fff] border border-[#dcdcdc] shadow px-[30px] py-[15px] rounded-[10px]">
                                <ul className='grid md:grid-cols-2 gap-x-[35px] pl-[15px] list-circle'>
                                    <li className='w-full relative py-[5px]'>Dual 2.40GHz Xeon Processor</li>
                                    <li className='w-full relative py-[5px]'>24GB RAM</li>
                                    <li className='w-full relative py-[5px]'>24x7x365 Support</li>
                                    <li className='w-full relative py-[5px]'>250GB RAID 1 OS Drive</li>
                                    <li className='w-full relative py-[5px]'>1TB Cached Customer Drive</li>
                                    <li className='w-full relative py-[5px]'>Apache 2.2x</li>
                                    <li className='w-full relative py-[5px]'>PHP 5.3x, 5.4x, Perl, Python</li>
                                    <li className='w-full relative py-[5px]'>Free DNS Management</li>
                                    <li className='w-full relative py-[5px]'>MySQL 5</li>
                                    <li className='w-full relative py-[5px]'>Ruby On Rails</li>
                                    <li className='w-full relative py-[5px]'>Anti Spam &amp; Virus Protection</li>
                                    <li className='w-full relative py-[5px]'>Secure FTP Access</li>
                                    <li className='w-full relative py-[5px]'>Hotlink &amp; Leech Protection</li>
                                    <li className='w-full relative py-[5px]'>phpMyAdmin Access</li>
                                    <li className='w-full relative py-[5px]'>Online eMail Address Book</li>
                                    <li className='w-full relative py-[5px]'>Now with Varnish Caching</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>What are the Features of <span className='text-[#00A51A]'>Plesk Hosting?</span></h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxnine} alt='User-Friendly Interface' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>User-Friendly Interface</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We allow you to manage your websites, emails and database easily with the help of user-friendly interface and control panel of Plesk, as with this, beginners also find web management to be easier.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfour} alt='Security Tools' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Security Tools</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Get experience of our advanced security features like firewalls, SSL certificate, DDoS and much more and safeguard your environment of hosting from potential threats.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Application Installer' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Application Installer</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our Plesk hosting services allow you to deploy applications such as WordPress, Joomla, Drupal etc swiftly and in an easier way. Its application installer makes the process simple and time saving.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Resource Management' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Resource Management</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, the performance of the server can be improved by managing CPU, RAm and storage. The resource management tools of plesk make sure that your website is running seamlessly.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Backup and Restore' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Backup and Restore</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You can schedule backup options by automating data backups, restoring the site and preventing data loss. Ensure peace of mind with Velosting Plesk hosting solutions.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxten} alt='Email Management' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Email Management</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Plesk’s wide ranging email management tools allow you to set up and manage your email account along with configuring spam filters and creating mailing lists.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Our Venture’s */}
            <OurVentures />

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

            {/* CTA Section */}
            <CtaRegister />


        </Layout>
    )
}
const faqData = [
    {
        question: "What is the procedure of accessing my Plesk control panel?",
        answer: "You can log into your Velosting account and go to the hosting section, where you will get a link to go to the dashboard of Plesk.",
    },
    {
        question: "Which operating systems are supported by Plesk?",
        answer: "Our Plesk hosting services support windows server.",
    },
    {
        question: "Does Plesk Windows Hosting Support WordPress?",
        answer: "Yes, it provides support for WordPress. It provides an intuitive interface and tools in order to facilitate installation, management and optimisation of the sites.",
    },
    {
        question: "Do you provide secure Plesk hosting services?",
        answer: "Yes our services are completely secure and provide features like-",
        faqList: ["Firewalls", "SSL certificate Management", "Automated Updates",]
    },
    {
        question: "What kind of support do you provide for your Plesk hosting services?",
        answer: "Velosting professional customer support team provides each and every kind of support to the customers."
    },
    {
        question: "Is it possible to manage multiple domains with Plesk hosting?",
        answer: "Yes, multiple domains can be managed with a single control panel. New domains can be added easily and websites can be set up."
    }
];

export default WindowsHosting
const hostingOptions = [
    { text: "Monthly" },
    { text: "Quarterly" },
    { text: "Semi-Annually" },
    { text: "Annually" },
    { text: "Biennially" },
    { text: "Triennially" },
];