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
  vertical-align: middle;
  margin: 20% auto;
`;

function Loading({}: Props) {
  return (
    <LoadingMain>
      <Linked>
        Linked
        <LinkedInIcon />
      </Linked>
      <Linel>
        <LineInner></LineInner>
      </Linel>
    </LoadingMain>
  );
}

export default Loading;
