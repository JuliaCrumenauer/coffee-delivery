import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import coffeeHome from '../../../assets/coffee_home.svg'
import {
  Benefit1,
  Benefit2,
  Benefit3,
  Benefit4,
  BenefitsList,
  BenefitsListText,
  ClockIcon,
  CoffeeIcon,
  HomeHeader,
  ImgHomeHeader,
  PackageIcon,
  ShoppingCartIcon,
  TextBigger,
  TextHeaderHome,
  TextSmaller,
} from './styledHeaderHome'

export function HeaderHome() {
  return (
    <div>
      <HomeHeader>
        <ImgHomeHeader>
          <img src={coffeeHome} alt="" />
        </ImgHomeHeader>

        <TextHeaderHome>
          <TextBigger>
            Encontre o café perfeito para qualquer hora do dia
          </TextBigger>
          <TextSmaller>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextSmaller>
        </TextHeaderHome>
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
      </HomeHeader>
    </div>
  )
}
