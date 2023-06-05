import styled from "@emotion/styled";
import { VscAccount } from 'react-icons/vsc';



export const ProfileIcon = styled(VscAccount)`
  font-size: 45px;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;