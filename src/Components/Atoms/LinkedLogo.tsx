import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";

export const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 40px;
`;  

export const SmallLogo = styled(LinkedInIcon)`
  font-size: 20px;  
`;

export const LinkedInIconLarge = styled(LinkedInIcon)`
font-size: 32px;
@media only screen and (min-width: 768px) {
    font-size: 2.6rem;
    font-weight: 600; 
  }
`;