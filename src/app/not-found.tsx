'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import './globals.css'
import Header from '@/components/Organisms/Header'
import Footer from '@/components/Organisms/Footer'
import MobileMenu from '@/components/Molecules/MobileMenu'
import NotFound404Icon from '@/components/icons/NotFound404Icon'
import { MainButton } from '@/components/Atoms/Button'

const NotFound = () => {
  const path = usePathname()
  const { push } = useRouter()
  return (
    <>
      <Header />
      <div className="px-4 2xl:px-0 pt-[148px] lg:pt-[278px] pb-[57px] lg:pb-[108px] min-h-[65vh]">
        <div className="lg:max-w-[1024px] mx-auto w-full flex flex-col items-center space-y-4 justify-center">
          <NotFound404Icon className="text-white w-[200px] h-[200px]" />
          <span className="text-white">The page {path.split('/').pop()} is not found</span>
          <span className="text-white">Click the button below to return to home</span>
          <MainButton onClick={() => push('/')}>Home</MainButton>
        </div>
      </div>
      <Footer />
      <MobileMenu activeLink={'/'} />
    </>
  )
}

export default NotFound
