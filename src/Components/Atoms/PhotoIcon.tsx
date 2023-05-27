import styled from "@emotion/styled";
import { HiPhoto } from 'react-icons/hi2';



export const PhotoIcon = styled(HiPhoto)`
  color: #0a66c2;
  font-size: 25px;
  @media only screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const PhotoIcon1 = styled(HiPhoto)`
  font-size: 1rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    padding: 3px 8px;
    border-radius: 100%;
    color: #dedede;
    &:hover {
      background-color: #b0b0b08c;
    }
  }
`;
