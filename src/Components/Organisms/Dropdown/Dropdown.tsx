"use client";
import React from "react";
import {
  DropdownCard,
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
import { Profpic3 } from "@/Components/Atoms/Profpic";
import { useAuth } from "@/context/AuthContex";
import Link from "next/link";

type Props = { userData: any };

export default function Dropdown({ userData }: Props) {

  const { logout } = useAuth();

  return (
    <DropdownCard>
      <ProfilePictureAndName>
        {/* <ProfilePicture /> */}
        { <Profpic3 src={userData?.photoUrl  ||
                "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"} />}

        <JobtitleDiv>
          <ProfileName>{userData?.displayName || userData?.email || 'username'}</ProfileName>
          <JobTitle>Bio</JobTitle>
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
      <SignOut onClick={() => logout()}><Link href="/">Sign out</Link></SignOut>
    </DropdownCard>
  );
}