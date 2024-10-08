import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"
import ShopArea from "./ShopArea";

const Shop = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Our Shop" />
            <ShopArea />
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Shop;
