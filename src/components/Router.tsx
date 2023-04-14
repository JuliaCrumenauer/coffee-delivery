import { Routes, Route } from 'react-router-dom'
import { Success } from '../pages'
import { Checkout } from '../pages/Checkout'

import { DefaultLayout } from './layouts'
import { Home } from '../pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
