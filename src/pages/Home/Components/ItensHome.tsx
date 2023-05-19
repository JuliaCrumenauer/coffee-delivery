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
import { AddCart } from './AddCart'

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
  /* Sobre a função abaixo - Preciso mostrar esse valor em algum lugar, nesse momento não vai estar 
  mostrando. É que tem que passar pra outro componente... O lugar onde eu quero mostrar tá no Header.
  Vamos relembrar como faz isso então! Acho que fora isso vai ser bem fácil.
  Tenho que fazer algum export aqui e algum import lá. Mas onde? Vamos pensar e qualquer coisa olhar
  no código de outras pessoas. Eu acho que fiz isso no desafio 1. Algo similar ao que preciso fazer agora.
  Acho que tem que fazer um export na function e um import lá no componente que quero.
*/

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
                <ShoppingCart type="button" onClick={AddCart} />
              </ShoppingCartIcons>
            </Buy>
          </CardCoffeItem>
        </ContainerListItem>
      </Container>
    </div>
  )
}
