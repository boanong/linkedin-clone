import { SlLike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { FaHands } from "react-icons/fa";
import { AiTwotoneLike } from 'react-icons/ai';
import { TbBulbFilled } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import styled from "styled-components";

export const ReactHover1 = styled.p`
  display: none;
`;

export const ReactHover2 = styled.p`
  display: none;
`;

export const ReactHover3 = styled.p`
  display: none;
`;
export const ReactHover4 = styled.p`
  display: none;
`;
export const ReactHover5 = styled.p`
  display: none;
`;
export const ReactHover6 = styled.p`
  display: none;
`;

export const ReactHoverTxtHolder = styled.div`
  display: none;
  @media only screen and (min-width: 770px) {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const LikeIcon2 = styled(AiTwotoneLike)`
  color: #0a66c2;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    /* &:hover {
      {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;

export const SupportIcon = styled(FaHandHoldingHeart)`
  color: #5400b4;
  background-color: #6d08e086;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    /* &:hover {
       {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;

export const InsightIcon = styled(TbBulbFilled)`
  color: #825400;
  background-color: #e7ba0485;
  font-size: 1rem;
  font-weight: 300;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    /* &:hover {
      {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;

export const HeartIcon = styled(FcLike)`
  color: #ff1818;
  background-color: #ff181899;
  font-size: 1rem;
  font-weight: 300;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    /* &:hover {
       {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;

export const FunnyIcon = styled(BsEmojiLaughing)`
  font-size: 1rem;
  color: #0e9cfa;
  background-color: #0e9bfa92;
  font-weight: 300;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    /* &:hover {
      ReactHover6} {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;

export const Celebrate = styled(FaHands)`
  color: #00b406;
  background-color: #00b40695;
  font-size: 1rem;
  font-weight: 300;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    /* &:hover {
       {
        display: block;
        font-size: 16px;
        background-color: #000;
        color: #fff;
        padding: 3px 8px;
        border-radius: 25%;
      }
    } */
  }
`;
