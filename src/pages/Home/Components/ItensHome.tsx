import {
  ButtonQuantidade,
  ButtonQuantidadeDisplay,
  Buy,
  CardCategory,
  CardCategoryDisplay,
  CardCoffeItem,
  Container,
  ContainerListItem,
  ImgCoffeItem,
  ShoppingCartIcons,
} from './styles'
import { ItemHomeProps } from '../../../utils/Coffees'
import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

export function ItensHome({ item }: ItemHomeProps) {
  const [contador, setContador] = useState(1)
  const [price, setPrice] = useState(9)

  function increment() {
    setContador((anterior) => {
      return anterior + 1
    })
    setPrice((anterior) => {
      return anterior + 9
    })
  }

  function decrement() {
    setContador((anterior) => {
      return anterior - 1
    })
    setPrice((anterior) => {
      return anterior - 9
    })
  }

  return (
    <div>
      <Container>
        <ContainerListItem>
          <CardCoffeItem>
            <ImgCoffeItem src={item.img} />
            {item.name}
            <CardCategoryDisplay>
              {item.category.map((category) => {
                return <CardCategory key={category}>{category}</CardCategory>
              })}
            </CardCategoryDisplay>
            {item.description}
            <Buy>
              <h2>R${price}</h2>

              <ButtonQuantidadeDisplay>
                <ButtonQuantidade type="button" onClick={decrement}>
                  -
                </ButtonQuantidade>

                <h3>{contador}</h3>
                <ButtonQuantidade type="button" onClick={increment}>
                  +
                </ButtonQuantidade>
              </ButtonQuantidadeDisplay>

              <ShoppingCartIcons>
                <ShoppingCart></ShoppingCart>
              </ShoppingCartIcons>
            </Buy>
          </CardCoffeItem>
        </ContainerListItem>
      </Container>
    </div>
  )
}
