import {
  Button,
  ButtonText,
  CoffeeCard,
  CoffeeSelected,
  Frame1,
  Frame1Line1,
  Frame1Line2,
  Frame1Line3,
  SelectedCoffeesText,
} from './styledSelectedCoffees'

export function SelectedCoffees() {
  return (
    <div>
      <SelectedCoffeesText>Cafés selecionados</SelectedCoffeesText>
      <CoffeeCard>
        <CoffeeSelected />
        <Frame1>
          <Frame1Line1>Total de itens R$</Frame1Line1>
          <Frame1Line2>Entrega R$</Frame1Line2>
          <Frame1Line3>
            <strong>Total R$</strong>
          </Frame1Line3>
        </Frame1>
        <Button>
          <ButtonText>CONFIRMAR PEDIDO</ButtonText>
        </Button>
      </CoffeeCard>
    </div>
  )
}
