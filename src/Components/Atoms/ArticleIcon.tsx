import styled from "@emotion/styled";
import { RiArticleFill } from 'react-icons/ri'

export const ArticleIcon = styled(RiArticleFill)`
  color: #c03e0aca;
  font-size: 25px;
  @media only screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const ArticleLan = styled(RiArticleFill)`
  font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
    }
  }
`;