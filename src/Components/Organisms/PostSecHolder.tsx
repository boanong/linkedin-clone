import styled from "@emotion/styled";

export const PostSecHolder = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  max-width: 560px;
  @media only screen and (min-width: 768px) {
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
