import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import LoginForm, { LoginFormType } from '../../components/auth/LoginForm';
import { validateEmail } from '../../lib/utils';

function LoginFormContainer() {
  const [error, setError] = useState<null | string>(null);
  const onSubmit: SubmitHandler<LoginFormType> = data => {
    setError(null);
    const validation = {
      name: (text: string) => {
        if (text === '') {
          return 'Name is empty!.';
        }
        if (text.length > 45) {
          return 'Name length is max 45';
        }
      },
      password: (text: string) => {
        if (text === '') {
          return 'Password is empty!.';
        }
        if (text.length < 6) {
          return 'Password length is min 6 letters';
        }
      },
    };

    const error = validation.password(data.password) || validateEmail(data.email) || null;

    if (error) {
      setError(error);
      return;
    }
    console.log(data);
  };
  return <LoginForm onSubmit={onSubmit} error={error} />;
}

export default LoginFormContainer;
