"use client";
import React from 'react'
import AddToYourFeed from './AddToFeed';
import { Container } from './styles'

type Props = {}

function FeedR({}: Props) {
  return (
    <Container>
        <AddToYourFeed/>
    </Container>
  )
}

export default FeedR
