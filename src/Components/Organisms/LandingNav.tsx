import styled from "styled-components";

export const LandingNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    padding: 10px 15%;
    flex-direction: row;
  }
`;

export const LandingSignIn = styled.button`
  padding: 25px 40px;
  border: #0a66c2 2px solid;
  background: transparent;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    padding: 10px 20%;
    flex-direction: row;
  }
`;
