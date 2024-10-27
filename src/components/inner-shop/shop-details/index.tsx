import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"
import ShopDetailsArea from "./ShopDetailsArea";

const ShopDetails = () => {
   const single_product = {}; // Define single_product here

   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Shop Details" />
            {/* <ShopDetailsArea single_product={single_product} /> */}
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default ShopDetails;
