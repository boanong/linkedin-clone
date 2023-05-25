import styled from "@emotion/styled";

export const FeedNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 100vw;
  }
`;

export const NavTxt = styled.p`
  display: none;
  @media only screen and (min-width: 768px) {
    font-size: 12px;
    display: contents;
    color: #666666;
    margin: 0;
    padding: 0;
  }
`;
