import styled from "@emotion/styled";
import { VscAccount } from 'react-icons/vsc';



export const ProfileIcon = styled(VscAccount)`
  color: #666666;
  font-size: 25px;
  @media only screen and (min-width: 768px) {
    font-size: 55px;
    &:hover {
      color: #000;
    }
  }
`;