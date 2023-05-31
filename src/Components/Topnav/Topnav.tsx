"use client";
import React from "react";
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
import { LinkedInIconLarge } from "../Atoms/LinkedLogo";
import { SearchIcon } from "../Atoms/SearchIcon";
import { NavSearchHolder } from "../Molecules/NavSearchHolder";
import { FeaturesHolder } from "../Molecules/FeaturesHolder";
import { ForBusinessIcon } from "../Atoms/ForBusinessIcon";
import { PostJobs } from "../Atoms/PostJobs";
import { MeFeatureIcon } from "../Atoms/MeFeatureIcon";
import styled from "@emotion/styled";
import { VerticalLine } from "../Atoms/VerticalLine";
import { DropdownIcon } from "../Atoms/DropdownIcon";
import {
  DropdownCard,
  ProfilePicture,
  ProfilePictureAndName,
  ProfileName,
  Button,
  ButtonDiv,
  StyledText,
  StyledText2,
  ProfileDiv,
  SettingAndPrivacy,
  ManageDiv,
  LanguageText,
  Manage,
  JobTitle,
  SignOut,
  JobtitleDiv,
  ProfilePictureDiv,
} from "../Atoms/DropdownCard";

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

          <NIconHolder2>
            <MeFeatureIcon />
            <Textandiconcontainer>
              <MeAndTextHolder>
                <NavTxt>Me</NavTxt>
              </MeAndTextHolder>
              <Icondiv>
                <DropdownIcon />
              </Icondiv>
            </Textandiconcontainer>
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
        </FeaturesHolder>
      </FeedNav>

      <DropdownCard>
        <ProfilePictureAndName>
          {/* <ProfilePictureDiv></ProfilePictureDiv> */}
          <ProfilePicture />

          <JobtitleDiv>
            <ProfileName>Boanong Joshua</ProfileName>
            <JobTitle>UI/UX Designer || Web developer </JobTitle>
          </JobtitleDiv>
        </ProfilePictureAndName>

        <ButtonDiv>
          <Button>View Profile</Button>
        </ButtonDiv>
        <ProfileDiv>
          <StyledText>Account</StyledText>

          <StyledText2>Try Premium for Free</StyledText2>
          <SettingAndPrivacy>Setting & Privacy</SettingAndPrivacy>
          <SettingAndPrivacy>Help</SettingAndPrivacy>
          <SettingAndPrivacy>Language</SettingAndPrivacy>
        </ProfileDiv>

        <ManageDiv>
          <Manage>Manage</Manage>
          <LanguageText>Posts and activities</LanguageText>
          <LanguageText>Job posting Account</LanguageText>
        </ManageDiv>
        <SignOut>Sign out </SignOut>
      </DropdownCard>
    </FeedMain>
  );
}

export default Topnav;
