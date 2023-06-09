/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContextProvider } from '@/context/AuthContex';
import { MainDiv } from '@/Components/Organisms/MainDiv';
import { NavBar } from '@/Components/Organisms/NavBar';
import { Form } from '@/Components/Molecules/Form';
import { PassHolder } from '@/Components/Molecules/PasswordHolder';
import { OrSec } from '@/Components/Molecules/OrSec';
import { useRouter } from 'next/navigation';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { TermsA, ForgotPass } from '@/Components/Atoms/AnchorTag';
import { ViewPass } from '@/Components/Atoms/DisplayPass';
import { InputCredentials } from '@/Components/Atoms/EmailInput';
import { FormHeading } from '@/Components/Atoms/Heading';
import { Line } from '@/Components/Atoms/Hr';
import { Label } from '@/Components/Atoms/LabelTag';
import { LinkedInIcon } from '@/Components/Atoms/LinkedLogo';
import { Linked } from '@/Components/Atoms/LinkedLogoTxt';
import { PassInput } from '@/Components/Atoms/PasswordInput';
import { Terms, Or, Ptag } from '@/Components/Atoms/Ptag';
import { SocilaLogBtn } from '@/Components/Atoms/SocialLogBtn';
import { Span } from '@/Components/Atoms/Span';
import { SubmitBtn } from '@/Components/Atoms/SubmitBtn';
import Link from 'next/link';
import Loading from '@/Components/Loading/Loading';
import swal from 'sweetalert';


function Signup() {
  const [authing, setAuthing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/Pages/feed");
      })
      .catch(function (error) {
        //Handle error
        let errorMessage = error.message;
        swal(errorMessage, { icon: "warning" });
        console.log(error);
      });
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(data.email, data.password);
    } catch (err) {
    }
  };

  const signUpWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        router.push("/Pages/feed");
      })
      .catch((err) => {
        setAuthing(false);
      });
  };

  const GithubSignup = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GithubAuthProvider())
      .then((response) => {
        router.push("/Pages/feed");
      })
      .catch((err) => {
        setAuthing(false);
      });
  };

  return (
    <AuthContextProvider>
      {isLoading && <Loading />}
      <MainDiv>
        <NavBar>
          <Linked>
            Linked
            <Link href="/" onClick={() => setLoading(true)}><LinkedInIcon /></Link>
          </Linked>
        </NavBar>

        <FormHeading>Make the most of your professional life.</FormHeading>
        <Form onSubmit={(e) => handleSignup(e)}>
          <Label>Email</Label>
          <InputCredentials placeholder='Email or phone' required type='email' name='email' onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
            value={data.email} />
          <Label>Password(6 characters minimum)</Label>
          <PassHolder>
            <PassInput
              placeholder="Password"
              required
              type={passwordType}
              name="password"
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
          <Terms>
            By clicking Accept and Join, you agree to LinkedIn's
            <TermsA>Terms of Service</TermsA> , <TermsA>Privacy Policy</TermsA>
            , and <TermsA>Cookie Policy</TermsA> .
          </Terms>
          <SubmitBtn type="submit">Accept and Join</SubmitBtn>
          <OrSec>
            <Line />
            <Or>Or</Or>
            <Line />
          </OrSec>
          <SocilaLogBtn type='button' onClick={() => signUpWithGoogle()} disabled={authing}>Join with Google <FcGoogle /></SocilaLogBtn>
          <SocilaLogBtn type='button' onClick={() => GithubSignup()} disabled={authing}>Join with GitHub <FaGithub /></SocilaLogBtn>
          <Span>Already Registered<Link href="/Pages/login" onClick={() => setLoading(true)}><ForgotPass>Login</ForgotPass></Link></Span>
        </Form >
      </MainDiv >
    </AuthContextProvider >

  );
}

export default Signup;
