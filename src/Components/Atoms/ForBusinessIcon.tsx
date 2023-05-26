import styled from "@emotion/styled";
import { CgMenuGridR } from 'react-icons/cg';

export const ForBusinessIcon = styled(CgMenuGridR)`
 font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
`;