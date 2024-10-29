import Error from "@/components/error/Index";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "404 error || Herşey Frekans",
};
const index = () => {
   return (
      <Wrapper>
         <Error />
      </Wrapper>
   )
}

export default index
