import styled from "@emotion/styled";
import { BiUserCircle } from 'react-icons/bi'

export const FeedUserDiv1 = styled.div`
  width: 100%;
  max-width: 230px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 380px;
  padding: 5px 20px;
`;

export const FeedUserImages = styled.div`
  width: 100%;
  max-width: 230px;
  position: relative;
  height: fit-content;
  max-height: 120px;
  background: #56fdr;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const FeedUserProfilePic = styled.div`
  position: absolute;
  z-index: 1;
  width: fit-content;
  max-width: 80px;
  background-color: white;
  padding: 2px;
  justify-self: center;
`;

export const FeedUserPPic = styled(BiUserCircle)`
  font-size: 78px;
  color: #6a6a6a;
  position: absolute;
`;

export const FeedUserHr = styled.hr`
  width: 100%;
  max-width: 230px;
  height: 1.8px;
  color: #6a6a6a;
  margin: 20px 0;
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
  font-weight: 500;
  text-align: center;
`;

export const FeedUserConnect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeedUserBioP = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const FeedUserP1 = styled.p`
  color: #000;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
`;

export const FeedUserP2 = styled(FeedUserP1)`
  color: #787878;
  font-size: 12px;
  font-weight: 200;
`;

export const FeedUserPN = styled(FeedUserP1)`
  color: #00438b;
  font-size: 12px;
  font-weight: 200;
`;

