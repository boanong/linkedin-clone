"use client";
import React from "react";
import { FeedNav, NavTxt } from "../Organisms/TopNavHolder";
import { HomeIcon } from "../Atoms/HomeIcon";
import { NIconHolder } from "../Molecules/NavIconHolder";
import { JobsIcon, NetworkIcon } from "../Atoms/BsIcons";
import { MessageIcon } from "../Atoms/MsgIcon";
import { NotificationBell } from "../Atoms/NotificationIcon";
import { Searchbar, SearchInput } from "../Atoms/Searchbar";
import { LinkedInIconLarge } from "../Atoms/LinkedLogo";
import { SearchIcon } from "../Atoms/SearchIcon";
import { NavSearchHolder } from "../Molecules/NavSearchHolder";
import { FeaturesHolder } from "../Molecules/FeaturesHolder";
import { ForBusinessIcon } from "../Atoms/ForBusinessIcon";
import { PostJobs } from "../Atoms/PostJobs";
import { MeFeatureIcon } from "../Atoms/MeFeatureIcon";
import styled from "@emotion/styled";

type Props = {};

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  margin: 0;
  padding: 0;
`;

function Topnav({}: Props) {
  return (
    <FeedMain>
      <FeedNav>
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

          <NIconHolder>
            <MeFeatureIcon />
            <NavTxt>Me</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <ForBusinessIcon />
            <NavTxt>For Business</NavTxt>
          </NIconHolder>

          <NIconHolder>
            <PostJobs />
            <NavTxt>Post a job</NavTxt>
          </NIconHolder>
        </FeaturesHolder>
      </FeedNav>
    </FeedMain>
  );
}

export default Topnav;
