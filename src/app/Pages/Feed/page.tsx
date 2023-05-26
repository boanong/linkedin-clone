"use client";
import React from 'react'
import FeedUserSec from '@/Components/FeedUser/FeedUser'
import { FeedInnerMain } from '@/Components/Organisms/FeedInnerMain'
import styled from '@emotion/styled'


type Props = {}

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  height: fit-content;
  min-height: 100vh;
`

function feed({}: Props) {
  return (
    <FeedMain>
      <FeedInnerMain>
        <FeedUserSec />
      </FeedInnerMain>
    </FeedMain>
  )
}

export default feed