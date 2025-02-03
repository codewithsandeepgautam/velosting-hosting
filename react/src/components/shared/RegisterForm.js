import React, { useState, useEffect } from 'react'
import { PostRequest } from '../../utils/requests';
import { validateEmail, validatePhone } from '../../utils/formValidation';
import Loader from '../../utils/loader';
import { useNavigate } from 'react-router-dom';
import { windowScroll } from '../../utils/windowScroll';
function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        phone: "",
        countryCode: "" || "+91",
        websiteUrl: "",
        companyName: ""
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
    const handleCompanyInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setFormData((prevState) => ({ ...prevState, companyName: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    const handleWebsiteInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setFormData((prevState) => ({ ...prevState, websiteUrl: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    function handleSubmitData(e) {
        e.preventDefault();
        setError((prevState) => ({ ...prevState, message: "" }));
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.countryCode || !formData.companyName || !formData.websiteUrl) {
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
            PostRequest(`${process.env.REACT_APP_URL}/register`, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                service: formData.service,
                countryCode: formData.countryCode,
                companyName: formData.companyName,
                websiteUrl: formData.websiteUrl
            })
                .then((response) => {
                    setError((prevState) => ({ ...prevState, success: true }));
                    setLoading(false);
                    setFormData((prevState) => ({
                        ...prevState,
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        companyName: "",
                        websiteUrl: ""
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
        <div className="lg:container mx-auto px-4">
            <div>
                <h2 className='text-center text-[#fff]'>Make An Online Enquiry</h2>
                <p className='text-center text-[#fff] md:mb-[35px] max-md:mb-[20px]'>Got questions? Ideas? Fill out the form below to get our proposal.</p>
            </div>
            <div className='bg-[#fff] rounded-[10px] relative w-full grid md:mb-[50px] lg:mb-0 p-0 lg:p-[50px] max-lg:p-[30px] shadow-none lg:shadow max-w-[850px] mx-auto'>
                {loading && (
                    <Loader />
                )}
                <p className={` mb-[10px] text-[#fd5901] font-medium ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
                <form onSubmit={handleSubmitData}>
                    <p className="text-[14px] text-left text-[#FF0000] font-semibold mb-[10px] hidden "></p>
                    <div className='grid md:grid-cols-2 md:gap-4'>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="name" className="block mb-[5px] text-[16px]">Full Name<span className="text-[#FF0000]"> *</span></label>
                            <input type="text" name='name' className='h-[50px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.name} onChange={fullNameHandler} />
                        </div>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="email" className="block mb-[5px] text-[16px]">Email<span className="text-[#FF0000]"> *</span></label>
                            <input type="email" name='email' className='h-[50px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='example@gmail.com' value={formData.email} onChange={handleEmailInputChange} />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-4'>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="phone" className="block mb-[5px] text-[16px]">Phone<span className="text-[#FF0000]"> *</span></label>
                            <div className='flex justify-between'>
                                <select className="h-[50px] px-[6px] w-[130px] !border-r-0 border border-[#ddd] rounded-l-[5px] focus:outline-none" value={formData?.countryCode || '+91'} onChange={(e) => {
                                    setFormData(formData => ({
                                        ...formData,
                                        countryCode: e.target.value
                                    }));
                                }}
                                >
                                    <option value="+91">+91 (IN)</option>
                                    {countryCodeData?.map((item, index) => (
                                        <option value={formData?.value} key={index}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                                <input type="text" className='h-[50px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px] rounded-l-none' value={formData.phone} onChange={handlePhoneInputChange} />
                            </div>
                        </div>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="companyName" className="block mb-[5px] text-[16px]">Company Name</label>
                            <input type="text" name='companyName' className='h-[50px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.companyName} onChange={handleCompanyInputChange} />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-4'>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="websiteUrl" className="block mb-[5px] text-[16px]">Website URL</label>
                            <input type="text" name='websiteUrl' className='h-[50px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' value={formData.websiteUrl} onChange={handleWebsiteInputChange} />
                        </div>
                        <div className='relative z-0 w-full mb-[25px] group'>
                            <label htmlFor="service" className="block mb-[5px] text-[16px]">Choose Service</label>
                            <select className="h-[50px] px-[6px] w-full border border-[#ddd] rounded-[5px] focus:border-[#00A51A]/[40%] focus:outline-none" id="service" onChange={(e) => {
                                setFormData(formData => ({
                                    ...formData,
                                    service: e.target.value
                                }));
                            }}>
                                <option value="">Choose a service</option>
                                {serviceData?.map((item, index) => (
                                    <option value={formData?.value} key={index}>
                                        {item?.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='text-center pt-[15px]'>
                        <button type='submit' className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Submit Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterForm
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
const serviceData = [
    {
        title: "SEO",
        value: "seo"
    },
    {
        title: "Content Marketing",
        value: "content marketing"
    },
    {
        title: "SMM",
        value: "smm"
    },
    {
        title: "Email Marketing",
        value: "email marketing"
    },
    {
        title: "Web Design",
        value: "web design"
    },
    {
        title: "PPC",
        value: "ppc"
    },
    {
        title: "Digital Marketing Strategy",
        value: "digital marketing strategy"
    },
    {
        title: "Brand Building",
        value: "brand building"
    },
    {
        title: "Website Strategy",
        value: "website strategy"
    },
    {
        title: "Affiliate Marketing",
        value: "affiliate marketing"
    },
    {
        title: "Keyword Research",
        value: "keyword research"
    },
    {
        title: "Online Advertising",
        value: "online advertising"
    },
    {
        title: "Link Building",
        value: "link building"
    },
    {
        title: "Marketing",
        value: "marketing"
    },
    {
        title: "Search Engine Marketing",
        value: "search engine marketing"
    },
    {
        title: "Online Raputation Management",
        value: "online raputation management"
    },
]