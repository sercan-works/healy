"use client"
import shop_data from "@/data/ShopData"
import { addToCart } from "@/redux/features/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { Rating } from "react-simple-star-rating"
import Slider from "react-slick"

const CustomPrevArrow = (props: any) => {
   const { onClick } = props;
   return (
      <button onClick={onClick} type="button" className="slick-prev slick-arrow" ><i className="flaticon-left-arrow"></i></button>
   );
};

const CustomNextArrow = (props: any) => {
   const { onClick } = props;
   return (
      <button onClick={onClick} type="button" className="slick-next slick-arrow"><i className="flaticon-right-arrow"></i></button>
   );
};

const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: <CustomPrevArrow />,
   nextArrow: <CustomNextArrow />,
   responsive: [
      {
         breakpoint: 1500,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
         }
      },
   ]
}

const HomeOneShop = ({ style, inner_style }: any) => {

   const dispatch = useDispatch()
   const handleAddToCart = (item: any) => {
      dispatch(addToCart(item));
   };

   return (
      <section className={`home-shop-area ${inner_style?"inner-home-shop":""}`}>
         <div className="container">
            <div className="related-products-wrap">
               {style ? <h1 className="title">DİĞER HEALY FREKANS CİHAZLARI</h1> : ""}
               <Slider {...settings} className="row home-shop-active">
                  {shop_data.filter((item) => item.page === "home_1").map((item) => (
                     <div key={item.id} className="col-xl-3">
                        <div className="home-shop-item">
                           <div className="home-shop-thumb">
                              <Link href={`/shop-details/${item.id}`}>
                                 <Image src={(item.images_link && item.images_link[0]?.src) || item.thumb} alt={(item.images_link && item.images_link[0]?.alt) || "img"} />
                                 {item.discount ? <span className="discount"> -{item.discount}%</span> : ""}
                              </Link>
                              <div className={`shop-thumb-shape ${item.class_name}`}></div>
                           </div>
                           <div className="home-shop-content">
                              <h1 className="title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h1>
                              <span className="home-shop-price">{item.price}₺</span>
                              {/* <div className="home-shop-rating">
                                 <Rating initialValue={item.rating} size={20} readonly={true} />
                                 <span className="total-rating">({item.total_rating})</span>
                              </div> */}
                              <div className="shop-content-bottom">
                                 {/* <a style={{cursor:"pointer"}} onClick={() => handleAddToCart(item)} className="cart"><i className="flaticon-shopping-cart-1"></i></a> */}
                                 {/* <Link href={`/shop-details/${item.id}`} className="eg-btn btn-two flex mx-auto">Satın Al</Link> */}
                                 <Link href={`/shop-details/${item.id}`} target="_blank" className=" flex mx-auto text-white fpont-bold bg-rose-500 py-2 px-5 rounded-xl">İncele</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   )
}

export default HomeOneShop
