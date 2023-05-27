import styled from "@emotion/styled";

export const SubmitBtn = styled.button`
  max-width: 348px;
  width: 100%;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-color: #0a66c2;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    &:hover {
      background-color: #05417d;
      transition: 0.5s;
    }
  }
`;