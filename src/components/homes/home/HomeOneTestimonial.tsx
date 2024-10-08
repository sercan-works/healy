"use client"
import testi_data from "@/data/TestimonialData";
import Image from "next/image";
import Slider from 'react-slick'

const CustomPrevArrow = (props: any) => {
   const { onClick } = props;
   return (
      <button onClick={onClick} type="button" className="slick-prev slick-arrow"><i className="flaticon-left-arrow"></i></button>
   );
};

const CustomNextArrow = (props: any) => {
   const { onClick } = props;
   return (
      <button onClick={onClick} type="button" className="slick-next slick-arrow"><i className="flaticon-right-arrow"></i></button>
   );
};

const HomeOneTestimonial = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
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

   return (
      <section className="testimonial-area testimonial-bg" style={{ backgroundImage: `url(/assets/img/bg/testimonial_bg.jpg)` }}>
         <div className="testimonial-overlay"></div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-8 col-xl-9 col-lg-11">
                  <Slider {...settings} className="testimonial-active">
                     {testi_data.filter((item) => item.page === "home_1").map((item) => (
                        <div key={item.id} className="testimonial-item text-center">
                           <div className="testimonial-rating">
                              {item.rating.map((rating, i) => (
                                 <i key={i} className={rating}></i>
                              ))}
                           </div>
                           <p>{item.desc}</p>
                           <div className="testimonial-avatar-wrap">
                              <div className="testi-avatar-img">
                                 <Image src={item.avatar} alt="img" />
                              </div>
                              <div className="testi-avatar-info">
                                 <h5 className="name">{item.avatar_name}</h5>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeOneTestimonial
