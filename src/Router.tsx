import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

import { Projects } from './pages/Projects'
import { DefaultLayout } from './layouts/DefaultLayout'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Projects />} />
      </Route>
    </Routes>
  )
}