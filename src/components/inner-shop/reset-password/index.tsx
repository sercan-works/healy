import Breadcrumb from "@/components/common/Breadcrumb"
import ForgotForm from "@/components/forms/ForgotForm";
import FooterOne from "@/layout/footer/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne"

const ResetPassWord = () => {
   return (
      <>
         <HeaderOne style={true} />
         <main className="main-area fix">
            <Breadcrumb title="Reset PassWord" />
            <ForgotForm />
         </main>
         <FooterOne style={false} />
      </>
   )
}

export default ResetPassWord;
