import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: 100%;
  height: auto;
`;

type TMenuItem = {
  title: string;
  link: string;
};

type TProps = {
  menu: Array<TMenuItem>;
};

export default function Navigation({ menu }: TProps) {
  return (
    <SWrapper>
      <ul>
        {menu.map(({ title, link }) => (
          <li key={title}>
            <NavLink to={link}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </SWrapper>
  );
}
