import styled from "@emotion/styled";

export const PostDiv = styled.div`
  margin-top: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  max-width: fit-content;
  margin-inline: auto;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    border-radius: 10px;
  }
`;