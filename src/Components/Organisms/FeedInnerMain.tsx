import styled from "@emotion/styled";

export const FeedInnerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    width: fit-content;
    max-width: 1128px;
    margin: auto;
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    gap: 20px;
  }
`;
