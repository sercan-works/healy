import FooterOne from "@/layout/footer/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Link from "next/link"
import Breadcrumb from "../common/Breadcrumb"

const Error = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main>
            <Breadcrumb title="Error"/>
            <section className="eg-error__area pt-120 pb-120">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-10">
                        <div className="eg-error__content text-center">
                           <h2 className="eg-error__title">404</h2>
                           <p>&quot;Sorry, the page you are looking for could not be found&quot;</p>
                           <Link className="eg-btn" href="index.html">Back to home</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Error
