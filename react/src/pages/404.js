import React from "react";
import { Link } from "react-router-dom";
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';


const NotFound = () => {
    return (
        <Layout>
            <section className="page_404 bg-[#00A51A]/[5%] pb-[80px]">
                <div className="lg:container mx-auto px-4">
                    <div className="text-center">
                        <img src={ImageIcons.pagenotfoundone} alt='NotFound_gif' className='w-full md:max-w-[400px] max-md:max-w-[350px] mx-auto' />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[40px]">Looks like you're lost!</h3>
                        <p className="capitalize text-[16px] mb-[30px]">the page you are looking for, is not available!</p>
                        <div className="text-center">
                            <Link to="/" className="md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default NotFound
