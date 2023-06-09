"use-client";
import styled from "@emotion/styled";
import { FaCommentDots } from "react-icons/fa";

export const CommentSecHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
`;

export const CommentForm = styled.form`
  width: 97%;
  padding: 0;
  margin: auto;
`;

export const CommentHoverText = styled.p`
  display: none;
`;

export const CommentIconHolder = styled.div`
  display: flex;
  align-items: center;
`;


export const CommentIcon = styled(FaCommentDots)`
  color: #666666;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    &:hover {
       .comment {
        display: block;
        padding: 3px 5px;
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

export const CommentBtn = styled.button`
    text-align: center;
    padding: 4px 12px;
    font-size: 15px;
    background-color: transparent;
    @media screen {
     &:hover{
        transition: 0.6s;
        background-color: #acacacac;
     }   
    }
`;
