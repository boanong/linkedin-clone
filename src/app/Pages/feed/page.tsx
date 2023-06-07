"use client";
import React from "react";
import FeedUserSec from "@/Components/FeedUser/FeedUser";
import {
  FeedInnerMain,
  FeedInnerMainR,
} from "@/Components/Organisms/FeedInnerMain";
import styled from "@emotion/styled";
import Topnav from "@/Components/Topnav/Topnav";
import { PostSecHolder } from "@/Components/Organisms/PostSecHolder";
import Post from "@/Components/Post/Post";
import FeedR from "@/Components/FeedRight/FeedR";
import AuthGaurd from "@/hoc/AuthGaurd";
import PostsSection from "@/Components/PostSection/PostsSection";

type Props = { userData: any };

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

const FeedRight = styled.div`
  position: absolute;
`;

const FeedLeft = styled.div`
  position: absolute;
`;

function Feed({ userData }: Props) {
  return (
    <FeedMain>
      <Topnav userData={userData} />
      <FeedInnerMain>
        <FeedLeft>
          <FeedUserSec userData={userData} />
        </FeedLeft>
        <FeedRight>
          <FeedInnerMainR>
            <PostSecHolder>
              <Post userData={userData} />
              <PostsSection userData={userData} />
            </PostSecHolder>
            <FeedR />
          </FeedInnerMainR>
        </FeedRight>
      </FeedInnerMain>
    </FeedMain>
  );
}

export default AuthGaurd(Feed);
