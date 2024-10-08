import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb"
import blog_data from "@/data/BlogData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footer/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"

export const metadata = {
   title: "Blog Details Suxnix - Health Supplement React Next js Template",
};

const index = ({ params }: { params: { id: number } }) => {

   const blogs = blog_data.filter(items => items.page === "blog");
   const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Blog Details" />
            <BlogDetailsArea  single_blog={single_blog} key={single_blog?.id} />
         </main>
         <FooterOne style={false} />
      </Wrapper>
   )
}

export default index;
