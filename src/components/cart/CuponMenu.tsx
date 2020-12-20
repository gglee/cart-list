import React from 'react';
import styled from 'styled-components';
import CuponMenuItem from './CuponMenuItem';
import { Cupon } from '../../modules/payment';
import OutsideClickHandler from 'react-outside-click-handler';

export type CuponMenuProps = {
  visible: boolean;
  menu: Cupon[] | null;
  onClose: () => void;
};

function CuponMenu({ visible, menu, onClose }: CuponMenuProps) {
  if (!visible) return null;
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <Block>
        {!menu
          ? '보유 쿠폰이 없습니다.'
          : menu.map((cupon) => (
              <CuponMenuItem
                cupon={cupon}
                onClose={onClose}
                key={cupon.title}
              />
            ))}
      </Block>
    </OutsideClickHandler>
  );
}

const Block = styled.div`
  background: white;
  position: absolute;
  z-index: 5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  top: 0;
  right: 5rem;
  margin-top: 0.75rem;
`;

export default CuponMenu;
