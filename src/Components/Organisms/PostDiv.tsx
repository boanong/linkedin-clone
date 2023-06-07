import styled from "@emotion/styled";

export const PostDiv = styled.div`
  margin-top: 6%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  width: 100vw;
  margin-inline: -3px;
  border: 1px solid rgba(230, 224, 224, 0.922);
  @media only screen and (min-width: 768px) {
    border-radius: 10px;
    margin-top: 5px;
    width: fit-content;
    max-width: 530px;
    margin-inline: auto;
  }
`;
