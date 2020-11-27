import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const BackgroundStyle = createGlobalStyle`
  body {
    background: white;
  }
`;

export type HomeTemplateProps = {
  children?: React.ReactNode;
};

function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <>
      <BackgroundStyle />
      <Block>{children}</Block>
    </>
  );
}
const Block = styled.div``;

export default HomeTemplate;
