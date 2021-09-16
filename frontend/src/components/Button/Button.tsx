import { ReactNode, MouseEvent } from 'react';
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
  &:hover {
    background: #ccc;
  }
`;

type TProps = {
  children: ReactNode | string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
};

export default function Button({
  className,
  children,
  type = 'button',
  ariaLabel,
  onClick,
}: TProps) {
  return (
    <SButton onClick={onClick} aria-label={ariaLabel} type={type} className={className}>
      {children}
    </SButton>
  );
}
