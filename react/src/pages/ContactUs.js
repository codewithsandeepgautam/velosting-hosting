import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import { PostRequest } from '../utils/requests';
import { validateEmail, validatePhone } from '../utils/formValidation';
import Loader from '../utils/loader';
import { windowScroll } from '../utils/windowScroll';
const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
        countryCode: "" || "+91"
    })
    const [error, setError] = useState({
        email: false,
        msg: false,
        phone: false,
        message: "",
        success: false,
    });
    const fullNameHandler = (e) => {
        const inputValue = e.target.value;
        const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
        if (alphaValue.length <= 30) {
            setFormData(prevState => ({ ...prevState, name: alphaValue }));
            setError(prevState => ({ ...prevState, message: "" }));
        }
    };
    const handlePhoneInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        if (numericValue.length <= 10) {
            setFormData((prevState) => ({ ...prevState, phone: numericValue }));
            setError((prevState) => ({ ...prevState, phone: false, message: "" }));
        }
    };
    const handleEmailInputChange = (e) => {
        const inputValue = e.target.value;
        const val = inputValue.replace(" ", "");
        setFormData((prevState) => ({ ...prevState, email: val }));
        setError((prevState) => ({ ...prevState, email: false, message: "" }));
    };
    const handleSubjectInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setFormData((prevState) => ({ ...prevState, subject: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    const handleMessageInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setFormData((prevState) => ({ ...prevState, message: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    function handleSubmitData(e) {
        e.preventDefault();
        setError((prevState) => ({ ...prevState, message: "" }));
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message || !formData.countryCode) {
            setError((prevState) => ({
                ...prevState,
                success: false,
                message: "Fields must not be empty!",
            }));
        } else if (!validateEmail(formData.email)) {
            setError((prevState) => ({
                ...prevState,
                email: true,
                message: "Email is invalid!",
            }));
        } else if (!validatePhone(formData.phone)) {
            setError((prevState) => ({
                ...prevState,
                phone: true,
                message: "Phone number is invalid!",
            }));
        } else {
            setLoading(true);
            PostRequest(`${process.env.REACT_APP_URL}/contact`, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                subject: formData.subject,
                countryCode: formData.countryCode
            })
                .then((response) => {
                    setError((prevState) => ({ ...prevState, success: true }));
                    setLoading(false);
                    setFormData((prevState) => ({
                        ...prevState,
                        name: "",
                        email: "",
                        subject: "",
                        phone: "",
                        message: "",
                    }));
                })
                .catch((err) => {
                    setError((prevState) => ({
                        ...prevState,
                        message: err?.data
                            ? err.data.error
                            : "Something went wrong. Try again later!",
                    }));
                });
        }
    }
    useEffect(() => {
        if (error.success) {
            const timer = setTimeout(() => {
                setError((prevState) => ({ ...prevState, success: false }));
            }, 1000);
            navigate("/thank-you");
            windowScroll();
            return () => clearTimeout(timer);
        }
    }, [error.success, navigate]);
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Contact Us</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-[0px]'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Contact</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-[70px] max-md:py-[50px]" >
                <div className="lg:container mx-auto px-4">
                    <div className='grid w-full grid-cols-1 md:gap-[30px] max-md:gap-[20px] md:grid-cols-3'>
                        <div className='justify-start border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)] group flex flex-col gap-3 md:px-8 md:py-[50px] max-md:px-5 max-md:py-[30px] text-center bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] rounded-[15px] duration-500'>
                            <img src={ImageIcons.emailconticon} alt='Email Icon' className='w-[60px] mx-auto' />
                            <h4 className='mt-[10px] mb-[0px]'>Email</h4>
                            <Link to="mailto:sales@velosting.com">sales@velosting.com</Link>
                        </div>
                        <div className='justify-start border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)] group flex flex-col gap-3 md:px-8 md:py-[50px] max-md:px-5 max-md:py-[30px] text-center bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] rounded-[15px] duration-500'>
                            <img src={ImageIcons.phoneconticon} alt='Phone Icon' className='w-[60px] mx-auto' />
                            <h4 className='mt-[10px] mb-[0px]'>Phone</h4>
                            <Link to="tel:+919056111675">+91 90561-11675</Link>
                        </div>
                        <div className='justify-start border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)] group flex flex-col gap-3 md:px-8 md:py-[50px] max-md:px-5 max-md:py-[30px] text-center bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.25)_0%,_rgba(0,_165,_26,_0.1)_100%);] rounded-[15px] duration-500'>
                            <img src={ImageIcons.locationconticon} alt='Location Icon' className='w-[60px] mx-auto' />
                            <h4 className='mt-[10px] mb-[0px]'>Location</h4>
                            <p className='mb-[0px]'><b>Address:</b> B-70, Industrial Area, Phase-7, Sector 74, SAS Nagar, Punjab, 160055 India</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Online Enquiry Form Section */}
            <section className="relative md:py-[70px] max-md:py-[50px] bg-[#00A51A]/[5%]" >
                <div className="lg:container mx-auto px-4">
                    <div>
                        <h2 className='text-center text-[#000]'>Make An Online Enquiry</h2>
                        <p className='text-center text-[#000] md:mb-[45px] max-md:mb-[30px]'>Got questions? Ideas? Fill out the form below to get our proposal.</p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center'>

                        <div className='bg-[#fff] rounded-[10px] relative w-full grid lg:mb-0 p-0 lg:p-[50px] max-lg:py-[30px] max-lg:px-[20px] shadow-none lg:shadow max-w-[850px] mx-auto'>
                            {loading && (
                                <Loader />
                            )}
                            <p className={` mb-[10px] text-[#fd5901] font-medium ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
                            <form onSubmit={handleSubmitData}>
                                <p className="text-[14px] text-left text-[#FF0000] font-semibold mb-[10px] hidden"></p>
                                <div className='grid md:grid-cols-2 md:gap-4'>
                                    <div className='relative z-0 w-full md:mb-[25px] max-md:mb-[15px] group'>
                                        <label htmlFor="fullname" className="block mb-[5px] text-[16px]">Full Name<span className="text-[#FF0000]"> *</span></label>
                                        <input type="text" name='name' className='md:h-[50px] max-md:h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.name}
                                            onChange={fullNameHandler} />
                                    </div>
                                    <div className='relative z-0 w-full md:mb-[25px] max-md:mb-[15px] group'>
                                        <label htmlFor="email" className="block mb-[5px] text-[16px]">Email Address<span className="text-[#FF0000]"> *</span></label>
                                        <input type="email" name='email' className='md:h-[50px] max-md:h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.email} onChange={handleEmailInputChange} placeholder='example@gmail.com' />
                                    </div>
                                </div>
                                <div className='relative z-0 w-full md:mb-[25px] max-md:mb-[15px] group'>
                                    <label htmlFor="phone" className="block mb-[5px] text-[16px]">Phone<span className="text-[#FF0000]"> *</span></label>
                                    <div className='flex justify-between'>
                                        <select
                                            className="md:h-[50px] max-md:h-[44px] px-[6px] w-[130px] !border-r-0 border border-[#ddd] rounded-l-[5px] focus:outline-none"
                                            value={formData?.countryCode || '+91'}
                                            onChange={(e) => {
                                                setFormData((formData) => ({
                                                    ...formData,
                                                    countryCode: e.target.value
                                                }));
                                            }}
                                        >
                                            <option value="+91">+91 (IN)</option>
                                            {countryCodeData?.map((item, index) => (
                                                <option value={item?.val} key={index}>
                                                    {item?.name}
                                                </option>
                                            ))}
                                        </select>
                                        <input type="text" className='md:h-[50px] max-md:h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px] rounded-l-none' value={formData.phone} onChange={handlePhoneInputChange} />
                                    </div>
                                </div>
                                <div className='relative z-0 w-full md:mb-[25px] max-md:mb-[15px] group'>
                                    <label htmlFor="subject" className="block mb-[5px] text-[16px]">Subject</label>
                                    <input type="text" name='subject' className='md:h-[50px] max-md:h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.subject} onChange={handleSubjectInputChange} />
                                </div>
                                <div className='relative z-0 w-full md:mb-[25px] max-md:mb-[15px] group'>
                                    <label htmlFor="message" className="block mb-[5px] text-[16px]">Message</label>
                                    <textarea id="message" className="md:h-[100px] max-md:h-[90px] w-full focus:outline-none border-[#ddd] p-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]" value={formData.message}
                                        onChange={handleMessageInputChange}></textarea>
                                </div>
                                <div className='max-md:text-center'>
                                    <button type='submit' className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Submit Message</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <img src={ImageIcons.contactfromimg} alt='Contact Us' className='w-full md:max-w-[500px] max-md:max-w-[400px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <h2 className='text-center text-[#000] md:mb-[40px] max-md:mb-[30px]'>How to Reach Us!</h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[30px] max-md:gap-[30px]'>
                        <div className='bg-[#fff] rounded-[10px] relative w-full md:p-[30px] max-md:py-[30px] max-md:px-[20px] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[28px] text-center mb-0'>
                                    <img src={ImageIcons.locationconticon} alt='Map Icon' className='w-full max-w-[30px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>VP Broadband Private Limited</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[20px]'>B-70, Industrial Area, Phase-7, Sector 74, SAS Nagar, Punjab, 160055 India</p>
                            <iframe width="100%" height="350" title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13720.713689212434!2d76.6941817!3d30.7133841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3991ed71a7%3A0xee80138dde9d0d58!2sVelosting!5e0!3m2!1sen!2sin!4v1720181138561!5m2!1sen!2sin" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='bg-[#fff] rounded-[10px] relative w-full md:p-[30px] max-md:py-[30px] max-md:px-[20px] border-[1px] border-[#00A51A]/[15%] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[10px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[28px] text-center mb-0'>
                                    <img src={ImageIcons.locationconticon} alt='Map Icon' className='w-full max-w-[30px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>VP Broadband Private Limited</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-[20px]'>A-24 3rd Floor, SECTOR-63, Noida, Uttar Pradesh - 201301 India</p>
                            <iframe width="100%" height="350" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8824.987052331418!2d77.37426299503585!3d28.623812881475626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cdf6c7ca9%3A0x26e011dc817afe96!2sWorcoz%20Co-working%20Office%20Space!5e0!3m2!1sen!2sin!4v1726922742690!5m2!1sen!2sin" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactUs
const countryCodeData = [
    {
        name: "+93 (AF)",
        val: "+93"
    },
    {
        name: "+672 (AQ)",
        val: "+672"
    },
    {
        name: "+54 (AR)",
        val: "+54"
    },
    {
        name: "+61 (AU)",
        val: "+61"
    },
    {
        name: "+43 (AT)",
        val: "+43"
    },
    {
        name: "+880 (BD)",
        val: "+880"
    },
    {
        name: "+975 (BT)",
        val: "+975"
    },
    {
        name: "+55 (BR)",
        val: "+55"
    },
    {
        name: "+1 (CA)",
        val: "+1"
    },
    {
        name: "+86 (CN)",
        val: "+86"
    },
    {
        name: "+20 (EG)",
        val: "+20"
    },
    {
        name: "+33 (FR)",
        val: "+33"
    },
    {
        name: "+49 (DE)",
        val: "+49"
    },
    {
        name: "+299 (GL)",
        val: "+299"
    },
    {
        name: "+852 (HK)",
        val: "+852"
    },
    {
        name: "+354 (IS)",
        val: "+354"
    },
    {
        name: "+91 (IN)",
        val: "+91"
    },
    {
        name: "+62 (ID)",
        val: "+62"
    },
    {
        name: "+964 (IQ)",
        val: "+964"
    },
    {
        name: "+972 (IL)",
        val: "+972"
    },
    {
        name: "+39 (IT)",
        val: "+39"
    },
    {
        name: "+81 (JP)",
        val: "+81"
    },
    {
        name: "+82 (KR)",
        val: "+82"
    },
    {
        name: "+60 (MY)",
        val: "+60"
    },
    {
        name: "+52 (MX)",
        val: "+52"
    },
    {
        name: "+95 (MM)",
        val: "+95"
    },
    {
        name: "+977 (NP)",
        val: "+977"
    },
    {
        name: "+64 (NZ)",
        val: "+64"
    },
    {
        name: "+92 (PK)",
        val: "+92"
    },
    {
        name: "+63 (PH)",
        val: "+63"
    },
    {
        name: "+7 (RU)",
        val: "+7"
    },
    {
        name: "+65 (SG)",
        val: "+65"
    },
    {
        name: "+27 (ZA)",
        val: "+27"
    },
    {
        name: "+34 (ES)",
        val: "+34"
    },
    {
        name: "+94 (LK)",
        val: "+94"
    },
    {
        name: "+41 (CH)",
        val: "+41"
    },
    {
        name: "+66 (TH)",
        val: "+66"
    },
    {
        name: "+90 (TR)",
        val: "+90"
    },
    {
        name: "+971 (AE)",
        val: "+971"
    },
    {
        name: "+44 (GB)",
        val: "+44"
    },
    {
        name: "+1 (US)",
        val: "+1"
    },
    {
        name: "+84 (VN)",
        val: "+84"
    },

]