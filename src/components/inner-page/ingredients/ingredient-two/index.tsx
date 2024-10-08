import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeTwoSupplement from "@/components/homes/home-two/HomeTwoSupplement";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import HomeTwoVideoArea from "@/components/homes/home-two/HomeTwoVideoArea";
import HomeTwoShop from "@/components/homes/home-two/HomeTwoShop";

const IngredientTwo = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main className="fix">
        <Breadcrumb title="Ingredient Two" />
        <HomeTwoSupplement  />
        <HomeTwoVideoArea/>
        <HomeTwoShop/>
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default IngredientTwo;
