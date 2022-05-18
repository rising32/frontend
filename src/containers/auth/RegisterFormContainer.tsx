import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import RegisterForm, { RegisterFormType } from '../../components/auth/RegisterForm';
import { validateEmail } from '../../lib/utils';

function RegisterFormContainer() {
  const [error, setError] = useState<null | string>(null);
  const onSubmit: SubmitHandler<RegisterFormType> = data => {
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

    const error = validation.name(data.name) || validation.password(data.password) || validateEmail(data.email) || null;

    if (error) {
      setError(error);
      return;
    }
    console.log(data);
  };
  return <RegisterForm onSubmit={onSubmit} error={error} />;
}

export default RegisterFormContainer;
