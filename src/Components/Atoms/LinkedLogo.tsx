import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";

export const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 26px;
  font-weight: 500;
  height: inherit;
`;  

export const SmallLogo = styled(LinkedInIcon)`
  font-size: 18px;  
`;

export const LinkedInIconLarge = styled(LinkedInIcon)`
font-size: 32px;
@media only screen and (min-width: 768px) {
    font-size: 26px;
  }
`;