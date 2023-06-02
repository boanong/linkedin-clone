import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";

export const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 40px;
  cursor: pointer;
`;

export const LinkedInIconLan = styled(LinkedInIcon)`
  font-size: 22px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SmallLogo = styled(LinkedInIcon)`
  font-size: 20px;
`;

export const LinkedInIconLarge = styled(FaLinkedin)`
  font-size: 32px;
  color: #0a66c2;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    font-size: 2.6rem;
    font-weight: 600;
    margin-left: 20px;
  }
`;

export const LinkedInIconLarge2 = styled(FaLinkedin)`
  font-size: 32px;
  color: #0a66c2;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

