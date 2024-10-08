import HeaderOne from "@/layout/headers/HeaderOne"
import FooterOne from "@/layout/footer/FooterOne"
import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOneFeature from "@/components/homes/home/HomeOneFeature";
import Brand from "@/components/common/Brand";
import HomeTwoService from "@/components/homes/home-two/HomeTwoService";

const Feature = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <Breadcrumb title="Features" />
        <Brand style={true} />
        <HomeTwoService style={true} style_2={false} />
        <HomeOneFeature style={true} />
      </main>
      <FooterOne style={true} />
    </>
  )
}

export default Feature;
