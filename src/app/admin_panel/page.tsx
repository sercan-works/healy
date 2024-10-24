import Wrapper from "@/layout/Wrapper";
import ProductAdd from "./ProductAdd";
import ProductsPanel from "./ProductsPanel";

export const metadata = {
  title: "Admin Paneli",
};
const index = () => {
  return (
    <Wrapper>
        <ProductsPanel/>
    </Wrapper>
  )
}

export default index
