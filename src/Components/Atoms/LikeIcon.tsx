import React from 'react'
import styled from "@emotion/styled";
import { SlLike } from "react-icons/sl"
import { LikeIcon2, Celebrate, SupportIcon, HeartIcon, InsightIcon, FunnyIcon } from './Reaction';
import firebase from 'firebase/app';
import 'firebase/database';

export const LikeIcon = styled(SlLike)`
    color: #666666;
    font-size: 1rem;
    font-weight: 300;
    @media only screen and (min-width: 770px) {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

export const LikeP = styled.p`
    color: #666666;
    font-size: 1rem;
    font-weight: 300;
    @media only screen and (min-width: 770px) {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

const LikeHolder = styled.div`
    display: flex;
    align-items: center;
    padding: 3px 10px;
    gap: 10px;
    @media only screen and (min-width: 770px)  {
        padding: 5px 25px;
        gap: 15px;
        &:hover + ReactionsHolder {
            display: block;
            background-color: #acacac;;
        }
    }
`;

const ReactionsHolder = styled.div`
    display: none;
    align-items: center;
    gap: 8px;
    padding: 2px 8px;
`;



type Props = {}

function LikeButton({}: Props) {
    const handleLike = (userId:any, postId:any ) => {
        const post = firebase.database().ref(`post/${postId}`);

    }
  return (
  <>
  <ReactionsHolder><LikeIcon2 /><Celebrate /><SupportIcon /><HeartIcon /><InsightIcon /><FunnyIcon /></ReactionsHolder>
  <LikeHolder>
        <LikeIcon />
        <LikeP>Like</LikeP>
    </LikeHolder>
  </>
  )
}

export default LikeIcon