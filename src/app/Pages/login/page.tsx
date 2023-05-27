"use client";
import React, { useState } from "react";
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
import { auth } from "@/firebase/config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthContextProvider } from "@/context/AuthContex";

type Props = {};

function Login({ }: Props) {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()
  const [authing, setAuthing] = useState(false);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(data.email, data.password);
    try {
      await login(data.email, data.password)
      router.push('/Pages/Feed')
    } catch (err) {
      console.log(err)
    }
  }

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(res => {
        console.log(res.user.uid);
        router.push("/Pages/Feed");
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
        console.log(response.user.uid)
        router.push("/Pages/Feed")
      })
      .catch(err => {
        console.log(err)
        setAuthing(false);
      })
  }



  return (
    <AuthContextProvider>
      <MainDiv>
        <NavBar>
          <Linked>
            Linked
            <LinkedInIcon />
          </Linked>
        </NavBar>
        <Form
          onSubmit={(e) => handleLogin(e)}
        >
          <FormHeading>Login</FormHeading>
          <Ptag>
            Keep up to date with developments in your professional world
          </Ptag>
          <InputCredentials
            placeholder="Email or phone"
            name="email"
            type="text"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
          <PassHolder>
            <PassInput placeholder="Password" name="password" type="password" onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value
              })
            }
              value={data.password} />
            <ViewPass>display</ViewPass>
          </PassHolder>
          <ForgotPass>Forgot your Password?</ForgotPass>
          <SubmitBtn type="submit">Login</SubmitBtn>
          <OrSec>
            <Line />
            <Or>Or</Or>
            <Line />
          </OrSec>
          <SocilaLogBtn type="button" onClick={() => signInWithGoogle()} disabled={authing}>
            <FcGoogle />
            Google
          </SocilaLogBtn>
          <SocilaLogBtn type="button" onClick={() => githubSignin()} disabled={authing}>
            <FaGithub />
            GitHub
          </SocilaLogBtn>
        </Form>
        <Span>
          New to LinkedIn?<ForgotPass>Register</ForgotPass>
        </Span>
        <Footer>Footer</Footer>
      </MainDiv>
    </AuthContextProvider>
  );
}

export default Login;
