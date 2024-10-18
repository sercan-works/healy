import Ingredient from "@/components/inner-page/ingredients/ingredient-one";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Healy Programları - Herşey Frekans",
};
const index = () => {
   return (
      <Wrapper>
         <Ingredient />
      </Wrapper>
   )
}

export default index
