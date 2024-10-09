import Link from "next/link";
import { FaCheck, FaGears, FaHeadSideVirus, FaStudiovinari } from "react-icons/fa6";
import React from "react";
import { IoBodyOutline } from "react-icons/io5";
import { GiHeartInside } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";

interface ServiceItem {
   id: number;
   icon: React.ReactNode;
   title: string;
   desc: React.ReactNode;
}

const serviceItems: ServiceItem[] = [
   {
      id: 1,
      icon: <FaGears />,
      title: "Genel Prensibi",
      desc: <>Frekans terapisi, hücrelerin sağlıklı bir şekilde çalışmasını desteklemek için vücuda enerji gönderme prensibine dayanır.</>,
   },
   {
      id: 2,
      icon: <FaStudiovinari />,
      title: "Rahatlama Hissi",
      desc: (<>Healy cihazı, vücuttaki hücrelerin rezonansını veya enerjisini dengelemeyi amaçlar. Bu denge, hücrelerin sağlıklı bir şekilde çalışmasını sağlar.</>),
   },
   {
      id: 3,
      icon: <FaHeadSideVirus />,
      title: "Stresi Hafifletme",
      desc: (<>Healy kullanıcılarının %87&apos;si stresi dengelemek için kullanıyor.</>),
   },
   {
      id: 4,
      icon: <IoBodyOutline />,
      title: "Fiziksel Dönüşümler",
      desc: (<>Fitness, enerji, güzellik ve birçok fiziksel konuda enerji alınıza müdahele eder.</>),
   },
   {
      id: 5,
      icon: <GiHeartInside />,
      title: "Genel Esenliğin Sağlanması",
      desc: (<>Fizikselin yanı sıra mental sağlık üzerinde büyük etkisi vardır. Sonuçta herşey frekanstır.</>),
   },
   {
      id: 6,
      icon: <MdOutlinePets />,
      title: "Hayvanlar ve Diğer Herşey",
      desc: (<>Hayvan dostlarımızın yada maddenin enerji alanına odaklanarak negatif frekansları dengeler.</>),
   },
]

const HomeTwoService = ({ style, style_2 }: any) => {
   return (
      <section id="feature" className={`tg-service-area ${style ? "inner-service" : ""} ${style_2 ? "inner-service-padding" : ""}`}>
         <div className="container">
            <div className="tg-service-inner">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="tg-section-title text-center mb-60">
                        <span className="sub-title">Healy Nedir ?</span>
                        <h2 className="title">GENEL ÖZELLİKLER</h2>
                     </div>
                  </div>
               </div>
               
               <div className="row justify-content-center">
                  {serviceItems.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className="tg-service-item">
                           <div className="tg-services-count">0{item.id}</div>
                           <div className="icon">
                              {/* <i className={item.icon}></i> */}
                              {item.icon}
                           </div>
                           <h2 className="title"><Link href="contact.html">{item.title}</Link></h2>
                           <div className="tg-service-content">
                              <p>{item.desc}</p>
                              <Link href="/contact"><i className="fas fa-plus"></i>Daha Fazla Bilgi</Link>
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

export default HomeTwoService
