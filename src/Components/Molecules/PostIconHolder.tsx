import styled from "@emotion/styled";

export const PostIconHolder = styled.div`
    padding: 5px 2px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  @media only screen and (min-width: 768px) {
    padding: 10px 3px;
    max-width: 35px;
    &:hover {
      background-color: #b0b0b08c;
    }
  }  
`;