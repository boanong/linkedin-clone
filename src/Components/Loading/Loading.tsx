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
`;

const LoadingInner = styled.div`
  width: fit-content;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  margin: auto;
`;

function Loading({}: Props) {
  return (
    <LoadingMain>
      <LoadingInner>
        <Linked>
          Linked
          <LinkedInIcon />
        </Linked>
        <Linel>
          <LineInner></LineInner>
        </Linel>
      </LoadingInner>
    </LoadingMain>
  );
}

export default Loading;
