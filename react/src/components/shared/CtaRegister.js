import React from 'react'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import { windowScroll } from '../../utils/windowScroll';

const CtaRegister = () => {
    return (
        <section className="md:py-[70px] max-md:py-[50px] after:bg-[#00A51A] relative bg-no-repeat bg-cover bg-center after:content-[''] after:absolute after:-z-10 after:left-0 after:right-0 after:top-0 after:w-full after:h-full" style={{ backgroundImage: `url(${ImageIcons.subscribebgmin})` }}>
            <div className="lg:container mx-auto px-4">
                <div className='flex gap-[30px] max-md:flex-col max-md:text-center items-center justify-between'>
                    <div>
                        <h2 className='text-[#fff]'>Register Yourself and Start Earning Today!</h2>
                        <p className="text-[#fff] mb-0">Sign up today and start earning from the comfort of your home. It's fast, easy, and flexible – your path to extra income begins now!</p>
                    </div>
                    <div>
                        <Link onClick={windowScroll} className='md:text-[18px] text-[16px] bg-[#fff] text-[#00A51A] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Register Now <FaArrowRightLong className='ml-[10px]' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaRegister
