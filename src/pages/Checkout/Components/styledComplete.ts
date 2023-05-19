import styled from 'styled-components'

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 640px;
  height: 591px;
  left: 160px;
  top: 182px;
`
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 372px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const AddressText = styled.div`
  width: 530px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 560px;
  height: 216px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const FormCEP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const FormRUA = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 560px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const FormNumComp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`

export const FormNUMERO = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const FormCOMPLEMENTO = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 348px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`

export const FormBaCiUF = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`

export const FormBAIRRO = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const FormCIDADE = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 276px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`

export const FormUF = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 60px;
  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 207px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
export const PaymentText = styled.div`
  width: 530px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 51px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const CreditCardText = styled.div`
  width: 115px;
  height: 19px;

  /* Components/Button S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CreditCard2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`

export const DebitCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`

export const DebitCardText = styled.div`
  width: 107px;
  height: 19px;

  /* Components/Button S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Cash = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 1;
`

export const CashText = styled.div`
  width: 55px;
  height: 19px;

  /* Components/Button S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */

  text-transform: uppercase;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`
export const Icons = styled.div`
  width: 16px;
  height: 16px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
