interface DataType {
   id: number;
   percentage: number;
   title: string;
   desc: string;
}

const fact_data: DataType[] = [
   {
      id: 1,
      percentage: 65,
      title: "Active Members",
      desc: "Yes we did it asap software",
   },
   {
      id: 2,
      percentage: 90,
      title: "Projects Done",
      desc: "Yes we did it asap software",
   },
   {
      id: 3,
      percentage: 80,
      title: "Get Rewards",
      desc: "Yes we did it asap software",
   },
]

import CircleProgress from '../../../hooks/Circular';
const HomeOneFactArea = ({style}:any) => {
   return (
      <section className={`fact-area ${style?"inner-fact":""}`}>
         <div className="container">
            <div className="fact-items-wrapper">
               <div className="row g-0 justify-content-center">
                  {fact_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className="fact-item">
                           <div className="chart" data-percent="65">
                              <span className="percentage"><CircleProgress finish={item.percentage} /></span>
                           </div>
                           <div className="fact-content">
                              <h4 className="title">{item.title}</h4>
                              <span>{item.desc}</span>
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

export default HomeOneFactArea
