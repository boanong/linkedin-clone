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
import { Profpic } from "../Atoms/Profpic";

type Props = { userData: any };

const FeedUser = styled.div`
  display: none;
  @media only screen and (min-width: 425px) {
    width: 20vw;
    position: sticky;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export default function FeedUserSec({ userData }: Props) {
  return (
    <FeedUser>
      <FeedUserDiv1>
        <FeedUserImages></FeedUserImages>
        {/* <FeedUserProfilePic> */}
        { <Profpic src={userData?.photoUrl} /> || <FeedUserPPic />}
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
