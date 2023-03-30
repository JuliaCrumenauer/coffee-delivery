import coffee from '../../assets/coffee.svg'
import location from '../../assets/location.svg'
import { ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from '../Header/styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffee} alt="" />
      <div>
        <img src={location} alt="" />
        <button>
          <ShoppingCart size={24} />
        </button>
      </div>
    </HeaderContainer>
  )
}
