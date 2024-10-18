import Checkout from "@/components/inner-shop/checkout";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Healy Ürünleri - Sipariş",
};
const index = () => {
   return (
      <Wrapper>
         <Checkout />
      </Wrapper>
   )
}

export default index
