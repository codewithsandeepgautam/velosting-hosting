import React, { useState, useEffect } from 'react'
import { validateEmail, validatePhone } from '../../utils/formValidation';
import { PostRequest } from '../../utils/requests';
import Loader from '../../utils/loader';
import { useNavigate } from 'react-router-dom';
import { windowScroll } from '../../utils/windowScroll';

function BusinessInquiry() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        businessEmail: "",
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
            setFormData(prevState => ({ ...prevState, fullName: alphaValue }));
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
        setFormData((prevState) => ({ ...prevState, businessEmail: val }));
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
        if (!formData.fullName || !formData.businessEmail || !formData.phone || !formData.subject || !formData.message || !formData.countryCode) {
            setError((prevState) => ({
                ...prevState,
                success: false,
                message: "Fields must not be empty!",
            }));
        } else if (!validateEmail(formData.businessEmail)) {
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
            PostRequest(`${process.env.REACT_APP_URL}/businessinquiry`, {
                fullName: formData.fullName,
                businessEmail: formData.businessEmail,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
                countryCode: formData.countryCode
            })
                .then((response) => {
                    setError((prevState) => ({ ...prevState, success: true }));
                    setLoading(false);
                    setFormData((prevState) => ({
                        ...prevState,
                        fullName: "",
                        businessEmail: "",
                        phone: "",
                        subject: "",
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
        <div>
            {loading && (
                <Loader />
            )}
            <p className={` mb-[10px] text-[#fd5901] font-medium ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
            <form onSubmit={handleSubmitData}>
                <p className="text-[14px] text-left text-[#FF0000] font-semibold mb-[10px] hidden">Enter your correct detail</p>
                <div className='grid md:grid-cols-2 md:gap-4'>
                    <div className='relative z-0 w-full mb-[15px] group'>
                        <label htmlFor="fullName" className="block text-[#fff] mb-[5px] text-[16px]">Full Name<span className="text-[#FF0000]"> *</span></label>
                        <input type="text" name='fullName' className='h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='Enter Your Name' value={formData.fullName} onChange={fullNameHandler} />
                    </div>
                    <div className='relative z-0 w-full mb-[15px] group'>
                        <label htmlFor="businessEmail" className="block text-[#fff] mb-[5px] text-[16px]">Email Address<span className="text-[#FF0000]"> *</span></label>
                        <input type="email" name='businessEmail' className='h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='example@gmail.com' value={formData.businessEmail} onChange={handleEmailInputChange} />
                    </div>
                </div>
                <div className='relative z-0 w-full mb-[15px] group'>
                    <label htmlFor="phone" className="block mb-[5px] text-[#fff] text-[16px]">Phone<span className="text-[#FF0000]"> *</span></label>
                    <div className='flex justify-between'>
                        <select className="h-[44px] px-[6px] w-[130px] !border-r-0 border border-[#ddd] rounded-l-[5px] focus:outline-none" value={formData?.countryCode || '+91'}  onChange={(e) => {
                            setFormData(formData => ({
                                ...formData,
                                countryCode: e.target.value
                            }));
                        }}
                        >
                             <option value="+91">+91 (IN)</option>
                            {countryCodeData?.map((item, index) => (
                                <option value={formData?.val} key={index}>
                                    {item?.name}
                                </option>
                            ))}
                        </select>
                        <input type="text" name="phone" className='h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px] rounded-l-none' placeholder='Enter Phone No' value={formData.phone} onChange={handlePhoneInputChange} />
                    </div>
                </div>
                <div className='relative z-0 w-full mb-[15px] group'>
                    <label htmlFor="subject" className="block mb-[5px] text-[16px] text-[#fff]">Subject</label>
                    <input type="text" name='subject' className='h-[44px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='Enter Your Subject' value={formData.subject} onChange={handleSubjectInputChange} />
                </div>
                <div className='relative z-0 w-full mb-[15px] group'>
                    <label htmlFor="message" className="block mb-[5px] text-[16px] text-[#fff]">Message</label>
                    <textarea id="message" className="md:h-[100px] max-md:h-[90px] w-full focus:outline-none border-[#ddd] p-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]" placeholder='Enter Your Message' value={formData.message} onChange={handleMessageInputChange}></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit' className='text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Query Now</button>
                </div>
            </form>
        </div>
    )
}
export default BusinessInquiry
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
