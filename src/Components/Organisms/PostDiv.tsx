import styled from "@emotion/styled";

export const PostDiv = styled.div`
  margin-top: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  width: 100vw;
  margin-inline: auto;
  border: 1px solid rgba(230, 224, 224, 0.922);
  @media only screen and (min-width: 768px) {
    border-radius: 10px;
    width: fit-content;
  }
`;
