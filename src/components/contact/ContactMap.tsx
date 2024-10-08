import ContactForm from "../forms/ContactForm"

const ContactMap = () => {
   return (
      <section className="contact-form-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div id="contact-map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd" allowFullScreen loading="lazy"></iframe>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="contact-form-wrap">
                     <div className="section-title mb-50">
                        <p className="sub-title">.. request make ..</p>
                        <h2 className="title">Asked Anything You <br /> Want To Know</h2>
                     </div>
                     <ContactForm/>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactMap
