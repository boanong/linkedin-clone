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
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db } from "@/firebase/config";
import { PostTimeIcon } from "../Atoms/TimeIcon";
import { PostCalenderIcon } from "../Atoms/CalendarIcon";
import { PostOptionsIcon } from "../Atoms/OptionsIcon";
import { PostEmojiIcon } from "../Atoms/EmojiIcon";
import { fileStore } from "../../firebase/config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { CloseIcon } from "../Atoms/CloseIcon";

type Props = { userData: any };

function Post({ userData }: Props) {
  const [value, setValue] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [display, setDisplay] = useState<any>("customModal");

  const imageRef = useRef<any>(null);
  const videoRef = useRef<any>(null);

  const dbInstance = collection(db, "posts");

  const handleSubmit = async () => {
    const postData = await addDoc(dbInstance, {
      postContent: value,
      id: userData?.uid,
      userEmail: userData.email,
      userName: userData.displayName,
      timestamp: serverTimestamp(),
    });

    setOpenFirst(false);
    setSelectedFile(null);

    const imageRef = ref(fileStore, `posts/${postData.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", postData.id), {
          image: downloadUrl,
        });
      });
    }
  };

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: any) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      <PostDiv>
        <CreatePostDiv>
          <ProfileIcon />
          <PostBtn onClick={() => setOpenFirst(true)}>Start a post</PostBtn>
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
        open={openFirst}
        classNames={{
          modal: display,
        }}
        onClose={() => setOpenFirst(false)}
      >
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

        {selectedFile && (
          <div className="imgContainer">
            <div className="modalCloseBtn">
              <CloseIcon onClick={() => setSelectedFile(null)} />
            </div>
            <img src={selectedFile} className="img" width={500} alt="Thumb" />
          </div>
        )}

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
            <input
              style={{ display: "none" }}
              ref={imageRef}
              type="file"
              onChange={addImageToPost}
            />
            <PostPhotoIcon
              onClick={() => {
                setOpenSecond(true);
                setDisplay("displayModal");
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
            disabled={!value.trim()}
            className={!value.trim() ? "modalDisableButton" : "modalButton"}
          >
            Post
          </button>
        </div>
      </Modal>

      <Modal open={openSecond} onClose={() => setOpenSecond(false)}>
        <h1 className="modal2H1">Edit your photo</h1>
        <hr />
        <label className="modal2ImageContainer">
          <input type="file" onChange={addImageToPost} />
          {selectedFile && (
            <div>
              <img src={selectedFile} width={550} className="img" alt="Thumb" />
            </div>
          )}
          <div
            className={
              selectedFile == null ? "modal2ImgSpan" : "modal2HideImgSpan"
            }
          >
            <span>Select the image to share</span>
          </div>
        </label>
        <hr />
        <div className="modal2BtnConatiner">
          <button
            onClick={() => {
              setOpenSecond(false);
              setDisplay("customModal");
              setSelectedFile(null);
            }}
            className="modal2Btn"
          >
            Back
          </button>
          <button
            onClick={() => {
              setOpenSecond(false);
              setDisplay("customModal");
            }}
            disabled={selectedFile == null ? true : false}
            className={selectedFile == null ? "modal2DisableBtn" : "modal2Btn2"}
          >
            Done
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Post;
