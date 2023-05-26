import styled from "@emotion/styled";
import { MdSms } from "react-icons/md";

export const MessageIcon = styled(MdSms)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;