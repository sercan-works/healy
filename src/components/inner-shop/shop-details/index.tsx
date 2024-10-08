import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"
import ShopDetailsArea from "./ShopDetailsArea";

const ShopDetails = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Shop Details" />
            <ShopDetailsArea />
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default ShopDetails;
