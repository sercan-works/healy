"use client"
import HeaderOne from "@/layout/headers/HeaderOne"
import HomeOneBanner from "./HomeOneBanner"
import Brand from "@/components/common/Brand"
import HomeOneFeature from "./HomeOneFeature"
import HomeOnefeatureProduct from "./HomeOnefeatureProduct"
import HomeOneVideoArea from "./HomeOneVideoArea"
import HomeOneIngredient from "./HomeOneIngredient"
import HomeOneFormula from "./HomeOneFormula"
import HomeOnePricing from "./HomeOnePricing"
import HomeOneTestimonial from "./HomeOneTestimonial"
import HomeOneBlog from "./HomeOneBlog"
import FooterOne from "@/layout/footer/FooterOne"
import HomeOneFactArea from "./HomeOneFactArea"
import HomeOneShop from "./HomeOneShop"
import WhatsAppButton from "@/components/common/WhatsAppButton"
import { useEffect } from "react"
import { scrapeHealyProducts } from "../../../../actions/scrape-products"

const HomeOne = () => {
//   const fetchProduct = async () => {
//     try {
//       const product = await scrapeHealyProducts("https://eu.healy.shop/product/healy-resonance-plus-edition/")
//       console.log(product)
//     } catch (error) {
//       console.log(error)
//     }
//   }

// useEffect(() => {
//     try {
//       fetchProduct()
//     } catch (error) {
//       console.log(error)
//     }
// }, []);

  
  return (
    <>
      <HeaderOne style={false} />
      <main className="main-area fix">
        <HomeOneBanner />
        <Brand style={false} />
        <HomeOneFeature style={false} />
        <HomeOnefeatureProduct style={false} />
        <HomeOneShop style={false} inner_style={false} />
        <HomeOneVideoArea />
        {/* <HomeOneFactArea style={false} /> */}
        {/* <HomeOneIngredient /> */}
        {/* <HomeOneFormula /> */}
        {/* <HomeOnePricing style={true} inner_style={false} /> */}
        {/* <HomeOneTestimonial /> */}
        {/* <HomeOneBlog /> */}

      </main>
      <FooterOne style={true} />
    </>
  )
}

export default HomeOne
