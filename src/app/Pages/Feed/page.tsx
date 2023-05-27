"use client";
import React from "react";
import FeedUserSec from "@/Components/FeedUser/FeedUser";
import { FeedInnerMain } from "@/Components/Organisms/FeedInnerMain";
import styled from "@emotion/styled";
import Topnav from "@/Components/Topnav/Topnav";
import { PostSecHolder } from "@/Components/Organisms/PostSecHolder";
import Post from "@/Components/Post/Post";
import FeedR from "@/Components/FeedRight/FeedR";

type Props = {};

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
`;

function feed({}: Props) {
  return (
    <FeedMain>
      <Topnav />
      <FeedInnerMain>
        <FeedUserSec />
        <PostSecHolder>
          <Post/>
        </PostSecHolder>
        <FeedR/>
      </FeedInnerMain>
    </FeedMain>
  );
}

export default feed;
