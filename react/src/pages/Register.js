import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';

const Register = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className='relative'>
                <div className='relative w-full overflow-hidden py-[5%] after:content after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#00A51A] after:opacity-50'>
                    <img src={ImageIcons.contactheaderbg} alt='Commissions' className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full h-full object-center object-cover' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center z-10 px-[15px] py-[15px]'>
                        <h1 className="capitalize text-white text-center">Register</h1>
                        <div className="text-center mt-[10px]">
                            <p className='mb-0'>
                                <Link className="text-white font-medium hover:underline" to="/">Home</Link>
                                <span className="px-[10px] text-white font-medium inline-block">/</span>
                                <span className="inline-block text-white font-medium ">Register</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-6xl max-md:max-w-lg w-full md:p-[35px] max-md:p-[20px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                            <div className="w-full">
                                <form>
                                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">First Name*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter First Name" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Last Name*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Last Name" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Email Address*</label>
                                            <div className="relative flex items-center">
                                                <input name="email" type="email" required className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Email Address" />
                                                <img src={ImageIcons.emailinputicon} alt='Email Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Phone Number*</label>
                                            <div className='flex justify-between'>
                                                <select className="h-[45px] px-[6px] md:w-[130px] max-md:w-[100px] max-md:text-[14px] border-b border-b-[#ddd] focus:outline-none bg-[#00A51A]/[5%]">
                                                    <option value="+93">+93 (AF)</option>
                                                    <option value="+672">+672 (AQ)</option>
                                                    <option value="+54">+54 (AR)</option>
                                                    <option value="+61">+61 (AU)</option>
                                                    <option value="+43">+43 (AT)</option>
                                                    <option value="+880">+880 (BD)</option>
                                                    <option value="+975">+975 (BT)</option>
                                                    <option value="+55">+55 (BR)</option>
                                                    <option value="+1">+1 (CA)</option>
                                                    <option value="+86">+86 (CN)</option>
                                                    <option value="+20">+20 (EG)</option>
                                                    <option value="+33">+33 (FR)</option>
                                                    <option value="+49">+49 (DE)</option>
                                                    <option value="+299">+299 (GL)</option>
                                                    <option value="+852">+852 (HK)</option>
                                                    <option value="+354">+354 (IS)</option>
                                                    <option value="+91">+91 (IN)</option>
                                                    <option value="+62">+62 (ID)</option>
                                                    <option value="+964">+964 (IQ)</option>
                                                    <option value="+972">+972 (IL)</option>
                                                    <option value="+39">+39 (IT)</option>
                                                    <option value="+81">+81 (JP)</option>
                                                    <option value="+82">+82 (KR)</option>
                                                    <option value="+60">+60 (MY)</option>
                                                    <option value="+52">+52 (MX)</option>
                                                    <option value="+95">+95 (MM)</option>
                                                    <option value="+977">+977 (NP)</option>
                                                    <option value="+64">+64 (NZ)</option>
                                                    <option value="+92">+92 (PK)</option>
                                                    <option value="+63">+63 (PH)</option>
                                                    <option value="+7">+7 (RU)</option>
                                                    <option value="+65">+65 (SG)</option>
                                                    <option value="+27">+27 (ZA)</option>
                                                    <option value="+34">+34 (ES)</option>
                                                    <option value="+94">+94 (LK)</option>
                                                    <option value="+41">+41 (CH)</option>
                                                    <option value="+66">+66 (TH)</option>
                                                    <option value="+90">+90 (TR)</option>
                                                    <option value="+971">+971 (AE)</option>
                                                    <option value="+44">+44 (GB)</option>
                                                    <option value="+1">+1 (US)</option>
                                                    <option value="+84">+84 (VN)</option>
                                                </select>
                                                <input type="text" className='h-[45px] w-full focus:outline-none border-b border-b-[#ddd] px-[8px] focus:border-[#00A51A]/[40%] text-[16px] rounded-l-none' placeholder="Enter Phone No." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Company Name*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Company Name" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Street Address*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Street Address" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-3 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Street Address 2</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Street Address 2" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Nearby Landmark</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Nearby Landmark" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">City*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter City" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-3 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">State*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter State" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Postcode*</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Postcode" required />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Country*</label>
                                            <div className='flex justify-between'>
                                                <select name="country" id="inputCountry" className="h-[45px] px-[6px] w-full border-b border-b-[#ddd] focus:outline-none" required>
                                                    <option value="AF">
                                                        Afghanistan
                                                    </option>
                                                    <option value="AX">
                                                        Aland Islands
                                                    </option>
                                                    <option value="AL">
                                                        Albania
                                                    </option>
                                                    <option value="DZ">
                                                        Algeria
                                                    </option>
                                                    <option value="AS">
                                                        American Samoa
                                                    </option>
                                                    <option value="AD">
                                                        Andorra
                                                    </option>
                                                    <option value="AO">
                                                        Angola
                                                    </option>
                                                    <option value="AI">
                                                        Anguilla
                                                    </option>
                                                    <option value="AQ">
                                                        Antarctica
                                                    </option>
                                                    <option value="AG">
                                                        Antigua And Barbuda
                                                    </option>
                                                    <option value="AR">
                                                        Argentina
                                                    </option>
                                                    <option value="AM">
                                                        Armenia
                                                    </option>
                                                    <option value="AW">
                                                        Aruba
                                                    </option>
                                                    <option value="AU">
                                                        Australia
                                                    </option>
                                                    <option value="AT">
                                                        Austria
                                                    </option>
                                                    <option value="AZ">
                                                        Azerbaijan
                                                    </option>
                                                    <option value="BS">
                                                        Bahamas
                                                    </option>
                                                    <option value="BH">
                                                        Bahrain
                                                    </option>
                                                    <option value="BD">
                                                        Bangladesh
                                                    </option>
                                                    <option value="BB">
                                                        Barbados
                                                    </option>
                                                    <option value="BY">
                                                        Belarus
                                                    </option>
                                                    <option value="BE">
                                                        Belgium
                                                    </option>
                                                    <option value="BZ">
                                                        Belize
                                                    </option>
                                                    <option value="BJ">
                                                        Benin
                                                    </option>
                                                    <option value="BM">
                                                        Bermuda
                                                    </option>
                                                    <option value="BT">
                                                        Bhutan
                                                    </option>
                                                    <option value="BO">
                                                        Bolivia
                                                    </option>
                                                    <option value="BA">
                                                        Bosnia And Herzegovina
                                                    </option>
                                                    <option value="BW">
                                                        Botswana
                                                    </option>
                                                    <option value="BR">
                                                        Brazil
                                                    </option>
                                                    <option value="IO">
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option value="BN">
                                                        Brunei Darussalam
                                                    </option>
                                                    <option value="BG">
                                                        Bulgaria
                                                    </option>
                                                    <option value="BF">
                                                        Burkina Faso
                                                    </option>
                                                    <option value="BI">
                                                        Burundi
                                                    </option>
                                                    <option value="KH">
                                                        Cambodia
                                                    </option>
                                                    <option value="CM">
                                                        Cameroon
                                                    </option>
                                                    <option value="CA">
                                                        Canada
                                                    </option>
                                                    <option value="IC">
                                                        Canary Islands
                                                    </option>
                                                    <option value="CV">
                                                        Cape Verde
                                                    </option>
                                                    <option value="KY">
                                                        Cayman Islands
                                                    </option>
                                                    <option value="CF">
                                                        Central African Republic
                                                    </option>
                                                    <option value="TD">
                                                        Chad
                                                    </option>
                                                    <option value="CL">
                                                        Chile
                                                    </option>
                                                    <option value="CN">
                                                        China
                                                    </option>
                                                    <option value="CX">
                                                        Christmas Island
                                                    </option>
                                                    <option value="CC">
                                                        Cocos (Keeling) Islands
                                                    </option>
                                                    <option value="CO">
                                                        Colombia
                                                    </option>
                                                    <option value="KM">
                                                        Comoros
                                                    </option>
                                                    <option value="CG">
                                                        Congo
                                                    </option>
                                                    <option value="CD">
                                                        Congo, Democratic Republic
                                                    </option>
                                                    <option value="CK">
                                                        Cook Islands
                                                    </option>
                                                    <option value="CR">
                                                        Costa Rica
                                                    </option>
                                                    <option value="CI">
                                                        Cote D'Ivoire
                                                    </option>
                                                    <option value="HR">
                                                        Croatia
                                                    </option>
                                                    <option value="CU">
                                                        Cuba
                                                    </option>
                                                    <option value="CW">
                                                        Curacao
                                                    </option>
                                                    <option value="CY">
                                                        Cyprus
                                                    </option>
                                                    <option value="CZ">
                                                        Czech Republic
                                                    </option>
                                                    <option value="DK">
                                                        Denmark
                                                    </option>
                                                    <option value="DJ">
                                                        Djibouti
                                                    </option>
                                                    <option value="DM">
                                                        Dominica
                                                    </option>
                                                    <option value="DO">
                                                        Dominican Republic
                                                    </option>
                                                    <option value="EC">
                                                        Ecuador
                                                    </option>
                                                    <option value="EG">
                                                        Egypt
                                                    </option>
                                                    <option value="SV">
                                                        El Salvador
                                                    </option>
                                                    <option value="GQ">
                                                        Equatorial Guinea
                                                    </option>
                                                    <option value="ER">
                                                        Eritrea
                                                    </option>
                                                    <option value="EE">
                                                        Estonia
                                                    </option>
                                                    <option value="ET">
                                                        Ethiopia
                                                    </option>
                                                    <option value="FK">
                                                        Falkland Islands (Malvinas)
                                                    </option>
                                                    <option value="FO">
                                                        Faroe Islands
                                                    </option>
                                                    <option value="FJ">
                                                        Fiji
                                                    </option>
                                                    <option value="FI">
                                                        Finland
                                                    </option>
                                                    <option value="FR">
                                                        France
                                                    </option>
                                                    <option value="GF">
                                                        French Guiana
                                                    </option>
                                                    <option value="PF">
                                                        French Polynesia
                                                    </option>
                                                    <option value="TF">
                                                        French Southern Territories
                                                    </option>
                                                    <option value="GA">
                                                        Gabon
                                                    </option>
                                                    <option value="GM">
                                                        Gambia
                                                    </option>
                                                    <option value="GE">
                                                        Georgia
                                                    </option>
                                                    <option value="DE">
                                                        Germany
                                                    </option>
                                                    <option value="GH">
                                                        Ghana
                                                    </option>
                                                    <option value="GI">
                                                        Gibraltar
                                                    </option>
                                                    <option value="GR">
                                                        Greece
                                                    </option>
                                                    <option value="GL">
                                                        Greenland
                                                    </option>
                                                    <option value="GD">
                                                        Grenada
                                                    </option>
                                                    <option value="GP">
                                                        Guadeloupe
                                                    </option>
                                                    <option value="GU">
                                                        Guam
                                                    </option>
                                                    <option value="GT">
                                                        Guatemala
                                                    </option>
                                                    <option value="GG">
                                                        Guernsey
                                                    </option>
                                                    <option value="GN">
                                                        Guinea
                                                    </option>
                                                    <option value="GW">
                                                        Guinea-Bissau
                                                    </option>
                                                    <option value="GY">
                                                        Guyana
                                                    </option>
                                                    <option value="HT">
                                                        Haiti
                                                    </option>
                                                    <option value="HM">
                                                        Heard Island &amp; Mcdonald Islands
                                                    </option>
                                                    <option value="VA">
                                                        Holy See (Vatican City State)
                                                    </option>
                                                    <option value="HN">
                                                        Honduras
                                                    </option>
                                                    <option value="HK">
                                                        Hong Kong
                                                    </option>
                                                    <option value="HU">
                                                        Hungary
                                                    </option>
                                                    <option value="IS">
                                                        Iceland
                                                    </option>
                                                    <option value="IN" selected="selected">
                                                        India
                                                    </option>
                                                    <option value="ID">
                                                        Indonesia
                                                    </option>
                                                    <option value="IR">
                                                        Iran, Islamic Republic Of
                                                    </option>
                                                    <option value="IQ">
                                                        Iraq
                                                    </option>
                                                    <option value="IE">
                                                        Ireland
                                                    </option>
                                                    <option value="IM">
                                                        Isle Of Man
                                                    </option>
                                                    <option value="IL">
                                                        Israel
                                                    </option>
                                                    <option value="IT">
                                                        Italy
                                                    </option>
                                                    <option value="JM">
                                                        Jamaica
                                                    </option>
                                                    <option value="JP">
                                                        Japan
                                                    </option>
                                                    <option value="JE">
                                                        Jersey
                                                    </option>
                                                    <option value="JO">
                                                        Jordan
                                                    </option>
                                                    <option value="KZ">
                                                        Kazakhstan
                                                    </option>
                                                    <option value="KE">
                                                        Kenya
                                                    </option>
                                                    <option value="KI">
                                                        Kiribati
                                                    </option>
                                                    <option value="KR">
                                                        Korea
                                                    </option>
                                                    <option value="XK">
                                                        Kosovo
                                                    </option>
                                                    <option value="KW">
                                                        Kuwait
                                                    </option>
                                                    <option value="KG">
                                                        Kyrgyzstan
                                                    </option>
                                                    <option value="LA">
                                                        Lao People's Democratic Republic
                                                    </option>
                                                    <option value="LV">
                                                        Latvia
                                                    </option>
                                                    <option value="LB">
                                                        Lebanon
                                                    </option>
                                                    <option value="LS">
                                                        Lesotho
                                                    </option>
                                                    <option value="LR">
                                                        Liberia
                                                    </option>
                                                    <option value="LY">
                                                        Libyan Arab Jamahiriya
                                                    </option>
                                                    <option value="LI">
                                                        Liechtenstein
                                                    </option>
                                                    <option value="LT">
                                                        Lithuania
                                                    </option>
                                                    <option value="LU">
                                                        Luxembourg
                                                    </option>
                                                    <option value="MO">
                                                        Macao
                                                    </option>
                                                    <option value="MK">
                                                        Macedonia
                                                    </option>
                                                    <option value="MG">
                                                        Madagascar
                                                    </option>
                                                    <option value="MW">
                                                        Malawi
                                                    </option>
                                                    <option value="MY">
                                                        Malaysia
                                                    </option>
                                                    <option value="MV">
                                                        Maldives
                                                    </option>
                                                    <option value="ML">
                                                        Mali
                                                    </option>
                                                    <option value="MT">
                                                        Malta
                                                    </option>
                                                    <option value="MH">
                                                        Marshall Islands
                                                    </option>
                                                    <option value="MQ">
                                                        Martinique
                                                    </option>
                                                    <option value="MR">
                                                        Mauritania
                                                    </option>
                                                    <option value="MU">
                                                        Mauritius
                                                    </option>
                                                    <option value="YT">
                                                        Mayotte
                                                    </option>
                                                    <option value="MX">
                                                        Mexico
                                                    </option>
                                                    <option value="FM">
                                                        Micronesia, Federated States Of
                                                    </option>
                                                    <option value="MD">
                                                        Moldova
                                                    </option>
                                                    <option value="MC">
                                                        Monaco
                                                    </option>
                                                    <option value="MN">
                                                        Mongolia
                                                    </option>
                                                    <option value="ME">
                                                        Montenegro
                                                    </option>
                                                    <option value="MS">
                                                        Montserrat
                                                    </option>
                                                    <option value="MA">
                                                        Morocco
                                                    </option>
                                                    <option value="MZ">
                                                        Mozambique
                                                    </option>
                                                    <option value="MM">
                                                        Myanmar
                                                    </option>
                                                    <option value="NA">
                                                        Namibia
                                                    </option>
                                                    <option value="NR">
                                                        Nauru
                                                    </option>
                                                    <option value="NP">
                                                        Nepal
                                                    </option>
                                                    <option value="NL">
                                                        Netherlands
                                                    </option>
                                                    <option value="AN">
                                                        Netherlands Antilles
                                                    </option>
                                                    <option value="NC">
                                                        New Caledonia
                                                    </option>
                                                    <option value="NZ">
                                                        New Zealand
                                                    </option>
                                                    <option value="NI">
                                                        Nicaragua
                                                    </option>
                                                    <option value="NE">
                                                        Niger
                                                    </option>
                                                    <option value="NG">
                                                        Nigeria
                                                    </option>
                                                    <option value="NU">
                                                        Niue
                                                    </option>
                                                    <option value="NF">
                                                        Norfolk Island
                                                    </option>
                                                    <option value="MP">
                                                        Northern Mariana Islands
                                                    </option>
                                                    <option value="NO">
                                                        Norway
                                                    </option>
                                                    <option value="OM">
                                                        Oman
                                                    </option>
                                                    <option value="PK">
                                                        Pakistan
                                                    </option>
                                                    <option value="PW">
                                                        Palau
                                                    </option>
                                                    <option value="PS">
                                                        Palestine, State of
                                                    </option>
                                                    <option value="PA">
                                                        Panama
                                                    </option>
                                                    <option value="PG">
                                                        Papua New Guinea
                                                    </option>
                                                    <option value="PY">
                                                        Paraguay
                                                    </option>
                                                    <option value="PE">
                                                        Peru
                                                    </option>
                                                    <option value="PH">
                                                        Philippines
                                                    </option>
                                                    <option value="PN">
                                                        Pitcairn
                                                    </option>
                                                    <option value="PL">
                                                        Poland
                                                    </option>
                                                    <option value="PT">
                                                        Portugal
                                                    </option>
                                                    <option value="PR">
                                                        Puerto Rico
                                                    </option>
                                                    <option value="QA">
                                                        Qatar
                                                    </option>
                                                    <option value="RE">
                                                        Reunion
                                                    </option>
                                                    <option value="RO">
                                                        Romania
                                                    </option>
                                                    <option value="RU">
                                                        Russian Federation
                                                    </option>
                                                    <option value="RW">
                                                        Rwanda
                                                    </option>
                                                    <option value="BL">
                                                        Saint Barthelemy
                                                    </option>
                                                    <option value="SH">
                                                        Saint Helena
                                                    </option>
                                                    <option value="KN">
                                                        Saint Kitts And Nevis
                                                    </option>
                                                    <option value="LC">
                                                        Saint Lucia
                                                    </option>
                                                    <option value="MF">
                                                        Saint Martin
                                                    </option>
                                                    <option value="PM">
                                                        Saint Pierre And Miquelon
                                                    </option>
                                                    <option value="VC">
                                                        Saint Vincent And Grenadines
                                                    </option>
                                                    <option value="WS">
                                                        Samoa
                                                    </option>
                                                    <option value="SM">
                                                        San Marino
                                                    </option>
                                                    <option value="ST">
                                                        Sao Tome And Principe
                                                    </option>
                                                    <option value="SA">
                                                        Saudi Arabia
                                                    </option>
                                                    <option value="SN">
                                                        Senegal
                                                    </option>
                                                    <option value="RS">
                                                        Serbia
                                                    </option>
                                                    <option value="SC">
                                                        Seychelles
                                                    </option>
                                                    <option value="SL">
                                                        Sierra Leone
                                                    </option>
                                                    <option value="SG">
                                                        Singapore
                                                    </option>
                                                    <option value="SK">
                                                        Slovakia
                                                    </option>
                                                    <option value="SI">
                                                        Slovenia
                                                    </option>
                                                    <option value="SB">
                                                        Solomon Islands
                                                    </option>
                                                    <option value="SO">
                                                        Somalia
                                                    </option>
                                                    <option value="ZA">
                                                        South Africa
                                                    </option>
                                                    <option value="GS">
                                                        South Georgia And Sandwich Isl.
                                                    </option>
                                                    <option value="ES">
                                                        Spain
                                                    </option>
                                                    <option value="LK">
                                                        Sri Lanka
                                                    </option>
                                                    <option value="SD">
                                                        Sudan
                                                    </option>
                                                    <option value="SS">
                                                        South Sudan
                                                    </option>
                                                    <option value="SR">
                                                        Suriname
                                                    </option>
                                                    <option value="SJ">
                                                        Svalbard And Jan Mayen
                                                    </option>
                                                    <option value="SZ">
                                                        Swaziland
                                                    </option>
                                                    <option value="SE">
                                                        Sweden
                                                    </option>
                                                    <option value="CH">
                                                        Switzerland
                                                    </option>
                                                    <option value="SY">
                                                        Syrian Arab Republic
                                                    </option>
                                                    <option value="TW">
                                                        Taiwan
                                                    </option>
                                                    <option value="TJ">
                                                        Tajikistan
                                                    </option>
                                                    <option value="TZ">
                                                        Tanzania
                                                    </option>
                                                    <option value="TH">
                                                        Thailand
                                                    </option>
                                                    <option value="TL">
                                                        Timor-Leste
                                                    </option>
                                                    <option value="TG">
                                                        Togo
                                                    </option>
                                                    <option value="TK">
                                                        Tokelau
                                                    </option>
                                                    <option value="TO">
                                                        Tonga
                                                    </option>
                                                    <option value="TT">
                                                        Trinidad And Tobago
                                                    </option>
                                                    <option value="TN">
                                                        Tunisia
                                                    </option>
                                                    <option value="TR">
                                                        Turkey
                                                    </option>
                                                    <option value="TM">
                                                        Turkmenistan
                                                    </option>
                                                    <option value="TC">
                                                        Turks And Caicos Islands
                                                    </option>
                                                    <option value="TV">
                                                        Tuvalu
                                                    </option>
                                                    <option value="UG">
                                                        Uganda
                                                    </option>
                                                    <option value="UA">
                                                        Ukraine
                                                    </option>
                                                    <option value="AE">
                                                        United Arab Emirates
                                                    </option>
                                                    <option value="GB">
                                                        United Kingdom
                                                    </option>
                                                    <option value="US">
                                                        United States
                                                    </option>
                                                    <option value="UM">
                                                        United States Outlying Islands
                                                    </option>
                                                    <option value="UY">
                                                        Uruguay
                                                    </option>
                                                    <option value="UZ">
                                                        Uzbekistan
                                                    </option>
                                                    <option value="VU">
                                                        Vanuatu
                                                    </option>
                                                    <option value="VE">
                                                        Venezuela
                                                    </option>
                                                    <option value="VN">
                                                        Viet Nam
                                                    </option>
                                                    <option value="VG">
                                                        Virgin Islands, British
                                                    </option>
                                                    <option value="VI">
                                                        Virgin Islands, U.S.
                                                    </option>
                                                    <option value="WF">
                                                        Wallis And Futuna
                                                    </option>
                                                    <option value="EH">
                                                        Western Sahara
                                                    </option>
                                                    <option value="YE">
                                                        Yemen
                                                    </option>
                                                    <option value="ZM">
                                                        Zambia
                                                    </option>
                                                    <option value="ZW">
                                                        Zimbabwe
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-3 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Tax ID (Optional)</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Tax ID" />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">GSTIN</label>
                                            <div className="relative flex items-center">
                                                <input name="text" type="text" className="h-[45px] w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter GSTIN" />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Choose Currency</label>
                                            <div className="relative flex items-center">
                                                <select id="inputCurrency" name="currency" className="h-[45px] px-[6px] w-full border-b border-b-[#ddd] focus:outline-none">
                                                    <option value="1" selected>INR</option>
                                                    <option value="4">USD</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:mb-[30px] max-md:mb-[20px]'>
                                        <div>
                                            <h4 className="text-[18px] block mb-[5px]">Join our mailing list</h4>
                                            <p className='text-[15px]'>We would like to send you occasional news, information and special offers by email. Choose below whether you want to join our mailing list. You can unsubscribe at any time.</p>
                                        </div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">No</span>
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A51A]"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</span>
                                        </label>
                                    </div>
                                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px]'>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Password*</label>
                                            <div className="relative flex items-center">
                                                <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter password" />
                                                <img src={ImageIcons.pwdeyeiconopen} alt='Eye Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                            </div>
                                        </div>
                                        <div className='md:mb-[30px] max-md:mb-[20px]'>
                                            <label className="text-gray-800 block mb-[5px]">Confirm Password*</label>
                                            <div className="relative flex items-center">
                                                <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#00A51A] px-2 py-3 outline-none" placeholder="Enter Confirm Password" />
                                                <img src={ImageIcons.pwdeyeiconopen} alt='Eye Icon' className='w-[18px] h-[18px] absolute right-2 cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] mb-[30px]">
                                        <button type="button" className="w-full block max-w-[220px] mx-auto shadow-xl py-3 px-4 rounded-md text-white bg-[#00A51A] hover:bg-[#00A51A]/[85%] focus:outline-none">
                                            Create an account
                                        </button>
                                    </div>
                                    <div className="mb-[10px]">
                                        <p className="text-center text-sm text-gray-800 mb-0">Already have an account? <Link to="/login" className="text-[#00A51A] font-semibold hover:underline ml-1 whitespace-nowrap">Login here</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export default Register
