import Image from "next/image";

import logo_1 from "@/assets/img/icons/close.png";
import Link from "next/link";

const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className="offCanvas-wrap">
               <div className="offCanvas-toggle" onClick={() => setOffCanvas(false)}><Image src={logo_1} alt="icon" /></div>
               <div className="offCanvas-body">
                  <div className="offCanvas-content">
                     <h1 className="title">Hayatınız İçin <span>Frekanslar</span></h1>
                     <p>Bütünsel Sağlık, beden, zihin ve ruhun birlik ve uyum duygusudur, kapsayıcı bir refah ve canlılık deneyimlemektir. Yaşama tam kapasitenizle katılmanızı sağlar.</p>
                  </div>
                  <div className="offcanvas-contact">
                     <h1 className="number">+90 545 446 77 21</h1>
                     <h1 className="email">herseyfrekans@gmail.com</h1>
                     <p> Türkiye</p>
                     <ul className="offcanvas-social list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        {/* <li><Link href="#"><i className="fab fa-twitter"></i></Link></li> */}
                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className="offCanvas-overlay"></div>
         </div>
      </>
   )
}

export default HeaderOffcanvas
