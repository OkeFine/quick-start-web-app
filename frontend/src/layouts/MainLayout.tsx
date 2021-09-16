import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Navigation } from '../components';
import { MAIN_MENU } from '../utils/contants';

const SWrapper = styled.div`
  width: 100%;
`;

const SBody = styled.div`
  display: flex;
`;

const SNav = styled.div`
  width: 220px;
  padding: 10px;
  border-right: 1px solid #ccc;
`;

const SMainContent = styled.div`
  padding: 10px;
`;

export default function MainLayout({
  children,
  handleLogout,
}: {
  children: ReactNode;
  handleLogout: () => void;
}) {
  return (
    <SWrapper>
      <Container>
        <Header />
        <SBody>
          <SNav>
            <Navigation handleLogout={handleLogout} menu={MAIN_MENU} />
          </SNav>
          <SMainContent>{children}</SMainContent>
        </SBody>
        <Footer />
      </Container>
    </SWrapper>
  );
}
