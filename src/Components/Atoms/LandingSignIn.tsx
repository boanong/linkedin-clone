import styled from "@emotion/styled";

export const LandingSignInOnclick = styled.button`
  max-width: 400px;
  width: 100%;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-color: #0a66c2;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px auto;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    &:hover {
      background-color: #05417d;
      transition: 0.5s;
    }
  }
`;

export const LandingNewTo = styled.button`
  max-width: 400px;
  width: 100%;
  text-align: center;
  border: 1px solid #000;
  border-radius: 25px;
  padding: 8px;
  background-color: transparent;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px auto;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    &:hover {
      background-color: #a6a6a76f;
      transition: 0.5s;
    }
  }
`;

export const LandingNewTo1 = styled(LandingNewTo)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
