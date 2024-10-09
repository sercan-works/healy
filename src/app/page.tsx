import HomeOne from "@/components/homes/home";
import Wrapper from "@/layout/Wrapper";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Healy - Healy Frekans Cihazları",
  description: "Healy frekans cihazları hakkında bilgi edinin ve sağlığınızı destekleyin.",
  keywords: "Healy, frekans cihazları, sağlık, wellness, enerji",
  openGraph: {
    // ... mevcut openGraph ayarları ...
  },
  verification: {
    google: "hv2QOc4-gnpzVcygD6vdvXRs8QqtE9JRiwX86LrTgoA",
  },
};

const index = () => {
  
  return (
    <Wrapper>
      <HomeOne />
      <GoogleAnalytics gaId="G-B4D9S6KV6K" />
    </Wrapper>
  )
}

export default index
