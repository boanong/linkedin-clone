import styled from "@emotion/styled";

export const LandingSignIn = styled.button`
  background-color: #0a66c2;
  border-radius: 40px;
  border: none;
  color: white;
  cursor: pointer;
  width: 80%;
  @media and screen only (max-width: 768px){
    width: 100%;
    &:hover {
    background-color: #073c70;
  }
  }
`;

export const LandingNewTo = styled(LandingSignIn)`
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
  @media and screen only (max-width: 768px){
    &:hover {
    background-color: #a6a6a76f;
  }
  }
`;
