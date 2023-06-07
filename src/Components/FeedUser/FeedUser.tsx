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
  width: 20vw;
  margin: auto;
  display: flex;
  top: inherit;
  flex-direction: column;
  @media only screen and (min-width: 920px) {
    position: fixed;
    left: 22%;
    max-width: 230px;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 769px) {
    position: fixed;
    left: 3%;
    top: inherit;
    max-width: 180px;
  }
  @media only screen and (max-width: 428px) {
    display: none;
  }
`;

export default function FeedUserSec({ userData }: Props) {
  return (
    <FeedUser>
      <FeedUserDiv1>
        <FeedUserImages></FeedUserImages>
        {/* <FeedUserProfilePic> */}
       { <Profpic src={userData?.photoUrl}/> || <FeedUserPPic />}
        {/* </FeedUserProfilePic> */}

        {/* <FeedUserBio> */}
        <FeedUserBioH>
          {userData?.displayName || userData?.email || "username"}
        </FeedUserBioH>
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
