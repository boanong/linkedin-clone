/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArticleLan } from "@/Components/Atoms/ArticleIcon";
import { JobsIcon, NetworkIcon } from "@/Components/Atoms/BsIcons";
import { ForgotPassH } from "@/Components/Atoms/ForgotPassHero";
import { Line } from "@/Components/Atoms/Hr";
import { JoinNowBtn, SignInLan } from "@/Components/Atoms/JoinNow";
import {
  LandingNewTo,
  LandingNewTo1,
  LandingSignInOnclick,
} from "@/Components/Atoms/LandingSignIn";
import { Learning } from "@/Components/Atoms/Learning";
import { LinkedInIconLan } from "@/Components/Atoms/LinkedLogo";
import { Linked } from "@/Components/Atoms/LinkedLogoTxt";
import { Or } from "@/Components/Atoms/Ptag";
import { VerticalLine } from "@/Components/Atoms/VerticalLine";
import { JoinBtnHolder } from "@/Components/Molecules/JoinBtnHolder";
import {
  LandingNavR,
  LandingNavRInner,
} from "@/Components/Molecules/LandingNavR";
import { NIconHolder } from "@/Components/Molecules/NavIconHolder";
import { OrSec } from "@/Components/Molecules/OrSec";
import {
  LandingHero,
  LandingHeroH1,
  LandingHeroInput,
  LandingHeroLeft,
  LandingHeroRight,
} from "@/Components/Organisms/LandingHero";
import { LandingNav } from "@/Components/Organisms/LandingNav";
import { NavTxt } from "@/Components/Organisms/TopNavHolder";
import { auth } from "@/firebase/config";
import styled from "@emotion/styled";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Loading from "@/Components/Loading/Loading";
import { AuthContextProvider } from "@/context/AuthContex";
import swal from "sweetalert";
import { sendPasswordResetEmail } from "firebase/auth";

type Props = {};

const LandingMain = styled.div`
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: #cfcfcf;
  height: fit-content;
  @media only screen and (min-width: 768px) {
    display: flex;
    height: fit-content;
    min-height: calc(100vh - 76px - 50px);
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100vw;
  }
`;

const LandingForm = styled.form`
  width: min(94vw, 380px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  @media only screen and (min-width: 768px) {
    width: 47vw;
    max-width: 400px;
  }
`;

function Landing({}: Props) {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()
  const [authing, setAuthing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [noEmail, setNoEmail] = useState(false)

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => { router.push('/Pages/feed') }).
      catch(function (error) {
        //Handle error
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          swal("Wrong info!", "We can't log you in. Please check for an email from us, reset your password, or try again", "error");

        } else {
          swal(errorMessage, { icon: "warning" })
        }
      })
  }

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(data.email, data.password)
    } catch (err) {
    }
  }

  const signInWithGoogle = async () => {
    setAuthing(true);
  
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(res => {
        router.push("/Pages/feed");
      })
      .catch(err => {
        setAuthing(false);
      })
  }

  const resetPassword = () => {
    if (!data.email) {
      setNoEmail(true);
      return;
    };

    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        // Password reset email sent!
        swal("Password Reset Email Sent!", "An email has been sent to your rescue email address, Please click the link in the email to reset your password.", "success");
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal(errorMessage, { icon: "warning" });
        // ..
      });

  }

  return (
    <AuthContextProvider>
      {isLoading && <Loading />}
      <LandingMain>
        <LandingNav>
          <Linked>
            Linked
            <Link href="/">
              <LinkedInIconLan />
            </Link>
          </Linked>
          <LandingNavR>
            <LandingNavRInner>
              <NIconHolder>
                <ArticleLan />
                <NavTxt>Articles</NavTxt>
              </NIconHolder>
              <NIconHolder>
                <NetworkIcon />
                <NavTxt>People</NavTxt>
              </NIconHolder>
              <NIconHolder>
                <Learning />
                <NavTxt>Learning</NavTxt>
              </NIconHolder>
              <NIconHolder>
                <JobsIcon />
                <NavTxt>Jobs</NavTxt>
              </NIconHolder>
            </LandingNavRInner>
            <VerticalLine></VerticalLine>
            <JoinBtnHolder>
              <Link href="/Pages/signup" onClick={() => setLoading(true)}>
                <JoinNowBtn type="button">Join Now</JoinNowBtn>
              </Link>
              <Link href="/Pages/login" onClick={() => setLoading(true)}>
                <SignInLan type="button">Sign in</SignInLan>
              </Link>
            </JoinBtnHolder>
          </LandingNavR>
        </LandingNav>
        <LandingHero>
          <LandingHeroLeft>
            <LandingHeroH1>
              Welcome to your professional community
            </LandingHeroH1>
            <LandingForm onSubmit={(e) => handleLogin(e)}>
              <LandingHeroInput
                placeholder="Email or phone number"
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
              <LandingHeroInput
                placeholder="Password"
                type="password"
                required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
              />
              <ForgotPassH onClick={resetPassword}>Forgot password?</ForgotPassH>
              <LandingSignInOnclick type="submit">Sign in</LandingSignInOnclick>
            </LandingForm>
            <OrSec>
              <Line />
              <Or>Or</Or>
              <Line />
            </OrSec>
            <LandingNewTo1
              type="button"
              onClick={() => signInWithGoogle()}
              disabled={authing}
            >
              Continue with google
              <FcGoogle />
            </LandingNewTo1>
            <Link href="/Pages/signup" onClick={() => setLoading(true)}>
              <LandingNewTo type="button">
                New to LinkedIn? Join Now
              </LandingNewTo>
            </Link>
          </LandingHeroLeft>
          <LandingHeroRight />
        </LandingHero>
      </LandingMain>
    </AuthContextProvider>
  );
}

export default Landing;
