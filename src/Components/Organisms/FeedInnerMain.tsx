import styled from "@emotion/styled";

export const FeedInnerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 98vw;
  margin: 30px auto;
  @media only screen and (max-width: 425px) {
    width: 100vw;
  }
  @media only screen and (min-width: 765px) {
    flex-direction: row;
    width: 96vw;
    max-width: 1128px;
    margin: 5% auto;
  }
`;

export const FeedInnerMainR = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 471px;
  margin-inline: auto;
  @media only screen and (max-width: 425px) {
    width: 100vw;
  }
 
  @media only screen and (min-width: 770px) {
    width: fit-content;
    flex-direction: row;
    gap: 15px;
    max-width: 870px;
  }
`;
