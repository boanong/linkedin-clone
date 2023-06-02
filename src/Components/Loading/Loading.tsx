import styled from "@emotion/styled";
import React from "react";
import { LinkedInIcon } from "../Atoms/LinkedLogo";
import { Linked } from "../Atoms/LinkedLogoTxt";
import { LineInner } from "../Molecules/LineInner";
import { Linel } from "../Molecules/Linel";

type Props = {};

const LoadingMain = styled.div`
  background: #eaeaea;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  /* vertical-align: middle; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  top: 0;
  /* z-index: 10; */
  position: fixed;
`;

const LoadingInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* max-width: 270px; */
  align-items: center;
  justify-self: center;
  margin: auto;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  transform: translateX(-50%) translateY(-50%);
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const LinkedHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  gap: 10px;
  height: fit-content;
  max-height: 100px;
  margin: 0 auto 20px;
  color: #0077b5;
`;

function Loading({}: Props) {
  return (
    <LoadingMain>
      <LoadingInner>
        <LinkedHolder>
          <Linked>
            Linked
            <LinkedInIcon />
          </Linked>
          <LineInner></LineInner>
        </LinkedHolder>
      </LoadingInner>
    </LoadingMain>
  );
}

export default Loading;
