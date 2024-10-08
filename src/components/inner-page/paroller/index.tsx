import HeaderOne from "@/layout/headers/HeaderOne"
import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOnefeatureProduct from "@/components/homes/home/HomeOnefeatureProduct";
import HomeOneShop from "@/components/homes/home/HomeOneShop";

const Paroller = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main className="fix">
        <Breadcrumb title="Inner Product" />
        <HomeOnefeatureProduct style={true} />
        <HomeOneShop style={true} inner_style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default Paroller;
