import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface DataType {
   id: number;
   icon: React.ReactNode;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: <FaInstagram />,
      title: "INSTAGRAM",
      info: (<><Link href="https://www.instagram.com/sercan_healy/?igsh=MXA1ZmI5bjY2aXM1dg%3D%3D" target="_blank">Profile git</Link></>),
   },
   {
      id: 2,
      icon: <FaWhatsapp />,
      title: "WHATSAPP",
      info: (<><Link href="https://wa.me/905516926848" target="_blank">Sohbete Başla</Link></>),
   },
   {
      id: 3,
      icon: <CiMail />,
      title: "MAIL",
      info: (<>herseyfrekans@gmail.com</>),
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
                              {item.icon}
                           </div>
                           <div className="contact-content">
                              <h1 className="title">{item.title}</h1>
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
