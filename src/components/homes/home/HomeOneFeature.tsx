import Image from "next/image";

import featureImg_1 from "@/assets/img/others/features_img.png";
import { MdAnalytics } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiLightningFrequency } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbMoodHappy } from "react-icons/tb";

interface DataType {
   id: number;
   icon: React.ReactNode;
   title: string;
   desc: JSX.Element;
}[]

const featureData: DataType[] = [
   {
      id: 1,
      icon: <IoAnalyticsOutline />,
      title: "Analiz Et",
      desc: (<>Cep Telefonunuza yükleyeceğiniz Healy yazılımı ile kolayca kendini analiz et.</>)
   },
   {
      id: 2,
      icon: <GiLightningFrequency />,
      title: "Frekans Gönder",
      desc: (<>Analiz aşamasında çıkan sonuçlara göre cihazınızın size gönderdiği frekansı kullanarak ruhsal ve fiziksel rahatlama hissi yaşayın.</>)
   },
   {
      id: 3,
      icon: <FaHandHoldingHeart />,
      title: "Frekanslarını Sevdiklerinle Paylaş",
      desc: (<>Bu mucizevi frekansları herkes ile paylaşabilirsin, zaman ve mekan sınırlaması yok :)</>)
   },
   {
      id: 4,
      icon: <TbMoodHappy />,
      title: "Farkındalıklı bir hayata hazır ol",
      desc: (<>Bundan sonra hayatın eskisi gibi olmayacak, daha sağlık, daha enerjili, daha mutlu ...</>)
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
                                   {item.icon}
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
