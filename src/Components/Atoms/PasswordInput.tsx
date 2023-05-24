import styled from "@emotion/styled";

export const PassInput = styled.input`
  width: 90%;
  max-width: 280px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  display flex;
  border: none;
  background: transparent;
  border: hidden;
  padding: 10px 8px;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 10px;
  }
`;

export const PassInput1 = styled(PassInput)`
  padding: 5px 12px;
  font-size: 14px;
`;