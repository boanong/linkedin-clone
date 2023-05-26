import styled from "@emotion/styled";
import React from "react";

type Props = {};

const ProfileMain = styled.div`
    width: 100vw;
    max-width: 580px;
    display: flex;
    flex-direction: column;
    margin: auto;
    @media only screen and (min-width: 768px) {
        max-width: 980px;
        gap: 40px;
        padding: 35px auto;
        margin: auto;
        width: 80vw;
        flex-direction: row;
  }
`;

function profile({}: Props) {
  return <ProfileMain>

  </ProfileMain>;
}

export default profile;
