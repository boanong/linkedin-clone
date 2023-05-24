"use client";
import React from "react";
import { FeedNav, NavTxt } from "../Organisms/TopNavHolder";
import { HomeIcon } from "../Atoms/HomeIcon";
import { NIconHolder } from "../Molecules/NavIconHolder";

type Props = {};

function Topnav({}: Props) {
  return (
    <FeedNav>
      <NIconHolder>
        <HomeIcon/>
        <NavTxt>Home</NavTxt>
      </NIconHolder>
    </FeedNav>
  );
}

export default Topnav;
