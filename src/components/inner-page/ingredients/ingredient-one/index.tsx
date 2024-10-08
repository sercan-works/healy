import HeaderOne from "@/layout/headers/HeaderOne"
import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOneIngredient from "@/components/homes/home/HomeOneIngredient";
import HomeOneFactArea from "@/components/homes/home/HomeOneFactArea";
import HomeOneShop from "@/components/homes/home/HomeOneShop";

const IngredientOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main className="fix">
        <Breadcrumb title="Ingredient" />
        <HomeOneFactArea style={true} />
        <HomeOneIngredient />
        <HomeOneShop inner_style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default IngredientOne;
