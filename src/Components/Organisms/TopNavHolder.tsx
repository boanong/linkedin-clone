import styled from "@emotion/styled";

export const FeedNav = styled.div`
  display: flex;
  padding: 5px;
  position: fixed;
  width: 100vw;
  z-index: 20;
  background-color: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
