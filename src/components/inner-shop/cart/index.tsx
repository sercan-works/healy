import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"
import CartArea from "./CartArea";

const Cart = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Cart" />
            <CartArea/>
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Cart;
