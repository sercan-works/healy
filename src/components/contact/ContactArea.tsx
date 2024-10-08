interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "far fa-map",
      title: "Office Address",
      info: (<>99 NY Address Street, Brooklyn, United State</>),
   },
   {
      id: 2,
      icon: "fas fa-phone",
      title: "Phone Number",
      info: (<>875 7556 464 7658 <br /> 765 648 567 98</>),
   },
   {
      id: 3,
      icon: "fas fa-globe",
      title: "Web Connect",
      info: (<>info@suxnixmail.com <br /> suxnixexample.com</>),
   },
]

const ContactArea = () => {
   return (
      <section className="contact-area">
         <div className="container">
            <div className="contact-box-wrapper">
               <div className="row justify-content-center">
                  {contact_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                        <div className="contact-box">
                           <div className="contact-icon">
                              <span className="overlay-icon"><i className="fas fa-check"></i></span>
                              <i className={item.icon}></i>
                           </div>
                           <div className="contact-content">
                              <h5 className="title">{item.title}</h5>
                              <p className="contact-desc">{item.info}</p>
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

export default ContactArea
