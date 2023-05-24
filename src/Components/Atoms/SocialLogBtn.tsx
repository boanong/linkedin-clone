import styled from "@emotion/styled";

export const SocilaLogBtn = styled('button')`
  max-width: 348px;
  width: 100%;
  text-align: center;
  color: #000;
  border: 1px solid #6a6a6a;
  border-radius: 25px;
  padding: 10px;
  background-color: transparent;
  margin: auto;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    &:hover {
      border: 1.5px solid #000;
      transition: 0.5s;
    }
  }
`;

export const SocilaLogBtn1 = styled(SocilaLogBtn)`
  padding: 6px;
  font-size: 14px;
`;