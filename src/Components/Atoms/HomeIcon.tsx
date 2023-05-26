import styled from "@emotion/styled";
import { ImHome3 } from "react-icons/im";

export const HomeIcon = styled(ImHome3)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;