import React from 'react';
import styled from 'styled-components';
import { Cupon } from '../../modules/payment';
import { BiChevronDown } from 'react-icons/bi';

export type SelectedCuponProps = {
  cupon: Cupon | null;
  onClick: (e: React.MouseEvent) => void;
};

function SelectedCupon({ cupon, onClick }: SelectedCuponProps) {
  return (
    <Block onClick={onClick}>
      {cupon ? <p>{cupon.title}</p> : <p>쿠폰선택</p>}
      <BiChevronDown />
    </Block>
  );
}

const Block = styled.div`
  position: relative;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 9rem;
  border: 1px solid #d5d9d9;
  box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
  border-radius: 0.25rem;
  cursor: pointer;
  color: #333333;
  font-size: 0.875rem;
  padding: 0.25rem;
  p {
    margin: 0;
  }
`;

export default SelectedCupon;
