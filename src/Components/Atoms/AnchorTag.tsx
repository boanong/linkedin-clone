import styled from "@emotion/styled";

export const ForgotPass = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  width: max-content;
  line-height: 32px;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
    &:hover {
      background-color: #5cacfb99;
      transition: 0.5s;
      border-radius: 25px;
      padding: 0;
      margin: 0;
      z-index: 1;
    }
  }
`;

export const TermsA = styled.a`
  color: #0a66c2;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;