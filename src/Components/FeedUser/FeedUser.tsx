"use client";
import styled from "@emotion/styled";
import React from "react";
import {
  FeedUserDiv1,
  FeedUserImages,
  FeedUserPPic,
  FeedUserBioH,
  FeedUserBioP,
  FeedUserHr,
  FeedUserP2,
  FeedUserConnect,
  FeedUserP1,
  FeedUserPN,
  FeedUserP1U,
  FeedUserTxtH,
} from "../Molecules/FeedUserDivs";
import { PostSection, Header, ProfilePicture, JobTitle, PostText, PostImage, OptionsSection } from "../postSection/PostSection";

type Props = { userData: any };

const FeedUser = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 20vw;
    position: sticky;
    max-width: 230px;
    display: flex;
    flex-direction: column;
  }
`;

export default function FeedUserSec({ userData }: Props) {
  return (
    <FeedUser>
      <FeedUserDiv1>
        <FeedUserImages></FeedUserImages>
        {/* <FeedUserProfilePic> */}
        <FeedUserPPic />
        {/* </FeedUserProfilePic> */}

        {/* <FeedUserBio> */}
        <FeedUserBioH>{userData?.displayName || 'username'}</FeedUserBioH>
        <FeedUserBioP>
          Mans baller, Keep Grinding, Head For the money
        </FeedUserBioP>
        {/* </FeedUserBio> */}
        <FeedUserHr />
        <FeedUserTxtH>
          <FeedUserConnect>
            <FeedUserP2>connection</FeedUserP2>
            <FeedUserPN>1</FeedUserPN>
          </FeedUserConnect>
          <FeedUserP1>Connect with alumni</FeedUserP1>
        </FeedUserTxtH>
        <FeedUserHr />
        <FeedUserTxtH>
          <FeedUserP2>Access exclusive tools & insights</FeedUserP2>
          <FeedUserP1U>Try Premium for free</FeedUserP1U>
        </FeedUserTxtH>
        <FeedUserHr />
        <FeedUserTxtH>
          <FeedUserP1U>My Items</FeedUserP1U>
        </FeedUserTxtH>
      </FeedUserDiv1>


      <PostSection>
        <Header>
          <ProfilePicture
            src="https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY="
            alt="Profile Picture"
          />
          <JobTitle>UI/UX Designer || Full stack Developer</JobTitle>
        </Header>
        <PostText>Rebase Academy offers comprehensive and personalized programming education for students of all skill levels. With experienced instructors and a flexible curriculum, students can learn at their own pace and gain the skills needed to become successful developers. From web development to machine learning, Rebase Academy provides a top-notch education for the next generation of programmers.</PostText>
        <PostImage src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" alt="Post Image" />
        <OptionsSection>

        </OptionsSection> 
      </PostSection> 

    </FeedUser>
  );
}
