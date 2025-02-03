import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';

const RefundPolicy = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Refund Policy</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-0'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Refund Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='md:py-[70px] max-md:py-[50px]'>
                <div className="lg:container mx-auto px-4">
                    <p>You may cancel your services with us at any time by following the Cancellation Process listed below. Products purchased from Velosting, may be refunded only if cancelled within the timeframe listed under Standard Refund Terms unless noted otherwise herein. All refunds are subject to conditions as set forth below in the Money-Back Guarantee Period.</p>
                    <h3>Standard Refund Terms</h3>
                    <p className='mb-[10px]'>If you cancel Products/Services that are eligible for a refund under our Standard Refund Terms you will receive a full refund for your service with us, under the following conditions:</p>
                    <ul className='block pt-[10px] pl-[30px] mb-[15px]'>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Billing Frequency</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />1 year or more - Within 30 days of the date of the transaction.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Less than 1 year* - Within 48 hours of the date of the transaction.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Date of the transaction</li>
                    </ul>
                    <p className='mb-[20px]'>The date of the transaction is the date a product or service is purchased, or the date any renewal is processed by Velosting in accordance with the terms and conditions of the applicable product or service agreement. You may cancel a product at any time, but a refund will only be issued in accordance with these terms.</p>
                    <p className='font-semibold text-[18px] mb-[10px]'>Products/Services Eligible for a Refund under Standard Refund Terms</p>
                    <p className='font-semibold text-[18px] mb-[10px]'>Products/Services NOT eligible For Refunds</p>
                    <p className='font-semibold text-[18px] mb-[30px]'>ALL REFUNDS WILL BE CALCULATED BY SUBTRACTING THE AMOUNTS NOT ELIGIBLE FOR A REFUND ABOVE FROM ANY FEES PAID BY YOU.</p>
                    <h4 className='text-[20px] mb-[10px]'>Special note</h4>
                    <p className='mb-[30px]'>All domain registrations and renewals are final and cannot be reversed or changed once completed; please check your domain registration for any errors (typo or incorrect TLD) and also check the registration or renewal length prior to submitting your order.</p>
                    <h4 className='text-[20px] mb-[10px]'>Mode of Refund</h4>
                    <p className='mb-[30px]'>All eligible refunds shall be made in the original payment method within 90 days of confirmation of the same.</p>
                    <h4 className='text-[20px] mb-[10px]'>Purchased Product with a Free Domain</h4>
                    <p className='mb-[30px]'>Any product purchase with a Free Domain Name registration promotion is subject to the following conditions. In the event any purchased product or service includes a free domain name, if you cancel the purchased product or service, the regular rate for the domain name will be deducted from the refund amount.</p>
                    <h4 className='text-[20px] mb-[10px]'>Money-Back Guarantee Period for Hosting Services</h4>
                    <p className='mb-[10px]'>If you are not satisfied at any time during the thirty (30) days following your first purchase of Hosting Services you may cancel your Services by using the cancellation form in your Velosting dashboard. You will receive a refund within ninety (90) days of the service cancellation.</p>
                    <p className='mb-[10px]'>You will receive a full refund of all Shared Web Hosting, VPS Hosting, Optimized WordPress Hosting, and Reseller Hosting fees paid by you to Velosting for the initial term. Money-Back Guarantee refunds shall be due to you only upon your compliance with, and subject in all respects to, our terms and conditions. Requests for these refunds must be made in writing to the Velosting Support Team through your Velosting dashboard. Money-Back Guarantee Refunds will not accrue and shall not be paid under any circumstances if you do not provide the applicable refund request within this money-back period.</p>
                    <p className='mb-[30px]'>Only first-time accounts are eligible for a refund. For example, if you've had an account with us before, canceled and signed up again, or if you have opened a second account with us, you will not be eligible for a refund.</p>            
                    <h4 className='text-[20px] mb-[10px]'>Renewals of Services</h4>
                    <p className='mb-[30px]'>IN ORDER TO ENSURE THAT YOU DO NOT EXPERIENCE INTERRUPTION OR LOSS OF SERVICES, ALL SERVICES AUTOMATICALLY RENEW. We will notify you of your upcoming renewals at least 15 days in advance and unless you submit a cancellation request using the cancellation form in your Velosting dashboard the services will be renewed at Velosting’s then current rates using the payment method you have provided to us. IF YOU DO NOT WISH FOR ANY SERVICE TO AUTOMATICALLY RENEW, YOU MAY ELECT TO CANCEL THE SERVICE EITHER IMMEDIATELY OR UPON EXPIRATION OF THE THEN CURRENT TERM.</p>
                    <h4 className='text-[20px] mb-[10px]'>Cancellation Process</h4>
                    <p className='mb-[10px]'>You may terminate a Service at any time by using the web-based cancellation form in the My Services section of your Velosting dashboard OR by submitting a ticket or an email to our billing department from an email address of record on your account with the specific rights and privileges to terminate your Services.</p>
                    <p className='mb-[10px]'>You must clearly state the following information:</p>
                    <ul className='block pt-[10px] pl-[30px] mb-[30px]'>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />The specific Service you intend to cancel.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Your intention to cancel the Service immediately or at the end of your term.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />And any other instructions required by our billing department.</li>
                    </ul>
                    <p className='mb-[10px]'>In addition, your REQUEST MUST BE CONFIRMED BY OUR BILLING DEPARTMENT BEFORE YOUR SERVICES ARE ACTUALLY CANCELLED. We will review your request within 3-5 business days and send you an email to notify you that the cancellation has been processed or to request further information.</p>
                    <p className='mb-[10px]'>We require all cancellations to be submitted in accordance with this process in order to:</p>
                    <ul className='block pt-[10px] pl-[30px] mb-[20px]'>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Confirm your identity.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Confirm in writing that you are prepared for all of your files and emails to be removed from our servers if applicable to the Service you are cancelling.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Document the cancellation request.</li>
                    </ul>
                    <p className='mb-[30px]'>This process aims to reduce the likelihood of mistakes, fraudulent/malicious requests, and to ensure that you are aware that your files, emails, and account may be removed immediately and permanently after a cancellation request is processed.</p>
                    <h4 className='text-[20px] mb-[10px]'>Exceptions</h4>
                    <p className='mb-[10px]'>The following exceptions are applicable to this refund guarantee…</p>
                    <ul className='block pt-[10px] pl-[30px] mb-[20px]'>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />After 7-days of your order, you will not be eligible for refund.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Pro-rata refund will be issued if you have used more than 5% and less than 10% of your total bandwidth, when requesting for refund. Pro-ration will be applied to the amount of bandwidth you actually used when requesting for a refund. We feel that 5% of bandwidth is good enough to test our services initially.</li>
                    </ul>
                    <p className='mb-[30px]'>If you have any questions, please open a Helpdesk Ticket. Your messages will get prompt attention from our Sales and Support team.</p>
                    <h4 className='text-[20px] mb-[10px]'>Cancellation & Refund Policy for VPS and Dedicated Servers</h4>
                    <p className='mb-[10px]'>The following rules apply to cancellation / refund of Dedicated Servers only:</p>
                    <ul className='block pt-[10px] pl-[30px] mb-[20px]'>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />You must request a cancellation BEFORE 30 days of your next renewal date. Failure to request a cancellation before 30 days of renewal, will attract next month’s renewal amount to be paid.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />No refund will be issued for the current billing cycle.</li>
                        <li className='relative text-[#000] mb-[10px]'><img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />If you pre-paid for your dedicated server, we will refund your future month’s payments as long as you request a cancellation BEFORE 30 days of your next renewal date. Your pro-rata refund amount will start from the beginning of next month’s billing cycle.</li>
                    </ul>
                
                </div>
            </section>
        </Layout>
    )
}

export default RefundPolicy
