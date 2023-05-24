import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  margin-top: auto;
  padding: 12px 80px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  justify-self: flex-end;
  width: 100vw;
`;

export const NavBar = styled.div`
  display: flex;
  padding: 10px 10%;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    padding: 10px 80px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
  height: fit-content;
  min-height: 100vh;
`;
