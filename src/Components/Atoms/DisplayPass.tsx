import styled from "@emotion/styled";


export const ViewPass = styled.p`
  color: #0a66c2;
  justify-self: flex-end;
  margin: auto 10px auto 0;
  text-align: left;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: #5cacfb99;
      transition: 0.5s;
      border-radius: 25px;
      padding: 0;
    }
  }
`;