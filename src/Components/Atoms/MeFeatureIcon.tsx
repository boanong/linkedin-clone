import styled from "@emotion/styled";
import { CgProfile } from 'react-icons/cg';

export const MeFeatureIcon = styled(CgProfile)`
 font-size: 100rem;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    &:hover {
      color: #000;
      cursor: pointer; 
    } 
  }
`;