import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <Block>
      <Inner>
        <MenuButton to="/">상품목록</MenuButton>
        <Right>
          <MenuButton to="/cart">장바구니</MenuButton>
        </Right>
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  text-decoration: none;

  margin-right: 0.75rem;
`;

export default Header;
