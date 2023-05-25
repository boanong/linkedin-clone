"use client";
import React from "react";
import { FeedNav, NavTxt } from "../Organisms/TopNavHolder";
import { HomeIcon } from "../Atoms/HomeIcon";
import { NIconHolder } from "../Molecules/NavIconHolder";
import { JobsIcon, NetworkIcon } from "../Atoms/BsIcons"; 
import { MessageIcon } from "../Atoms/MsgIcon";
import { NotificationBell } from "../Atoms/NotificationIcon"
import { Searchbar, SearchInput} from "../Atoms/Searchbar"
import { LinkedInIconLarge } from "../Atoms/LinkedLogo";
import { SearchIcon } from "../Atoms/SearchIcon";
import { NavSearchHolder } from "../Molecules/NavSearchHolder";
import { FeaturesHolder } from "../Molecules/FeaturesHolder";

type Props = {};

function Topnav({}: Props) {
  return (
    <FeedNav>

      <NavSearchHolder>
        <LinkedInIconLarge/>
      <Searchbar>
        <SearchIcon/>
        <SearchInput type="text" placeholder="Search" />
      </Searchbar>
      </NavSearchHolder>

     <FeaturesHolder> 
      <NIconHolder>
        <HomeIcon/>
        <NavTxt>Home</NavTxt>
      </NIconHolder>
      
      <NIconHolder>
        <NetworkIcon/>
        <NavTxt>My Network</NavTxt>
      </NIconHolder>

      <NIconHolder>
        <JobsIcon/>
        <NavTxt>Jobs</NavTxt>
      </NIconHolder>

      <NIconHolder>
        <MessageIcon/>
        <NavTxt>Messaging</NavTxt>
      </NIconHolder>

      <NIconHolder>
        <NotificationBell/>
        <NavTxt>Notifications</NavTxt>
      </NIconHolder>

      </FeaturesHolder>
    </FeedNav>
  );
}

export default Topnav;
