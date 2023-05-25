import styled from '@emotion/styled';
import { BsFillCalendarEventFill } from 'react-icons/bs';

export const TimeIcon = styled(BsFillCalendarEventFill)`
  font-size: 2.4rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;
