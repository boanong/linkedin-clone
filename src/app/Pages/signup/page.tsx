/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { LinkedInIcon, Terms, TermsA, Label, SocilaLogBtn, SubmitBtn, Linked, ForgotPass, FormHeading, InputCredentials, Ptag, PassInput, ViewPass, Line, Or, Span } from '@/Components/Atoms/Atoms';
import { Form, OrSec, PassHolder } from '@/Components/Molecules/Molecules';
import { Main, NavBar } from '@/Components/Organisms/Organisms';
import { useAuth } from '@/context/AuthContex';



function Signup() {
  const { user, signup } = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()
    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }


    console.log(data.email, data.password)
  }

  return (
    <Main>
      <NavBar>
        <Linked>Linked<LinkedInIcon /></Linked>
      </NavBar>

      <FormHeading>Make the most of your professional life.</FormHeading>
      <Form onSubmit={handleSignup}>
        <Label>Email</Label>
        <InputCredentials placeholder='Email or phone' required type='text' name='email' onChange={(e: any) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
          value={data.email} />
        <Label>Password(6 characters minimum)</Label>
        <PassHolder>
          <PassInput placeholder='Password' required type='password' name='password' onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
            value={data.password} />
          <ViewPass>Display</ViewPass>
        </PassHolder>
        <Terms>By clicking Accept and Join, you agree to LinkedIn's <TermsA>Terms of Service</TermsA> , <TermsA>Privacy Policy</TermsA> , and <TermsA>Cookie Policy</TermsA> .</Terms>
        <SubmitBtn type='submit'>Accept and Join</SubmitBtn>
        <OrSec>
          <Line />
          <Or>Or</Or>
          <Line />
        </OrSec>
        <SocilaLogBtn type='button'>Join with Google <FcGoogle /></SocilaLogBtn>
        <SocilaLogBtn type='button'>Join with GitHub <FaGithub /></SocilaLogBtn>
        <Span>Already Registered<ForgotPass>Login</ForgotPass></Span>
      </Form>
    </Main>
  )
}

export default Signup