/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LinkedInIcon } from "@/Components/Atoms/LinkedLogo";
import { Linked } from "@/Components/Atoms/LinkedLogoTxt";
import { FormHeading } from "@/Components/Atoms/Heading";
import { Label } from "@/Components/Atoms/LabelTag";
import { TermsA, ForgotPass } from "@/Components/Atoms/AnchorTag";
import { ViewPass } from "@/Components/Atoms/DisplayPass";
import { InputCredentials1 } from "@/Components/Atoms/EmailInput";
import { Line } from "@/Components/Atoms/Hr";
import { PassInput1 } from "@/Components/Atoms/PasswordInput";
import { Terms, Or } from "@/Components/Atoms/Ptag";
import { SocilaLogBtn1 } from "@/Components/Atoms/SocialLogBtn";
import { Span } from "@/Components/Atoms/Span";
import { SubmitBtn } from "@/Components/Atoms/SubmitBtn";
import { Form1 } from "@/Components/Molecules/Form";
import { OrSec } from "@/Components/Molecules/OrSec";
import { PassHolder } from "@/Components/Molecules/PasswordHolder";
import { NavBar } from "@/Components/Organisms/NavBar";
import { MainDiv } from "@/Components/Organisms/MainDiv";
import { Footer } from "@/Components/Organisms/Footer";

type Props = {};

function signup({}: Props) {
  return (
    <MainDiv>
      <NavBar>
        <Linked>
          Linked
          <LinkedInIcon />
        </Linked>
      </NavBar>
      <FormHeading>Make the most of your professional life.</FormHeading>
      <Form1
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label>Email</Label>
        <InputCredentials1
          placeholder="Email or phone"
          type="text"
          name="email"
        />
        <Label>Password(6 characters minimum)</Label>
        <PassHolder>
          <PassInput1 placeholder="Password" type="password" name="password" />
          <ViewPass>Display</ViewPass>
        </PassHolder>
        <Terms>
          By clicking Accept and Join, you agree to LinkedIn's{" "}
          <TermsA>Terms of Service</TermsA> , <TermsA>Privacy Policy</TermsA> ,
          and <TermsA>Cookie Policy</TermsA> .
        </Terms>
        <SubmitBtn type="submit">Accept and Join</SubmitBtn>
        <OrSec>
          <Line />
          <Or>Or</Or>
          <Line />
        </OrSec>
        <SocilaLogBtn1 type="button">
          Join with Google <FcGoogle />
        </SocilaLogBtn1>
        <SocilaLogBtn1 type="button">
          Join with GitHub <FaGithub />
        </SocilaLogBtn1>
        <Span>
          Already Registered<ForgotPass>Login</ForgotPass>
        </Span>
      </Form1>
      <Footer>Footer</Footer>
    </MainDiv>
  );
}

export default signup;
