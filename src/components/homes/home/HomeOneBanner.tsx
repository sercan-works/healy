
import Image from 'next/image'
import Link from 'next/link'

import bannerImg_1 from '@/assets/img/banner/banner_img01.png'
import bannerImg_2 from '@/assets/img/banner/banner_round_bg.png'

import bannerShape_1 from '@/assets/img/banner/banner_shape01.png'
import bannerShape_2 from '@/assets/img/banner/banner_shape02.png'
import bannerShape_3 from '@/assets/img/banner/banner_shape03.png'
import bannerShape_4 from '@/assets/img/banner/banner_shape04.png'

const HomeOneBanner = () => {
   return (
      <section className="banner-area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
                  <div className="banner-content text-center">
                     <p className="banner-caption">.. FREKANSIN GÜCÜNÜ KEŞFET ..</p>
                     <h2 className="title">Ruhunun <span className='text-secondary'>enerjisini</span> keşfet <span className='text-secondary'>potansiyelini</span> açığa çıkar.</h2>
                     <Link href="/shop" className="eg-btn btn-two">Healy&apos;i Keşfet</Link>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="banner-images text-center flex justify-center items-center">
                     <Image src={bannerImg_1} alt="img" className="main-img" />
                     <Image src={bannerImg_2} alt="img" className="bg-shape" />
                  </div>
               </div>
            </div>
         </div>
         
         <div className="banner-shape one">
            <Image src={bannerShape_1} alt="shape" className="wow bannerFadeInLeft" data-wow-delay=".2s" data-wow-duration="2s" />
         </div>
         <div className="banner-shape two">
            <Image src={bannerShape_2} alt="shape" className="wow bannerFadeInRight" data-wow-delay=".2s" data-wow-duration="2s" />
         </div>
         <div className="banner-shape three">
            <Image src={bannerShape_3} alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" />
         </div>
         <div className="banner-shape four">
            <Image src={bannerShape_4} alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" />
         </div>
      </section>
   )
}

export default HomeOneBanner
