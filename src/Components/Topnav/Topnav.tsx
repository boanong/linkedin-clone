"use client";
import React, { useState } from "react";
import { FeedNav, NavTxt } from "../Organisms/TopNavHolder";
import { HomeIcon } from "../Atoms/HomeIcon";
import {
  NIconHolder,
  NIconHolder2,
  MeAndTextHolder,
  Textandiconcontainer,
  Icondiv,
} from "../Molecules/NavIconHolder";
import { JobsIcon, NetworkIcon } from "../Atoms/BsIcons";
import { MessageIcon } from "../Atoms/MsgIcon";
import { NotificationBell } from "../Atoms/NotificationIcon";
import { Searchbar, SearchInput } from "../Atoms/Searchbar";
import { LinkedInIconLarge, LinkedInIconLarge2 } from "../Atoms/LinkedLogo";
import { SearchIcon } from "../Atoms/SearchIcon";
import {
  NavSearchHolder,
  NavSearchHolder2,
} from "../Molecules/NavSearchHolder";
import { FeaturesHolder } from "../Molecules/FeaturesHolder";
import { ForBusinessIcon } from "../Atoms/ForBusinessIcon";
import { PostJobs } from "../Atoms/PostJobs";
import { MeFeatureIcon } from "../Atoms/MeFeatureIcon";
import styled from "@emotion/styled";
import { VerticalLine } from "../Atoms/VerticalLine";
import { DropdownIcon } from "../Atoms/DropdownIcon";
import { Profpic2 } from "../Atoms/Profpic";

import Dropdown from "../Organisms/Dropdown/Dropdown";

type Props = { userData: any };

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Overlay = styled.div`
  background-color: #00000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const DisplayNoneDiv = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function Topnav({ userData }: Props) {
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const toggleDrop = () => {
    setShowDrop((prev) => !prev);
  };

  return (
    <>
      {/* <FeedMain> */}
      {showDrop && <Overlay onClick={toggleDrop} />}

      <FeedNav>
        <NavSearchHolder2>
          <LinkedInIconLarge2 />
          <SearchIcon />
        </NavSearchHolder2>
        <NavSearchHolder>
          <LinkedInIconLarge />
          <Searchbar>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search" />
          </Searchbar>
        </NavSearchHolder>

        <FeaturesHolder>
          <NIconHolder>
            <HomeIcon />
            <NavTxt>Home</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <NetworkIcon />
            <NavTxt>My Network</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <JobsIcon />
            <NavTxt>Jobs</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <MessageIcon />
            <NavTxt>Messaging</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <NotificationBell />
            <NavTxt>Notifications</NavTxt>
          </NIconHolder>

          <DisplayNoneDiv>
            <NIconHolder2>
              <Profpic2
                src={
                  userData?.photoUrl ||
                  "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                }
                onClick={toggleDrop}
              />
              {/* { <Profpic2 src={userData?.photoUrl} onClick={toggleDrop} /> ||  */}
              <Textandiconcontainer onClick={toggleDrop}>
                <MeAndTextHolder>
                  <NavTxt>Me</NavTxt>
                </MeAndTextHolder>
                <Icondiv>
                  <DropdownIcon />
                </Icondiv>
              </Textandiconcontainer>

              {showDrop && <Dropdown userData={userData} />}
            </NIconHolder2>

            <VerticalLine></VerticalLine>

            <NIconHolder>
              <ForBusinessIcon />
              <Textandiconcontainer>
                <MeAndTextHolder>
                  <NavTxt>For Business</NavTxt>
                </MeAndTextHolder>
                <Icondiv>
                  <DropdownIcon />
                </Icondiv>
              </Textandiconcontainer>
            </NIconHolder>

            <NIconHolder>
              <PostJobs />
              <NavTxt>Post a job</NavTxt>
            </NIconHolder>
          </DisplayNoneDiv>
        </FeaturesHolder>
      </FeedNav>
      {/* </FeedMain> */}
    </>
  );
}

export default Topnav;
