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
import { PostSection, Header, ProfilePicture, JobTitle, PostText, PostImage, OptionsSection } from "../Molecules/PostSection";


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
        <FeedUserBioH>{userData?.displayName || userData?.email || 'username'}</FeedUserBioH>
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
    </FeedUser>
  );
}
