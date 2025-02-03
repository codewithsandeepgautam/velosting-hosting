import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaArrowRightLong } from "react-icons/fa6";
import CtaRegister from '../components/shared/CtaRegister';
import ComingSoon from '../components/shared/ComingSoon';

const ResellerProgram = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-[30px] items-center'>
                        <div className='md:text-left text-center'>
                            <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Reseller Program</h4>
                            <h1 className='font-bold text-[#000] md:mb-[20px] max-md:mb-[15px]'>Velosting Reseller Program</h1>
                            <h4 className='text-[#000] md:text-[20px] text-[18px] md:mb-[30px] max-md:mb-[20px]'>With us, you can earn up to 12% with every sale.</h4>
                            <Link className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Join Now<FaArrowRightLong className='ml-[10px]' /></Link>
                        </div>
                        <div>
                            <img src={ImageIcons.affiliatesimage} alt='Reseller Program' className='w-full md:max-w-[450px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            <ComingSoon/>

            {/* CTA Section */}
            <CtaRegister />

        </Layout>
    )
}


export default ResellerProgram
