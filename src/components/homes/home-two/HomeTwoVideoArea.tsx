"use client"
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import Video_img from "@/assets/img/others/video_img.jpg"
import Link from "next/link";

interface contentData {
   sub_title: string;
   title: string;
   desc_1: JSX.Element
   desc_2: JSX.Element
}
const video_content: contentData = {
   sub_title: "promotional",
   title: "How to Work Suxnix vitamin capsule",
   desc_1: (<>Vitamin Ipsum is simply dummy text of the printing and tysetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the when an unknown.</>),
   desc_2: (<>printing and tysetting industry. Lorem ipsum has been thindustry&apos;s standard dummy text ever since the when an unknown.</>)
}
const { sub_title, title, desc_1, desc_2 } = video_content;

const HomeTwoVideoArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="tg-video-area tg-video-bg jarallax parallax-img">
            <div className="container">
               <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-8">
                     <div className="tg-video-img wow fadeInLeft" data-wow-delay=".2s">
                        <Image src={Video_img} alt="" />
                        <a style={{cursor:"pointer"}} onClick={() => setIsVideoOpen(true)} className="play-btn popup-video">
                           <i className="fas fa-play"></i></a>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-8">
                     <div className="tg-video-content wow fadeInRight" data-wow-delay=".2s">
                        <div className="tg-section-title white mb-30">
                           <span className="sub-title">{sub_title}</span>
                           <h2 className="title white-text">{title}</h2>
                        </div>
                        <p className="info-one">{desc_1}</p>
                        <p className="info-two">{desc_2}</p>
                        <Link href="/shop" className="tg-btn">VIEW more</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
         {/* video modal end */}
      </>
   )
}

export default HomeTwoVideoArea
