import { ReactNode } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  background: linear-gradient(180deg, #70c2f2 0%, #1392db 100%);
  padding: 18px 32px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

type TProps = {
  children: ReactNode | string;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export default function Button({ className, children, type = 'button' }: TProps) {
  return (
    <SButton type={type} className={className}>
      {children}
    </SButton>
  );
}
