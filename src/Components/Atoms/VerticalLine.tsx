import styled from "@emotion/styled";

export const VerticalLine = styled.div`
  height: 40px;
  max-height: 45px;
  border-left: #525252 1px solid;
  margin: auto 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
