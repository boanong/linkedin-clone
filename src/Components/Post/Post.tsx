"use client";
import React, { useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./page.css";
import { PostDiv } from "@/Components/Organisms/PostDiv";
import { PostBtn } from "@/Components/Atoms/PostBtn";
import { ProfileIcon } from "@/Components/Atoms/ProfileIcon";
import { CreatePostDiv } from "@/Components/Molecules/CreatePostDiv";
import { PostDiv2 } from "@/Components/Molecules/PostDiv2";
import { ArticleIcon } from "@/Components/Atoms/ArticleIcon";
import { PostVideoIcon, VideoIcon } from "@/Components/Atoms/BsIcons";
import { EventIcon } from "@/Components/Atoms/EventIcon";
import { PhotoIcon, PostPhotoIcon } from "@/Components/Atoms/PhotoIcon";
import { PostIconHolder } from "@/Components/Molecules/PostIconHolder";
import { PostPtag } from "@/Components/Atoms/Ptag";
// import { CloseIcon } from "@/Components/Atoms/CloseIcon";
import { addDoc, collection } from "@firebase/firestore";
import { fireStore } from "@/firebase/config";
import { PostTimeIcon } from "../Atoms/TimeIcon";
import { PostCalenderIcon } from "../Atoms/CalendarIcon";
import { PostOptionsIcon } from "../Atoms/OptionsIcon";
import { PostEmojiIcon } from "../Atoms/EmojiIcon";

type Props = {};

function Post({}: Props) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const imageRef = useRef<any>(null);
  const videoRef = useRef<any>(null);

  const handleSubmit = () => {
    const values = addDoc(collection(fireStore, "Posts"), {
      content: value,
    });
    console.log(values, value);
    setValue("");
  };

  return (
    <>
      <PostDiv>
        <CreatePostDiv>
          <ProfileIcon />
          <PostBtn onClick={onOpenModal}>Start a post</PostBtn>
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

      <Modal open={open} onClose={onCloseModal}>
        <div className="modalHeader">
          <h1 className="modalH1">Create a post</h1>
          {/* <div className="modalCloseBtn">
            <CloseIcon onClick={() => setIsOpen(false)} />
          </div> */}
        </div>

        <textarea
          name=""
          id="" 
          rows={10}
          className="modalTextarea"
          placeholder="What do you want to talk about?"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>

        <div className="ModalEmojiIcon">
          <PostEmojiIcon />
        </div>

        {/* <div className="ModalHoverContainer">
          <div className="ModalHover1">Add a photo</div>
          <div className="ModalHover2">Add a video</div>
          <div className="ModalHover3">Create an event</div>
          <div className="ModalHover4">More</div>
        </div> */}

        <div className="ModalIconsConainer">
          <div className="ModalIcon1">
            <input style={{ display: "none" }} ref={imageRef} type="file" />
            <PostPhotoIcon
              onClick={() => {
                imageRef.current.click();
              }}
            />
          </div>
          <div className="ModalIcon2">
            <input style={{ display: "none" }} ref={videoRef} type="file" />
            <PostVideoIcon
              onClick={() => {
                videoRef.current.click();
              }}
            />
          </div>
          <div className="ModalIcon3">
            <PostCalenderIcon />
          </div>
          <div className="ModalIcon4">
            <PostOptionsIcon />
          </div>
        </div>
        <hr />
        <div className="PostButtonContainer">
          <PostTimeIcon />
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!value.trim()}
            className={!value.trim() ? "modalDisableButton" : "modalButton"}
          >
            Post
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Post;
