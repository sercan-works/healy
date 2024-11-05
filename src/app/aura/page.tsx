"use client"
import AuraButton from '@/components/common/AuraButton'
import ChatBot from '@/components/common/ChatBot'
import HeaderOne from '@/layout/headers/HeaderOne'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const metadata = {
    title: "Aura'ya Sor - Healy",
    description: "Aura'ya Sor Sayfası",
    keywords: "Aura'ya Sor Sayfası",
    author: "Healy",
    robots: "index, follow",
    url: "https://healy.com.tr/aura",
}


const index = () => {
  return (
    <>
    <HeaderOne style={{display: "none"}} />
    <div className='grid grid-cols-12 sm:grid-cols-1 gap-10 min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-pink-400'>
        <div className='flex flex-col items-center justify-center col-span-12 md:col-span-6 rounded-lg gap-10 bg-white bg-opacity-50 p-4 m-20'>
            <h1 className='text-4xl mt-0 font-bold text-center text-white'>HEALY Aura</h1>

            <p className='px-10  text-2xl mx-auto text-center text-white'>
                Aura AI, tecrübeli Healy Sponsorlarımızın desteğiyle eğitilmekte olan bir Yapay Zeka&apos;dır.
            </p>
            <p className='px-10  text-2xl mx-auto text-center text-white'>
                Healy programları ile alakalı her türlü sorunuzu Aura&apos;ya sorabilirsiniz.
            </p>



            <AuraButton onClick={() => {}} style="" />
        </div>

        <div className='col-span-3 md:col-span-6'>
          <ChatBot />
        </div>
    </div>
    </>
  )
}

export default index
