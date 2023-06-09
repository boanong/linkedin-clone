import { BsFillTrashFill } from "react-icons/bs";
import styled from "@emotion/styled";

export const DeleteIcon = styled(BsFillTrashFill)`
  color: #666666;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media only screen and (min-width: 770px) {
    font-weight: 600;
    font-size: 1.2rem;
    &:hover {
      .delete {
        display: block;
        padding: 3px 5px;
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

export const DeleteP = styled.p`
  display: none;
`;

export const DeleteSecHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
