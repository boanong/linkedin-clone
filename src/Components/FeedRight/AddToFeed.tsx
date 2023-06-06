"use client";
import styled from "@emotion/styled";
import React from "react";
import {
  AddFeedP,
  FeedRSpan,
  FeedRSpan1,
  FeedRSpan2,
  FeedRSpan3,
  FollowBtn,
  List,
  ListImg,
  ListLi,
  ListLiDiv,
} from "./styles";

type Props = {};

const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #878787a0;
`;

function AddToYourFeed({}: Props) {
  return (
    <Container>
      <FeedRSpan>Add To Your Feed</FeedRSpan>
      <List>
        <ListLi>
          <ListLiDiv>
            <ListImg
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar"
            />
            <FeedRSpan1 className="description">
              <FeedRSpan2 className="username">Luror Bolrur</FeedRSpan2>
              <FeedRSpan3 className="role">CFO @Gytech</FeedRSpan3>
            </FeedRSpan1>
          </ListLiDiv>

          <FollowBtn>+ Follow</FollowBtn>
        </ListLi>
        <ListLi>
          <ListLiDiv>
            <ListImg
              className="avatar-img"
              src="https://randomuser.me/api/portraits/women/16.jpg"
              alt="Avatar"
            />
            <FeedRSpan1 className="description">
              <FeedRSpan2 className="username">Zaziol Poemushnar</FeedRSpan2>
              <FeedRSpan3 className="role">Backend Dev @Fyn</FeedRSpan3>
            </FeedRSpan1>
          </ListLiDiv>

          <FollowBtn>+ Follow</FollowBtn>
        </ListLi>
        <ListLi>
          <ListLiDiv>
            <ListImg
              className="avatar-img"
              src="https://randomuser.me/api/portraits/men/15.jpg"
              alt="Avatar"
            />
            <FeedRSpan1 className="description">
              <FeedRSpan2 className="username">Pueho Roion</FeedRSpan2>
              <FeedRSpan3 className="role">FullStack | TypeScrit</FeedRSpan3>
            </FeedRSpan1>
          </ListLiDiv>

          <FollowBtn>+ Follow</FollowBtn>
        </ListLi>
        <ListLi>
          <ListLiDiv>
            <ListImg
              className="avatar-img"
              src="https://randomuser.me/api/portraits/men/38.jpg"
              alt="Avatar"
            />
            <FeedRSpan1 className="description">
              <FeedRSpan2 className="username">Neuten Hioal</FeedRSpan2>
              <FeedRSpan3 className="role">DevOps @UlysTEch</FeedRSpan3>
            </FeedRSpan1>
          </ListLiDiv>

          <FollowBtn>+ Follow</FollowBtn>
        </ListLi>
      </List>
      <AddFeedP>View all recommendations</AddFeedP>
    </Container>
  );
}

export default AddToYourFeed;
