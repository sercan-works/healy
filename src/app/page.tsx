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
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-16735842805/FYSoCK7g9tsZEPXjoqw-',
              'value': 1.0,
              'currency': 'TRY'
            });
          `
        }}
      />
    </Wrapper>
  )
}

export default index
