import testi_data from "@/data/TestimonialData"
import Image from "next/image"

const HomeTwoTestimonial = () => {
   return (
      <section className="tg-testimonial-area tg-testimonial-bg jarallax parallax-img">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="tg-section-title white text-center mb-60">
                     <span className="sub-title">recommend doctors</span>
                     <h2 className="title white-text">recommended by doctors</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-xxl-10 col-xl-11">
                  <div className="row">
                     {testi_data.filter((item) => item.page === "home_2").map((item) => (
                        <div key={item.id} className="col-lg-6">
                           <div className="tg-testimonial-item">
                              <div className="tg-testimonial-thumb">
                                 <Image src={item.avatar} alt="" />
                              </div>
                              <div className="tg-testimonial-content">
                                 <div className="rating">
                                    {item.rating.map((rating, i) => (<i key={i} className={rating}></i>))}
                                 </div>
                                 <h2 className="title">{item.title}</h2>
                                 <p>{item.desc}</p>
                                 <p className="tg-testi-avatar-info">{item.avatar_name} <span>2 hours ago</span></p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeTwoTestimonial
