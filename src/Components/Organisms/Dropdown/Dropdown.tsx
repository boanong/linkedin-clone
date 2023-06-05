"use client";
import React, { useContext, useState } from "react";
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
} from "../../Atoms/DropdownCard";
import { Profpic } from "@/Components/Atoms/Profpic";
import { FeedUserPPic } from "@/Components/Molecules/FeedUserDivs";
import { useAuth } from "@/context/AuthContex";

type Props = { userData: any };

export default function Dropdown({ userData }: Props) {

  const { logout } = useAuth();

  return (
    <DropdownCard>
      <ProfilePictureAndName>
        {/* <ProfilePicture /> */}
        { <Profpic src={userData?.photoUrl} /> || <FeedUserPPic />}

        <JobtitleDiv>
          <ProfileName>{userData?.displayName || userData?.email || 'username'}</ProfileName>
          <JobTitle>Bio </JobTitle>
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
      <SignOut type='button' onClick={() => logout()} >Sign out </SignOut>
    </DropdownCard>
  );
}
