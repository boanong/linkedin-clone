import styled from "@emotion/styled";

export const FeedInnerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    width: 85vw;
    max-width: 1128px;
    margin: auto;
    display: flex;
    margin-top: 30px;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 30px;
    border-radius: 10px;
  }
`;
