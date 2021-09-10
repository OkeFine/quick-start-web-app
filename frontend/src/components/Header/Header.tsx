import styled from 'styled-components';

const SWrapper = styled.div`
  width: 100%;
  padding: 18px 10px;
  border-bottom: 2px solid #1392db;
  h1 {
    color: #1392db;
    margin: 0;
    padding: 0;
  }
`;

export default function Footer() {
  return (
    <SWrapper>
      <h1>App Name</h1>
    </SWrapper>
  );
}
