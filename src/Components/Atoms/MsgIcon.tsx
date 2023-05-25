import styled from "@emotion/styled";
import { FcSms } from "react-icons/fc";

export const MessageIcon = styled(FcSms)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
`;