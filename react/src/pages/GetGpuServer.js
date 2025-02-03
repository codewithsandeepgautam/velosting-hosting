import React, { useState, useRef } from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import InformationCta from '../components/shared/InformationCta';
import { windowScroll } from '../utils/windowScroll';
import GetInquiryForm from '../components/shared/GetInquiryForm';
import { useSelector } from 'react-redux';
import Main from '../utils/main';

const GetGpuServer = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const prizesign = useSelector((state) => state.planPrize.prize);
    const dataFromStore = useSelector((state) => state.planPrize.data);
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
    const gpuServerProducts = dataFromStore.filter(product => {
        return product?.products?.product.some(p => [49, 50, 51, 52].includes(p?.pid));
    });
    console.log("gpuServerProducts<<", gpuServerProducts);
    return (
        <Layout>
            <Main />
            {/* Hero Section */}
            <section className="relative py-[45px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='flex w-full gap-[20px] max-md:flex-col'>
                        <div className='lg:w-3/5 max-lg:w-full'>
                            <div className='flex w-full items-center max-md:flex-col h-full bg-[#fff] py-[20px] md:px-[20px] max-md:px-[15px] md:gap-[10px] max-md:gap-[30px] rounded-[20px]'>
                                <div className='md:w-1/2 max-md:w-full max-md:text-center relative'>
                                    <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Save Up to</h4>
                                    <h1 className='font-bold text-[#000] md:mb-[15px] max-md:mb-[10px]'>40% Off</h1>
                                    <p className='md:mb-[25px] max-md:mb-[20px]'>Start your AI journey with cost-effective, high-performance GPU hosting featuring NVIDIA H100, L40, and RTX 5000. Built for speed, efficiency, and your AI/ML projects!</p>
                                    <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                                </div>
                                <div className='md:w-1/2 max-md:w-full'>
                                    <img src={ImageIcons.product51} alt='GPU Server' className='w-full 2xl:max-w-[320px] max-2xl:max-w-[250px] mx-auto' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-2/5 max-lg:w-full'>
                            <div className='h-full rounded-[20px] bg-[#104223] lg:px-[20px] md:px-[25px] max-md:px-[15px] lg:py-[20px] md:py-[30px] max-md:py-[30px]'>
                                <h2 className='text-white font-bold md:mb-[20px] max-md:mb-[15px] text-center'>Get in touch</h2>
                                <div>
                                    {/* Get in touch Inquiry Form */}
                                    <GetInquiryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* InformationCta Section */}
            <InformationCta />
            {/* Cloud GPUs Product Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2 className='md:mb-[20px] max-md:mb-[15px]'>Our Cloud GPUs Product Range</h2>
                        <p className='md:mb-[40px] max-md:mb-[25px]'>High-Performance Solutions for Every AI/ML Need</p>
                    </div>
                    <div className={`grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]`}>
                        {gpuServerProducts?.map((item, index) => (
                            <div key={index}>
                                {item?.products?.product.map((plan, index) => (
                                    <div key={index} className='relative bg-[#F3F7FB] rounded-[15px] pt-[24px]'>
                                        <div className='flex items-center justify-center mx-auto pb-[10px]'>
                                            {productImages?.length > 0 && (
                                                <img
                                                    src={productImages.find(img => img.altTag === plan.name)?.imageName}
                                                    alt={productImages.find(img => img.altTag === plan.name)?.altTag}
                                                    className='w-full object-contain h-[170px]'
                                                />

                                            )}
                                        </div>
                                        <div className='max-sm:text-center flex max-sm:flex-col justify-between gap-[10px] px-[15px] pt-[24px] pb-[30px]'>
                                            <div>
                                                <h4 className='text-[24px] mb-[5px]'>{plan.name}</h4>
                                                <p className='text-[#646773] text-[14px] mb-0'>Starting From</p>
                                            </div>
                                            <div>
                                                {prizesign === "INR" ? (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>₹{plan?.pricing?.INR?.monthly}</h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>${plan?.pricing?.USD?.monthly}</h2>)}
                                                {prizesign === "INR" ? (<p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>
                                                    ₹{(parseFloat(plan?.pricing?.INR?.monthly)) + 48000.00}
                                                </p>
                                                ) : (<p className='text-[#646773] font-semibold text-[15px] sm:text-right line-through mb-0'>${(parseInt(plan?.pricing?.USD?.monthly)) + 559.20}</p>)}
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
                                            <Link to={plan.product_url} className="text-center block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Buy Now</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Special Offer Don't Miss It */}
            <section className="md:py-[70px] max-md:py-[50px] bg-[#2B2B2B] relative bg-no-repeat bg-cover bg-center before:bg-[#104223]/[35%] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:w-full before:h-full" style={{ backgroundImage: `url(${ImageIcons.vpsbgbanner})` }}>
                <div className="lg:container mx-auto px-4 relative">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='text-center md:max-w-[445px] md:ml-auto'>
                            <h4 className='text-[#00D752]'>Special Offer Don't Miss It</h4>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px] mb-[0px]'>Reach out for Special</h2>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px]'>Discount !</h2>
                        </div>
                        <div>
                            <img src={ImageIcons.offergpupic} alt='Special Offer' className='w-full md:max-w-[330px] max-md:max-w-[250px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* What are some of the features of GPU Servers? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[20px] max-md:mb-[15px]'>What are some of the features of GPU Servers?</h2>
                    <p className='text-center md:mb-[40px] max-md:mb-[30px]'>GPU dedicated servers offer users with multifarious of features which are mentioned below</p>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.highperformnc} alt='High-Performance' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>High-Performance</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our dedicated GPU servers have been designed to provide parallel processing and impeccable performance especially for tasks such as deep learning, neural network, and scientific simulations.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.customconfigpic} alt='Custom Configurations' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Custom Configurations</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We enable you to customize your GPU environment to meet your specific needs, recognizing the uniqueness of every project.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicaticon} alt='Dedicated Support' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Dedicated Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our team of experts, which is available 24/7 ensures that you never have to suffer from any of the issues. They help you with everything be it initial setup, troubleshooting or optimising the GPU environment.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[15px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.advancesecurityicon} alt='Advanced Security' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Advanced Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>At Velosting, your data security is our top priority. That's why our data centers are equipped with robust measures, including physical safeguards, firewalls, and advanced intrution detection system.</p>
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

