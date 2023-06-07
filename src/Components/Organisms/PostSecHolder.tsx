import styled from "@emotion/styled";

export const PostSecHolder = styled.div`
  height: fit-content;
  min-height: 100vh;
  overflow: hidden;
  width: 100vw;
  max-width: 471px;
  left: 0;
  right: 0;
  margin: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    width: 100%;
    max-width: 530px;
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 400px) {
    max-width: 100vw;
  }
`;
