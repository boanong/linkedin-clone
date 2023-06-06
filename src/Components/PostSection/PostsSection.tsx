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

// const [vals, setVals] = useState<any>(null);

// useEffect(() => {
//   onSnapshot(
//     query(collection(db, "posts"), orderBy("timestamp", "desc")),
//     (data) => {
//       setVals(data.docs);
//     }
//   );
// }, []);

type Props = { userData: any };

export function PostsSection({ userData }: Props) {
  return (
    <>
      <PostSection>
        <Header>
          <ProfilePicture
            src="https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY="
            alt="Profile Picture"
          />
          <JobTitle>UI/UX Designer || Full stack Developer</JobTitle>
        </Header>
        <PostText>
          Rebase Academy offers comprehensive and personalized programming
          education for students of all skill levels. With experienced
          instructors and a flexible curriculum, students can learn at their own
          pace and gain the skills needed to become successful developers. From
          web development to machine learning, Rebase Academy provides a
          top-notch education for the next generation of programmers.
        </PostText>
        <PostImage
          src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg"
          alt="Post Image"
        />

        <OptionsSection></OptionsSection>
      </PostSection>
      ;
    </>
  );
}
