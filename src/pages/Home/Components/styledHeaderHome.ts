import styled from 'styled-components'

export const TextHeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px / 2 - 266px);
  top: calc(50% - 192px / 2 - 82px);
`

export const TextBigger = styled.div`
  width: 588px;
  height: 124px;

  /* Title/Title XL */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */

  /* Base/Title */

  color: #272221;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`
export const TextSmaller = styled.div`
  width: 588px;
  height: 52px;

  /* Text/Regular L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
export const ImgHomeHeader = styled.div`
  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px / 2 + 322px);
  top: calc(50% - 360px / 2);

  background: url(image.png);
`

export const HomeHeader = styled.div`
  position: absolute;
  height: 544px;
  left: 0px;
  right: 0px;
  top: 104px;
`

export const BenefitsList = styled.div`
  position: absolute;
  width: 567px;
  height: 84px;
  left: calc(50% - 567px / 2 - 276.5px);
  top: calc(50% - 84px / 2 + 122px);
`

export const BenefitsListText = styled.div`
  width: 187px;
  height: 21px;
  /* Text/Regular M */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */
  /* Base/Text */
  color: #574f4d;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
`

export const Benefit1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 0px;
`

export const ShoppingCartIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 8px;
  width: 32px;
  height: 32px;
  /* Brand / Yellow Dark */
  color: white;
  background: #c47f17;
  border-radius: 1000px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Benefit2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 52px;
`

export const ClockIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 8px;
  width: 32px;
  height: 32px;
  /* Brand / Yellow */
  color: white;
  background: #dbac2c;
  border-radius: 1000px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Benefit3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 0px;
`

export const PackageIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 8px;
  width: 32px;
  height: 32px;
  /* Base/Text */
  color: white;
  background: #574f4d;
  border-radius: 1000px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Benefit4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 52px;
`

export const CoffeeIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 8px;
  width: 32px;
  height: 32px;
  /* Brand/Purple */
  color: white;
  background: #8047f8;
  border-radius: 1000px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`
