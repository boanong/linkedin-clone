<<<<<<< HEAD
"use client";
import React from 'react'
import FeedUserSec from '@/Components/FeedUser/FeedUser'
import { FeedInnerMain } from '@/Components/Organisms/FeedInnerMain'
import styled from '@emotion/styled'

=======
'use client'
import styled from '@emotion/styled'
import React from 'react'
import Topnav from '@/Components/Topnav/Topnav';
>>>>>>> e5086ed5a799de2b0fbca115bb79548b158e579a

type Props = {}

const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  height: fit-content;
  min-height: 100vh;
`
=======
  padding: 0;
  margin: 0;
`;
>>>>>>> e5086ed5a799de2b0fbca115bb79548b158e579a

function feed({}: Props) {
  return (
    <FeedMain>
<<<<<<< HEAD
      <FeedInnerMain>
        <FeedUserSec />
      </FeedInnerMain>
=======
      <Topnav />
>>>>>>> e5086ed5a799de2b0fbca115bb79548b158e579a
    </FeedMain>
  )
}

export default feed