import { Helmet } from 'react-helmet-async'

import { Mosaico } from '@/components/Mosaico'
import { Ranger } from '@/components/Range'
import { About } from '@/components/About'
import { CTA } from '@/components/CTA'
import { Destaque } from '@/components/Destaque'

export const Home = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <Mosaico />
      <About />
      <Ranger />
      <Destaque />
      <CTA />
    </>
  )
}
