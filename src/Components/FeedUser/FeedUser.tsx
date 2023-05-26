"use client";
import styled from '@emotion/styled'
import React from 'react'
import { FeedUserDiv1, FeedUserImages, FeedUserProfilePic, FeedUserPPic, FeedUserBio, FeedUserBioH, FeedUserBioP, FeedUserHr, FeedUserP2, FeedUserConnect, FeedUserP1, FeedUserPN } from '../Molecules/FeedUserDivs';

type Props = {}

const FeedUser = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 20vw;
    max-width: 230px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
`;

function FeedUserSec({}: Props) {
  return (
    <FeedUser>
      <FeedUserDiv1>
        <FeedUserImages>
          <FeedUserProfilePic>
            <FeedUserPPic/>
          </FeedUserProfilePic>
        </FeedUserImages>
        <FeedUserBio>
          <FeedUserBioH>Current User</FeedUserBioH>
          <FeedUserBioP>Mans  baller, Keep Grinding, Head For the money</FeedUserBioP>
        </FeedUserBio>
        <FeedUserHr/>
        <FeedUserConnect>
          <FeedUserP2>connection</FeedUserP2>
          <FeedUserPN>1</FeedUserPN>
        </FeedUserConnect>
        <FeedUserP1>Connect with alumni</FeedUserP1>
        <FeedUserHr/>
      </FeedUserDiv1>
    </FeedUser>
  )
}

export default FeedUserSec