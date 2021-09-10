import { FormEvent } from 'react';
import { Button } from '../../components';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SWrapper = styled.div`
  text-align: center;
  width: 500px;
  margin: 100px auto;
  h1 {
    font-size: 56px;
    line-height: 68px;
    marign-bottom: 0;
  }
`;

const SOutline = styled.p`
  font-size: 28px;
  line-height: 34px;
  margin: 0;
`;

const SForm = styled.div`
  margin: auto;
  margin-top 36px;
  width: 350px;
  padding: 36px 18px;
  background: #f5f5f5;
  border-radius: 32px;
`;

// TODO: Update styles and move to the shared component
const SField = styled.div`
  margin-bottom: 20px;
  text-align: left;
  label {
    display: block;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
`;

const SLoginButton = styled(Button)`
  margin-top: 18px;
`;

export default function LoginView() {
  const history = useHistory();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: dispatch action to login, and redirect to dashboard
    history.push('/');
  };
  return (
    <SWrapper>
      <h1>Welcome</h1>
      <SOutline>Fill in any word and submit to login</SOutline>
      <SForm>
        <form onSubmit={handleSubmit}>
          <SField>
            <label>Your Email</label>
            <input type="email" placeholder="Email" />
          </SField>
          <SField>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </SField>
          <SLoginButton type="submit">Login</SLoginButton>
        </form>
      </SForm>
    </SWrapper>
  );
}
