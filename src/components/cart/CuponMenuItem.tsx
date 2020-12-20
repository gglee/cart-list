import React from 'react';
import styled from 'styled-components';
import { Cupon } from '../../modules/payment';
import useCupons from './hooks/useCupons';

export type CuponMenuItemProps = {
  cupon: Cupon;
  onClose: () => void;
};

function CuponMenuItem({ cupon, onClose }: CuponMenuItemProps) {
  const { selectCupon } = useCupons();

  return (
    <Block
      onClick={() => {
        selectCupon(cupon);
        onClose();
      }}
    >
      {cupon.title}
    </Block>
  );
}

const Block = styled.div`
  padding: 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: #fafafa;
  }
`;

export default CuponMenuItem;
