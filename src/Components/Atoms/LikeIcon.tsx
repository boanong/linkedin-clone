/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SlLike } from "react-icons/sl";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import {
  LikeIcon2,
  Celebrate,
  SupportIcon,
  HeartIcon,
  InsightIcon,
  FunnyIcon,
} from "./Reaction";
import { db } from "@/firebase/config";

export const LikeIcon = styled(SlLike)`
  color: #666666;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const LikeP = styled.p`
  color: #666666;
  font-size: 15px;
  font-weight: 300;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const ReactionsHolder = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  padding: 2px 8px;
`;

const LikeHolder = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  gap: 10px;
  @media only screen and (min-width: 770px) {
    padding: 5px 25px;
    gap: 15px;
    cursor: pointer;
  }
`;

type Props = { userData: any; vals: any };

function LikeButton({ userData, vals }: Props) {
  const [likes, setLikes] = useState<any>([]);
  const [liked, setLiked] = useState<boolean>(false);
  // const [likeCount, setLikeCount] = useState();
  // console.log(vals.id);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", vals.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [vals.id]);

  useEffect(() => {
    setLiked(
      likes.findIndex((like: { id: any }) => like?.id === userData?.uid) !== -1
    );
  }, [likes]);

  const handleLike = async () => {
    // console.log(vals.id);
    if (liked) {
      await deleteDoc(doc(db, "posts", vals.id, "likes", userData?.uid));
    } else {
      await setDoc(doc(db, "posts", vals.id, "likes", userData?.uid), {
        currentUser: userData?.displayName,
      });
    }
  };

  return (
    <>
      <ReactionsHolder className="actions-holder">
        <LikeIcon2 className="like1" />
        <Celebrate className="celebrate" />
        <SupportIcon className="support" />
        <HeartIcon className="heart" />
        <InsightIcon className="insight" />
        <FunnyIcon className="funny" />
      </ReactionsHolder>
      <LikeHolder>
      {liked ? (
          <LikeIcon2 onClick={handleLike} />
        ) : (
          <LikeIcon onClick={handleLike} className="likemain" />
        )}
        <LikeP>Likes</LikeP>
        {likes.length > 0 && <p>{likes.length}</p>}
      </LikeHolder>
    </>
  );
}

export default LikeButton;
