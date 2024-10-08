import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Blog Details" />
            <BlogDetailsArea/>
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default BlogDetails
