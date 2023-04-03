import coffee from '../../assets/coffee.svg'
import location from '../../assets/location.svg'
import { ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from '../Header/styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffee} alt="" />
      <nav>
        <img src={location} alt="" />

        <NavLink to="/checkout" title="Check out">
          <button>
            <ShoppingCart size={24} />
          </button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
