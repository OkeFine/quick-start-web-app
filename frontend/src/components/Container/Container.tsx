import { ReactNode } from 'react';
import styled from 'styled-components';

// TODO: add more responsive styles
const SContainer = styled.div`
  width: 100%;
  padding: 0 15px:
  margin: auto;
  max-width: 1440px;
`;

type TProps = {
  children: ReactNode;
};

export default function Container({ children }: TProps) {
  return <SContainer>{children}</SContainer>;
}
