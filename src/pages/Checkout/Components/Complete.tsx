import {
  Address,
  AddressText,
  Cash,
  CashText,
  CompleteOrder,
  CreditCard2,
  CreditCardText,
  DebitCard,
  DebitCardText,
  Form,
  FormBAIRRO,
  FormBaCiUF,
  FormCEP,
  FormCIDADE,
  FormCOMPLEMENTO,
  FormNUMERO,
  FormNumComp,
  FormRUA,
  FormUF,
  Icons,
  Payment,
  PaymentMethods,
  PaymentText,
} from './styledComplete'
import { CompleteOrderText } from './styledSelectedCoffees'

import { Money, Bank, CreditCard } from 'phosphor-react'

export function Complete() {
  return (
    <div>
      <CompleteOrderText>Complete seu pedido</CompleteOrderText>
      <CompleteOrder>
        <Address>
          Endereço de entrega
          <AddressText>
            Informe o endereço onde deseja receber seu pedido.
          </AddressText>
          <Form>
            <FormCEP>CEP</FormCEP>
            <FormRUA>Rua</FormRUA>
            <FormNumComp>
              <FormNUMERO>Número</FormNUMERO>
              <FormCOMPLEMENTO>Complemento</FormCOMPLEMENTO>
            </FormNumComp>
            <FormBaCiUF>
              <FormBAIRRO>Bairro</FormBAIRRO>
              <FormCIDADE>Cidade</FormCIDADE>
              <FormUF>UF</FormUF>
            </FormBaCiUF>
          </Form>
        </Address>
        <Payment>
          Pagamento
          <PaymentText>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </PaymentText>
          <PaymentMethods>
            <CreditCard2>
              <CreditCard />
              cartão de crédito
            </CreditCard2>

            <DebitCard>
              <Bank />
              cartão de débito
            </DebitCard>

            <Cash>
              <Money />
              dinheiro
            </Cash>
          </PaymentMethods>
        </Payment>
      </CompleteOrder>
    </div>
  )
}
