'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa'
import { LinkedInIcon, SocilaLogBtn, SubmitBtn, Linked, ForgotPass, FormHeading, InputCredentials, Ptag, PassInput, ViewPass, Line, Or, Span } from '@/Components/Atoms/Atoms';
import { Form, OrSec, PassHolder } from '@/Components/Molecules/Molecules';
import { Main, NavBar } from '@/Components/Organisms/Organisms';

type Props = {}

function Login({}: Props) {
  return (
    <Main>
      <NavBar>
        <Linked>Linked<LinkedInIcon /></Linked>
      </NavBar>
        <Form>
        <FormHeading>Login</FormHeading>
        <Ptag>Keep up to date with developments in your professional world</Ptag>
          <InputCredentials placeholder='Email or phone' />
          <PassHolder>
            <PassInput placeholder='Password' />
            <ViewPass>display</ViewPass>
          </PassHolder>
          <ForgotPass>Forgot your Password?</ForgotPass>
          <SubmitBtn>Login</SubmitBtn>
          <OrSec>
            <Line />
              <Or>Or</Or>
            <Line />
          </OrSec>
          <SocilaLogBtn><FcGoogle />Google</SocilaLogBtn>
          <SocilaLogBtn><FaGithub/>GitHub</SocilaLogBtn>
        </Form>
        <Span>New to LinkedIn?<ForgotPass>Register</ForgotPass></Span>
    </Main>
  )
}

export default Login