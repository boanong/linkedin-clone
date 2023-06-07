import React from 'react'
import styled from '@emotion/styled'


type Props = {}

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #e6ecf0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 18px;
  height: fit-content;
  width: 100%;
  max-width: 530px;
  margin-inline: auto;
  @media only screen and (max-width: 440px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const JobTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #657786;
`;

export const PostText = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const OptionsSection = styled.div`
  margin-bottom: 16px;
`;



