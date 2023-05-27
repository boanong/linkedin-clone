import styled from "@emotion/styled";
import { BiUserCircle } from "react-icons/bi";

export const FeedUserDiv1 = styled.div`
  width: 100%;
  max-width: 230px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  position: relative;
  flex-direction: column;
  /* height: fit-content; */
  /* max-height: 380px; */
  padding-bottom: 12px;
`;

export const FeedUserImages = styled.div`
  width: 100%;
  max-width: 230px;
  border-radius: 5px 5px 0 0;
  height: 65px;
  max-height: 65px;
  
  background-image: url("https://images.pexels.com/photos/16863602/pexels-photo-16863602/free-photo-of-heavy-snowfall-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

// export const FeedUserProfilePic = styled.div`
//   position: absolute;
//   z-index: 1;
//   width: fit-content;
//   max-width: 80px;
//   background-color: white;
//   padding: 2px;
//   justify-self: center;
// `;

export const FeedUserPPic = styled(BiUserCircle)`
  font-size: 78px;
  color: #6a6a6a;
  /* width: 72px;
  height: 72px; */
  background-color: white;
  border-radius: 50%;
  border: 2px solid var(--color-white);
  box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
    0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));

  display: flex;
  margin: -38px auto 12px;
`;

export const FeedUserHr = styled.hr`
  width: 100%;
  border-bottom: 1px solid var(--color-separator);
  margin: 16px 0 12px;
`;

export const FeedUserBio = styled.div`
  width: fit-content;
  max-width: 220px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FeedUserBioH = styled.h2`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const FeedUserConnect = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
`;

export const FeedUserTxtH = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  &:hover{
    cursor: pointer;
    background: #b1b1b188;
  }
`;

export const FeedUserBioP = styled.p`
  margin-top: 12px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: var(--color-gray);
  padding: 0 22px;
`;

export const FeedUserP1 = styled.p`
  color: #000;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  padding: 0 22px;
`;

export const FeedUserP1U = styled(FeedUserP1)`
  text-decoration: underline;
  cursor: pointer;
`;

export const FeedUserP2 = styled.p`
  padding: 0 22px;
  color: #787878;
  font-size: 12px;
  font-weight: 600;
`;

export const FeedUserPN = styled(FeedUserP2)`
  color: #0060c7;

`;
