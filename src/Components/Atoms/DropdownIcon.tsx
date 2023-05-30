import styled from "@emotion/styled";
import { MdArrowDropDown } from "react-icons/md";

export const DropdownIcon = styled(MdArrowDropDown)`
 font-size: 1.5rem;
  color: #666666;
  @media only screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: #000;
    }
  } 
`;
