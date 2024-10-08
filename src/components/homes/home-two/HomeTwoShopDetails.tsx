"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import product_nav_1 from "@/assets/img/products/shop-details-thumb01.png";
import product_nav_2 from "@/assets/img/products/shop-details-thumb02.png";
import product_nav_3 from "@/assets/img/products/shop-details-thumb03.png";
import product_nav_4 from "@/assets/img/products/shop-details-thumb04.png";

import product_nav_2_1 from "@/assets/img/products/shop-details-thumb01.png";
import product_nav_2_2 from "@/assets/img/products/shop-details-thumb02.png";
import product_nav_2_3 from "@/assets/img/products/shop-details-thumb03.png";
import product_nav_2_4 from "@/assets/img/products/shop-details-thumb04.png";
import Link from "next/link";
import ShopDetailsTab from "@/components/common/ShopDetailsTab";

type productNavImg = StaticImageData[];
const product_nav_img: productNavImg = [product_nav_1, product_nav_2, product_nav_3, product_nav_2_4]

const product_nav_img_2: productNavImg = [product_nav_2_1, product_nav_2_2, product_nav_2_3, product_nav_2_4]

const tab_title: string[] = ["Description", "Reviews (0)",];

interface singProduct {
   title: JSX.Element;
   desc: JSX.Element;
   rating?: string[];
   model?: {
      id_name: string;
      text: string;
   }[];
}

const single_product_data: singProduct = {
   title: (<>Whey Mass Protein <br /> Powder</>),
   rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   desc: (<>Suxnix food is food produced by methods complying with the standards of Rrganic farming. Standards vary Lorem ipsum dolor sit amet consectetur adipiscing worldwide, complying but organic farming.</>),
}

const { title, rating, desc } = single_product_data;

const HomeTwoShopDetails = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle the form submission here
   };

   return (
      <section id="shop" className="tg-shop-details-area tg-shop-details-bg">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="tg-section-title text-center mb-70">
                     <span className="sub-title">purchase product</span>
                     <h2 className="title">take your supplements</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur recusandae voluptates sequi voluptatibus error! gorem ipsum dolor sit.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <ShopDetailsTab />
               
               <div className="col-lg-6">
                  <div className="inner-shop-details-content">
                     <h4 className="title">{title}</h4>
                     <div className="tg-shop-details-review">
                        <div className="rating">
                           {rating?.map((rating, i) => <i key={i} className={rating}></i>)}
                        </div>
                        <span>( 2 Customer Review )</span>
                     </div>
                     <div className="inner-shop-details-price">
                        <h2 className="price">$29.99</h2>
                        <h5 className="stock-status">- IN Stock</h5>
                     </div>
                     <p>{desc}</p>

                     <div className="tg-progress-wrap">
                        <div className="tg-progress-content">
                           <ul className="list-wrap">
                              <li>Ordered: <span>20</span></li>
                              <li>Items available: <span>360</span></li>
                           </ul>
                        </div>
                        <div className="progress">
                           <div className="progress-bar" role="progressbar" style={{ width: "5%" }}></div>
                        </div>
                     </div>

                     <div className="inner-shop-perched-info">
                        <div className="sd-cart-wrap">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="quickview-cart-plus-minus">
                                 <input onChange={handleSubmit} type="text" value="1" />
                                 <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                           </form>
                        </div>
                        <a className="cart-btn" style={{ cursor: "pointer" }}>add to cart</a>
                        <Link href="/shop-details" className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist"><i className="far fa-heart"></i></Link>
                     </div>

                     <div className="tg-shop-details-list">
                        <ul className="list-wrap">
                           <li>SKU : <Link href="#">WE888T12</Link></li>
                           <li>Category : <Link href="#">growth promoter</Link></li>
                           <li>TAGS : <Link href="#">calcium</Link></li>
                        </ul>
                     </div>
                     <div className="inner-shop-details-bottom tg-shop-content-bottom">
                        <p>Free worldwide shipping on all orders over <span>$50</span></p>
                        <span><i className="far fa-clock"></i>30 days easy returns</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeTwoShopDetails
