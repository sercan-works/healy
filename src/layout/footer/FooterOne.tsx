import FooterInstagram from "@/components/common/FooterInstagram"
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";

import footer_logo from "@/assets/img/logo/white_logo.png";
import payment_card from "@/assets/img/others/card_img.png";
import footerShape_1 from "@/assets/img/others/footer_shape01.png";
import footerShape_2 from "@/assets/img/others/footer_shape02.png";
import { GiLightningFrequency } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 1,
      class_name: "col-lg-3",
      title: "Hakkımızda",
      footer_link: [ { link: "#", link_title: "iş Ortaklığı" }, { link: "", link_title: "Ürünlerimiz" }, { link: "#", link_title: "Kampanyalar" },{ link: "#", link_title: "Healy Frekans Cihazı" },]
   },
   {
      id: 2,
      class_name: "col-lg-2",
      title: "Cihazlarımız",
      footer_link: [ { link: "#", link_title: "Healy Rezonans" }, { link: "#", link_title: "Healy Rezonans Plus" }, { link: "#", link_title: "Healy Obdisyen" },{ link: "#", link_title: "Mag Healy" },]
   },
]  

const FooterOne = ({style}:any) => {
   return (
      <footer className="footer-area">
         {style?<FooterInstagram />:""}
         <div className="footer-top-wrap">
            <div className="container">
               <div className="footer-widgets-wrap">
                  <div className="row">
                     <div className="col-lg-4 col-md-7">
                        <div className="footer-widget">
                           <div className="footer-about">
                              <div className="footer-logo logo">
                                 <Link href="/">
                                 {/* <Image src={footer_logo} alt="Logo" /> */}
                                 <div className="flex flex-col text-center ml-10 ">
                                                    <h1 className="text-white flex my-2 text-center ">Herşey <span><GiLightningFrequency /></span>Frekans</h1>
                                                    <p className="text-gray-400 text-xs flex flex-row items-center justify-start "><span className="text-pink-500 flex items-center"><MdKeyboardArrowRight />Sağlık</span> <span className="text-green-400 flex items-center"><MdKeyboardArrowRight />Refah</span> <span className="text-blue-400 flex items-center"><MdKeyboardArrowRight />Canlılık</span></p>

                                                    </div>
                                 </Link>
                              </div>
                              <div className="footer-text">
                                 <p>Healy frekans cihazları ile sağlık, refah ve canlılık için bir adım daha yaklaşıyorsunuz.</p>
                              </div>
                              <div className="footer-social">
                                 <SocialIcon />
                              </div>
                           </div>
                        </div>
                     </div>

                     {footer_data.map((item) => (
                        <div key={item.id} className={` ${item.class_name} col-md-5 col-sm-6`}>
                           <div className="footer-widget">
                              <h1 className="fw-title">{item.title}</h1>
                              <ul className="list-wrap">
                                 {item.footer_link.map((li, i) => (
                                    <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}

                     <div className="col-lg-3 col-md-5">
                        <div className="footer-widget">
                           <h1 className="fw-title">CONTACT US</h1>
                           <div className="footer-contact-wrap">
                              <ul className="list-wrap">
                                 <li className="phone"><i className="fas fa-phone"></i> +90 545 446 77 21</li>
                                 <li className="mail"><i className="fas fa-envelope"></i> herseyfrekans@gmail.com</li>
                                 <li className="website"><i className="fas fa-globe"></i> www.herseyfrekans.com</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="footer-shape one">
               <Image src={footerShape_1} alt="img" className="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s" />
            </div>
            <div className="footer-shape two">
               <Image src={footerShape_2} alt="img" className="wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s" />
            </div>
         </div>
         <div className="copyright-wrap">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <div className="copyright-text">
                        <p>Copyright © 2022 Suxnix All Rights Reserved.</p>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="payment-card text-center text-md-end">
                        <Image src={payment_card} alt="card" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
