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
                     <h3 className="title">Getting all of the <span>Nutrients</span> you need simply cannot be done without supplements.</h3>
                     <p>Nam libero tempore, cum soluta nobis eligendi cumque quod placeat facere possimus assumenda omnis dolor repellendu sautem temporibus officiis</p>
                  </div>
                  <div className="offcanvas-contact">
                     <h4 className="number">+1 599 162 4545</h4>
                     <h4 className="email">suxnix@gmail.com</h4>
                     <p>5689 Lotaso Terrace, Culver City, <br /> CA, United States</p>
                     <ul className="offcanvas-social list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
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
