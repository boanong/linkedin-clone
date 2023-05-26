import styled from "@emotion/styled";

export const PostIconHolder = styled.div`
    padding: 3px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  @media only screen and (min-width: 768px) {
    padding: 8px 25px;
    &:hover {
      border-radius: 5px;
      background-color: #b0b0b08c;
    }
  }  
`;