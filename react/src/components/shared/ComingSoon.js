import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const ComingSoon = () => {
    return (
        <section className="py-[70px] max-md:py-[50px] bg-cover bg-top bg-no-repeat">
            <div className="lg:container mx-auto px-4">
                <div className="flex flex-col items-center justify-center px-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
                    <p className="text-gray-600 text-center text-lg mb-8">We're working hard to bring you an amazing new website. Stay tuned!</p>
                    <div className="flex space-x-4">
                        <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Contact Us<FaArrowRightLong className='ml-[10px]' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon
