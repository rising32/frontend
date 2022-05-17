import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import { Helmet } from 'react-helmet-async';

function RegisterPage() {
  return (
    <AuthTemplate>
      <Helmet>
        <title>Register - IDL Managment Toolki</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      <div>dfsdf</div>
    </AuthTemplate>
  );
}

export default RegisterPage;
