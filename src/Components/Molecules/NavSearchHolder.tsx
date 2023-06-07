import styled from "@emotion/styled";

export const NavSearchHolder = styled.div`
    display: none;
    @media only screen and (min-width: 769px) {
    width: 20vw;
    max-width: 300px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: auto 0;
    height: fit-content;
  }
`;

export const NavSearchHolder2 = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: auto;
    justify-self: flex-start;
    @media only screen and (min-width: 769px) {
    display: none;
  }
`;
