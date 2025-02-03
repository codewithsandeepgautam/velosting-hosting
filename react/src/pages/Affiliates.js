import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import OurVentures from '../components/shared/OurVentures';
import CtaRegister from '../components/shared/CtaRegister';

const Affiliates = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Affiliate Program</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Join Velosting’s Exclusive Affiliate Program!</h1>
                            <h4 className='text-[#000] md:text-[20px] text-[18px] mb-[15px]'>Earn Money by Promoting and referring velosting product and services </h4>
                            <p className='md:mb-[30px] max-md:mb-[20px]'><span className='font-bold'>Ready to make money by promoting innovative solutions?</span> Join our affiliate program and start earning from our cutting-edge products and services! Whether you're a blogger, influencer, or industry expert, our program equips you with all the tools and incentives to succeed.</p>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.affiliatesimage} alt='Affiliate' className='w-full md:max-w-[450px] max-md:max-w-[350px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[40px] max-md:mb-[30px]'>How It Works</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-[20px]'>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconnine} alt='Sign Up' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Sign Up</h4>
                            <p className='text-[#646773] mb-[0px]'>As an affiliate partner on our website.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconseven} alt='Log In' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Log In</h4>
                            <p className='text-[#646773] mb-[0px]'>To access your personalized dashboard.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoicontwo} alt='Copy your Unique Link and Banners' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Copy your Unique Link and Banners</h4>
                            <p className='text-[#646773] mb-[0px]'>To share on your website or social platforms.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconfour} alt='Earn Commissions' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Earn Commissions</h4>
                            <p className='text-[#646773] mb-[0px]'>Each time a purchase is made through your link.</p>
                        </div>
                        <div className='bg-[#00A51A]/[5%] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='mb-[20px]'>
                                <img src={ImageIcons.seoiconfive} alt='Commissions' className='w-full max-w-[50px]' />
                            </div>
                            <h4 className='text-[21px] mb-[10px]'>Commissions</h4>
                            <p className='text-[#646773] mb-[0px]'>Commissions earned are credited to your account at the end of each month.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Benefits */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center md:mb-[35px] max-md:mb-[20px]'>Our Benefits</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicatedsupporticon} alt='Free Online Registration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Free Online Registration</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.iconlinuxfive} alt='Welcome Bonus' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Welcome Bonus</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dmsicon} alt='Strong Brand Value' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Strong Brand Value</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.costeffectiveness} alt='Pan-India Reach' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Pan-India Reach</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.dedicatedresources} alt='Easy Payouts' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>Easy Payouts</h4>
                            </div>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center flex-col gap-[20px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.sevensupport} alt='24/7 Customer Support' className='w-full max-w-[40px] mx-auto' />
                                </div>
                                <h4 className='mb-0'>24/7 Customer Support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <CtaRegister />
            {/* Referral Structure Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                        <div className='md:w-1/2'>
                            <h4 className='text-[22px] text-[#00A51A] font-semibold mb-[15px]'>Start earning today with our affiliate program—turn your reach into revenue</h4>
                            <h2 className='mb-[15px]'>Referral Structure</h2>
                            <ul className='block md:gap-x-[50px] pt-[5px] pl-[30px]'>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />The commission per referral ranges from ₹1000 to ₹5000.</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Receive a ₹1000 bonus upon signing up for the affiliate program.</li>
                                <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Withdrawals are available once your total earnings reach ₹5000.</li>
                            </ul>
                        </div>
                        <div className='md:w-1/2 max-md:w-full'>
                            <div className='w-full'>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-left text-gray-500">
                                        <thead className="sm:text-[20px] max-sm:text-[16px] text-gray-700">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 bg-gray-50">Signups Per Month</th>
                                                <th scope="col" className="px-6 py-3">Commission Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">1-5</td>
                                                <td className="px-6 py-4">1200</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">6-10</td>
                                                <td className="px-6 py-4">2000</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">11-15</td>
                                                <td className="px-6 py-4">2500</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">16-20</td>
                                                <td className="px-6 py-4">3000</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">21+</td>
                                                <td className="px-6 py-4">5000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Commission structure */}
            <section className="md:pb-[70px] max-md:pb-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center md:mb-[40px] max-md:mb-[30px]'>Product Commission Structure</h2>
                    </div>
                    <div className='grid grid-cols-1 xl:gap-[40px] max-xl:gap-[30px]'>
                        <div className='w-full'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-md:pb-[10px]">
                                <table className="w-full text-left text-text-[#000]">
                                    <thead className="text-[#000]">
                                        <tr>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-[#F3F7FB]"></th>
                                            <th scope="col" colSpan={8} className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 text-[20px] bg-[#F3F7FB] md:text-center">Commission</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-[#F3F7FB]">Plan</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold">cPanel Linux Hosting</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50 font-semibold">cPanel Windows Hosting</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold">Manage WordPress Hosting</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50 font-semibold">VPS Hosting</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold">Cloud Dedicated Server</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50 font-semibold">Bare Metal Dedicated Server</th>
                                            <th scope="col" className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-semibold">GPU Server</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">Basic</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">1000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">Value</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">2000</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">Silver</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">2500</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 font-medium text-gray-900 bg-gray-50">Gold</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">10%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2 bg-gray-50">2500</td>
                                            <td className="md:px-5 md:py-3 max-md:px-4 max-md:py-2">12%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Term & conditions */}
                    <section className="md:pt-[70px] max-md:pt-[50px]">
                        <div className="lg:container mx-auto px-4">
                            <div className='flex lg:gap-10 max-lg:gap-5 max-md:flex-col'>
                                <div className='md:w-1/2'>
                                    <h2 className='mb-[15px]'>Term & Conditions</h2>
                                    <ul className='block md:gap-x-[50px] md:pt-[15px] max-md:pt-[5px] pl-[30px]'>
                                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />For Withdrawal minimum <span className='font-semibold'>INR 5000/-</span> balance is required.</li>
                                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Payout will be required <span className='font-semibold'>24-48</span> hours to process.</li>
                                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Commission will be posted after payment realization.</li>
                                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />The Refer scheme requires at least one conversion for the base slab and 2 conversions for the second slab and so on.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
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
                                            <p dangerouslySetInnerHTML={{ __html: item.answer }} className='last:mb-0 md:text-[16px] max-md:text-[15px]' />
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
        question: "What do you mean by affiliate program?",
        answer: "An Affiliate program is the process of paying you in return to referring customers to us. Our affiliate program can be joined without any cost and is easy to set up."
    },
    {
        question: "How can a person earn commissions in this program?",
        answer: "You have to place our affiliate banners on your own website or any social media platform and if users come to us through you and make a purchase, you will be provided with up to 12% commission."
    },
    {
        question: "How is your program unique?",
        answer: "The facility of higher commissions, round the clock support and assistance of affiliate managers make our program unique."
    },
    {
        question: "Can I track my Earnings?",
        answer: "With our affiliate control panel, you can check your performance."
    }
];
export default Affiliates
