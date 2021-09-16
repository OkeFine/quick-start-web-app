import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: 100%;
  height: auto;
  li {
    padding: 8px 0;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    color: blue;
  }
  a,
  button {
    font-size: 16px;
  }
`;

type TMenuItem = {
  title: string;
  link: string;
};

type TProps = {
  menu: Array<TMenuItem>;
  handleLogout: () => void;
};

export default function Navigation({ menu, handleLogout }: TProps) {
  return (
    <SWrapper>
      <ul>
        {menu.map(({ title, link }) => (
          <li key={title}>
            <NavLink to={link}>{title}</NavLink>
          </li>
        ))}
        <li>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </SWrapper>
  );
}
