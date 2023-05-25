import styled from '@emotion/styled';
import { MdOutlineSchedule } from 'react-icons/md';

export const TimeIcon = styled(MdOutlineSchedule)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;