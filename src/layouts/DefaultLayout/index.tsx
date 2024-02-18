
import { Outlet } from 'react-router-dom'

import { HeroSection } from '@/components/HeroSection'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Outlet />
      <Footer/>
    </>
  )
}
