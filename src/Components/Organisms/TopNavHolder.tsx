import styled from "@emotion/styled";

export const FeedNav = styled.div`
  display: flex;
  padding: 5px;
  width: 100vw;
  background-color: white;
  @media only screen and (min-width: 768px) {
    width: 100vw;
    padding: 5px 100px;
    justify-content: space-between;
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
