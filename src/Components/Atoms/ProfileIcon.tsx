import styled from "@emotion/styled";
import { VscAccount } from 'react-icons/vsc';



export const PhotoIcon = styled(VscAccount)`
  font-size: 2.6rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;