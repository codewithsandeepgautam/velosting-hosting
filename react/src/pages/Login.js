import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaFacebookF, FaXTwitter, FaInstagram, } from "react-icons/fa6";


const Login = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Login</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-0'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Login</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-2 max-w-6xl max-md:max-w-lg w-full p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                            <div className="md:max-w-md w-full md:p-4 max-md:p-2">
                                <form>
                                    <div className="md:mb-10 max-md:mb-5">
                                        <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                        <p className="text-sm text-gray-800 mb-0">Don't have an account <Link to="/register" className="text-[#00A51A] font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                                    </div>
                                    <div>
                                        <label className="text-gray-800 block mb-2">Email*</label>
                                        <div className="relative flex items-center">
                                            <input name="email" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter email" />
                                            <img src={ImageIcons.emailinputicon} alt='Email Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="md:mt-8 max-md:mt-5">
                                        <label className="text-gray-800 block mb-2">Password*</label>
                                        <div className="relative flex items-center">
                                            <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter password" />
                                            <img src={ImageIcons.pwdeyeiconopen} alt='Eye Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 md:mt-6 max-md:mt-4">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                                                Remember me
                                            </label>
                                        </div>
                                        <div>
                                            <Link to="/forgot-password" className="text-[#00A51A] font-semibold text-sm hover:underline">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:mt-10 max-md:mt-6">
                                        <button type="button" className="w-full shadow-xl py-3 px-4 rounded-md text-white bg-[#00A51A] hover:bg-[#00A51A]/[85%] focus:outline-none">
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="flex justify-center gap-[5px] w-full md:mt-6 mt-[20px]">
                                        <Link to='https://www.facebook.com/velosting/' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaFacebookF /></Link>
                                        <Link to='https://x.com/velosting_cloud' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'><FaXTwitter /></Link>
                                        <Link to='https://www.instagram.com/velosting_cloud_hosting/' target="_blank" className='text-[17px] text-[#000] min-w-[35px] h-[35px] rounded-full bg-[#00A51A]/[20%] hover:bg-[#00A51A] hover:text-[#fff] flex justify-center items-center'> <FaInstagram /></Link>
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

export default Login
