import styled from "@emotion/styled";
import { BsPeopleFill, BsBriefcaseFill, BsFillPlayBtnFill } from "react-icons/bs";

export const NetworkIcon = styled(BsPeopleFill)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;

export const VideoIcon = styled(BsFillPlayBtnFill)`
  font-size: 2.4rem;
  color: #5f9b41;
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: #6f6f6f82;
    }
  }
`;

export const JobsIcon = styled(BsBriefcaseFill)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;
