import styled from "@emotion/styled";

export const Container = styled.div`
  top: inherit;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 471px;
  @media only screen and (max-width: 425px) {
    width: 100vw;
  }
 
  @media only screen and (min-width: 770px) {
    width: fit-content;
    gap: 15px;
    max-width: 310px;
    position: fixed;
    right: 17%;
  }
`;

export const FeedRSpan = styled.span`
  font-size: 16px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListLiDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ListImg = styled.img`
  display: inline-flex;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--color-link);
`;

export const FollowBtn = styled.button`
  padding: 28px;
  background: var(--color-white);
  border: 1px solid var(--color-linkedin);
  color: var(--color-linkedin);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    &:hover {
      border: 2px solid var(--color-linkedin);
      background: var(--color-input);
    }
  }
`;

export const AddFeedP = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-link);
  cursor: pointer;
`;

export const FeedRSpan1 = styled(FeedRSpan)`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const FeedRSpan2 = styled(FeedRSpan)`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-black);
`;

export const FeedRSpan3 = styled(FeedRSpan)`
  font-size: 12px;
  color: var(--color-gray);
`;
