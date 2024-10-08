import HeaderTwo from "@/layout/headers/HeaderTwo"
import HomeTwoBanner from "./HomeTwoBanner"
import HomeTwoFeature from "./HomeTwoFeature"
import HomeTwoSupplement from "./HomeTwoSupplement"
import HomeTwoVideoArea from "./HomeTwoVideoArea"
import HomeTwoService from "./HomeTwoService"
import HomeOnePricing from "../home/HomeOnePricing"
import HomeTwoBlog from "./HomeTwoBlog"
import FooterTwo from "@/layout/footer/FooterTwo"
import HomeTwoTestimonial from "./HomeTwoTestimonial"
import HomeTwoShopDetails from "./HomeTwoShopDetails"
import HomeTwoShop from "./HomeTwoShop"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo style={false} />
         <main className="main-area fix">
            <HomeTwoBanner />
            <HomeTwoFeature />
            <HomeTwoSupplement />
            <HomeTwoVideoArea />
            <HomeTwoShop/>
            <HomeTwoService style={false} style_2={false} />
            <HomeTwoShopDetails />
            <HomeOnePricing style={false} inner_style={false} />
            <HomeTwoTestimonial />
            <HomeTwoBlog />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeTwo
