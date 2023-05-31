"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import "./page.css";
import { PostDiv } from "@/Components/Organisms/PostDiv";
import { PostBtn } from "@/Components/Atoms/PostBtn";
import { ProfileIcon } from "@/Components/Atoms/ProfileIcon";
import { CreatePostDiv } from "@/Components/Molecules/CreatePostDiv";
import { PostDiv2 } from "@/Components/Molecules/PostDiv2";
import { ArticleIcon } from "@/Components/Atoms/ArticleIcon";
import { VideoIcon } from "@/Components/Atoms/BsIcons";
import { EventIcon } from "@/Components/Atoms/EventIcon";
import { PhotoIcon, PostPhotoIcon } from "@/Components/Atoms/PhotoIcon";
import { PostIconHolder } from "@/Components/Molecules/PostIconHolder";
import { PostPtag } from "@/Components/Atoms/Ptag";
import { CloseIcon } from "@/Components/Atoms/CloseIcon";
import { addDoc, collection } from "firebase/firestore";
import { fireStore } from "@/firebase/config";

type Props = {};

function Post({}: Props) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const values = addDoc(collection(fireStore, "Posts"), {
      content: value,
    });
    console.log(values, value);
    setIsOpen(false);
    setValue("");
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "30px",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <PostDiv>
        <CreatePostDiv>
          <ProfileIcon />
          <PostBtn onClick={() => setIsOpen(true)}>Start a post</PostBtn>
        </CreatePostDiv>
        <PostDiv2>
          <PostIconHolder>
            <PhotoIcon />
            <PostPtag>Photo</PostPtag>
          </PostIconHolder>
          <PostIconHolder>
            <VideoIcon />
            <PostPtag>Video</PostPtag>
          </PostIconHolder>
          <PostIconHolder>
            <EventIcon />
            <PostPtag>Event</PostPtag>
          </PostIconHolder>
          <PostIconHolder>
            <ArticleIcon />
            <PostPtag>Write article</PostPtag>
          </PostIconHolder>
        </PostDiv2>
      </PostDiv>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="modalHeader">
          <h1 className="modalH1">Create a post</h1>
          <div className="modalCloseBtn">
            <CloseIcon onClick={() => setIsOpen(false)} />
          </div>
        </div>

        <input
          className="modalInput"
          placeholder="What do you want to talk about?"
          type="text"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <div>
          <input type="file" />
        </div>
        <div>
          <button
            onClick={ () => handleSubmit()}
            type="submit"
            disabled={value == "" ? true : false}
            className={value == "" ? "modalDisableButton" : "modalButton"}
          >
            Post
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Post;
