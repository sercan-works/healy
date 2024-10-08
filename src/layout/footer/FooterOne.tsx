import FooterInstagram from "@/components/common/FooterInstagram"
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";

import footer_logo from "@/assets/img/logo/white_logo.png";
import payment_card from "@/assets/img/others/card_img.png";
import footerShape_1 from "@/assets/img/others/footer_shape01.png";
import footerShape_2 from "@/assets/img/others/footer_shape02.png";

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
      title: "About Us",
      footer_link: [{ link: "#", link_title: "About Company" }, { link: "#", link_title: "Affiliate Program" }, { link: "#", link_title: "Customer Spotlight" }, { link: "#", link_title: "Reseller Program" }, { link: "/shop", link_title: "Our Shop" }, { link: "#", link_title: "Price & Plans" },]
   },
   {
      id: 2,
      class_name: "col-lg-2",
      title: "Support",
      footer_link: [{ link: "#", link_title: "About Company" }, { link: "#", link_title: "Affiliate Program" }, { link: "#", link_title: "Customer Spotlight" }, { link: "#", link_title: "Reseller Program" }, { link: "/shop", link_title: "Our Shop" }, { link: "#", link_title: "Price & Plans" },]
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
                                 <Link href="/"><Image src={footer_logo} alt="Logo" /></Link>
                              </div>
                              <div className="footer-text">
                                 <p>Making beauty especially relating complot especial common questions tend to recur through posts or queries standards vary orem donor command tei.</p>
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
                              <h4 className="fw-title">{item.title}</h4>
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
                           <h4 className="fw-title">CONTACT US</h4>
                           <div className="footer-contact-wrap">
                              <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                              <ul className="list-wrap">
                                 <li className="phone"><i className="fas fa-phone"></i> +1 31-6555-0116</li>
                                 <li className="mail"><i className="fas fa-envelope"></i> Suxnix@example.com</li>
                                 <li className="website"><i className="fas fa-globe"></i> www.suxnixdomain.com</li>
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
