import Link from "next/link"
import Image from "next/image"

import breadcrumbShape_1 from "@/assets/img/others/video_shape01.png"
import breadcrumbShape_2 from "@/assets/img/others/video_shape02.png"

const Breadcrumb = ({ title }: any) => {
   return (
      <section className="breadcrumb-area breadcrumb-bg">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="breadcrumb-content text-center">
                     <h2 className="title">{title}</h2>
                     <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                        <ul className="breadcrumb">
                           <li className="breadcrumb-item trail-item trail-begin">
                              <Link href="/"><span>Home</span></Link>
                           </li>
                           <li className="breadcrumb-item trail-item trail-end"><span>{title}</span></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div className="video-shape one"><Image src={breadcrumbShape_1} alt="shape" /></div>
         <div className="video-shape two"><Image src={breadcrumbShape_2} alt="shape" /></div>
      </section>
   )
}

export default Breadcrumb
