import Link from "next/link";

interface DataType {
   id: number;
   data_delay: string;
   icon: string;
   title: string;
   desc: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      data_delay: ".2s",
      icon: "flaticon-supplement",
      title: "Calorie Build Up",
      desc: (<>A dietary supplement manfactured supplement thats diets.</>),
   },
   {
      id: 2,
      data_delay: ".4s",
      icon: "flaticon-whey-protein-3",
      title: "Regular Routine",
      desc: (<>A dietary supplement manfactured supplement thats diets.</>),
   },
   {
      id: 3,
      data_delay: ".6s",
      icon: "flaticon-strong-1",
      title: "Energy Grow Up",
      desc: (<>A dietary supplement manfactured supplement thats diets.</>),
   },
]
const HomeTwoFeature = () => {
   return (
      <section className="tg-features-area">
         <div className="container">
            <div className="tg-features-inner">
               <div className="row justify-content-center">
                  {feature_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay={item.data_delay}>
                        <div className="tg-features-item">
                           <div className="tg-features-icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="tg-features-content">
                              <h4 className="title">{item.title}</h4>
                              <p>{item.desc}</p>
                              <Link href="/contact">Learn more</Link>
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

export default HomeTwoFeature
