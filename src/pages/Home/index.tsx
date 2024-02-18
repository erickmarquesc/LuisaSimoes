import { Helmet } from 'react-helmet-async'

import { Services } from '@/components/ServicesCards'
import { Mosaico } from '@/components/Mosaico'
import { Ranger } from '@/components/Range'
import { About } from '@/components/About'
import { CTA } from '@/components/CTA'

export const Home = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <Mosaico />
      <About />
      <Ranger />
      <CTA />
      <Services />
    </>
  )
}
