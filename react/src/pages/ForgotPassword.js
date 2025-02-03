import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';


const ForgotPassword = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Forgot Password</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-0'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Forgot Password</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-2 max-w-5xl max-md:max-w-lg w-full p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                            <div className="md:max-w-md w-full md:p-4 max-md:p-2">
                                <form>
                                    <div className="md:mb-10 max-md:mb-5">
                                        <h3 className="text-gray-800 text-3xl font-extrabold">Lost Password Reset</h3>
                                        <p className="text-sm text-gray-800 mb-0">Forgotten your password? Enter your email address below to begin the reset process.</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-800 block mb-2">Email Address*</label>
                                        <div className="relative flex items-center">
                                            <input name="email" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter email" />
                                            <img src={ImageIcons.emailinputicon} alt='Email Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="md:mt-[30px] max-md:mt-[20px]">
                                        <button type="button" className="w-full shadow-xl py-3 px-4 rounded-md text-white bg-[#00A51A] hover:bg-[#00A51A]/[85%] focus:outline-none">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="md:h-full bg-[#fff] rounded-xl lg:p-12 p-5">
                                <img src={ImageIcons.signinimg} className="w-full h-full object-contain" alt="Sign Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ForgotPassword
