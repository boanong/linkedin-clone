import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill, BsBriefcaseFill } from "react-icons/bs";

export const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 26px;
  font-weight: 500;
  height: inherit;
`;

export const Linked = styled.h2`
  color: #0a66c2;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  justify-self: flex-start;
`;

export const JobsIcon = styled(BsBriefcaseFill)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const NotificationBell = styled(IoMdNotifications)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const MessageIcon = styled(AiFillMessage)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const NetworkIcon = styled(BsPeopleFill)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const HomeIcon = styled(ImHome3)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const FormHeading = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
  line-height: 0.9;
  font-weight: 500;
  color: #000;
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.1;
    font-weight: 600;
  }
`;

export const Ptag = styled.p`
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 350;
  color: #000;
  @media only screen and (min-width: 768px) {
    font-size: 0.9rem;
    margin-top: -15px;
    line-height: 1.3;
    font-weight: 400;
  }
`;

export const InputCredentials = styled.input`
  font-size: 1.2rem;
  max-width: 348px;
  width: 100%;
  margin: auto;
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  align-text: center;
  display flex;
  align-items: center;
  border: 1px solid #000;
  padding: 10px 8px;
  border-radius: 4px !important;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 10px;
  }
`;

export const ForgotPass = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  width: max-content;
  line-height: 32px;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
    &:hover {
      background-color: #5cacfb99;
      transition: 0.5s;
      border-radius: 25px;
      padding: 0;
      margin: 0;
      z-index: 1;
    }
  }
`;

export const TermsA = styled.a`
  color: #0a66c2;
  text-decoration: none;
  cursor: pointer;
`;

export const ConnectJoinBtn = styled.button`
  border: 1px solid #0a66c2;
  background-color: transparent;
  color: #0a66c2;
`;

export const SubmitBtn = styled.button`
  max-width: 348px;
  width: 100%;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-color: #0a66c2;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    &:hover {
      background-color: #05417d;
      transition: 0.5s;
    }
  }
`;

export const Label = styled.label`
<<<<<<< HEAD
    font-size: 15px;
    text-align: left;
=======
  font-size: 15px;
  text-align left
>>>>>>> d4bfbfb9682f691fa086dbe6939409284fc42a3b
`;

export const SocilaLogBtn = styled.button`
  max-width: 348px;
  width: 100%;
  text-align: center;
  color: #000;
  border: 1px solid #6a6a6a;
  border-radius: 25px;
  padding: 10px;
  background-color: transparent;
  margin: auto;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    &:hover {
      border: 1.5px solid #000;
      transition: 0.5s;
    }
  }
`;

export const Or = styled.p`
  font-size: 16px;
  color: #000;
`;

export const Terms = styled.p`
  color: #6a6a6a;
  font-size: 12px;
  text-align: center;
`;

export const Line = styled.hr`
  width: 45%;
  color: #d9ddde;
  height: 2px;
  background: #d9ddde;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-self: center;
  margin-top: 0;
`;

export const PassInput = styled.input`
  width: 80%;
  max-width: 200px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  align-text: center;
  display flex;
  border: none;
  align-items: center;
  padding: 10px 8px;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 10px;
  }
`;

export const ViewPass = styled.p`
  color: #0a66c2;
  justify-self: flex-end;
  margin: auto 10px auto 0;
  text-align: left;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: #5cacfb99;
      transition: 0.5s;
      border-radius: 25px;
      padding: 0;
    }
  }
`;
