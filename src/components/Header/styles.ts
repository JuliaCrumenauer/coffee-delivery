import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;

  position: absolute;
  //height: 104px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #fafafa;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 193px;
    height: 38px;

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 38px;
    height: 38px;

    color: orange;
    background: #f1e9c9;
    border-radius: 6px;

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  div {
    width: 84.95px;
    height: 40px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`
