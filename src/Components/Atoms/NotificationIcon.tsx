import styled from "@emotion/styled";
import { IoMdNotifications } from "react-icons/io";

export const NotificationBell = styled(IoMdNotifications)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;