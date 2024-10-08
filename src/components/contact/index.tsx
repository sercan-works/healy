import HeaderOne from "@/layout/headers/HeaderOne"
import Breadcrumb from "../common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"

const Contact = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main>
            <Breadcrumb title="Contact" />
            <ContactArea/>
            <ContactMap/>
         </main>
         <FooterOne style={true} />
      </>
   )
}

export default Contact
