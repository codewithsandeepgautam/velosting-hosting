import React,{useEffect} from 'react'
import Layout from '../components/shared/Layout'
import { Link, useNavigate } from 'react-router-dom'
import ImageIcons from '../components/imageComponent/ImageIcons'
import { windowScroll } from '../utils/windowScroll'
import { FaArrowRightLong } from "react-icons/fa6";

const ThankYou = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Thank You</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-[0px]'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Thank You</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-[70px] max-md:py-[50px]" >
                <div className="lg:container mx-auto px-4">
                    <div className='text-center'>
                        <img src={ImageIcons.checkthanks} alt='check thanks' className='md:w-[80px] max-md:w-[60px] mx-auto' />
                        <h2 className='text-center mt-[20px] md:mb-[15px] max-md:mb-[10px]'>Thank you!</h2>
                        <p className='text-center md:text-[18px] mb-0'>Your message has been received.</p>
                    </div>
                    <div className='text-center md:mt-[30px] max-md:mt-[20px]'>
                        <Link onClick={windowScroll} to="/" className="md:text-[18px] inline-flex items-center justify-center w-full md:max-w-[220px] max-md:max-w-[180px] mx-auto rounded-[5px] md:px-[20px] max-md:px-[15px] md:py-[12px] max-md:py-[10px] border border-[#00A51A] font-medium text-[#fff] bg-[#00A51A] hover:text-[#00A51A] hover:bg-[#fff] shadow-[0px_4px_5px_rgb(0_0_0_/_0.10)]">Back To Home<FaArrowRightLong className='ml-[10px]' /></Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ThankYou
