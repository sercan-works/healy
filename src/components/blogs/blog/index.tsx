import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footer/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Our Blog" />
            <BlogArea/>
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Blog
