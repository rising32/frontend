import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RegisterForm, { RegisterFormType } from '../../components/auth/RegisterForm';
import apiClient from '../../lib/api';
import { validateEmail } from '../../lib/utils';
import { useAppDispatch } from '../../store';
import { setUser } from '../../store/features/coreSlice';

function RegisterFormContainer() {
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();
  const dipatch = useAppDispatch();
  const onSubmit: SubmitHandler<RegisterFormType> = data => {
    setError(null);
    const validation = {
      username: (text: string) => {
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

    const error = validation.username(data.username) || validation.password(data.password) || validateEmail(data.email) || null;

    if (error) {
      setError(error);
      return;
    }
    apiClient
      .post('/v1/auth/register', {
        email: data.email,
        phone: data.phone,
        username: data.username,
        password: data.password,
      })
      .then(res => {
        console.log(res);
        dipatch(setUser(res.data));
        navigate('/tasks');
      })
      .catch(err => {
        if (axios.isAxiosError(err)) {
          const errors = err as AxiosError;
          console.log('error message: ', errors.message, errors.response?.data);
        } else {
          console.log('unexpected error: ', error);
        }
      });
  };
  return <RegisterForm onSubmit={onSubmit} error={error} />;
}

export default RegisterFormContainer;
