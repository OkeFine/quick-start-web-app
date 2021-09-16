import styled from 'styled-components';
import { Formik, Field } from 'formik';
import { Button } from '../../components';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAsync, selectAuth } from '../../app/auth/authSlice';

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
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  if (auth.status === 'idle' && auth.token && auth.user) {
    history.push('/');
  }

  return (
    <SWrapper>
      <h1>Welcome</h1>
      <SOutline>admin@example.com / 123456</SOutline>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async values => {
          dispatch(loginAsync(values));
        }}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <SForm>
              <SField>
                <label>Your Email</label>
                <Field name="email" type="email" />
              </SField>
              <SField>
                <label>Password</label>
                <Field name="password" type="password" />
              </SField>
              <SLoginButton ariaLabel="Login" type="submit">
                Login
              </SLoginButton>
            </SForm>
          </form>
        )}
      </Formik>
    </SWrapper>
  );
}
