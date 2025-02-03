import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';
import { useSelector } from 'react-redux';
import Main from '../utils/main';

const GpuServers = () => {
    const [tab, setTab] = useState(0)
    const [openIndex, setOpenIndex] = useState(0);
    const gpuServerData = useSelector((state) => state.planPrize.data);
    const prizesign = useSelector((state) => state.planPrize.prize);
    const products = gpuServerData.filter((product) => {
        return product?.products?.product.some(p => [9, 10, 11, 12].includes(p?.pid));
    })
    const updateToggle = (id) => {
        setTab(id)
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
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left max-md:text-center'>
                            <h4 className='text-[#00A51A] font-semibold max-md:mb-[10px]'>GPU Servers</h4>
                            <h1 className='md:max-w-[535px] font-bold text-[#000] mb-[15px]'>GPU Server for AI And Machine Learning</h1>
                            <p className='text-[#000] md:text-[18px] max-md:text-[17px] md:mb-[30px] max-md:mb-[20px]'>The Velosting GPU dedicated servers have been designed to handle all the computational tasks.</p>
                            <button onClick={scrollToSection} className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>View Plans<FaArrowRightLong className='ml-[10px]' /></button>
                        </div>
                        <div>
                            <img src={ImageIcons.gpuserverspic} alt='GPU Servers' className='w-full md:max-w-[500px] max-md:max-w-[350px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple and Transparent Pricing Section */}
            <section ref={sectionRef} className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[690px] mx-auto'>
                        <h2>Choose Your <span className='text-[#00A51A]'>Simple and Transparent</span> Pricing</h2>
                        <p className='md:mb-[35px] max-md:mb-[20px]'>Check out our new range of great value web hosting plans with dozens of new features.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto justify-center lg:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                            {hostingOptions.map((item, i) => (
                                <li key={i}>
                                    <button onClick={() => updateToggle(i)} className={`inline-block rounded-full px-[20px] py-[10px] bg-[#fff] text-[#00A51A] w-[185px] border border-[#00A51A] hover:text-[#fff] hover:bg-[#00A51A] ${tab === i ? 'text-white !bg-[#00A51A]' : null}`}>{item.text}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 gap-[20px] md:mt-[30px] max-md:mt-[20px]'>
                        {products.map((item, index) => (
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
                                            <Link to={`${plan?.product_url}&currency=${prizesign === "USD" ? "4" :"1"}`} className="text-center block w-full max-w-[165px] mx-auto rounded-[5px] px-[20px] py-[12px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Buy Now</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='text-center md:mt-[40px] max-md:mt-[30px]'>
                        <p className='text-center font-medium mb-0'>All prices exclude VAT at 18% GST (GST is exclude) Compare features</p>
                    </div>
                </div>
            </section>

            {/* GPU Servers Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='max-md:order-2'>
                            <img src={ImageIcons.gpupicone} alt='GPU Servers' className='w-full md:max-w-[450px] max-md:max-w-[350px] mx-auto' />
                        </div>
                        <div className='max-md:order-1'>
                            <h2>GPU Servers</h2>
                            <p className='mb-[30px]'>The Velosting GPU dedicated servers have been designed to handle all the computational tasks. Our GPU solutions allow you to get benefits of the performance needed for AI, machine learning and other demanding applications</p>
                            <h4 className='text-[20px]'>Achieve new heights with Velosting GPU Servers</h4>
                            <ul className='block lg:columns-2 lg:gap-x-[30px] pt-[5px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Top-Tier GPUs
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />AI and ML Ready
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Dynamic Scalability
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Enhanced Security
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Efficient Resource Management
                                </li>
                                <li className='relative text-[#000] mb-[10px]'>
                                    <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Remote Accessibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What are some of the features of GPU Servers Section */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center'>What are some of the features of GPU Servers?</h2>
                        <p className='text-center md:mb-[40px] max-md:mb-[30px]'>GPU dedicated servers offer users with multifarious of features which are mentioned below</p>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 xl:gap-[15px] max-xl:gap-[10px]'>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.acceleratedmachine} alt='High-Performance' className='w-full max-w-[50px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>High-Performance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our dedicated GPU servers have been designed to provide parallel processing and impeccable performance especially for tasks such as deep learning, neural network, and scientific simulations.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.securityfeaturesicon} alt='Remote Access' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Remote Access</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our GPU cloud solutions offer secure and reliable access to your GPU servers from any corner of the world. We ensure lower latency and higher reliability with our GPU dedicated servers.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Scalable Solutions' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Scalable Solutions</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>We allow you to scale your GPU plan according to your needs even if you have started with a single GPU and want to expand it into more GPUs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.customizabilityicon} alt='Custom Configurations' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Custom Configurations</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>You are allowed to customise your GPU environment according to your needs. We offer this facility considering that every project is unique.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Optimised Performance' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Optimised Performance</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our GPU servers have been optimised to offer high-performance computing and to ensure that all your applications always run seamlessly and efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.iconlinuxsix} alt='Advanced Security' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Advanced Security</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>The security of your data is always given priority at velosting, thereby we provide robust security measures at our data centres such as physical security, firewalls and intrusion detection.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.sevensupport} alt='Dedicated Support' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Dedicated Support</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>Our team of experts, which is available 24/7 ensures that you never have to suffer from any of the issues. They help you with everything be it initial setup, troubleshooting or optimising the GPU environment.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[#00A51A]/[5%] rounded-[15px]'>
                            <div className='float-left flex items-center justify-center bg-[#fff] w-[80px] h-[80px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                <div className='bg-[#00A51A]/[5%] flex items-center justify-center w-[70px] h-[70px] rounded-[15px] p-[5px]'>
                                    <img src={ImageIcons.bulkdomainmanagement} alt='Automated Backups' className='w-full max-w-[45px]' />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col justify-between px-[20px] py-[30px]'>
                                <div>
                                    <h4 className='text-[20px] mb-[15px]'>Automated Backups</h4>
                                    <p className='text-[#646773] text-[15px] mb-0'>With Velosting, you can safeguard your data, as we offer weekly automated backup solutions. With our regular backups, your data will always be secure and safe.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaRegister />

            {/* What is GPU Server? Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>What is GPU Server?</h2>
                            <p className='mb-[10px]'>GPU cloud is the platform which provides internet connectivity to the graphic processing unit (GPUs). These GPUs are being used in conducting all the compute-intensive tasks like machine learning model training, graphics rendering and other scientific simulations.</p>
                            <p>At Velosting, cloud GPU servers provide a wide array of hardware configurations like different kinds of GPU and numbers along with the CPU and memory options, allowing you to choose the configuration according to your requirements and you will only have to pay for the resources you are using.</p>
                        </div>
                        <div>
                            <img src={ImageIcons.whatgpuserver} alt='GPU Server Icon' className='w-full md:max-w-[450px] max-md:max-w-[300px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='mb-[30px]'>Why Choose Velosting <span className='text-[#00A51A]'>GPU Dedicated Servers?</span></h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxthree} alt='Impeccable Performance' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Impeccable Performance</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>At Velosting, we offer GPU servers which have state-of-the-art GPUs like RTX 5000, P5000 and A4000 for offering impeccable processing power especially for those activities which are data intensive such as AI, 3D rendering and Machine learning.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.remoteaccess} alt='Resilience' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Resilience</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>The services are always being provided in full compliance to the requirements of the customers along the conditions of the market.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Become an Enterprise' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Become an Enterprise</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>After experiencing swift, high performing and scalable solutions, you will be able to focus on the core competencies of your enterprise.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.infrastructurestability} alt='Advanced Infrastructure' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Advanced Infrastructure</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our cutting-edge infrastructure is able to deal with the advanced and diverse workloads.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[20px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicatedresources} alt='Flexible Payment Options' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Flexible Payment Options</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We offer our users a flexibility of a diverse array of payment options, which help optimise our pricing along with cutting total cost of ownership.</p>
                        </div>
                    </div>
                </div>
            </section>

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

        </Layout>
    )
}
const faqData = [
    {
        question: "What is the use of GPU servers?",
        answer: "These prove to be helpful for those tasks which require computational power like AI, Machine learning, graphics rendering etc.",
    },
    {
        question: "Do you offer scalable GPU resources?",
        answer: "Yes, our solutions are completely scalable, allowing you to expand your GPU servers as per your needs.",
    },
    {
        question: "Do you offer secure GPU servers solutions?",
        answer: "Yes, at Velosting, we ensure that these are being hosted in secure data centres with state-of-the-art data security measures so that your data and applications can be protected.",
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

export default GpuServers
const hostingOptions = [
    { text: "Monthly" },
    { text: "Quarterly" },
    { text: "Semi-Annually" },
    { text: "Annually" },
];