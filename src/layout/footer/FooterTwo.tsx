import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import SocialIcon from "@/components/common/SocialIcon";

import footer_logo_1 from "@/assets/img/logo/white_logo_01.png"
import footer_logo_2 from "@/assets/img/others/satisfaction_img.png"
import footer_card from "@/assets/img/others/card_img.png"

import rc_thumb_1 from "@/assets/img/blog/insta_post01.jpg"
import rc_thumb_2 from "@/assets/img/blog/insta_post02.jpg"

interface ContentData {
   desc: JSX.Element;
   rc_post: {
      rc_thumb: StaticImageData;
      rc_date: string;
      rc_title: string;
   }[];
   footer_list: {
      link: string;
      title: string;
   }[]
}
const footer_content: ContentData = {
   desc: (<>Making beauty especially relating complot especial common questions tend to recur through posts or queries standards vary orem donor command tei.</>),
   rc_post: [
      { rc_thumb: rc_thumb_1, rc_date: "October 08, 2023", rc_title: "Web hosting service type Internet hosting" },
      { rc_thumb: rc_thumb_2, rc_date: "October 22, 2023", rc_title: "Web hosting service type Internet hosting" }
   ],
   footer_list: [{ link: "#", title: "Knowledge Base" }, { link: "/blog", title: "Blog" }, { link: "#", title: "Developer API" }, { link: "#", title: "Faq" }, { link: "/contact", title: "Contact" },]
}

const { desc, rc_post, footer_list } = footer_content;

const FooterTwo = () => {
   return (
      <footer className="footer-style-two">
         <div className="footer-two-top-wrap">
            <div className="container">
               <div className="footer-two-widgets-wrap">
                  <div className="row justify-content-between">
                     <div className="col-xl-3 col-lg-4 col-md-7 col-sm-9">
                        <div className="footer-widget">
                           <div className="footer-about">
                              <div className="footer-logo logo">
                                 <Link href="/"><Image src={footer_logo_1} alt="Logo" /></Link>
                              </div>
                              <div className="footer-text">
                                 <p>{desc}</p>
                              </div>
                              <div className="footer-social">
                                 <SocialIcon />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 col-md-5 col-sm-8">
                        <div className="footer-widget">
                           <h4 className="fw-title">About Us</h4>
                           <div className="tg-footer-rc-post">
                              {rc_post.map((item, index) => (
                                 <div key={index} className="footer-post-item">
                                    <div className="thumb">
                                       <Link href="/blog-details">
                                          <Image src={item.rc_thumb} alt="img" />
                                       </Link>
                                    </div>
                                    <div className="content">
                                       <span><i className="far fa-clock"></i> {item.rc_date}</span>
                                       <h6 className="title"><Link href="/blog-details">{item.rc_title}</Link></h6>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="col-xl-2 col-lg-3 col-md-5 col-sm-4">
                        <div className="footer-widget widget_nav_menu">
                           <h4 className="fw-title">Support</h4>
                           <ul className="list-wrap">
                              {footer_list.map((list, i) => (
                                 <li key={i}><Link href={list.link}>{list.title}</Link></li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="footer-widget">
                           <h4 className="fw-title">Newsletter</h4>
                           <div className="footer-newsletter-wrap">
                              <p>Making for beauty especially the <span>*</span></p>
                              <form action="#">
                                 <input type="email" placeholder="Enter your email.." required />
                                 <button><i className="fas fa-rocket"></i></button>
                              </form>
                           </div>
                           <div className="footer-confidential-wrap">
                              <div className="confidential-logo">
                                 <Image src={footer_logo_2} alt="img" />
                              </div>
                              <div className="confidential-content">
                                 <h4 className="con-title">100% Confidential</h4>
                                 <span>25k Active Customer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
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
                        <Image src={footer_card} alt="card" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
