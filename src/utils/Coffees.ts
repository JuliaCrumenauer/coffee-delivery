import cover01 from '../assets/Expresso_Tradicional.svg'
import cover02 from '../assets/Expresso_Americano.svg'
import cover03 from '../assets/Expresso_Cremoso.svg'
import cover04 from '../assets/Expresso_Gelado.svg'
import cover05 from '../assets/Cafe_com_Leite.svg'
import cover06 from '../assets/Irlandes.svg'
import cover07 from '../assets/Latte.svg'
import cover08 from '../assets/Capuccino.svg'
import cover09 from '../assets/Macchiato.svg'
import cover10 from '../assets/Mocaccino.svg'
import cover11 from '../assets/Chocolate_Quente.svg'
import cover12 from '../assets/Cubano.svg'
import cover13 from '../assets/Havaiano.svg'
import cover14 from '../assets/Arabe.svg'

export interface CoffeeItem {
  id: number
  name: string
  category: string[]
  description: string
  img: string
  price: number
}

export interface ItemHomeProps {
  item: CoffeeItem
}

export const CoffeesDetails: CoffeeItem[] = [
  {
    id: 1,
    category: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: cover01,
    price: 9.9,
  },
  {
    id: 2,
    category: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: cover02,
    price: 9.9,
  },
  {
    id: 3,
    category: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    img: cover03,
    price: 9.9,
  },
  {
    id: 4,
    category: ['Tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: cover04,
    price: 9.9,
  },
  {
    id: 5,
    category: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: cover05,
    price: 5.9,
  },
  {
    id: 6,
    category: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: cover06,
    price: 15.9,
  },
  {
    id: 7,
    category: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: cover07,
    price: 9.9,
  },
  {
    id: 8,
    category: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: cover08,
    price: 15.85,
  },
  {
    id: 9,
    category: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: cover09,
    price: 7.9,
  },
  {
    id: 10,
    category: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: cover10,
    price: 9.9,
  },
  {
    id: 11,
    category: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: cover11,
    price: 10.9,
  },
  {
    id: 12,
    category: ['alcoólico', 'especial', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cover12,
    price: 9.9,
  },
  {
    id: 13,
    category: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: cover13,
    price: 19.9,
  },
  {
    id: 14,
    category: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: cover14,
    price: 12.9,
  },
]
