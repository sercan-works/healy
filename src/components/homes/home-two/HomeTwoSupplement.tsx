import Image from "next/image"
import Link from "next/link"

import supplementImg from "@/assets/img/others/supplement_img.png"
import supplementShape from "@/assets/img/others/supplement_shape02.png"

const HomeTwoSupplement = () => {
   return (
      <section id="ingredient" className="tg-supplement-area pt-120 pb-120">
         <div className="tg-supplement-bg"></div>
         <div className="container">
            <div className="tg-supplement-inner">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 order-0 order-lg-2">
                     <div className="tg-supplement-img text-end  wow fadeInRight" data-wow-delay=".2s">
                        <Image src={supplementImg} alt="" />
                     </div>
                     <div className="tg-supplement-shape">
                        <Image src={supplementShape} alt="" className="rotateme" />
                     </div>
                  </div>
                  
                  <div className="col-lg-6">
                     <div className="tg-supplement-content mt-60 wow fadeInLeft" data-wow-delay=".2s">
                        <div className="tg-section-title mb-25">
                           <span className="sub-title">ingredients</span>
                           <h2 className="title">growth promoter <br /> supplement</h2>
                        </div>
                        <p>Vitamin Ipsum is simply dummy text of the printing and tysetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the when an unknown printer took a galley.</p>
                        <Link href="/shop" className="tg-btn view-btn">VIEW more</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeTwoSupplement
