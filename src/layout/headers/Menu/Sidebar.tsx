"use client";
import MobileMenusTwo from "@/layout/headers/Menu/MobileMenusTwo";
import Image from "next/image";
import Link from "next/link";
import MobileMenusOne from "./MobileMenusOne";

import logo_1 from "@/assets/img/logo/logo.png";

const Sidebar = ({ style, isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link href="/"><Image src={logo_1} alt="" /></Link>
                    </div>
                    <div className="menu-outer">
                        {style ? <MobileMenusTwo setIsActive={setIsActive} /> : <MobileMenusOne setIsActive={setIsActive} />}
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li>
                                <Link href="https://www.instagram.com/sercan_healy/" target="_blank"><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/905516926848" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar;