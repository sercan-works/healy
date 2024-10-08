import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import pricingImg_1 from "@/assets/img/others/pricing_01.png"
import pricingImg_2 from "@/assets/img/others/pricing_02.png"
import pricingImg_3 from "@/assets/img/others/pricing_03.png"

import pricingPriceImg from "@/assets/img/others/pricing_bottom_img.png"

interface DataType {
   id: number;
   top_title?: string;
   smail_title: string;
   title: string;
   desc: string;
   thumb: StaticImageData;
   price: number;
   total: number;
   savings: string;
   shipping?: string;
   class_name: string;
   data_delay: string;
}

const price_data: DataType[] = [
   {
      id: 1,
      smail_title: "1 Bottle Of",
      title: "Suxnix",
      desc: "(1 x 250 veggie caps bottle)",
      thumb: pricingImg_1,
      price: 69,
      total: 69,
      savings: "Save 14%",
      class_name: "regular",
      data_delay: ".2s",
   },
   {
      id: 2,
      top_title: "★ Most Popular ★",
      smail_title: "3 Bottle Of",
      title: "Suxnix",
      desc: "(3 x 250 veggie caps bottle)",
      thumb: pricingImg_2,
      price: 59,
      total: 179,
      savings: "Save 25%",
      shipping: "+ Free Shipping",
      class_name: "popular-plan",
      data_delay: ".4s",
   },
   {
      id: 3,
      top_title: "✓ Best Value",
      smail_title: "6 Bottle Of",
      title: "Suxnix",
      desc: "(6 x 250 veggie caps bottle)",
      thumb: pricingImg_3,
      price: 49,
      total: 299,
      savings: "Save 40%",
      shipping: "+ Free Shipping",
      class_name: "best-value-plan",
      data_delay: ".6s",
   },
]

const HomeOnePricing = ({ style, inner_style }: any) => {
   return (
      <section id={style ? "pricing" : ""} className={`${style ? "pricing-area gray-bg" : "tg-pricing-area"} ${inner_style?"inner-pricing":""}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section-title text-center mb-55">
                     <p className="sub-title">.. Suxnix Plans ..</p>
                     <h2 className="title">SUPPLEMENT PACKAGES</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-wrap">
               <div className="row align-items-end justify-content-center">
                  {price_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className={`pricing-item mb-30 ${item.class_name} ${style ? "" : "wow fadeInUp"}`} data-wow-delay={style ? "" : item.data_delay}>
                           {item.top_title ? <div className="pricing-title text-center mb-10">
                              <h4 className="title">{item.top_title}</h4>
                           </div> : ""
                           }
                           <div className="pricing__box text-center">
                              <div className="pricing-hade">
                                 <span>{item.smail_title}</span>
                                 <h3 className="title">{item.title}</h3>
                                 <p>{item.desc}</p>
                              </div>
                              <div className="pricing-img">
                                 <Image src={item.thumb} alt="img" />
                              </div>
                              <div className="pricing-price">
                                 <h4 className="price">${item.price}</h4>
                                 <span>per <br /> bottle</span>
                              </div>
                              <h5 className="total">(${item.total} TOTAL)</h5>
                              <div className="price-savings">
                                 <h4 className="save">{item.savings}</h4>
                                 <span>{item.shipping}</span>
                              </div>
                              <div className="pricing-btn mb-15">
                                 <Link href="/contact">Buy Now <span>365 Day Full Money Back Guaranteed</span></Link>
                              </div>
                              <div className="bottom-img">
                                 <Image src={pricingPriceImg} alt="img" />
                              </div>
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

export default HomeOnePricing
