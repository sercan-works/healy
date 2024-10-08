import Breadcrumb from "@/components/common/Breadcrumb"
import LogingArea from "@/components/common/LoginArea";
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"

const Login = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Login" />
            <LogingArea style={false} />
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default Login;
