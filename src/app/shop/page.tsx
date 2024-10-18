import Shop from "@/components/inner-shop/shop";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Healy Ürünleri - Alışveriş",
};
const index = () => {
   return (
      <Wrapper>
         <Shop />
      </Wrapper>
   )
}

export default index
