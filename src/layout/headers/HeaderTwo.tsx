"use client"
import Link from "next/link";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenuTwo from "./Menu/NavMenuTwo";
import Sidebar from "./Menu/Sidebar";

import logo_1 from "@/assets/img/logo/logo_01.png";
import logo_2 from "@/assets/img/logo/white_logo.png";

const HeaderTwo = ({style}:any) => {
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header id="home">
            <div id="sticky-header" className={`tg-menu-area menu-area ${style ? "transparent-header-2" : ""} ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="flaticon-layout"></i></div>
                        <div className="menu-wrap">
                           <nav className="menu-nav">
                              <div className="logo">
                                 <Link href="/">
                                 <Image src={sticky ? logo_1 : style ? logo_2 : logo_1} alt="Logo" />
                                 </Link>
                              </div>
                              <div className="navbar-wrap main-menu d-none d-xl-flex">
                                 <NavMenuTwo />
                              </div>
                              <div className="header-btn d-none d-sm-block">
                                 <Link href="#order" className="tg-btn">Order Now</Link>
                              </div>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar style={true} isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default HeaderTwo
