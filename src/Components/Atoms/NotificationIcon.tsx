import styled from "@emotion/styled";
import { IoMdNotifications } from "react-icons/io";

export const NotificationBell = styled(IoMdNotifications)`
 font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
`;