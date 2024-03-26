import React from 'react'

import "../styles/Auth.css";

import AuthForm from './AuthForm';

function Signup() {
  return (
    <section className='signup-page'>
      <AuthForm type='signup' />
    </section>
  )
}

export default Signup