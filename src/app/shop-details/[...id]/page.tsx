import Breadcrumb from "@/components/common/Breadcrumb";
import ShopDetailsArea from "@/components/inner-shop/shop-details/ShopDetailsArea";
import shop_data from "@/data/ShopData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

export const metadata = {
  title: "Shop Details Suxnix - Health Supplement React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {

  const products = shop_data.filter(items => items.page === "shop");
  const single_product = products.find((item) => Number(item.id) === Number(params.id));

  return (
    <Wrapper>
      <HeaderOne style={true} />
      <main className="main-area fix">
        <Breadcrumb title="Shop Details" />
        <ShopDetailsArea single_product={single_product} key={single_product?.id} />
      </main>
      <FooterOne style={false} />
    </Wrapper>
  )
}

export default index
