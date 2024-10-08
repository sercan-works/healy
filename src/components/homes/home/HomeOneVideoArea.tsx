"use client"
import VideoPopup from '@/modals/VideoPopup';
import { useState } from 'react';
import Image from "next/image"

import videoShape_1 from "@/assets/img/others/video_shape01.png"
import videoShape_2 from "@/assets/img/others/video_shape02.png"

const HomeOneVideoArea = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="video-area video-bg" style={{ backgroundImage: `url(/assets/img/bg/video_bg.jpg)` }}>
                <div className="video-bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-btn">
                                <a style={{cursor:"pointer"}} onClick={() => setIsVideoOpen(true)} className="popup-video ripple-white">
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-shape one"><Image src={videoShape_1} alt="shape" /></div>
                <div className="video-shape two"><Image src={videoShape_2} alt="shape" /></div>
            </div>
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

export default HomeOneVideoArea
