import { useEffect, useState } from 'react'
import { CoffeeListGrid, List, TextCoffeeList } from './styledCoffeeList'
import {
  CoffeeItem,
  CoffeesDetails,
  ItemHomeProps,
} from '../../../utils/Coffees'
import { ItensHome } from './ItensHome'
import { Container, ContainerListItem } from './styles'

export function CoffeeList({ item }: ItemHomeProps) {
  const [coffesDetailsAux, setCoffesDetailsAux] = useState<CoffeeItem[]>([])

  useEffect(() => {
    setCoffesDetailsAux(CoffeesDetails)
  }, [CoffeesDetails])

  return (
    <div>
      <CoffeeListGrid>
        <TextCoffeeList>Nossos cafés</TextCoffeeList>
        <List>
          <div>
            <Container>
              <ContainerListItem>
                {coffesDetailsAux.map((key) => {
                  return (
                    <ItensHome key={key.id} item={CoffeesDetails[key.id - 1]} />
                  )
                })}
              </ContainerListItem>
            </Container>
          </div>
        </List>
      </CoffeeListGrid>
    </div>
  )
}
