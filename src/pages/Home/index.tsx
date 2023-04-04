import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import coffeehome from '../../assets/coffee_home.svg'
import {
  BenefitsList,
  BenefitsListText,
  HomeContainer,
  ImagemHome,
  Benefit1,
  Benefit2,
  Benefit3,
  Benefit4,
  Text,
  ShoppingCartIcon,
  PackageIcon,
  ClockIcon,
  CoffeeIcon,
  Strong,
  Paragraph,
} from './styles'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <Text>
          <Strong>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          </Strong>
          <Paragraph>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </Paragraph>
        </Text>
        <BenefitsList>
          <BenefitsListText>
            <Benefit1>
              <ShoppingCartIcon>
                <ShoppingCart size={18} />
              </ShoppingCartIcon>
              Compra simples e segura
            </Benefit1>
            <Benefit2>
              <ClockIcon>
                <Clock size={18} />
              </ClockIcon>
              Entrega rápida e rastreada
            </Benefit2>
            <Benefit3>
              <PackageIcon>
                <Package size={18} />
              </PackageIcon>
              Embalagem mantém o café intacto
            </Benefit3>
            <Benefit4>
              <CoffeeIcon>
                <Coffee size={18} />
              </CoffeeIcon>
              O café chega fresquinho até você
            </Benefit4>
          </BenefitsListText>
        </BenefitsList>
        <ImagemHome>
          <img src={coffeehome} alt="" />
        </ImagemHome>
      </HomeContainer>
    </div>
  )
}
