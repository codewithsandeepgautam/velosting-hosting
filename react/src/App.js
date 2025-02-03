import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import LinuxHosting from './pages/LinuxHosting';
import MumbaiDataCenter from './pages/MumbaiDataCenter';
import DomainRegistration from './pages/DomainRegistration';
import WindowsHosting from './pages/WindowsHosting';
import CloudDedicatedServers from './pages/CloudDedicatedServers';
import VirtualPrivateServer from './pages/VirtualPrivateServer';
import BareMetalDedicatedServer from './pages/BareMetalDedicatedServer';
import GpuServers from './pages/GpuServers';
import WebAppDevelopment from './pages/WebAppDevelopment';
import MohaliDataCenter from './pages/MohaliDataCenter';
import AmbalaDataCenter from './pages/AmbalaDataCenter';
import NoidaDataCenter from './pages/NoidaDataCenter';
import BathindaEdgeDataCenter from './pages/BathindaEdgeDataCenter';
import KarnalDataCenter from './pages/KarnalDataCenter';
import YamunaNagarDataCenter from './pages/YamunaNagarDataCenter';
import MogaDataCenter from './pages/MogaDataCenter';
import BarnalaDataCenter from './pages/BarnalaDataCenter';
import DigitalMarketingSeo from './pages/DigitalMarketingSeo';
import ColocationServices from './pages/ColocationServices';
import Affiliates from './pages/Affiliates';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SiteMap from './pages/SiteMap';
import AboutUs from './pages/AboutUs';
import BusinessEmail from './pages/BusinessEmail';
import DedciatedServer from './pages/DedciatedServer';
import SslCertification from './pages/SslCertification';
import CloudServer from './pages/CloudServer';
import CloudStorage from './pages/CloudStorage';
import CloudCamera from './pages/CloudCamera';
import CloudPc from './pages/CloudPc';
import TallyOnCloud from './pages/TallyOnCloud';
import CloudBackup from './pages/CloudBackup';
import GamingPc from './pages/GamingPc';
import ErpSap from './pages/ErpSap';
import DisasterRecovery from './pages/DisasterRecovery';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import CdnAndDdosProtection from './pages/CdnAndDdosProtection';
import RemoteManageService from './pages/RemoteManageService';
import DockerKubernetes from './pages/DockerKubernetes';
import LoadBalancer from './pages/LoadBalancer';
import FileStorage from './pages/FileStorage';
import Faqs from './pages/Faqs';
import RefundPolicy from './pages/RefundPolicy';
import CareersWithUs from './pages/CareersWithUs';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResellerProgram from './pages/ResellerProgram';
import StartupProgram from './pages/StartupProgram';
// import LandingPage from './pages/LandingPage';
import NextCloud from './pages/NextCloud';
import GetVpsServer from './pages/GetVpsServer';
import GetCloudDedicatedServer from './pages/GetCloudDedicatedServer';
import GetGpuServer from './pages/GetGpuServer';
import OnlineBusinessSolutionsPackage from './pages/OnlineBusinessSolutionsPackage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linux-hosting" element={<LinuxHosting />} />
        <Route path="/mumbai-data-center" element={<MumbaiDataCenter />} />
        <Route path="/mohali-data-center" element={<MohaliDataCenter />} />
        <Route path="/ambala-data-center" element={<AmbalaDataCenter />} />
        <Route path="/noida-data-center" element={<NoidaDataCenter />} />
        <Route path="/bathinda-data-center" element={<BathindaEdgeDataCenter />} />
        <Route path="/karnal-data-center" element={<KarnalDataCenter />} />
        <Route path="/yamuna-nagar-data-center" element={<YamunaNagarDataCenter />} />
        <Route path="/moga-data-center" element={<MogaDataCenter />} />
        <Route path="/barnala-data-center" element={<BarnalaDataCenter />} />
        <Route path="/domain-registration" element={<DomainRegistration />} />
        <Route path="/windows-hosting" element={<WindowsHosting />} />
        <Route path="/cloud-dedicated-servers" element={<CloudDedicatedServers />} />
        <Route path="/virtual-private-server" element={<VirtualPrivateServer />} />
        <Route path="/bare-metal-dedicated-server" element={<BareMetalDedicatedServer />} />
        <Route path="/gpu-servers" element={<GpuServers />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/digital-marketing-seo" element={<DigitalMarketingSeo />} />
        <Route path="/colocation-services" element={<ColocationServices />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/business-email" element={<BusinessEmail />} />
        <Route path="/dedciated-server" element={<DedciatedServer />} />
        <Route path="/ssl-certification" element={<SslCertification />} />
        <Route path="/cloud-server" element={<CloudServer />} />
        <Route path="/cloud-storage" element={<CloudStorage />} />
        <Route path="/cloud-camera" element={<CloudCamera />} />
        <Route path="/cloud-pc" element={<CloudPc />} />
        <Route path="/tally-on-cloud" element={<TallyOnCloud />} />
        <Route path="/cloud-backup" element={<CloudBackup />} />
        <Route path="/gaming-pc" element={<GamingPc />} />
        <Route path="/erp-and-sap" element={<ErpSap />} />
        <Route path="/disaster-recovery" element={<DisasterRecovery />} />
        <Route path="/application-development" element={<ApplicationDevelopment />} />
        <Route path="/cdn-and-ddos-protection" element={<CdnAndDdosProtection />} />
        <Route path="/load-balancer" element={<LoadBalancer />} />
        <Route path="/docker-and-kubernetes" element={<DockerKubernetes />} />
        <Route path="/remote-manage-service" element={<RemoteManageService />} />
        <Route path="/file-storage" element={<FileStorage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/careers-with-us" element={<CareersWithUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reseller-program" element={<ResellerProgram />} />
        <Route path="/startup-program" element={<StartupProgram />} />
        <Route path="/next-cloud" element={<NextCloud />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Below pages not Linked anywhere */}
        <Route path="/online-business-solutions-package" element={<OnlineBusinessSolutionsPackage />} />
        <Route path="/get-vps-server" element={<GetVpsServer />} />
        <Route path="/get-cloud-dedicated-server" element={<GetCloudDedicatedServer />} />
        <Route path="/get-gpu-server" element={<GetGpuServer />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
