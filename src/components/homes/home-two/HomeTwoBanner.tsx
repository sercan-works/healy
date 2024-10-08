import Image from "next/image";
import Link from "next/link";

import BannerThumb from "@/assets/img/banner/banner_img.png";

const HomeTwoBanner = () => {

  return (
    <section className="tg-banner-area banner-bg jarallax parallax-img">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
            <div className="tg-banner-img text-center wow fadeInRight" data-wow-delay=".6s">
              <Image src={BannerThumb} alt="img" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="tg-banner-content">
              <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">Increased Energy!</h4>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">Mix Protein Way <br /> To Growth</h2>
              <p className=" wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of lorem ipsum majority have suffered alteration in some.</p>
              <div className="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                <Link href="/shop-details" className="tg-btn">purchase now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoBanner;
