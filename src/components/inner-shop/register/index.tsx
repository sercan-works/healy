import Breadcrumb from "@/components/common/Breadcrumb"
import LogingArea from "@/components/common/LoginArea";
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"

const Register = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Register" />
            <LogingArea style={true} />
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Register;
