import styled from "@emotion/styled";

export const Linel = styled.div`
  height: 3px;
  background: #897e7e;
  border-radius: 2px;
  width: 100%;
  max-width: 180px;
  margin: auto;
  overflow: hidden;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 280px;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
`;
