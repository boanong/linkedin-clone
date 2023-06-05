import styled from "@emotion/styled";

export const FeedInnerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media only screen and (min-width: 770px) {
    width: fit-content;
    max-width: 1128px;
    margin: 30px auto 0;
    flex-direction: row;
    gap: 15px;
  }
`;

export const FeedInnerMainR = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 475px;
  align-items: center;
  @media only screen and (min-width: 770px) {
    width: fit-content;
    /* justify-self: flex-start; */
    max-width: 870px;
    margin: -30px auto 0 ;
    flex-direction: row;
    gap: 20px;
  }
`;
