import HeaderOne from "@/layout/headers/HeaderOne"
import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOnePricing from "@/components/homes/home/HomeOnePricing";
import Brand from "@/components/common/Brand";
import HomeOneFormula from "@/components/homes/home/HomeOneFormula";
import HomeOneShop from "@/components/homes/home/HomeOneShop";

const Pricing = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main className="fix">
        <Breadcrumb title="Pricing Area" />
        <Brand style={true} />
        <HomeOneFormula/>
        <HomeOnePricing style={true} inner_style={true}  />
        <HomeOneShop style={true} inner_style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default Pricing;
