import HeaderOne from "@/layout/headers/HeaderOne"
import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOneIngredient from "@/components/homes/home/HomeOneIngredient";
import HomeOneFactArea from "@/components/homes/home/HomeOneFactArea";
import HomeOneShop from "@/components/homes/home/HomeOneShop";
import Programs from "./Programs";

const IngredientOne = () => {
  const metadata = {
    title: "Healy Programları - Herşey Frekans",
    description: "Healy Programları sayfası",
    keywords: "Healy Programları sayfası",
    url: "https://hersayfrekans.com/healy-programları"

  };
  return (
    <>
      <HeaderOne style={true} />
      <main className="fix">
        <Breadcrumb title="HEALY PROGRAMLARI" />
        {/* <HomeOneFactArea style={true} /> */}
        {/* <HomeOneIngredient /> */}
        <Programs />
        <HomeOneShop inner_style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default IngredientOne;
