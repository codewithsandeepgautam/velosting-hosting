import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';

const PrivacyPolicy = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Privacy Policy</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-[0px]'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Privacy Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='md:py-[70px] max-md:py-[50px]'>
                <div className="lg:container mx-auto px-4">
                    <p>Velosting, a domain hosting and colocation services provider is committed to protect your personal information by handling your details safely and responsibly. Our privacy policy will share information regarding the way we collect and use your personal details which you provide us while visiting our website.</p>
                    <h3>Information We Collect</h3>
                    <h4 className='text-[20px] mb-[10px]'>Personal Information</h4>
                    <p className='mb-[20px]'>We collect your information like your name, email, address, contact number when you visit our website.</p>
                    <h4 className='text-[20px] mb-[10px]'>Usage Data</h4>
                    <p className='mb-[20px]'>We also collect information like IP address, type of browser, the pages visited by you on our website along with date and time of your visit because all this helps us in improving our services.</p>
                    <h4 className='text-[20px] mb-[10px]'>Cookies</h4>
                    <p className='mb-[30px]'>We want to improve your browsing experience, so we always use cookies that are small text files which are stored on the devices. These cookies help us to be aware of your choices along with providing personal experience. These cookies can be managed by you by using browsing settings.</p>
                    <h3>How Your Information is Used by Us</h3>
                    <h4 className='text-[20px] mb-[10px]'>To Improve Our Services</h4>
                    <p className='mb-[20px'>We use your information to provide you with the services you need. Along with this, with your information, we also become able to reply to your inquiries along with improving our website and services according to the feedback submitted by you.</p>
                    <h4 className='text-[20px] mb-[10px]'>Communication</h4>
                    <p className='mb-[20px]'>In order to send you updates, newsletters, marketing materials and other information, we use contact information. However, if you do not want to receive such information, you are free to opt-out of these communications at any time.</p>
                    <h4 className='text-[20px] mb-[10px]'>Security</h4>
                    <p className='mb-[30px]'>We maintain the security and integrity of our website and services with the help of your information. It also helps us in preventing frauds and protecting it from illegal access.</p>
                    <h3>Sharing Your Information</h3>
                    <h4 className='text-[20px] mb-[10px]'>Third-Party Service Providers</h4>
                    <p className='mb-[20px]'>Your information can be shared with the third-party providers who provide us help for the purpose of operating our website, conducting our business and offering services to you. These third party providers use your information only for the purpose specified and they are also being obligated to safeguard it.</p>
                    <h4 className='text-[20px] mb-[10px]'>Legal Requirements</h4>
                    <p className='mb-[20px]'>Your information is disclosed only if it is required by law or if it has to be disclosed for responding to legal requests.</p>
                    <h4 className='text-[20px] mb-[10px]'>Business Transfers</h4>
                    <p className='mb-[30px]'>Your information is transferred to the owner in case of merger, acquisition or purchase of all our assets.</p>
                    <h3>Data Security</h3>
                    <p className='mb-[30px]'>All reasonable measures are used by us in order to safeguard your information from any of the illegal accesses, changes, and disclosure to any one. With our security practices, we implement encryption, firewalls, access controls and secure server environments but you need to understand that none of the methods of transmission over the internet is fully secure and absolute security can not be guaranteed.</p>
                    <h3>Your Rights</h3>
                    <h4 className='text-[20px] mb-[10px]'>Access and Correction</h4>
                    <p className='mb-[20px]'>You are provided with all the rights to have access to your information and update it any time. If you feel that there is any need to update your information, you can contact us via our email address given on our website.</p>
                    <h4 className='text-[20px] mb-[10px]'>Opt-Out</h4>
                    <p className='mb-[20px]'>You can also choose to stop receiving any communications related to marketing from us and for this, you just have to follow our unsubscribing instructions or you can simply contact us.</p>
                    <h4 className='text-[20px] mb-[10px]'>Data Deletion</h4>
                    <p className='mb-[30px]'>You are also provided with the right to request for the deletion of your personal information.</p>
                    <h3>Changes to the Privacy Policy</h3>
                    <p className='mb-[30px]'>Our privacy policy can be updated or changed from time to time and you will be notified about the same.If you continue using our services, you show your agreement about our policies.</p>
                    <h3>Contact Us</h3>
                    <p className='mb-[0px]'>If you have any questions or doubts with our policy, you can contact us via email, call or text.</p>
                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicy
