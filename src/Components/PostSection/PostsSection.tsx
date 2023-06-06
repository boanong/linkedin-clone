import { useEffect, useState } from "react";
import { JobTitle, ProfileName, ProfilePicture2 } from "../Atoms/DropdownCard";
import {
  PostSection,
  Header,
  PostText,
  PostImage,
  OptionsSection,
} from "../Molecules/PostSection";
import { onSnapshot, query, collection, orderBy } from "@firebase/firestore";
import { db } from "@/firebase/config";
import { MeFeatureIcon } from "../Atoms/MeFeatureIcon";
import styled from "@emotion/styled";

const UserProfHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

type Props = { userData: any };

export function PostsSection({ userData }: Props) {
  const [vals, setVals] = useState<any>([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setVals(snapshot.docs);
      }
    );
  }, []);
  console.log(vals);

  return (
    <>
      {vals?.map((info: any) => (
        <PostSection key={info?.data()?.id}>
          <Header>{
            <ProfilePicture2
              src={userData.photoUrl}
              alt="Profile Picture"
            /> || <MeFeatureIcon />}
            <UserProfHolder>
            <ProfileName>{userData?.displayName || userData?.email || 'username'}</ProfileName>
            <JobTitle>UI/UX Designer || Full stack Developer</JobTitle>
            </UserProfHolder>
            
          </Header>
          <PostText>{info?.data()?.postContent}</PostText>
          {info?.data()?.image && (
            <PostImage src={info?.data()?.image} alt="Post Image" />
          )}

          <OptionsSection></OptionsSection>
        </PostSection>
      ))}
    </>
  );
}
