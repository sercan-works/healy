import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"
import CheckoutArea from "./CheckoutArea";

const Checkout = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Checkout" />
            <CheckoutArea/>
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Checkout;
