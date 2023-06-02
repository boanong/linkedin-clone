"use client";
import React from "react";
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
} from "../../Atoms/DropdownCard";

type Props = {};

export default function Dropdown({}: Props) {
  return (
    <DropdownCard>
      <ProfilePictureAndName>
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
  );
}
