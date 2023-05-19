import { createContext, useContext } from 'react'
import { CoffeeItem } from '../../../utils/Coffees'

export interface Cart extends CoffeeItem {
  amount: number
}

interface CartFormatted extends Cart {
  priceFormatted: string
  subTotal: string
}

interface CartContextData {
  cart: Cart[]
  addCart: (product: Cart) => void
  removeCart: (id: number) => void
  updateAmount: (id: number, type: 'increment' | 'decrement') => void
  clearCart: () => void
  priceFormattedAndSubTotal: CartFormatted[]
  totalProducts: number
  totalShipping: number
}

export const CartContext = createContext({} as CartContextData)

export function useCart() {
  const context = useContext(CartContext)

  return context
}
