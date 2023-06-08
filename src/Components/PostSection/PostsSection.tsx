/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { JobTitle, ProfileName, ProfilePicture2 } from "../Atoms/DropdownCard";
import {
  PostSection,
  Header,
  PostText,
  PostImage,
  OptionsSection,
  CommentText,
} from "../Molecules/PostSection";
import { onSnapshot, query, collection, orderBy, doc, setDoc } from "@firebase/firestore";
import { db } from "@/firebase/config";
import { MeFeatureIcon } from "../Atoms/MeFeatureIcon";
import styled from "@emotion/styled";
import LikeButton from "../Atoms/LikeIcon";
import {
  CommentIconHolder,
  CommentHoverText,
  CommentIcon,
  CommentSecHolder,
  CommentForm,
  CommentBtn,
} from "../Atoms/Comments";

const UserProfHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ReactionSecHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 5px 10px;
`;

const CommentInput = styled.input`
  padding: 5px 10px;
  border-radius: 25px;
  text-align: left;
  font-size: 16px;
  width: 90%;
`;

const DisplayComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserCommentHolder = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 15px;
`;

const CommentTextHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = { userData: any };

export function PostsSection({ userData }: Props) {
  const [vals, setVals] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [comments, setComments] = useState<any>([]);
  const [seeComment, setSeeComment] = useState<boolean>(false);
  const timestamp: string = Date.now().toLocaleString()

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setVals(snapshot.docs);
      }
    );
  }, []);
  // console.log(vals);

  const addComment = async () => {
   await setDoc(doc(db, "posts", vals.id, "comments", userData?.uid), {
      currentUser: userData?.displayName,
    });
  };

  return (
    <>
      {vals?.map((info: any) => (
        <PostSection key={info?.data()?.id}>
          <Header>
            {
              <ProfilePicture2
                src={
                  userData.photoUrl ||
                  "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                }
              />
            }
            <UserProfHolder>
              <ProfileName>
                {userData?.displayName || userData?.email || "username"}
              </ProfileName>
              <JobTitle></JobTitle>
            </UserProfHolder>
          </Header>
          <PostText>{info?.data()?.postContent}</PostText>
          {info?.data()?.image && (
            <PostImage src={info?.data()?.image} alt="Post Image" />
          )}

          <OptionsSection></OptionsSection>
          <ReactionSecHolder>
            <LikeButton vals={info} userData={userData} />
            <CommentSecHolder>
              <p>{comments.length}</p>
              <CommentIconHolder>
                <CommentHoverText>comment</CommentHoverText>
                <CommentIcon onClick={() => {
                  setSeeComment(current => !current)
                }}/>
              </CommentIconHolder>
            </CommentSecHolder>
          </ReactionSecHolder>
          {seeComment && (
            <>
              <CommentForm onSubmit={() => addComment()}>
                <CommentInput type="text" />
                <CommentBtn type='submit' onChange={(e) => setValue(e.target.value)}>Comment</CommentBtn>
              </CommentForm>
                <DisplayComment>
                  {comments.map((info1: any) => (
                    <UserCommentHolder key={info1?.data()?.id}>
                      <ProfilePicture2
                        src={
                          userData.photoUrl ||
                          "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                        }
                      />
                      <CommentTextHolder>
                        <ProfileName>
                          {userData?.displayName ||
                            userData?.email ||
                            "username"}
                        </ProfileName>
                        <CommentText>{info1?.data()?.postComment}</CommentText>
                      </CommentTextHolder>
                    </UserCommentHolder>
                  ))}
                </DisplayComment>
            </>
          )}
        </PostSection>
      ))}
    </>
  );
}

export default PostsSection;
