'use client'
import styled from '@emotion/styled'
import React from 'react'
import Topnav from '@/Components/Topnav/Topnav';

type Props = {}

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

function feed({}: Props) {
  return (
    <FeedMain>
      <Topnav />
    </FeedMain>
  )
}

export default feed