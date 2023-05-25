import styled from "@emotion/styled";
import { RiArticleFill } from 'react-icons/ri'

export const ArticleIcon = styled(RiArticleFill)`
  font-size: 2rem;
  color: #5f9b41;
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: #6f6f6f82;
    }
  }
`;