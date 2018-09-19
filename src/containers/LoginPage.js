import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginForm from '../components/user/LoginForm';
import { login } from '../actions/sessionActions';
import routes from '../constants/routesPaths';
import AppPromo from '../components/common/AppPromo'

const LoginPage = ({ login, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className='loginPage'>
      <LoginForm onSubmit={login} />
      <AppPromo />
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(LoginPage);
