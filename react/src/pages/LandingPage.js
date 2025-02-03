import React from 'react'
import Layout from '../components/shared/Layout'
import ImageIcons from '../components/imageComponent/ImageIcons';
import landingbanner from '../assets/images/landing-banner.png'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6"

import { IoSearch } from "react-icons/io5";

const LandingPage = () => {

    return (
        <Layout>
            <section className='relative md:py-[70px] max-md:pt-[50px] max-md:pb-0 bg-[#E5F6EB]'>
                <div className='lg:container mx-auto px-4 relative z-10'>
                    <div className="max-w-[1190px] mx-auto mb-[40px]">
                        <form>
                            <div className="w-full relative flex">
                                <input type="search" id="default-search" className="block w-full md:py-[20px] max-md:py-[15px] md:text-[16px] max-md:text-[15px] text-[#646773] md:ps-[26px] max-md:ps-[15px] md:pe-[280px] max-md:pe-[133px] rounded-full shadow-[0px_0px_3px_0px_#0000002B] border border-[#D9D9D9] focus:outline-none bg-[#fff]" placeholder="Search a Domain" required />
                                <select id="countries" className="inline-block md:max-w-[110px] max-md:max-w-[80px] text-[#646773] md:text-[16px] max-md:text-[15px] bg-transparent py-[5px] md:px-[15px] max-md:px-[7px] focus:outline-none absolute md:right-[160px] max-md:right-[55px] top-[50%] -translate-y-[50%] border-s-[2px] border-[#EEEEEE]">
                                    <option value=".com">.com</option>
                                    <option value=".in">.in</option>
                                    <option value=".biz">.biz</option>
                                    <option value=".blog">.blog</option>
                                    <option value=".ca">.ca</option>
                                    <option value=".club">.club</option>
                                    <option value=".cn">.cn</option>
                                    <option value=".co.uk">.co.uk</option>
                                    <option value=".de">.de</option>
                                    <option value=".eu">.eu</option>
                                    <option value=".icu">.icu</option>
                                    <option value=".info">.info</option>
                                    <option value=".io">.io</option>
                                    <option value=".me">.me</option>
                                    <option value=".mobi">.mobi</option>
                                    <option value=".net">.net</option>
                                    <option value=".nl">.nl</option>
                                    <option value=".online">.online</option>
                                    <option value=".org">.org</option>
                                    <option value=".ru">.ru</option>
                                    <option value=".site">.site</option>
                                    <option value=".top">.top</option>
                                    <option value=".uk">.uk</option>
                                    <option value=".us">.us</option>
                                    <option value=".vip">.vip</option>
                                    <option value=".xyz">.xyz</option>
                                    <option value=".actor">.actor</option>
                                    <option value=".art">.art</option>
                                    <option value=".audio">.audio</option>
                                    <option value=".band">.band</option>
                                    <option value=".events">.events</option>
                                    <option value=".gallery">.gallery</option>
                                    <option value=".hiphop">.hiphop</option>
                                    <option value=".news">.news</option>
                                    <option value=".photography">.photography</option>
                                    <option value=".photos">.photos</option>
                                    <option value=".pictures">.pictures</option>
                                    <option value=".show">.show</option>
                                    <option value=".theater">.theater</option>
                                    <option value=".theatre">.theatre</option>
                                    <option value=".video">.video</option>
                                    <option value=".agency">.agency</option>
                                    <option value=".associates">.associates</option>
                                    <option value=".business">.business</option>
                                    <option value=".career">.career</option>
                                    <option value=".careers">.careers</option>
                                    <option value=".center">.center</option>
                                    <option value=".co.com">.co.com</option>
                                    <option value=".company">.company</option>
                                    <option value=".enterprises">.enterprises</option>
                                    <option value=".farm">.farm</option>
                                    <option value=".foundation">.foundation</option>
                                    <option value=".gives">.gives</option>
                                    <option value=".gmbh">.gmbh</option>
                                    <option value=".industries">.industries</option>
                                    <option value=".limited">.limited</option>
                                    <option value=".ltd">.ltd</option>
                                    <option value=".management">.management</option>
                                    <option value=".marketing">.marketing</option>
                                    <option value=".ngo">.ngo</option>
                                    <option value=".ong">.ong</option>
                                    <option value=".partners">.partners</option>
                                    <option value=".press">.press</option>
                                    <option value=".pw">.pw</option>
                                    <option value=".sarl">.sarl</option>
                                    <option value=".solutions">.solutions</option>
                                    <option value=".srl">.srl</option>
                                    <option value=".studio">.studio</option>
                                    <option value=".trade">.trade</option>
                                    <option value=".trading">.trading</option>
                                    <option value=".amsterdam">.amsterdam</option>
                                    <option value=".bar">.bar</option>
                                    <option value=".berlin">.berlin</option>
                                    <option value=".capetown">.capetown</option>
                                    <option value=".city">.city</option>
                                    <option value=".country">.country</option>
                                    <option value=".cymru">.cymru</option>
                                    <option value=".desi">.desi</option>
                                    <option value=".durban">.durban</option>
                                    <option value=".earth">.earth</option>
                                    <option value=".global">.global</option>
                                    <option value=".international">.international</option>
                                    <option value=".joburg">.joburg</option>
                                    <option value=".kiwi">.kiwi</option>
                                    <option value=".london">.london</option>
                                    <option value=".miami">.miami</option>
                                    <option value=".nagoya">.nagoya</option>
                                    <option value=".nyc">.nyc</option>
                                    <option value=".place">.place</option>
                                    <option value=".quebec">.quebec</option>
                                    <option value=".scot">.scot</option>
                                    <option value=".tokyo">.tokyo</option>
                                    <option value=".town">.town</option>
                                    <option value=".vegas">.vegas</option>
                                    <option value=".wales">.wales</option>
                                    <option value=".world">.world</option>
                                    <option value=".coach">.coach</option>
                                    <option value=".cricket">.cricket</option>
                                    <option value=".fans">.fans</option>
                                    <option value=".football">.football</option>
                                    <option value=".futbol">.futbol</option>
                                    <option value=".golf">.golf</option>
                                    <option value=".hockey">.hockey</option>
                                    <option value=".racing">.racing</option>
                                    <option value=".rodeo">.rodeo</option>
                                    <option value=".run">.run</option>
                                    <option value=".ski">.ski</option>
                                    <option value=".soccer">.soccer</option>
                                    <option value=".team">.team</option>
                                    <option value=".tennis">.tennis</option>
                                    <option value=".yoga">.yoga</option>
                                    <option value=".app">.app</option>
                                    <option value=".chat">.chat</option>
                                    <option value=".click">.click</option>
                                    <option value=".cloud">.cloud</option>
                                    <option value=".codes">.codes</option>
                                    <option value=".computer">.computer</option>
                                    <option value=".digital">.digital</option>
                                    <option value=".domains">.domains</option>
                                    <option value=".download">.download</option>
                                    <option value=".email">.email</option>
                                    <option value=".graphics">.graphics</option>
                                    <option value=".host">.host</option>
                                    <option value=".hosting">.hosting</option>
                                    <option value=".media">.media</option>
                                    <option value=".network">.network</option>
                                    <option value=".software">.software</option>
                                    <option value=".systems">.systems</option>
                                    <option value=".tech">.tech</option>
                                    <option value=".technology">.technology</option>
                                    <option value=".tube">.tube</option>
                                    <option value=".viajes">.viajes</option>
                                    <option value=".webcam">.webcam</option>
                                    <option value=".website">.website</option>
                                    <option value=".accountant">.accountant</option>
                                    <option value=".accountants">.accountants</option>
                                    <option value=".capital">.capital</option>
                                    <option value=".cash">.cash</option>
                                    <option value=".credit">.credit</option>
                                    <option value=".creditcard">.creditcard</option>
                                    <option value=".estate">.estate</option>
                                    <option value=".exchange">.exchange</option>
                                    <option value=".finance">.finance</option>
                                    <option value=".financial">.financial</option>
                                    <option value=".fund">.fund</option>
                                    <option value=".gold">.gold</option>
                                    <option value=".investments">.investments</option>
                                    <option value=".loan">.loan</option>
                                    <option value=".loans">.loans</option>
                                    <option value=".money">.money</option>
                                    <option value=".mortgage">.mortgage</option>
                                    <option value=".tax">.tax</option>
                                    <option value=".academy">.academy</option>
                                    <option value=".college">.college</option>
                                    <option value=".courses">.courses</option>
                                    <option value=".degree">.degree</option>
                                    <option value=".education">.education</option>
                                    <option value=".mba">.mba</option>
                                    <option value=".school">.school</option>
                                    <option value=".schule">.schule</option>
                                    <option value=".science">.science</option>
                                    <option value=".shiksha">.shiksha</option>
                                    <option value=".study">.study</option>
                                    <option value=".university">.university</option>
                                    <option value=".beer">.beer</option>
                                    <option value=".cafe">.cafe</option>
                                    <option value=".catering">.catering</option>
                                    <option value=".coffee">.coffee</option>
                                    <option value=".cooking">.cooking</option>
                                    <option value=".kitchen">.kitchen</option>
                                    <option value=".pizza">.pizza</option>
                                    <option value=".pub">.pub</option>
                                    <option value=".recipes">.recipes</option>
                                    <option value=".rest">.rest</option>
                                    <option value=".restaurant">.restaurant</option>
                                    <option value=".vodka">.vodka</option>
                                    <option value=".wine">.wine</option>
                                    <option value=".bet">.bet</option>
                                    <option value=".bid">.bid</option>
                                    <option value=".bingo">.bingo</option>
                                    <option value=".camp">.camp</option>
                                    <option value=".casino">.casino</option>
                                    <option value=".cruises">.cruises</option>
                                    <option value=".dance">.dance</option>
                                    <option value=".fish">.fish</option>
                                    <option value=".fishing">.fishing</option>
                                    <option value=".flights">.flights</option>
                                    <option value=".game">.game</option>
                                    <option value=".games">.games</option>
                                    <option value=".holiday">.holiday</option>
                                    <option value=".horse">.horse</option>
                                    <option value=".lotto">.lotto</option>
                                    <option value=".ninja">.ninja</option>
                                    <option value=".party">.party</option>
                                    <option value=".poker">.poker</option>
                                    <option value=".reisen">.reisen</option>
                                    <option value=".social">.social</option>
                                    <option value=".surf">.surf</option>
                                    <option value=".tours">.tours</option>
                                    <option value=".vacations">.vacations</option>
                                    <option value=".voyage">.voyage</option>
                                    <option value=".auction">.auction</option>
                                    <option value=".auto">.auto</option>
                                    <option value=".bargains">.bargains</option>
                                    <option value=".bike">.bike</option>
                                    <option value=".blackfriday">.blackfriday</option>
                                    <option value=".boutique">.boutique</option>
                                    <option value=".build">.build</option>
                                    <option value=".cars">.cars</option>
                                    <option value=".cheap">.cheap</option>
                                    <option value=".clothing">.clothing</option>
                                    <option value=".coupons">.coupons</option>
                                    <option value=".deals">.deals</option>
                                    <option value=".diamonds">.diamonds</option>
                                    <option value=".discount">.discount</option>
                                    <option value=".equipment">.equipment</option>
                                    <option value=".fashion">.fashion</option>
                                    <option value=".forsale">.forsale</option>
                                    <option value=".furniture">.furniture</option>
                                    <option value=".gifts">.gifts</option>
                                    <option value=".guru">.guru</option>
                                    <option value=".holdings">.holdings</option>
                                    <option value=".jewelry">.jewelry</option>
                                    <option value=".kaufen">.kaufen</option>
                                    <option value=".lighting">.lighting</option>
                                    <option value=".luxury">.luxury</option>
                                    <option value=".market">.market</option>
                                    <option value=".markets">.markets</option>
                                    <option value=".menu">.menu</option>
                                    <option value=".moda">.moda</option>
                                    <option value=".parts">.parts</option>
                                    <option value=".plumbing">.plumbing</option>
                                    <option value=".promo">.promo</option>
                                    <option value=".sale">.sale</option>
                                    <option value=".shoes">.shoes</option>
                                    <option value=".shop">.shop</option>
                                    <option value=".shopping">.shopping</option>
                                    <option value=".singles">.singles</option>
                                    <option value=".store">.store</option>
                                    <option value=".supplies">.supplies</option>
                                    <option value=".supply">.supply</option>
                                    <option value=".tienda">.tienda</option>
                                    <option value=".tires">.tires</option>
                                    <option value=".tools">.tools</option>
                                    <option value=".toys">.toys</option>
                                    <option value=".ventures">.ventures</option>
                                    <option value=".watch">.watch</option>
                                    <option value=".apartments">.apartments</option>
                                    <option value=".builders">.builders</option>
                                    <option value=".casa">.casa</option>
                                    <option value=".condos">.condos</option>
                                    <option value=".haus">.haus</option>
                                    <option value=".homes">.homes</option>
                                    <option value=".house">.house</option>
                                    <option value=".immo">.immo</option>
                                    <option value=".immobilien">.immobilien</option>
                                    <option value=".land">.land</option>
                                    <option value=".lease">.lease</option>
                                    <option value=".maison">.maison</option>
                                    <option value=".properties">.properties</option>
                                    <option value=".property">.property</option>
                                    <option value=".rent">.rent</option>
                                    <option value=".villas">.villas</option>
                                    <option value=".best">.best</option>
                                    <option value=".black">.black</option>
                                    <option value=".blue">.blue</option>
                                    <option value=".cool">.cool</option>
                                    <option value=".fail">.fail</option>
                                    <option value=".feedback">.feedback</option>
                                    <option value=".fun">.fun</option>
                                    <option value=".fyi">.fyi</option>
                                    <option value=".gratis">.gratis</option>
                                    <option value=".gripe">.gripe</option>
                                    <option value=".how">.how</option>
                                    <option value=".kim">.kim</option>
                                    <option value=".lol">.lol</option>
                                    <option value=".men">.men</option>
                                    <option value=".one">.one</option>
                                    <option value=".ooo">.ooo</option>
                                    <option value=".pink">.pink</option>
                                    <option value=".plus">.plus</option>
                                    <option value=".red">.red</option>
                                    <option value=".rip">.rip</option>
                                    <option value=".rocks">.rocks</option>
                                    <option value=".today">.today</option>
                                    <option value=".win">.win</option>
                                    <option value=".wtf">.wtf</option>
                                    <option value=".zone">.zone</option>
                                    <option value=".5g.in">.5g.in</option>
                                    <option value=".6g.in">.6g.in</option>
                                    <option value=".aaa.pro">.aaa.pro</option>
                                    <option value=".aca.pro">.aca.pro</option>
                                    <option value=".acct.pro">.acct.pro</option>
                                    <option value=".adult">.adult</option>
                                    <option value=".adv.br">.adv.br</option>
                                    <option value=".ae.org">.ae.org</option>
                                    <option value=".ai.in">.ai.in</option>
                                    <option value=".airforce">.airforce</option>
                                    <option value=".am.in">.am.in</option>
                                    <option value=".archi">.archi</option>
                                    <option value=".army">.army</option>
                                    <option value=".arq.br">.arq.br</option>
                                    <option value=".art.br">.art.br</option>
                                    <option value=".asia">.asia</option>
                                    <option value=".attorney">.attorney</option>
                                    <option value=".au">.au</option>
                                    <option value=".avocat.pro">.avocat.pro</option>
                                    <option value=".bar.pro">.bar.pro</option>
                                    <option value=".bihar.in">.bihar.in</option>
                                    <option value=".bio">.bio</option>
                                    <option value=".biz.in">.biz.in</option>
                                    <option value=".blog.br">.blog.br</option>
                                    <option value=".br.com">.br.com</option>
                                    <option value=".business.in">.business.in</option>
                                    <option value=".buzz">.buzz</option>
                                    <option value=".bz">.bz</option>
                                    <option value=".ca.in">.ca.in</option>
                                    <option value=".cab">.cab</option>
                                    <option value=".cam">.cam</option>
                                    <option value=".camera">.camera</option>
                                    <option value=".car">.car</option>
                                    <option value=".cards">.cards</option>
                                    <option value=".care">.care</option>
                                    <option value=".cc">.cc</option>
                                    <option value=".christmas">.christmas</option>
                                    <option value=".church">.church</option>
                                    <option value=".cl">.cl</option>
                                    <option value=".claims">.claims</option>
                                    <option value=".cleaning">.cleaning</option>
                                    <option value=".clinic">.clinic</option>
                                    <option value=".cn.com">.cn.com</option>
                                    <option value=".cn.in">.cn.in</option>
                                    <option value=".co">.co</option>
                                    <option value=".co.de">.co.de</option>
                                    <option value=".co.in">.co.in</option>
                                    <option value=".co.nz">.co.nz</option>
                                    <option value=".co.za">.co.za</option>
                                    <option value=".com.au">.com.au</option>
                                    <option value=".com.br">.com.br</option>
                                    <option value=".com.cn">.com.cn</option>
                                    <option value=".com.co">.com.co</option>
                                    <option value=".com.de">.com.de</option>
                                    <option value=".com.ec">.com.ec</option>
                                    <option value=".com.in">.com.in</option>
                                    <option value=".com.mx">.com.mx</option>
                                    <option value=".com.ru">.com.ru</option>
                                    <option value=".com.sc">.com.sc</option>
                                    <option value=".community">.community</option>
                                    <option value=".construction">.construction</option>
                                    <option value=".consulting">.consulting</option>
                                    <option value=".contractors">.contractors</option>
                                    <option value=".coop.in">.coop.in</option>
                                    <option value=".cpa.pro">.cpa.pro</option>
                                    <option value=".cs.in">.cs.in</option>
                                    <option value=".date">.date</option>
                                    <option value=".dating">.dating</option>
                                    <option value=".de.com">.de.com</option>
                                    <option value=".delhi.in">.delhi.in</option>
                                    <option value=".delivery">.delivery</option>
                                    <option value=".democrat">.democrat</option>
                                    <option value=".dental">.dental</option>
                                    <option value=".dentist">.dentist</option>
                                    <option value=".design">.design</option>
                                    <option value=".dev">.dev</option>
                                    <option value=".diet">.diet</option>
                                    <option value=".direct">.direct</option>
                                    <option value=".directory">.directory</option>
                                    <option value=".doctor">.doctor</option>
                                    <option value=".dog">.dog</option>
                                    <option value=".dr.in">.dr.in</option>
                                    <option value=".ec">.ec</option>
                                    <option value=".eco">.eco</option>
                                    <option value=".eco.br">.eco.br</option>
                                    <option value=".energy">.energy</option>
                                    <option value=".eng.br">.eng.br</option>
                                    <option value=".eng.pro">.eng.pro</option>
                                    <option value=".engineer">.engineer</option>
                                    <option value=".engineering">.engineering</option>
                                    <option value=".er.in">.er.in</option>
                                    <option value=".es">.es</option>
                                    <option value=".eu.com">.eu.com</option>
                                    <option value=".expert">.expert</option>
                                    <option value=".exposed">.exposed</option>
                                    <option value=".express">.express</option>
                                    <option value=".faith">.faith</option>
                                    <option value=".family">.family</option>
                                    <option value=".fin.ec">.fin.ec</option>
                                    <option value=".firm.in">.firm.in</option>
                                    <option value=".fit">.fit</option>
                                    <option value=".fitness">.fitness</option>
                                    <option value=".florist">.florist</option>
                                    <option value=".flowers">.flowers</option>
                                    <option value=".fm">.fm</option>
                                    <option value=".fr">.fr</option>
                                    <option value=".garden">.garden</option>
                                    <option value=".gb.net">.gb.net</option>
                                    <option value=".gdn">.gdn</option>
                                    <option value=".gen.in">.gen.in</option>
                                    <option value=".gift">.gift</option>
                                    <option value=".glass">.glass</option>
                                    <option value=".gr.com">.gr.com</option>
                                    <option value=".green">.green</option>
                                    <option value=".group">.group</option>
                                    <option value=".guide">.guide</option>
                                    <option value=".guitars">.guitars</option>
                                    <option value=".gujarat.in">.gujarat.in</option>
                                    <option value=".health">.health</option>
                                    <option value=".healthcare">.healthcare</option>
                                    <option value=".help">.help</option>
                                    <option value=".hospital">.hospital</option>
                                    <option value=".hu.com">.hu.com</option>
                                    <option value=".id">.id</option>
                                    <option value=".in.net">.in.net</option>
                                    <option value=".ind.br">.ind.br</option>
                                    <option value=".ind.in">.ind.in</option>
                                    <option value=".info.ec">.info.ec</option>
                                    <option value=".info.in">.info.in</option>
                                    <option value=".ink">.ink</option>
                                    <option value=".institute">.institute</option>
                                    <option value=".insure">.insure</option>
                                    <option value=".int.in">.int.in</option>
                                    <option value=".internet.in">.internet.in</option>
                                    <option value=".io.in">.io.in</option>
                                    <option value=".irish">.irish</option>
                                    <option value=".jetzt">.jetzt</option>
                                    <option value=".jobs">.jobs</option>
                                    <option value=".jpn.com">.jpn.com</option>
                                    <option value=".juegos">.juegos</option>
                                    <option value=".jur.pro">.jur.pro</option>
                                    <option value=".la">.la</option>
                                    <option value=".lat">.lat</option>
                                    <option value=".law">.law</option>
                                    <option value=".law.pro">.law.pro</option>
                                    <option value=".lawyer">.lawyer</option>
                                    <option value=".legal">.legal</option>
                                    <option value=".lgbt">.lgbt</option>
                                    <option value=".life">.life</option>
                                    <option value=".limo">.limo</option>
                                    <option value=".link">.link</option>
                                    <option value=".live">.live</option>
                                    <option value=".love">.love</option>
                                    <option value=".ltda">.ltda</option>
                                    <option value=".me.in">.me.in</option>
                                    <option value=".me.uk">.me.uk</option>
                                    <option value=".med.ec">.med.ec</option>
                                    <option value=".med.pro">.med.pro</option>
                                    <option value=".memorial">.memorial</option>
                                    <option value=".mn">.mn</option>
                                    <option value=".mom">.mom</option>
                                    <option value=".mus.br">.mus.br</option>
                                    <option value=".mx">.mx</option>
                                    <option value=".name">.name</option>
                                    <option value=".navy">.navy</option>
                                    <option value=".net.au">.net.au</option>
                                    <option value=".net.br">.net.br</option>
                                    <option value=".net.cn">.net.cn</option>
                                    <option value=".net.co">.net.co</option>
                                    <option value=".net.ec">.net.ec</option>
                                    <option value=".net.in">.net.in</option>
                                    <option value=".net.nz">.net.nz</option>
                                    <option value=".net.ru">.net.ru</option>
                                    <option value=".net.sc">.net.sc</option>
                                    <option value=".no.com">.no.com</option>
                                    <option value=".nom.co">.nom.co</option>
                                    <option value=".nz">.nz</option>
                                    <option value=".org.cn">.org.cn</option>
                                    <option value=".org.in">.org.in</option>
                                    <option value=".org.mx">.org.mx</option>
                                    <option value=".org.nz">.org.nz</option>
                                    <option value=".org.ru">.org.ru</option>
                                    <option value=".org.sc">.org.sc</option>
                                    <option value=".org.uk">.org.uk</option>
                                    <option value=".page">.page</option>
                                    <option value=".pet">.pet</option>
                                    <option value=".pg.in">.pg.in</option>
                                    <option value=".ph">.ph</option>
                                    <option value=".photo">.photo</option>
                                    <option value=".physio">.physio</option>
                                    <option value=".pics">.pics</option>
                                    <option value=".porn">.porn</option>
                                    <option value=".post.in">.post.in</option>
                                    <option value=".pro">.pro</option>
                                    <option value=".pro.br">.pro.br</option>
                                    <option value=".pro.ec">.pro.ec</option>
                                    <option value=".pro.in">.pro.in</option>
                                    <option value=".productions">.productions</option>
                                    <option value=".protection">.protection</option>
                                    <option value=".qc.com">.qc.com</option>
                                    <option value=".recht.pro">.recht.pro</option>
                                    <option value=".rehab">.rehab</option>
                                    <option value=".rentals">.rentals</option>
                                    <option value=".repair">.repair</option>
                                    <option value=".report">.report</option>
                                    <option value=".republican">.republican</option>
                                    <option value=".review">.review</option>
                                    <option value=".reviews">.reviews</option>
                                    <option value=".ru.com">.ru.com</option>
                                    <option value=".sa.com">.sa.com</option>
                                    <option value=".salon">.salon</option>
                                    <option value=".sc">.sc</option>
                                    <option value=".se.com">.se.com</option>
                                    <option value=".se.net">.se.net</option>
                                    <option value=".security">.security</option>
                                    <option value=".services">.services</option>
                                    <option value=".sex">.sex</option>
                                    <option value=".sexy">.sexy</option>
                                    <option value=".solar">.solar</option>
                                    <option value=".soy">.soy</option>
                                    <option value=".space">.space</option>
                                    <option value=".stream">.stream</option>
                                    <option value=".style">.style</option>
                                    <option value=".support">.support</option>
                                    <option value=".surgery">.surgery</option>
                                    <option value=".sx">.sx</option>
                                    <option value=".tattoo">.tattoo</option>
                                    <option value=".taxi">.taxi</option>
                                    <option value=".tel">.tel</option>
                                    <option value=".tips">.tips</option>
                                    <option value=".training">.training</option>
                                    <option value=".travel">.travel</option>
                                    <option value=".travel.in">.travel.in</option>
                                    <option value=".tv">.tv</option>
                                    <option value=".tv.in">.tv.in</option>
                                    <option value=".uk.com">.uk.com</option>
                                    <option value=".uk.in">.uk.in</option>
                                    <option value=".uk.net">.uk.net</option>
                                    <option value=".uno">.uno</option>
                                    <option value=".up.in">.up.in</option>
                                    <option value=".us.com">.us.com</option>
                                    <option value=".us.in">.us.in</option>
                                    <option value=".vc">.vc</option>
                                    <option value=".vet">.vet</option>
                                    <option value=".vin">.vin</option>
                                    <option value=".vision">.vision</option>
                                    <option value=".vote">.vote</option>
                                    <option value=".voto">.voto</option>
                                    <option value=".wang">.wang</option>
                                    <option value=".wedding">.wedding</option>
                                    <option value=".wiki">.wiki</option>
                                    <option value=".wiki.br">.wiki.br</option>
                                    <option value=".work">.work</option>
                                    <option value=".works">.works</option>
                                    <option value=".ws">.ws</option>
                                    <option value=".xn--3ds443g">.xn--3ds443g</option>
                                    <option value=".xn--6frz82g">.xn--6frz82g</option>
                                    <option value=".xn--c1avg">.xn--c1avg</option>
                                    <option value=".xn--fiq228c5hs">.xn--fiq228c5hs</option>
                                    <option value=".xn--h2brj9c">.xn--h2brj9c</option>
                                    <option value=".xn--i1b6b1a6a2e">.xn--i1b6b1a6a2e</option>
                                    <option value=".xn--ngbc5azd">.xn--ngbc5azd</option>
                                    <option value=".xn--nqv7f">.xn--nqv7f</option>
                                    <option value=".xxx">.xxx</option>
                                    <option value=".za.com">.za.com</option>
                                </select>
                                <button type="submit" className="inline-flex items-center justify-center gap-[8px] bg-[#00A51A] text-[#fff] text-[16px] md:py-[14px] md:px-[27px] max-md:p-[10px] rounded-full absolute md:right-[6px] max-md:right-[4px] top-[50%] -translate-y-[50%] md:ml-2 max-md:ml-1 hover:bg-[#00A51A]/[85%] hover:text-[#fff] duration-[400ms,700ms]"><IoSearch size={20} /><span className='max-md:hidden'>Search</span></button>
                            </div>
                        </form>
                    </div>
                    <div className='max-w-[1190px] mx-auto'>
                        <div className='md:flex md:gap-[15px]'>
                            <div className='md:w-1/2'>
                                <div className='md:text-left text-center md:px-[30px] md:mt-[90px]'>
                                    <h4 className='text-[#00A51A] font-semibold mb-[10px]'>Domain Name</h4>
                                    <h1 className='font-bold text-[#000] max-w-[295px] max-md:mx-auto md:mb-[20px] max-md:mb-[15px]'>Get a .com for ₹ 1.00/1st yr. </h1>
                                    <h4 className='font-semibold mb-[10px] md:text-[18px] text-[17px]'>Grab the world's most popular domain.</h4>
                                    <p className='mb-[30px]'>3-year purchase required. Additional year(s) ₹ 1.00</p>
                                </div>
                            </div>
                            <div className='md:w-1/2'>
                                <div className='rounded-[20px] bg-black md:px-[40px] max-md:px-[20px] md:py-[50px] max-md:py-[30px]  '>
                                    <h2 className='text-white font-bold md:mb-[30px] max-md:mb-[15px]'>Get in touch</h2>
                                    <h4 className='text-white font-medium md:mb-[20px] max-md:mb-[30px]'>Write to Us Anytime</h4>
                                    <div>
                                        <form>
                                            <p className="text-[14px] text-left text-[#FF0000] font-semibold mb-[10px] hidden">Enter your correct detail</p>
                                            <div className='grid md:grid-cols-2 md:gap-4'>
                                                <div className='relative z-0 w-full mb-[15px] group'>
                                                    <label htmlFor="fullname" className="block text-[#fff] mb-[5px] text-[16px]">Full Name<span className="text-[#FF0000]"> *</span></label>
                                                    <input type="text" name='fullname' className='md:h-[42px] max-md:h-[40px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='Enter Your Name' />
                                                </div>
                                                <div className='relative z-0 w-full mb-[15px] group'>
                                                    <label htmlFor="email" className="block text-[#fff] mb-[5px] text-[16px]">Email Address<span className="text-[#FF0000]"> *</span></label>
                                                    <input type="email" name='email' className='md:h-[42px] max-md:h-[40px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='example@gmail.com' />
                                                </div>
                                            </div>
                                            <div className='relative z-0 w-full mb-[15px] group'>
                                                <label htmlFor="phone" className="block mb-[5px] text-[#fff] text-[16px]">Phone<span className="text-[#FF0000]"> *</span></label>
                                                <div className='flex justify-between'>
                                                    <select className="md:h-[42px] max-md:h-[40px] px-[6px] w-[130px] !border-r-0 border border-[#ddd] rounded-l-[5px] focus:outline-none">
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
                                                    <input type="text" className='md:h-[42px] max-md:h-[40px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px] rounded-l-none' placeholder='Enter Phone No' />
                                                </div>
                                            </div>
                                            <div className='relative z-0 w-full mb-[15px] group'>
                                                <label htmlFor="subject" className="block mb-[5px] text-[16px] text-[#fff]">Subject</label>
                                                <input type="text" name='subject' className='md:h-[42px] max-md:h-[40px] w-full focus:outline-none border-[#ddd] px-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]' placeholder='Enter Your Subject' />
                                            </div>
                                            <div className='relative z-0 w-full mb-[15px] group'>
                                                <label htmlFor="message" className="block mb-[5px] text-[16px] text-[#fff]">Message</label>
                                                <textarea id="message" className="md:h-[100px] max-md:h-[90px] w-full focus:outline-none border-[#ddd] p-[8px] border focus:border-[#00A51A]/[40%] rounded-[5px] text-[16px]" placeholder='Enter Your Message'></textarea>
                                            </div>
                                            <div className='max-md:text-center'>
                                                <button type='submit' className='md:text-[18px] text-[16px] bg-[#00A51A] hover:bg-[#00A51A]/[85%] text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center'>Query Now</button>
                                            </div>
                                        </form>
                                    </div>
                                    <form>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='md:absolute md:bottom-0 md:left-0 w-full 2xl:max-w-[534px] max-2xl:max-w-[370px] max-md:mt-[30px]' src={landingbanner} alt='banner' />
            </section>


            {/* Domain Services Section */}
            <section className="py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] items-center'>
                        <div>
                            <h2>Domain Services</h2>
                            <p className='mb-[25px]'>Velsoting offers users with a broad array of domain services which have been designed to offer you with a strong online presence. Our reliable domain services allow you to protect and promote your brand effortlessly.</p>
                                <h4 className='text-[20px] mb-[10px]'>Get Seamless Domain Services With Velosting</h4>
                                <ul className='block md:columns-2 md:gap-x-[50px] pt-[15px] pl-[30px]'>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Easy Domain Registration
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />DNS Management
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Renewal Reminders
                                    </li>

                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Advanced Security Features
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Wide Range of TLDs
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Privacy Protection
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Domain Transfer Assistance
                                    </li>
                                    <li className='relative text-[#000] mb-[10px]'>
                                        <img src={ImageIcons.faCheckCircle} alt='faCheckCircle icon' className='w-[20px] absolute -left-[30px]' />Bulk Domain Management
                                    </li>
                                </ul>
                        </div>
                        <div>
                            <img src={ImageIcons.domainservices} alt='domain services' className='w-full md:max-w-[650px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Hosting Services Section */}
            <section className="md:py-[70px] max-md:py-[50px] bg-[#EEF5F7]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h4 className='text-[#00A51A] text-[20px]'>What We Provide</h4>
                        <h2>Our Hosting Services</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Hosting is what makes your site visible on the web. We offer fast, reliable plans for every need - from a basic blog to high-powered site. Designer? Developer? We have got you covered too.</p>
                    </div>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[30px] max-md:gap-[20px]'>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.cpanelhostingicon} alt='C-Panel Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>C-Panel Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>CPanel hosting simplifies website management with easy tools for controlling domains, emails, and more, letting you focus on growing your site with ease.</p>
                        </div>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.wphostingicon} alt='Wordpress Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Wordpress Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our WordPress hosting plans offer optimized servers for fast performance, strong security, and custom features, tailored to meet the unique needs of your site.</p>
                        </div>
                        <div className='relative md:py-[40px] max-md:py-[15px] md:px-[35px] max-md:px-[15px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.pleskhostingicon} alt='Plesk Hosting' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Plesk Hosting</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Our Plesk hosting plan provides an intuitive control panel with powerful features, perfect for both beginners and advanced users, supporting a wide range of applications for seamless web hosting.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Servers Section */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4 py-[10px]">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h2>Our Servers</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Server is what makes your website accessible on the web. We offer fast, reliable servers for every need—whether it's a simple blog or a high-powered site. Designer or developer? We've got you covered!</p>
                    </div>
                    <div className='grid sm:grid-cols-2 max-sm:grid-cols-1 md:gap-[30px] max-md:gap-[20px] max-w-[1024px] mx-auto'>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.clouddedicatedservericon} alt='Cloud-Dedicated Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Cloud-Dedicated Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Cloud Dedicated Server Hosting offers exclusive resources, high performance, ample storage, and enhanced security—perfect for high-traffic websites and demanding applications.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.dedicatedbaremetalserversicon} alt='Dedicated Bare Metal Servers' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Dedicated Bare Metal Servers</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>Dedicated Bare Metal Servers offer a physical machine with full control, customizable OS, and optimal performance, ensuring top security and reliability without resource competition.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.gpuservericon} alt='GPU Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>GPU Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>GPU Servers offer high-performance, customizable hardware for tasks like machine learning and graphics rendering. Choose your ideal GPU, CPU, and memory, and pay only for what you use.</p>
                        </div>
                        <div className='relative sm:py-[20px] max-sm:py-[15px] md:px-[35px] max-md:px-[20px] rounded-[15px]'>
                            <div className='text-center mb-[20px]'>
                                <img src={ImageIcons.vpsservericon} alt='Vps Server' className='w-full max-w-[50px] mx-auto' />
                            </div>
                            <h4 className='text-center mb-[10px]'>Vps Server</h4>
                            <p className='text-[#646773] text-[15px] text-center mb-0'>A VPS splits a physical server into virtual servers with dedicated resources, providing an isolated environment for better performance and enhanced security for your websites and applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Don't Miss It */}
            <section className="md:py-[70px] max-md:py-[50px] bg-[#2B2B2B]">
                <div className="lg:container mx-auto px-4">
                    <div className='grid md:grid-cols-2 max-md:grid-cols-1 md:gap-[30px] max-md:gap-[15px] items-center'>
                        <div className='text-center'>
                            <h4 className='text-[#00D752]'>Special Offer Don't Miss It</h4>
                            <h2 className='text-[#fff] lg:text-[44px] lg:leading-[60px]'>Web Hosting Secured Hosting from ₹199.00/mo.</h2>
                        </div>
                        <div>
                            <img src={ImageIcons.ctaspcialoffermiss} alt='Special Offer' className='w-full md:max-w-[500px] max-md:max-w-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Velosting ? */}
            <section className="md:py-[70px] max-md:py-[50px]">
                <div className="lg:container mx-auto px-4">
                    <div className='text-center max-w-[992px] mx-auto'>
                        <h2>Why Choose Velosting ?</h2>
                        <p className='md:mb-[40px] max-md:mb-[30px]'>Velosting provides users with unmatched reliability, security, and exceptional customer support. Join thousands of satisfied customers and enjoy a seamless experience with our top-notch domain services.</p>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-[24px]'>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.multilanguagesupportone} alt='Multi-Language Support' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Multi-Language Support</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, domain can be managed in your own preferred language, as we offer multi-language support.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.globaldomainreach} alt='Global Domain Reach' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>24/7 Network Security</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting’s professional team of experts provides 24/7 support to the customers to help them out with any of the issues they are facing.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.freewhoisprivacy} alt='Free WHOIS Privacy' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Free WHOIS Privacy</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We also offer our users a free WHOIS privacy so that you can safeguard your personal information.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.seotoolsintegration} alt='SEO Tools Integration' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>SEO Tools Integration</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Our SEO integration tools help you boost the search engine ranking of your website.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.costeffectiveicon} alt='Cost- Effective' className='w-full max-w-[60px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Cost- Effective</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>We offer our services at highly affordable rates, without compromising on quality.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.controlcustomisationicon} alt='Full Control and Customisation' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Full Control and Customisation</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>With us, you get full root access, giving you complete control over your server environment. Customize server settings and install your preferred software for a tailored experience.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.reliabitlityuptimeicon} alt='Reliability and Uptime' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>Reliability and Uptime</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>Velosting state-of-the-art data centres have redundant power supplies and we ensure round the clock monitoring, preventing downtime issues.</p>
                        </div>
                        <div className='bg-[#F3F7FB] rounded-[15px] px-[20px] py-[30px] shadow-[0px_5px_10px_rgb(0_0_0_/_0.10)]'>
                            <div className='flex items-center gap-[10px] mb-[15px]'>
                                <div className='flex items-center rounded-full justify-center min-w-[44px] text-center mb-0'>
                                    <img src={ImageIcons.highperformanceserver} alt='High Performance Server' className='w-full max-w-[50px] mx-auto' />
                                </div>
                                <h4 className='text-[20px] mb-0'>High Performance Server</h4>
                            </div>
                            <p className='text-[#646773] text-[15px] mb-0'>You will get to experience high-speed and improved performance, as we have the latest hardware and software technologies which help applications to run smoothly and efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Get your custom email address */}
             <section className="">
                <div className='relative w-full overflow-hidden'>
                    <div className="lg:container mx-auto sm:py-[80px] max-sm:mb-[20px]">
                        <div className='relative w-full h-full flex flex-col justify-center z-10 px-[15px] py-[15px]'>
                            <div className='sm:w-1/2'>
                                <h2 className='text-center max-w-[570px] mx-auto'>Get your custom email address: Build trust in your business.</h2>
                                <p className='text-center max-w-[570px] mx-auto mb-[30px]'>Send the right message to your customers and prospects by using a proafessional email address like yourname@example.com. Adding custom email addresses to your domain is easy and adds credibility to your company. Check out our email options.</p>  
                                <div className='text-center max-w-[570px] mx-auto'>
                                    <Link className='md:text-[18px] text-[16px] bg-[#00A51A] text-[#fff] hover:bg-[#000]/[85%] hover:text-[#fff] rounded-[10px] px-[30px] py-[14px] inline-flex items-center' to='/contact-us'>Register Now <FaArrowRightLong className='ml-[10px]' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={ImageIcons.girlwithphonepic} alt='girl with phone pic' className='sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-y-[-50%] sm:translate-x-[-50%] w-full h-full object-center object-cover' />
                </div>
            </section>
        </Layout>
    )
}

export default LandingPage