import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label={'email'}
        name={'email'}
        type={'email'}
        placeholder={'example@mail.com'}
      />
      <InputForm
        label={'password'}
        name={'password'}
        type={'password'}
        placeholder={'********'}
      />
      <Button customeClass="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
