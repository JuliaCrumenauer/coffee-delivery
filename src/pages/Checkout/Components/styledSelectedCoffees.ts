import styled from 'styled-components'

export const CompleteOrderText = styled.div`
  position: absolute;
  width: 170px;
  height: 23px;
  left: 160px;
  top: 144px;

  /* Title/Title XS */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const SelectedCoffeesText = styled.div`
  position: absolute;
  width: 156px;
  height: 23px;
  left: 832px;
  top: 144px;

  /* Title/Title XS */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  position: absolute;
  width: 448px;
  height: 498px;
  left: 832px;
  top: 182px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px 44px;
`
export const CoffeeSelected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 59px;

  width: 368px;
  height: 80px;

  /* Base/Card */

  background: #f3f2f2;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 368px;
  height: 92px;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`
export const Frame1Line1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 21px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const Frame1Line2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 21px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const Frame1Line3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 26px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 368px;
  height: 46px;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`
export const ButtonText = styled.div`
  width: 133px;
  height: 22px;

  /* Components/Button G */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;

  /* Base/White */

  color: #ffffff;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
