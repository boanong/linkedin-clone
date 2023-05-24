import styled from "@emotion/styled";
import { AiFillMessage } from "react-icons/ai";

export const MessageIcon = styled(AiFillMessage)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;