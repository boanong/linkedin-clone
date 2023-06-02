import styled from '@emotion/styled';
import { MdOutlineSchedule } from 'react-icons/md';

export const TimeIcon = styled(MdOutlineSchedule)`
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

export const PostTimeIcon = styled(MdOutlineSchedule)`
  font-size: 1.6rem;
  color: #00000099;
  margin-top: 10px;
`;
