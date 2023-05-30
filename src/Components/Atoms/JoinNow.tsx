import styled from "@emotion/styled";

export const JoinNowBtn = styled.button`
  background-color: #666666;
  padding: 12px 24px;
  font-weight: 500;
  text-align: center;
  border-radius: 24px;
  border: none;
  height: min-content;
  min-height: 40px;
  font-size: 1.1rem;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    background-color: transparent;
    &:hover {
      background-color: #a9a9a982;
      transition: 0.4s;
      border: #a9a9a982 1px solid;
    }
  }
`;

export const SignInLan = styled(JoinNowBtn)`
  background-color: transparent;
  color: #0a66c2;
  border: #0a66c2 1px solid;
  cursor: pointer;
   @media only screen and (min-width: 768px) {
    background-color: transparent;
    &:hover {
      background-color: #0b79e86d;
      transition: 0.4s;
    }
  }
`;
