import React, { useEffect, useRef, useState } from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { useSelector } from 'react-redux';
import Main from '../../utils/main';
import { Link, useLocation } from 'react-router-dom';


const WebHostingPlan = () => {
    const hostingplanRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#hosting-plan' && hostingplanRef.current) {
            hostingplanRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const Data = useSelector((state) => state.planPrize.data);
    const prizesign = useSelector(state => state.planPrize.prize);
    const [tab, setTab] = useState(0);
    const updateToggle = (id) => {
        setTab(id);
    }
    const selectedOption = hostingOptions[tab];
    const plansData = Data.filter((product) => {
        return product?.products?.product.some(p => selectedOption.productIds.includes(p?.pid));
    });
    return (
        <section  id="hosting-plan" ref={hostingplanRef} className="md:py-[70px] max-md:py-[50px]">
            <Main />
            <div className="lg:container mx-auto px-4 md:py-[10px]">
                <div className='text-center max-w-[690px] mx-auto'>
                    <h2>Choose Your <span className='text-[#00A51A]'>Web Hosting</span> Plan</h2>
                    <p className='md:mb-[35px] max-md:mb-[20px]'>Check out our new range of great value web hosting plans with dozens of new features.</p>
                </div>
                <div className='md:mb-[35px] max-md:mb-[20px]'>
                    <ul className="flex flex-wrap gap-[10px] max-w-[1088px] mx-auto justify-center md:shadow-[0px_8px_25px_rgb(0_0_0_/_0.10)] rounded-full p-[10px]">
                        {hostingOptions.map((item, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => updateToggle(i)}
                                    className={`inline-block rounded-full px-[20px] py-[10px] border border-[#00A51A] text-[#00A51A] bg-[#fff] hover:text-[#fff] hover:bg-[#00A51A]  ${tab === i ? 'text-white !bg-[#00A51A]' : null}`}
                                >
                                    {item.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]'>
                    {plansData?.map((item, index) => (
                        <div key={index}>
                            {item?.products?.product.map((plan, productIndex) => (
                                <div key={productIndex} className='relative bg-[#F3F7FB] rounded-[15px]'>
                                    <div className='float-left flex items-center justify-center bg-[#fff] sm:w-[75px] max-sm:w-[65px] sm:h-[75px] max-sm:h-[65px] rounded-tl-[15px] rounded-br-[15px] p-[5px]'>
                                        <div className='bg-[#F3F7FB] flex items-center justify-center sm:w-[65px] max-sm:w-[55px] sm:h-[65px] max-sm:h-[55px] rounded-[15px] p-[5px]'>
                                            <img src={ImageIcons.cloudiconone} alt='Domain icon' className='w-full sm:max-w-[40px] max-sm:max-w-[32px]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-[15px] md:pt-[20px] md:pb-[40px] max-md:pt-[15px] max-md:pb-[35px]'>
                                        <div className='flex justify-between gap-[10px]'>
                                            <h4 className='sm:text-[24px] max-sm:text-[22px] mb-[5px]'>{plan?.name}</h4>
                                            {prizesign === "INR" ? (<h2 className='sm:text-[24px] max-sm:text-[22px] text-[#00A51A] font-bold mb-[2px]'>₹{plan?.pricing?.INR?.monthly}</h2>) : (<h2 className='text-[24px] text-[#00A51A] font-bold mb-[2px]'>${plan?.pricing?.USD?.monthly}</h2>)}
                                        </div>
                                        <div className='flex justify-between gap-[10px]'>
                                            <p className='text-[#646773] text-[14px] mb-0'>Monthly Package</p>
                                            {prizesign === "INR" ? (<p className='text-[#646773] font-semibold text-[14px] sm:text-right line-through mb-0'>₹{plan?.pricing?.INR?.quarterly}</p>) : (<p className='text-[#646773] font-semibold text-[16px] sm:text-right line-through mb-0'>${plan?.pricing?.USD?.quarterly}</p>)}
                                        </div>
                                    </div>

                                    <div className='border-t-[1px] border-[#00A51A]/[20%] mx-[20px]'>
                                        {/* Discount Offer Code */}
                                        <div className="relative">
                                            <span className="wdp-ribbon h-[28px] text-[14px] leading-[24px] text-[#fff] bg-[#00A51A] text-center whitespace-nowrap inline-block px-[15px] py-[2px] absolute -top-[15px] -right-[20px] before:content-[''] before:inline-block before:absolute before:top-0 before:-left-[9px] before:border-x-[8px] before:border-y-[14px] before:border-[#00A51A] before:border-l-transparent before:border-solid before:h-[28px]">Upto 40% Off</span>
                                        </div>
                                        <ul className='max-w-[300px] mx-auto md:pt-[40px] pb-[20px] max-md:pt-[30px] px-[30px]'>
                                            <li className='relative text-[#000] mb-[10px]'>
                                                <div className="ul-tag-circle" dangerouslySetInnerHTML={{ __html: plan?.description }} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='pb-[40px]'>
                                        <Link to={`${plan?.product_url}&currency=${prizesign === "USD" ? "4" :"1"}`}>
                                            <button className="block w-full md:max-w-[165px] max-md:max-w-[140px] mx-auto rounded-[5px] md:px-[20px] max-md:px-[15px] md:py-[12px] max-md:py-[10px] border border-[#00A51A] font-medium text-[#00A51A] bg-transparent hover:text-[#fff] hover:bg-[#00A51A] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">
                                                Buy Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <ul className='flex flex-wrap justify-center gap-x-[50px] gap-y-[5px] mx-auto md:pt-[40px] max-md:pt-[30px] pl-[30px]'>
                        <li className='relative text-[#000] mb-[10px]'>
                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />24/7 Support
                        </li>
                        <li className='relative text-[#000] mb-[10px]'>
                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />SAS SSD Enterprise Storage
                        </li>
                        <li className='relative text-[#000] mb-[10px]'>
                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Acronis Hourly Backups
                        </li>
                        <li className='relative text-[#000] mb-[10px]'>
                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />MariaDB databases
                        </li>
                        <li className='relative text-[#000]'>
                            <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Fortinet Hardware Firewalls
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default WebHostingPlan;
const hostingOptions = [
    { text: "Linux Shared Hosting", productIds: [17, 18, 19, 20] },
    { text: "Windows Shared Hosting", productIds: [39, 41, 42, 43] },
    { text: "VPS Server Linux", productIds: [1, 2, 44, 4] },
    { text: "VPS Server Windows", productIds: [27, 28, 29, 30] },
    { text: "Cloud Dedicated Server", productIds: [32, 33, 38, 40] },
];