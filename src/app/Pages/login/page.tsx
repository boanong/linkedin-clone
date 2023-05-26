"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ForgotPass } from "@/Components/Atoms/AnchorTag";
import { ViewPass } from "@/Components/Atoms/DisplayPass";
import { InputCredentials } from "@/Components/Atoms/EmailInput";
import { FormHeading } from "@/Components/Atoms/Heading";
import { Line } from "@/Components/Atoms/Hr";
import { LinkedInIcon } from "@/Components/Atoms/LinkedLogo";
import { Linked } from "@/Components/Atoms/LinkedLogoTxt";
import { PassInput } from "@/Components/Atoms/PasswordInput";
import { Ptag, Or } from "@/Components/Atoms/Ptag";
import { SocilaLogBtn } from "@/Components/Atoms/SocialLogBtn";
import { Span } from "@/Components/Atoms/Span";
import { SubmitBtn } from "@/Components/Atoms/SubmitBtn";
import { Form } from "@/Components/Molecules/Form";
import { OrSec } from "@/Components/Molecules/OrSec";
import { PassHolder } from "@/Components/Molecules/PasswordHolder";
import { Footer } from "@/Components/Organisms/Footer";
import { MainDiv } from "@/Components/Organisms/MainDiv";
import { NavBar } from "@/Components/Organisms/NavBar";

type Props = {};

function Login({}: Props) {
  return (
    <MainDiv>
      <NavBar>
        <Linked>
          Linked
          <LinkedInIcon />
        </Linked>
      </NavBar>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormHeading>Login</FormHeading>
        <Ptag>
          Keep up to date with developments in your professional world
        </Ptag>
        <InputCredentials
          placeholder="Email or phone"
          name="email"
          type="text"
        />
        <PassHolder>
          <PassInput placeholder="Password" name="password" type="password" />
          <ViewPass>display</ViewPass>
        </PassHolder>
        <ForgotPass>Forgot your Password?</ForgotPass>
        <SubmitBtn type="submit">Login</SubmitBtn>
        <OrSec>
          <Line />
          <Or>Or</Or>
          <Line />
        </OrSec>
        <SocilaLogBtn type="button">
          <FcGoogle />
          Google
        </SocilaLogBtn>
        <SocilaLogBtn type="button">
          <FaGithub />
          GitHub
        </SocilaLogBtn>
      </Form>
      <Span>
        New to LinkedIn?<ForgotPass>Register</ForgotPass>
      </Span>
      <Footer>Footer</Footer>
    </MainDiv>
  );
}

export default Login;
