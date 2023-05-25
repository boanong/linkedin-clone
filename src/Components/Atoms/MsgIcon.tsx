import styled from "@emotion/styled";
import { AiFillMessage } from "react-icons/ai";

export const MessageIcon = styled(AiFillMessage)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
`;