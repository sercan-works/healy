"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import product_nav_1 from "@/assets/img/products/home_shop_thumb01.png"

import product_nav_2 from "@/assets/img/products/shop-details-thumb02.png";
import product_nav_3 from "@/assets/img/products/shop-details-thumb03.png";
import product_nav_4 from "@/assets/img/products/shop-details-thumb04.png";

import product_nav_2_1 from "@/assets/img/products/shop-details-thumb01.png";
import product_nav_2_2 from "@/assets/img/products/shop-details-thumb02.png";
import product_nav_2_3 from "@/assets/img/products/shop-details-thumb03.png";
import product_nav_2_4 from "@/assets/img/products/shop-details-thumb04.png";

type productNavImg = StaticImageData[];
const product_nav_img: productNavImg = [product_nav_1, product_nav_1, product_nav_1, product_nav_1]

const product_nav_img_2: productNavImg = [product_nav_1, product_nav_1, product_nav_1, product_nav_1]

// Define a new type for the images
type ImageType = {
   src: string;
   alt: string;
};

const ShopDetailsTab = ({ images }: { images: ImageType[] }) => { // Specify the type for images
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   return (
      <div className="col-lg-6">
         <div className="inner-shop-details-flex-wrap">
            <div className="inner-shop-details-img-wrap">
               <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="item0">
                     <div className="inner-shop-details-img">
                        <Image src={images[currentImageIndex]?.src || product_nav_img[0].src} layout="responsive" objectFit="cover" width={400} height={200} alt={images[currentImageIndex]?.alt || 'Herşey Frekans'} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="inner-shop-details-nav-wrap">
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {images?.map((img, index) => (
                     <li key={index} className="nav-item">
                        <button onClick={() => setCurrentImageIndex(index)}
                           className={`nav-link ${index === currentImageIndex ? 'active' : ''}`}>
                           <Image src={img.src} layout="responsive" objectFit="cover" width={100} height={100} alt={img.alt} />
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ShopDetailsTab
