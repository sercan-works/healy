"use client"
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenuOne from "./Menu/NavMenuOne";
import Sidebar from "./Menu/Sidebar";
import Searchbar from "./Menu/Searchbar";
import HeaderCart from "./Menu/HeaderCart";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";

import logo_1 from "@/assets/img/logo/logo.png";
import logo_2 from "@/assets/img/logo/white_logo.png";

const HeaderOne = ({ style }: { style: any}) => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false)
    const [offCanvas, setOffCanvas] = useState<boolean>(false);
    const productItem = useSelector((state: any) => state.cart.cart);

    return (
        <>
            <header id="home">
                <div id="sticky-header" className={`menu-area ${style ? "transparent-header" : ""} ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="flaticon-layout"></i></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image src={sticky ? logo_1 : style ? logo_2 : logo_1} alt="Healy Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-xl-flex justify-content-center">
                                            <NavMenuOne />
                                        </div>
                                        <div className="header-action d-none d-sm-block">
                                            <ul>
                                                <li className="header-shop-cart">
                                                    <a style={{ cursor: "pointer" }} onClick={() => setCartOpen(true)} className="cart-count"><i className="flaticon-shopping-cart"></i>
                                                        <span className="mini-cart-count">{productItem.length}</span>
                                                    </a>
                                                    <HeaderCart />
                                                </li>
                                                <li className="header-search"><a style={{ cursor: "pointer" }} onClick={() => setIsSearch(true)}><i className="flaticon-search"></i></a></li>
                                                <li className="offCanvas-btn d-none d-xl-block"><a style={{ cursor: "pointer" }} onClick={() => setOffCanvas(true)} className="bar-button"><i className="flaticon-layout"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <Searchbar isSearch={isSearch} setIsSearch={setIsSearch} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
            {/* <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} /> */}
        </>
    );
}

export default HeaderOne
