'use client'
import React from 'react';
import { PostDiv } from '@/Components/Organisms/PostDiv';
import { PostBtn } from '@/Components/Atoms/PostBtn';
type Props = {}

function Post({}: Props) {
  return (
    <PostDiv>
        <PostBtn>start a post</PostBtn>
    </PostDiv>
  )
}

export default Post