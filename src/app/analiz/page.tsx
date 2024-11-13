import Wrapper from '@/layout/Wrapper'
import React from 'react'
import Analiz from '../aura/analiz'
export const metadata = {
    title: "Analiz - Herşey Frekans",
    description: "Healy Analiz Sayfası",
    keywords: "Healy Analiz Sayfası",
    author: "Healy",
    robots: "index, follow",
    url: "https://healy.com.tr/analiz",
    
  };

const page = () => {
  return (
    <div>
      <Wrapper>
        <Analiz />
      </Wrapper>
    </div>
  )
}

export default page
