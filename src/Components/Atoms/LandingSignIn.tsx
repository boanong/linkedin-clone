import styled from "@emotion/styled";

export const LandingSignInOnclick = styled.button`
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-color: #0a66c2;
  font-size: 1rem;
  font-weight: 400;
  width: min(94vw, 380px);
  margin: 5px auto;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    font-weight: 500;
    max-width: 400px;
    margin: 10px auto;
    &:hover {
      background-color: #05417d;
      transition: 0.5s;
    }
  }
  
`;

export const LandingNewTo = styled.button`
  text-align: center;
  border: 1px solid #000;
  border-radius: 25px;
  padding: 6px;
  background-color: transparent;
  margin: auto;
  font-size: 18;
  font-weight: 300;
  margin: 10px auto;
  width: min(94vw, 380px);
  @media only screen and (min-width: 768px) {
    max-width: 400px;
    width: 400px;
    font-weight: 400;
    font-size: 16px;
    &:hover {
      background-color: #a6a6a76f;
      transition: 0.5s;
    }
  }
`;

export const LandingNewTo1 = styled(LandingNewTo)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
