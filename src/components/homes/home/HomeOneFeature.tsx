import Image from "next/image";

import featureImg_1 from "@/assets/img/others/features_img.png";

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: JSX.Element;
}[]

const featureData: DataType[] = [
   {
      id: 1,
      icon: "flaticon-tape-measure",
      title: "Multi Fruits Flavour",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 2,
      icon: "flaticon-test",
      title: "Flower Formula",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 3,
      icon: "flaticon-weight",
      title: "Fishbone Diagram",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 4,
      icon: "flaticon-abs",
      title: "100% Fat Blasting",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
]

const    HomeOneFeature = ({style}:any) => {
   return (
      <section id="features" className={`features-area features-bg ${style?"inner-feature":""}`} style={{ backgroundImage: `url(/assets/img/bg/features_bg.jpg)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 col-lg-5 order-0 order-lg-2">
                  <div className="features-img wow featuresRollOut" data-wow-delay=".3s">
                     <Image src={featureImg_1} alt="" className="rounded-full"/>
                  </div>
               </div>
               <div className="col-xxl-6 col-lg-7">
                  <div className="features-items-wrap">
                     <div className="row justify-content-center">
                        {featureData.map((item) => (
                           <div key={item.id} className="col-md-6 col-sm-8">
                              <div className="features-item">
                                 <div className="features-icon">
                                    <i className={item.icon}></i>
                                 </div>
                                 <div className="features-content">
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeOneFeature
