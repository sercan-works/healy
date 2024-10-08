"use client"
import shop_data from "@/data/ShopData"
import { addToCart } from "@/redux/features/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

const HomeTwoShop = () => {

   const dispatch = useDispatch()
   const handleAddToCart = (item: any) => {
      dispatch(addToCart(item));
   };

   return (
      <section id="supplement" className="tg-shop-area pt-100 pb-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="tg-section-title text-center mb-60">
                     <span className="sub-title">RECENT PRODUCTS</span>
                     <h2 className="title">Supplement PRODUCT</h2>
                  </div>
               </div>
            </div>
            <div className="tg-shop-wrapper">
               <div className="row justify-content-center">
                  {shop_data.filter((item) => item.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className="tg-shop-item text-center">
                           <div className="tg-shop-thumb">
                              {item.discount ? <span className="discount"> -{item.discount}%</span> : ""}
                              {item.new ? <span className="new">{item.new}</span> : ""}
                              <Link href={`/shop-details/${item.id}`}><Image src={item.thumb} alt="img" /></Link>
                              <div className="tg-shop-action">
                                 <Link href={`/shop-details/${item.id}`} className="action-item"><i className="far fa-heart"></i></Link>
                                 <a style={{cursor:"pointer"}}  onClick={() => handleAddToCart(item)} className="action-item"><i className="flaticon-shopping-cart-1"></i></a>
                                 <Link href={`/shop-details/${item.id}`} className="action-item"><i className="flaticon-search"></i></Link>
                              </div>
                           </div>
                           <div className="tg-shop-content">
                              <div className="tg-shop-cat">
                                 <Link href="/shop">{item.tag}</Link>
                              </div>
                              <h4 className="title"><Link href={`/shop-details/${item.id}`}>Box Full of Muscles</Link></h4>
                              <div className="tg-shop-price"> {item.old_price ? <del>${item.old_price}</del> : ""} ${item.price}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeTwoShop
