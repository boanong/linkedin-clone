import styled from "@emotion/styled";

export const PostDiv2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 15px;
  }
`;
