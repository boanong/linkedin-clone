import styled from "@emotion/styled";

export const FeedNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const NavTxt = styled.p`
  color: #666666;
  font-size: 14px;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
