import styled from "@emotion/styled";
import { HiPhoto } from 'react-icons/hi2';



export const PhotoIcon = styled(HiPhoto)`
  font-size: 2.4rem;
  color: #0a66c2;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;
