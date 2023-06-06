import styled from "@emotion/styled";
import { CgProfile } from 'react-icons/cg';

export const MeFeatureIcon = styled(CgProfile)`
 font-size: 1rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    &:hover {
      color: #000;
      cursor: pointer; 
    } 
  }
`;

export const MeFeatureIcon2 = styled(CgProfile)`
 font-size: 1.3rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    &:hover {
      color: #000;
      cursor: pointer; 
    } 
  }
`;