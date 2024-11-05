import Blog from "@/components/blogs/blog";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Blog - Healy",
  description: "Healy Blog Sayfası",
  keywords: "Healy Blog Sayfası",
  author: "Healy",
  robots: "index, follow",
  url: "https://healy.com.tr/blog",
  
};
const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default index
