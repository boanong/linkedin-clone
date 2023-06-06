'use-client'
import React from 'react'
import styled from "@emotion/styled";
import { ProfilePicture, JobTitle } from "../Atoms/DropdownCard";
import {
  PostSection,
  Header,
  PostText,
  PostImage,
  OptionsSection,
} from "../Molecules/PostSection";
import LikeButton from "../Atoms/LikeIcon";
import { MeFeatureIcon2 } from "../Atoms/MeFeatureIcon";

const PostReaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 10px;
  width: 100%;
`;

const PostReactionInner = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

type Props = { userData: any };

function PostsSection({ userData }: Props) {
  return (
    <>
      <PostSection>
        <Header>
          {(
            <ProfilePicture src={userData?.photoUrl} alt="Profile Picture" />
          ) || <MeFeatureIcon2 />}
          <JobTitle>UI/UX Designer || Full stack Developer</JobTitle>
        </Header>
        <PostText>
          Rebase Academy offers comprehensive and personalized programming
          education for students of all skill levels. With experienced
          instructors and a flexible curriculum, students can learn at their own
          pace and gain the skills needed to become successful developers. From
          web development to machine learning, Rebase Academy provides a
          top-notch education for the next generation of programmers.
        </PostText>
        <PostImage
          src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg"
          alt="Post Image"
        />

        <OptionsSection></OptionsSection>
        <PostReaction>
          <PostReactionInner>
            <LikeButton />
          </PostReactionInner>
        </PostReaction>
      </PostSection>
      ;
    </>
  );
}

export default PostsSection;
