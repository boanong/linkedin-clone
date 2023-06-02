import styled from "@emotion/styled";

export const PostSecHolder = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  max-width: 460px;
  @media only screen and (min-width: 770px) {
    width: 45vw;
    max-width: 560px;
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
