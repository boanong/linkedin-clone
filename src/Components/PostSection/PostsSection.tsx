import { useEffect, useState } from "react";
import { ProfilePicture, JobTitle } from "../Atoms/DropdownCard";
import {
  PostSection,
  Header,
  PostText,
  PostImage,
  OptionsSection,
} from "../Molecules/PostSection";
import { onSnapshot, query, collection, orderBy } from "@firebase/firestore";
import { db } from "@/firebase/config";

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
          <Header>
            <ProfilePicture
              src="https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY="
              alt="Profile Picture"
            />
            <JobTitle>UI/UX Designer || Full stack Developer</JobTitle>
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
