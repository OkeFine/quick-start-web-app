import { ReactNode } from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: 100%;
`;

export default function BlankLayout({ children }: { children: ReactNode }) {
  return <SWrapper>{children}</SWrapper>;
}
