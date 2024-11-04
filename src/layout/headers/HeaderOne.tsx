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
import { GiLightningFrequency } from "react-icons/gi";
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const HeaderOne = ({ style }: { style: any}) => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false)
    const [offCanvas, setOffCanvas] = useState<boolean>(false);
    const productItem = useSelector((state: any) => state.cart.cart);

    return (
        <>
            {/* DUYURU */}
            <div className="w-full bg-gradient-to-tr from-pink-400 to-gray-100 text-white p-2">
                <p className="text-center text-white font-bold flex flex-row items-center justify-center gap-2 ">
                <FaCanadianMapleLeaf className="text-yellow-300" /> KASIM AYINA ÖZEL <span className="text-yellow-300">%50 İNDİRİM</span> FIRSATLARINI KAÇIRMAYIN<FaCanadianMapleLeaf className="text-yellow-300" />
                </p>
            </div>

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
                                                {sticky || !style ? (
                                                    // <Image src={logo_1} alt="Healy Logo" />
                                                    <>
                                                <div className="flex flex-col text-center ml-10 ">
                                                    <h1 className="text-gray-800 flex my-2 text-center text-2xl  ">Herşey <span><GiLightningFrequency /></span>Frekans</h1>
                                                    <p className="text-gray-400 text-xs flex flex-row items-center justify-between "><span className="text-pink-500 flex items-center"><MdKeyboardArrowRight />Sağlık</span> <span className="text-green-400 flex items-center"><MdKeyboardArrowRight />Refah</span> <span className="text-blue-400 flex items-center"><MdKeyboardArrowRight />Canlılık</span></p>
                                                    </div>
                                                    </>
                                                ) : (<>
                                                <div className="flex flex-col text-center ml-10 ">
                                                    <h1 className="text-white flex my-2 text-center ">Herşey <span><GiLightningFrequency /></span>Frekans</h1>
                                                    <p className="text-gray-400 text-xs"><span className="text-pink-300">Sağlık</span> <span className="text-green-100">Refah</span> <span className="text-blue-100">Canlılık</span></p>
                                                    </div>
                                                    </>
                                                )}
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-xl-flex justify-content-center">
                                            <NavMenuOne />
                                        </div>
                                        <div className="header-action d-none d-sm-block">
                                            <ul>
                                                {/* <li className="header-shop-cart">
                                                    <a style={{ cursor: "pointer" }} onClick={() => setCartOpen(true)} className="cart-count"><i className="flaticon-shopping-cart"></i>
                                                        <span className="mini-cart-count">{productItem.length}</span>
                                                    </a>
                                                    <HeaderCart />
                                                </li> */}
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
