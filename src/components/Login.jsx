import React from 'react';

import '../styles/Auth.css';

import AuthForm from './AuthForm';

function Login() {
  return (
    <section className='login-page'>
      <AuthForm type='login' />
    </section>
  )
}

export default Login