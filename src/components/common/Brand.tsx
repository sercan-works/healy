"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import Slider from "react-slick";

import brandImg_1 from "@/assets/img/brand/brand_01.png"
import brandImg_2 from "@/assets/img/brand/brand_02.png"


const brandData: StaticImageData[] = [brandImg_1, brandImg_2,]

// slider setting
const setting = {
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 6,
   slidesToScroll: 2,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
         }
      },
   ]
};

const Brand = ({ style }: any) => {

   return (
      <section className={`brand-area ${style ? "inner-brand" : ""}`}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="brand-title text-center mb-50">
                     <p className="title">Healy Frekans Cihazı ile kendine en iyi yatırımı yapmanın tam zamanı. Hemen şimdi kampanyalardan faydalan!</p>
                  </div>
               </div>
            </div>
            {/* <Slider {...setting} className="row brand-active">
               {brandData.map((brand, i) => (
                  <div key={i} className="col-2">
                     <div className="brand-item">
                        <Link href="#"><Image src={brand} alt="brand" /></Link>
                     </div>
                  </div>
               ))}
            </Slider> */}
            <div className="flex flex-col md:flex-row justify-around gap-2 mx-5">
               <Image className="w-[50vh] rounded-lg ring-2 ring-secondary shadow-lg" src={brandImg_1} alt="healy taksit" />
               <Image className="w-[50vh] rounded-lg ring-2 ring-secondary shadow-lg" src={brandImg_2} alt="healy iade" />
            </div>
         </div>
      </section>
   )
}

export default Brand
