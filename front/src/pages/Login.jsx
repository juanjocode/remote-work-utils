import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useActions } from '../hooks/useActions';

import { FormLogin } from '../components/FormLogin';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

import * as loginActions from '../actions/login.actions';
import { openAlert } from '../actions/alert.actions';
import * as loginService from '../services/login.service';

const newloginActions = {
  ...loginActions,
  openAlert,
};

const Login = ({ history }) => {
  const userName = useSelector((state) => state.login.userName);
  const userPass = useSelector((state) => state.login.userPass);
  const actions = useActions(newloginActions);

  return (
    <FormLogin onSubmit={(event) => loginService.login({
      event,
      history,
      actions,
      userName,
      userPass,
    })}
    >
      <Input
        type="text"
        label="Email address"
        placeholder="Email address"
        value={userName}
        onChange={(event) => loginService.changeUser({ event, actions })}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        value={userPass}
        onChange={(event) => loginService.changePass({ event, actions })}
      />
      <div className="d-flex justify-content-center my-4">
        <SummitButton className="w-50">
          Login
        </SummitButton>
        <Button variant="link" className="">
          Forgot password?
        </Button>
      </div>
    </FormLogin>
  );
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
