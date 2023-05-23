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
  font-size: 3.2rem;
  line-height: 1.25;
  font-weight: 600;
  color: #000;
`;

export const Ptag = styled.p`
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 400;
  color: #000;
`;

export const InputCredentials = styled.input`
  font-size: 1.8rem;
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  position: relative;
  padding: 28px 12px 6px;
  border-radius: 4px !important;
`;

export const ForgotPass = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: inherit;
  line-height: 32px;
`;

export const ConnectJoinBtn = styled.button`
  border: 1px solid #0a66c2;
  background-color: transparent;
  color: #0a66c2;
`;

export const SubmitBtn = styled.button`
  width: 94vw;
  max-width: 270px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25%;
  padding: 24px;
  background-color: #0a66c2;
  margin: auto;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Label = styled.label`
    font-size: 15px;
    text-align left
`;

export const SocilaLogBtn = styled.button`
  width: 94vw;
  max-width: 270px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25%;
  padding: 12px;
  background-color: #000;
  margin: auto;
  font-size: 1rem;
  font-weight: 400;
`;

export const PassInput = styled.input`
  width: 80%;
  max-width: 200px;
  padding: 28px 12px 6px;
`;

export const ViewPass = styled.p`
  color: #0a66c2;
  width: 15%;
  margin: auto;
  text-align: left;
`;