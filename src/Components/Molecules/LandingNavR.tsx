import styled from "@emotion/styled";

export const LandingNavR = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LandingNavRInner = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;
