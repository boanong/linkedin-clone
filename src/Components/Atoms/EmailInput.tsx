import styled from "@emotion/styled";

export const InputCredentials = styled.input`
  font-size: 1.2rem;
  max-width: 348px;
  width: 100%;
  margin: auto;
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  display flex;
  border: 1px solid #000;
  background: transparent;
  padding: 12px 10px;
  border-radius: 4px !important;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 10px;
  }
`;

export const InputCredentials1 = styled(InputCredentials)`
  padding: 5px 12px;
  font-size: 14px;
`;