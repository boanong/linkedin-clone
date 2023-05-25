'use client'
import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { LinkedInIcon, SocilaLogBtn, SubmitBtn, Linked, ForgotPass, FormHeading, InputCredentials, Ptag, PassInput, ViewPass, Line, Or, Span } from '@/Components/Atoms/Atoms';
import { Form, OrSec, PassHolder } from '@/Components/Molecules/Molecules';
import { Main, NavBar } from '@/Components/Organisms/Organisms';
import { GoogleAuthProvider, GithubAuthProvider ,getAuth, signInWithPopup, getRedirectResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { initFirebase } from '@/firebase/config';

type Props = {}

function Login({ }: Props) {
  const app = initFirebase()
  const auth = getAuth(app);
  const router = useRouter
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(res => {
        console.log(res.user.uid);
        router.push("/");
      })
      .catch(err => {
        console.log(err)
        setAuthing(false);
      })
  }


  const githubSignin = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GithubAuthProvider())
      .then(response => {
        console.log(response.user.uid);
        router.push("/");
      })
      .catch(err => {
        console.log(err)
        setAuthing(false);
      })
  }




  return (
    <Main>
      <NavBar>
        <Linked>Linked<LinkedInIcon /></Linked>
      </NavBar>
      <Form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <FormHeading>Login</FormHeading>
        <Ptag>Keep up to date with developments in your professional world</Ptag>
        <InputCredentials placeholder='Email or phone' name='email' type="text" />
        <PassHolder>
          <PassInput placeholder='Password' name='password' type="password" />
          <ViewPass>display</ViewPass>
        </PassHolder>
        <ForgotPass>Forgot your Password?</ForgotPass>
        <SubmitBtn type='submit'>Login</SubmitBtn>
        <OrSec>
          <Line />
          <Or>Or</Or>
          <Line />
        </OrSec>
        <SocilaLogBtn onClick={() => signInWithGoogle()} disabled={authing} type='button'><FcGoogle />Google</SocilaLogBtn>
        <SocilaLogBtn onClick={() => githubSignin()} disabled={authing} type='button'><FaGithub />GitHub</SocilaLogBtn>
      </Form>
      <Span>New to LinkedIn?<ForgotPass>Register</ForgotPass></Span>
    </Main>
  )
}

export default Login;