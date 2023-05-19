import { Complete } from './Components/Complete'
import { SelectedCoffees } from './Components/SelectedCoffees'

export function Checkout() {
  return (
    <div>
      <SelectedCoffees />
      <Complete />
    </div>
  )
}
