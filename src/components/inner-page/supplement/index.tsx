import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import HomeTwoService from "@/components/homes/home-two/HomeTwoService";
import HomeTwoShopDetails from "@/components/homes/home-two/HomeTwoShopDetails";
import HomeOneShop from "@/components/homes/home/HomeOneShop";

const Supplement = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main className="fix">
        <Breadcrumb title="Supplement" />
        <HomeTwoService style={true} style_2={true} />
        <HomeTwoShopDetails />
        <HomeOneShop inner_style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default Supplement;
