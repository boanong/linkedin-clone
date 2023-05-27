import styled from "@emotion/styled";
import { IoMdSearch } from "react-icons/io"

export const SearchIcon = styled(IoMdSearch)`
 font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: #000;
      cursor: pointer;
    }
  }
`;