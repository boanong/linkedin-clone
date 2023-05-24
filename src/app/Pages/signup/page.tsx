/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { LinkedInIcon, Terms, TermsA, Label, SocilaLogBtn, SubmitBtn, Linked, ForgotPass, FormHeading, InputCredentials, Ptag, PassInput, ViewPass, Line, Or, Span } from '@/Components/Atoms/Atoms';
import { Form, OrSec, PassHolder } from '@/Components/Molecules/Molecules';
import { Main, NavBar } from '@/Components/Organisms/Organisms';


type Props = {}

function signup({}: Props) {
  return (
    <Main>
      <NavBar>
        <Linked>Linked<LinkedInIcon /></Linked>
      </NavBar>
      
      <FormHeading>Make the most of your professional life.</FormHeading>
        <Form>
          <Label>Email</Label>
          <InputCredentials placeholder='Email or phone' />
          <Label>Password(6 characters minimum)</Label>
          <PassHolder>
            <PassInput placeholder='Password' />
            <ViewPass>Display</ViewPass>
          </PassHolder>
          <Terms>By clicking Accept and Join, you agree to LinkedIn's <TermsA>Terms of Service</TermsA> , <TermsA>Privacy Policy</TermsA> , and <TermsA>Cookie Policy</TermsA> .</Terms>
          <SubmitBtn>Accept and Join</SubmitBtn>
          <OrSec>
            <Line />
              <Or>Or</Or>
            <Line />
          </OrSec>
          <SocilaLogBtn>Join with Google <FcGoogle /></SocilaLogBtn>
          <SocilaLogBtn>Join with Github <FaGithub/></SocilaLogBtn>
          <Span>Already Registered<ForgotPass>Login</ForgotPass></Span>
        </Form>
    </Main>
  )
}

export default signup