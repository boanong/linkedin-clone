/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-children-prop */
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
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthContextProvider } from "@/context/AuthContex";
import Link from "next/link";
import Loading from "@/Components/Loading/Loading";
import swal from "sweetalert";

type Props = {};

function Login({}: Props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const router = useRouter();
  const [authing, setAuthing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [noEmail, setNoEmail] = useState(false);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/Pages/feed");
      })
      .catch(function (error) {
        //Handle error
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          swal(
            "Wrong info!",
            "We can't log you in. Please check for an email from us, reset your password, or try again",
            "error"
          );
        } else {
          swal(errorMessage, { icon: "warning" });
        }
      });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(data.email, data.password);
    } catch (err) {
    }
  };

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        router.push("/Pages/feed");
      })
      .catch(err => {
        setAuthing(false);
      });
  };

  const githubSignin = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GithubAuthProvider())
      .then((response) => {
        router.push("/Pages/feed");
      })
      .catch((err) => {
        setAuthing(false);
      });
  };

  const resetPassword = () => {
    if (!data.email) {
      setNoEmail(true);
      return;
    }

    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        // Password reset email sent!
        swal(
          "Password Reset Email Sent!",
          "An email has been sent to your rescue email address, Please click the link in the email to reset your password.",
          "success"
        );
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal(errorMessage, { icon: "warning" });
        // ..
      });
  };

  return (
    <AuthContextProvider>
      {isLoading && <Loading />}
      <MainDiv>
        <NavBar>
          <Linked>
            Linked
            <Link href="/">
              <LinkedInIcon />
            </Link>
          </Linked>
        </NavBar>
        <Form
          onSubmit={(e: any) => handleLogin(e)}
        >
          <FormHeading>Login</FormHeading>
          <Ptag>
            Keep up to date with developments in your professional world.
          </Ptag>
          <InputCredentials
            placeholder="Email or phone"
            name="email"
            type="email"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            noEmail={noEmail}
          />
          <PassHolder>
            <PassInput
              placeholder="Password"
              name="password"
              type={passwordType}
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
            <ViewPass onClick={() => togglePassword()}>Display</ViewPass>
          </PassHolder>
          <ForgotPass onClick={resetPassword}>Forgot your Password?</ForgotPass>
          <SubmitBtn type="submit">Login</SubmitBtn>
          <OrSec>
            <Line />
            <Or>Or</Or>
            <Line />
          </OrSec>
          <SocilaLogBtn
            type="button"
            onClick={() => signInWithGoogle()}
            disabled={authing}
          >
            <FcGoogle />
            Google
          </SocilaLogBtn>
          <SocilaLogBtn
            type="button"
            onClick={() => githubSignin()}
            disabled={authing}
          >
            <FaGithub />
            GitHub
          </SocilaLogBtn>
        </Form>
        <Span>
          New to LinkedIn?<Link href="/Pages/signup" onClick={() => setLoading(true)}><ForgotPass>Register</ForgotPass></Link>
        </Span>
        <Footer>Footer</Footer>
      </MainDiv>
    </AuthContextProvider>
  );
}

export default Login;
