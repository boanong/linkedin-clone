import styled from "@emotion/styled";
import { MdOutlineWorkHistory } from 'react-icons/md';

export const PostJobs = styled(MdOutlineWorkHistory)`
 font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
`;