const faqData = [
    {
        question: "What is the use of GPU servers?",
        answer: "These prove to be helpful for those tasks which require computational power like AI, Machine learning, graphics rendering etc."
    },
    {
        question: "Do you offer scalable GPU resources?",
        answer: "Yes, our solutions are completely scalable, allowing you to expand your GPU servers as per your needs."
    },
    {
        question: "Do you offer secure GPU servers solutions?",
        answer: "Yes, at Velosting, we ensure that these are being hosted in secure data centres with state-of-the-art data security measures so that your data and applications can be protected."
    },
    {
        question: "Do you guarantee uptime for your GPU?",
        answer: "Yes, at Velosting, 99.9% uptime is guaranteed so that your applications are always available to you.",
    },
    {
        question: "How can I start my services with a Velosting GPU dedicated server?",
        answer: "You just need to contact our sales team and discuss your needs, they will offer you the best plan according to your needs."
    }
];

export default GetGpuServer
const productImages = [
    {
        imageName: ImageIcons?.product49,
        altTag: "NVIDIA-H100"
    },
    {
        imageName: ImageIcons?.product50,
        altTag: "NVIDIA-L40"
    },
    {
        imageName: ImageIcons?.product51,
        altTag: "RTX-5000"
    },
    {
        imageName: ImageIcons?.product52,
        altTag: "P5000"
    },

]
// const plans = [
//     {
//         itemData: [
//             {
//                 productImg: ImageIcons.product49,
//                 productAlt: "NVIDIA-H100",
//                 title: "NVIDIA-H100",
//                 price: "₹245000.00",
//                 originalPrice: "₹343000.00",
//                 features: [
//                     "RAM 256GB",
//                     "vCPU 64",
//                     "Storage 1TB",
//                     "Memory 80"
//                 ],
//                 productLink: "https://www.velosting.com/cart.php?a=add&pid=49"
//             },
//             {
//                 productImg: ImageIcons.product50,
//                 productAlt: "NVIDIA-L40",
//                 title: "NVIDIA-L40",
//                 price: "₹95000.00",
//                 originalPrice: "₹133000.00",
//                 features: [
//                     "RAM 128GB",
//                     "vCPU 24",
//                     "Storage 1TB",
//                     "Memory 48"
//                 ],
//                 productLink: "https://www.velosting.com/cart.php?a=add&pid=50"
//             },
//             {
//                 productImg: ImageIcons.product51,
//                 productAlt: "RTX-5000",
//                 title: "RTX-5000",
//                 price: "₹29000.00",
//                 originalPrice: "₹40600.00",
//                 features: [
//                     "RAM 128GB",
//                     "vCPU 24",
//                     "Storage 500GB",
//                     "Memory 16"
//                 ],
//                 productLink: "https://www.velosting.com/cart.php?a=add&pid=51"
//             },
//             {
//                 productImg: ImageIcons.product52,
//                 productAlt: "P5000",
//                 title: "P5000",
//                 price: "₹24000.00",
//                 originalPrice: "₹33600.00",
//                 features: [
//                     "RAM 128GB",
//                     "vCPU 16",
//                     "Storage 500GB",
//                     "Memory 16"
//                 ],
//                 productLink: "https://www.velosting.com/cart.php?a=add&pid=52"
//             }
//         ]
//     },
// ];