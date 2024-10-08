import Link from "next/link";

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: JSX.Element;
}

const service_data: DataType[] = [
   {
      id: 1,
      icon: "flaticon-vitamins-1",
      title: "Dietary Supplement",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
   },
   {
      id: 2,
      icon: "flaticon-supplement",
      title: "Formula Innovative",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
   },
   {
      id: 3,
      icon: "flaticon-vitamins",
      title: "Protein Capsule",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
   },
   {
      id: 4,
      icon: "flaticon-protein-2",
      title: "Nutrients Provide",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
   },
   {
      id: 5,
      icon: "flaticon-tape-measure",
      title: "Food Synthetic",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
   },
   {
      id: 6,
      icon: "flaticon-abs-1",
      title: "Supplement Manual",
      desc: (<>Dmnis iste natus error sit voluptatem accusantium dolore laudantium rem voluptatem sit aperiam.</>),
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
                        <span className="sub-title">Suxnix Features</span>
                        <h2 className="title">Supplement Features</h2>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center">
                  {service_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className="tg-service-item">
                           <div className="tg-services-count">0{item.id}</div>
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <h2 className="title"><Link href="contact.html">{item.title}</Link></h2>
                           <div className="tg-service-content">
                              <p>{item.desc}</p>
                              <Link href="/contact"><i className="fas fa-arrow-circle-right"></i>Read More</Link>
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
