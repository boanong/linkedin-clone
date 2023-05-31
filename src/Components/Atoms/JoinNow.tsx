import styled from "@emotion/styled";

export const JoinNowBtn = styled.button`
  background-color: transparent;
  padding: 8px 18px;
  font-weight: 400;
  text-align: center;
  border-radius: 24px;
  border: none;
  height: min-content;
  min-height: 20px;
  font-size: 16px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    font-weight: 500;
    min-height: 40px;
    padding: 12px 24px;
    &:hover {
      background-color: #a9a9a982;
      transition: 0.4s;
      border: #a9a9a982 1px solid;
    }
  }
  @media only screen and (max-width: 400px) {
    padding: 5px 15px;
    font-size: 16px;
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
