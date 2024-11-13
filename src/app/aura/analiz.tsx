import Breadcrumb from '@/components/common/Breadcrumb'
import FooterOne from '@/layout/footer/FooterOne'
import HeaderOne from '@/layout/headers/HeaderOne'
import React from 'react'
import AnalizForm from './AnalizForm'

const Analiz = () => {
  return (
    <div>
      <HeaderOne style={{display: "none"}} />

         <main className="main-area fix">
            <Breadcrumb title="ÜCRETSİZ ANALİZ" />
            <AnalizForm />
         </main>
         <FooterOne style={false} />
    </div>
  )
}

export default Analiz
