import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import ComingSoon from '../components/shared/ComingSoon';

const RemoteManageService = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Remote Manage Service</h1>
                        <div class="text-center mt-[10px]">
                            <p>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium">Remote Manage Service</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <ComingSoon/>
        </Layout>
    )
}

export default RemoteManageService
